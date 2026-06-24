"use server";

import { createAdminClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function getDashboardStats() {
  const supabase = await createAdminClient();

  const [
    { count: totalProducts },
    { count: totalOrders },
    { count: totalUsers },
    { data: revenueRows },
  ] = await Promise.all([
    supabase.from("products").select("*", { count: "exact", head: true }),
    supabase.from("orders").select("*", { count: "exact", head: true }),
    supabase.from("users").select("*", { count: "exact", head: true }),
    supabase
      .from("orders")
      .select("total_amount")
      .neq("order_status", "cancelled"),
  ]);

  const totalRevenue =
    revenueRows?.reduce((acc, o) => acc + Number(o.total_amount), 0) ?? 0;

  return {
    totalProducts: totalProducts ?? 0,
    totalOrders: totalOrders ?? 0,
    totalUsers: totalUsers ?? 0,
    totalRevenue,
  };
}

export interface RecentOrder {
  id: string;
  total_amount: number;
  order_status: string;
  created_at: string;
  users: { name: string; email: string } | null;
}

export async function getRecentOrders(limit = 5): Promise<RecentOrder[]> {
  const supabase = await createAdminClient();
  const { data, error } = await supabase
    .from("orders")
    .select("id, total_amount, order_status, created_at, users(name, email)")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching recent orders:", error);
    throw new Error(error.message);
  }
  // Supabase infers users as an array for embedded relations, but it is
  // a single object for many-to-one joins at runtime.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (data ?? []).map((row: any) => ({
    id: row.id as string,
    total_amount: row.total_amount as number,
    order_status: row.order_status as string,
    created_at: row.created_at as string,
    users: Array.isArray(row.users)
      ? (row.users[0] ?? null)
      : (row.users as { name: string; email: string } | null),
  })) satisfies RecentOrder[];
}

export async function getAdminOrders() {
  const supabase = await createAdminClient();
  const { data, error } = await supabase
    .from("orders")
    .select("*, users(name, email)")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching orders:", error);
    throw new Error(error.message);
  }
  return data;
}

export async function getAdminOrderById(id: string) {
  const supabase = await createAdminClient();

  // Fetch order details
  const { data: order, error: orderError } = await supabase
    .from("orders")
    .select("*, users(name, email)")
    .eq("id", id)
    .single();

  if (orderError) throw new Error(orderError.message);

  // Fetch order items
  const { data: items, error: itemsError } = await supabase
    .from("order_items")
    .select("*, products(title, featured_image)")
    .eq("order_id", id);

  if (itemsError) throw new Error(itemsError.message);

  return { order, items };
}

export async function updateOrderStatus(id: string, status: string) {
  const supabase = await createAdminClient();
  const { error } = await supabase
    .from("orders")
    .update({ order_status: status })
    .eq("id", id);

  if (error) {
    console.error("Update Order Status Error:", error);
    return { error: error.message };
  }

  revalidatePath(`/admin/orders/${id}`);
  revalidatePath("/admin/orders");
  return { success: true };
}
