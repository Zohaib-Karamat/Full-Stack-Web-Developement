import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { createOrderSchema } from "@/validations/order";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { data: orders, error } = await supabase
      .from("orders")
      .select("*, order_items(*, products(title, featured_image))")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json({ orders }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json();
    const validatedData = createOrderSchema.parse(body);

    // Get cart items
    const { data: cart } = await supabase.from("carts").select("id").eq("user_id", user.id).single();
    if (!cart) return NextResponse.json({ error: "Cart is empty" }, { status: 400 });

    const { data: cartItems, error: cartError } = await supabase
      .from("cart_items")
      .select("*, products(price, stock)")
      .eq("cart_id", cart.id);

    if (cartError || !cartItems || cartItems.length === 0) {
      return NextResponse.json({ error: "Cart is empty or invalid" }, { status: 400 });
    }

    // Calculate total and prepare order items
    let total_amount = 0;
    const orderItemsPayload = [];

    for (const item of cartItems) {
      const productPrice = item.products?.price || 0;
      total_amount += productPrice * item.quantity;

      if (item.products.stock < item.quantity) {
         return NextResponse.json({ error: `Not enough stock for product ID: ${item.product_id}` }, { status: 400 });
      }

      orderItemsPayload.push({
        product_id: item.product_id,
        quantity: item.quantity,
        price: productPrice
      });
    }

    // Create Order
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({
        user_id: user.id,
        total_amount,
        shipping_address: validatedData.shipping_address,
        payment_status: "pending",
        order_status: "pending"
      })
      .select()
      .single();

    if (orderError) throw orderError;

    // Insert Order Items
    const { error: itemsError } = await supabase
      .from("order_items")
      .insert(orderItemsPayload.map(item => ({ ...item, order_id: order.id })));

    if (itemsError) throw itemsError;

    // Clear Cart
    await supabase.from("cart_items").delete().eq("cart_id", cart.id);

    // Note: Deducting product stock should ideally happen here inside a transaction.
    // Supabase RPC (PostgreSQL functions) is best for multi-table transactions.

    return NextResponse.json({ message: "Order placed successfully", order }, { status: 201 });
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json({ error: "Validation failed", details: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
