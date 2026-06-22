import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function PUT(request: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json();
    const { item_id, quantity } = body; // This is the cart_items.id

    if (!item_id || quantity < 1) {
      return NextResponse.json({ error: "Invalid item or quantity" }, { status: 400 });
    }

    // Verify item belongs to user's cart
    const { data: cart } = await supabase.from("carts").select("id").eq("user_id", user.id).single();
    if (!cart) return NextResponse.json({ error: "Cart not found" }, { status: 404 });

    const { error } = await supabase
      .from("cart_items")
      .update({ quantity })
      .eq("id", item_id)
      .eq("cart_id", cart.id);

    if (error) throw error;

    return NextResponse.json({ message: "Cart updated" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
