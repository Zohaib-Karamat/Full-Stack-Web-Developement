import { NextResponse } from "next/server";
import { createAdminClient } from "@/utils/supabase/server";

export async function GET() {
  try {
    const supabase = await createAdminClient();

    // Fetch all stats in parallel
    const [
      { count: productsCount },
      { count: ordersCount },
      { count: usersCount },
      { data: recentOrders },
      { data: allOrders },
    ] = await Promise.all([
      supabase.from("products").select("*", { count: "exact", head: true }),
      supabase.from("orders").select("*", { count: "exact", head: true }),
      supabase.from("users").select("*", { count: "exact", head: true }),
      supabase
        .from("orders")
        .select("id, total_amount, order_status, created_at, users(name, email)")
        .order("created_at", { ascending: false })
        .limit(5),
      supabase
        .from("orders")
        .select("total_amount")
        .neq("order_status", "cancelled"),
    ]);

    const totalRevenue =
      allOrders?.reduce(
        (acc, order) => acc + Number(order.total_amount),
        0
      ) || 0;

    return NextResponse.json({
      stats: {
        totalProducts: productsCount || 0,
        totalOrders: ordersCount || 0,
        totalUsers: usersCount || 0,
        totalRevenue,
      },
      recentOrders: recentOrders || [],
    });
  } catch (error: any) {
    console.error("Dashboard API error:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
