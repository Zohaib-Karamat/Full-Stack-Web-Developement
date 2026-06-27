import { NextResponse } from "next/server";
import { createClient, createAdminClient } from "@/utils/supabase/server";
import { stripe } from "@/lib/stripe";
import { z } from "zod";

const shippingSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  streetAddress: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  country: z.string().min(1, "Country is required"),
  phone: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    // 1. Auth
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. Validate shipping address
    const body = await request.json();
    const shipping = shippingSchema.parse(body.shipping_address);

    // 3. Get cart + items from DB (server-side total, never trust frontend)
    const adminSupabase = await createAdminClient();

    const { data: cart } = await adminSupabase
      .from("carts")
      .select("id")
      .eq("user_id", user.id)
      .single();

    if (!cart) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const { data: cartItems } = await adminSupabase
      .from("cart_items")
      .select("*, products(id, title, price, featured_image, stock)")
      .eq("cart_id", cart.id);

    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    // 4. Validate stock and calculate total from DB prices
    for (const item of cartItems) {
      const product = item.products as { id: string; title: string; price: number; featured_image: string | null; stock: number } | null;
      if (!product) {
        return NextResponse.json({ error: "Invalid product in cart" }, { status: 400 });
      }
      if (product.stock < item.quantity) {
        return NextResponse.json(
          { error: `Insufficient stock for "${product.title}"` },
          { status: 400 }
        );
      }
    }

    const totalAmount = cartItems.reduce((acc, item) => {
      const product = item.products as { price: number } | null;
      return acc + Number(product?.price ?? 0) * item.quantity;
    }, 0);

    // 5. Create order in DB
    const { data: order, error: orderError } = await adminSupabase
      .from("orders")
      .insert({
        user_id: user.id,
        total_amount: totalAmount,
        payment_status: "pending",
        payment_method: "stripe",
        order_status: "pending",
        shipping_address: shipping,
      })
      .select()
      .single();

    if (orderError) throw orderError;

    // 6. Insert order items
    const orderItems = cartItems.map((item) => {
      const product = item.products as { price: number } | null;
      return {
        order_id: order.id,
        product_id: item.product_id,
        quantity: item.quantity,
        price: Number(product?.price ?? 0),
      };
    });

    const { error: itemsError } = await adminSupabase
      .from("order_items")
      .insert(orderItems);

    if (itemsError) throw itemsError;

    // 7. Create Stripe line items
    const lineItems: import("stripe").Stripe.Checkout.SessionCreateParams.LineItem[] =
      cartItems.map((item) => {
        const product = item.products as {
          title: string;
          price: number;
          featured_image: string | null;
        } | null;
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: product?.title ?? "Product",
              images: product?.featured_image ? [product.featured_image] : [],
            },
            unit_amount: Math.round(Number(product?.price ?? 0) * 100), // cents
          },
          quantity: item.quantity,
        };
      });

    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

    // 8. Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      metadata: {
        order_id: order.id,
        user_id: user.id,
      },
      customer_email: user.email,
      success_url: `${appUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/checkout/cancel?order_id=${order.id}`,
    });

    // 9. Store stripe_session_id on order
    await adminSupabase
      .from("orders")
      .update({ stripe_session_id: session.id })
      .eq("id", order.id);

    // 10. Clear cart
    await adminSupabase.from("cart_items").delete().eq("cart_id", cart.id);

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Invalid shipping address", details: (error as unknown as { errors: unknown }).errors },
        { status: 400 }
      );
    }
    const message = error instanceof Error ? error.message : "Internal server error";
    console.error("[create-checkout-session]", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
