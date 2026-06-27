import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { stripe } from "@/lib/stripe";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const session = await stripe.checkout.sessions.retrieve(id, {
      expand: ["payment_intent"],
    });

    // Only expose safe fields
    return NextResponse.json({
      id: session.id,
      payment_status: session.payment_status,
      amount_total: session.amount_total,
      currency: session.currency,
      customer_email: session.customer_email,
      metadata: session.metadata,
      payment_intent: typeof session.payment_intent === "object" && session.payment_intent
        ? { id: session.payment_intent.id, status: session.payment_intent.status }
        : null,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to retrieve session";
    console.error("[session/[id]]", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
