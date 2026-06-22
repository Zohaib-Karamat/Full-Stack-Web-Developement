import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    // Find the user's active cart using admin client to bypass RLS
    const { createAdminClient } = await import("@/utils/supabase/server");
    const adminSupabase = await createAdminClient();
    const { data: cart } = await adminSupabase
      .from("carts")
      .select("id")
      .eq("user_id", user.id)
      .single();

    if (!cart) {
      return NextResponse.json({ items: [] }, { status: 200 });
    }

    // Fetch cart items
    const { data: cartItems, error } = await adminSupabase
      .from("cart_items")
      .select("*, products(*)")
      .eq("cart_id", cart.id);

    if (error) throw error;
    return NextResponse.json({ items: cartItems }, { status: 200 });
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
    const { product_id, quantity = 1 } = body;

    if (!product_id || quantity < 1) {
      return NextResponse.json({ error: "Invalid product or quantity" }, { status: 400 });
    }

    const { createAdminClient } = await import("@/utils/supabase/server");
    const adminSupabase = await createAdminClient();

    // Get or create cart
    let { data: cart } = await adminSupabase.from("carts").select("id").eq("user_id", user.id).single();

    if (!cart) {
      const { data: newCart, error: cartError } = await adminSupabase
        .from("carts")
        .insert({ user_id: user.id })
        .select()
        .single();
      
      if (cartError) throw cartError;
      cart = newCart;
    }

    // Upsert cart item
    const { data: existingItem } = await adminSupabase
      .from("cart_items")
      .select("*")
      .eq("cart_id", cart!.id)
      .eq("product_id", product_id)
      .single();

    if (existingItem) {
      const { error } = await adminSupabase
        .from("cart_items")
        .update({ quantity: existingItem.quantity + quantity })
        .eq("id", existingItem.id);
      if (error) throw error;
    } else {
      const { error } = await adminSupabase
        .from("cart_items")
        .insert({ cart_id: cart!.id, product_id, quantity });
      if (error) throw error;
    }

    return NextResponse.json({ message: "Added to cart" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json();
    const { items } = body;

    if (!Array.isArray(items)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const { createAdminClient } = await import("@/utils/supabase/server");
    const adminSupabase = await createAdminClient();

    for (const item of items) {
      if (item.id && item.quantity > 0) {
        await adminSupabase
          .from("cart_items")
          .update({ quantity: item.quantity })
          .eq("id", item.id);
      }
    }

    return NextResponse.json({ message: "Cart updated" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { searchParams } = new URL(request.url);
    const item_id = searchParams.get("item_id");

    if (!item_id) {
      return NextResponse.json({ error: "Invalid item" }, { status: 400 });
    }

    const { createAdminClient } = await import("@/utils/supabase/server");
    const adminSupabase = await createAdminClient();

    const { error } = await adminSupabase
      .from("cart_items")
      .delete()
      .eq("id", item_id);

    if (error) throw error;

    return NextResponse.json({ message: "Item removed" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
