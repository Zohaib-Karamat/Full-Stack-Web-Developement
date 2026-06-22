import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { createAdminClient } = await import("@/utils/supabase/server");
    const adminSupabase = await createAdminClient();

    // 1. Get User's Cart
    const { data: cart } = await adminSupabase
      .from("carts")
      .select("id")
      .eq("user_id", user.id)
      .single();

    if (!cart) return NextResponse.json({ error: "Cart is empty" }, { status: 400 });

    // 2. Get Cart Items
    const { data: cartItems } = await adminSupabase
      .from("cart_items")
      .select("*, products(*)")
      .eq("cart_id", cart.id);

    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    // 3. Calculate Total
    const totalAmount = cartItems.reduce((acc, item) => acc + (Number(item.products?.price || 0) * item.quantity), 0);

    // 4. Create Order with dummy shipping address
    // Static payment information as requested
    const dummyShipping = {
      street: "123 Cash On Delivery St",
      city: "Test City",
      state: "TS",
      zipCode: "12345",
      country: "USA",
      payment_method: "Cash on Delivery"
    };

    const { data: order, error: orderError } = await adminSupabase
      .from("orders")
      .insert({
        user_id: user.id,
        total_amount: totalAmount,
        payment_status: "pending",
        order_status: "pending",
        shipping_address: dummyShipping
      })
      .select()
      .single();

    if (orderError) throw orderError;

    // 5. Create Order Items
    const orderItemsToInsert = cartItems.map((item: any) => ({
      order_id: order.id,
      product_id: item.product_id,
      quantity: item.quantity,
      price: item.products?.price || 0
    }));

    const { error: itemsError } = await adminSupabase
      .from("order_items")
      .insert(orderItemsToInsert);

    if (itemsError) throw itemsError;

    // 6. Clear Cart
    await adminSupabase.from("cart_items").delete().eq("cart_id", cart.id);

    return NextResponse.json({ message: "Checkout successful", orderId: order.id }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
