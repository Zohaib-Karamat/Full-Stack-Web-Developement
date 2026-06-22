"use server";

import { createAdminClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

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
