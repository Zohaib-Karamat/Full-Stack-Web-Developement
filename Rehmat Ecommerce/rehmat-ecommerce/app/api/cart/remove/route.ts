import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function DELETE(request: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json();
    const { item_id } = body;

    if (!item_id) {
      return NextResponse.json({ error: "Item ID required" }, { status: 400 });
    }

    const { data: cart } = await supabase.from("carts").select("id").eq("user_id", user.id).single();
    if (!cart) return NextResponse.json({ error: "Cart not found" }, { status: 404 });

    const { error } = await supabase
      .from("cart_items")
      .delete()
      .eq("id", item_id)
      .eq("cart_id", cart.id);

    if (error) throw error;

    return NextResponse.json({ message: "Item removed from cart" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
