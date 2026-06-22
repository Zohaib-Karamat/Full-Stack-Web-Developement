"use server";

import { createAdminClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function getCategories() {
  const supabase = await createAdminClient();
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching categories:", error);
    throw new Error(error.message);
  }
  return data;
}

export async function createCategory(formData: FormData) {
  const name = formData.get("name") as string;
  const slug = formData.get("slug") as string;

  if (!name || !slug) {
    return { error: "Name and slug are required" };
  }

  const supabase = await createAdminClient();
  const { error } = await supabase.from("categories").insert({ name, slug });

  if (error) {
    console.error("Create Category Error:", error);
    return { error: error.message };
  }

  revalidatePath("/admin/categories");
  return { success: true };
}

export async function updateCategory(id: string, formData: FormData) {
  const name = formData.get("name") as string;
  const slug = formData.get("slug") as string;

  if (!name || !slug) {
    return { error: "Name and slug are required" };
  }

  const supabase = await createAdminClient();
  const { error } = await supabase
    .from("categories")
    .update({ name, slug })
    .eq("id", id);

  if (error) {
    console.error("Update Category Error:", error);
    return { error: error.message };
  }

  revalidatePath("/admin/categories");
  return { success: true };
}

export async function deleteCategory(id: string) {
  const supabase = await createAdminClient();
  const { error } = await supabase.from("categories").delete().eq("id", id);

  if (error) {
    console.error("Delete Category Error:", error);
    return { error: error.message };
  }

  revalidatePath("/admin/categories");
  return { success: true };
}
