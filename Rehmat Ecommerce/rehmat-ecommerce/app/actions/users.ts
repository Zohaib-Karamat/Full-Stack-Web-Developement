"use server";

import { createAdminClient } from "@/utils/supabase/server";

export async function getAdminUsers() {
  const supabase = await createAdminClient();
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching users:", error);
    throw new Error(error.message);
  }
  return data;
}
