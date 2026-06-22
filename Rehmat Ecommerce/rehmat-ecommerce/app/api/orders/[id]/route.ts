import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;

    // Check if user is admin
    const { data: userData } = await supabase.from("users").select("role").eq("id", user.id).single();
    const isAdmin = userData?.role === "admin";

    // Fetch order
    const query = supabase
      .from("orders")
      .select("*, order_items(*, products(title, featured_image, price))")
      .eq("id", id);
      
    // If not admin, ensure they own the order
    if (!isAdmin) {
      query.eq("user_id", user.id);
    }

    const { data: order, error } = await query.single();

    if (error || !order) return NextResponse.json({ error: "Order not found" }, { status: 404 });

    return NextResponse.json({ order }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
