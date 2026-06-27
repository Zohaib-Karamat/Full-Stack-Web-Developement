import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { createAdminClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const body = await request.text();
  const sig = request.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("[webhook] STRIPE_WEBHOOK_SECRET is not set");
    return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
  }

  let event: import("stripe").Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Signature verification failed";
    console.error("[webhook] Signature verification failed:", message);
    return NextResponse.json({ error: `Webhook error: ${message}` }, { status: 400 });
  }

  const adminSupabase = await createAdminClient();

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as import("stripe").Stripe.Checkout.Session;
        const orderId = session.metadata?.order_id;
        if (!orderId) break;

        // Idempotency: skip if already paid
        const { data: existingOrder } = await adminSupabase
          .from("orders")
          .select("payment_status")
          .eq("id", orderId)
          .single();

        if (existingOrder?.payment_status === "paid") break;

        await adminSupabase
          .from("orders")
          .update({
            payment_status: "paid",
            order_status: "processing",
            stripe_payment_intent_id: session.payment_intent as string | null,
            paid_at: new Date().toISOString(),
          })
          .eq("id", orderId);

        break;
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as import("stripe").Stripe.PaymentIntent;

        // Find order by stripe_payment_intent_id
        const { data: order } = await adminSupabase
          .from("orders")
          .select("id, payment_status")
          .eq("stripe_payment_intent_id", paymentIntent.id)
          .single();

        if (order && order.payment_status !== "failed") {
          await adminSupabase
            .from("orders")
            .update({ payment_status: "failed" })
            .eq("id", order.id);
        }
        break;
      }

      default:
        // Unhandled event type — acknowledge receipt
        break;
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("[webhook] Handler error:", error);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }
}
