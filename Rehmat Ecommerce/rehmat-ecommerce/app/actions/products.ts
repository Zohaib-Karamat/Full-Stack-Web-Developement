"use server";

import { createAdminClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function getAdminProducts() {
  const supabase = await createAdminClient();
  const { data, error } = await supabase
    .from("products")
    .select("*, categories(name)")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching products:", error);
    throw new Error(error.message);
  }
  return data;
}

export async function deleteProduct(id: string) {
  const supabase = await createAdminClient();
  const { error } = await supabase.from("products").delete().eq("id", id);

  if (error) {
    console.error("Delete Product Error:", error);
    return { error: error.message };
  }

  revalidatePath("/admin/products");
  return { success: true };
}

// Complex product creation handled via client API due to file uploads,
// but the final database insert can be a server action if we pass the uploaded URLs.
export async function createProductRecord(data: any) {
  const supabase = await createAdminClient();

  // 1. Insert product
  const { data: product, error: productError } = await supabase
    .from("products")
    .insert({
      title: data.title,
      slug: data.title.toLowerCase().replace(/\s+/g, '-'), // Basic slug generation
      description: data.description,
      price: data.price,
      stock: data.stock,
      category_id: data.category_id,
      featured_image: data.images[0] || null, // First image is featured
    })
    .select()
    .single();

  if (productError) return { error: productError.message };

  // 2. Insert product images
  if (data.images && data.images.length > 0) {
    const imagesToInsert = data.images.map((url: string) => ({
      product_id: product.id,
      image_url: url,
    }));
    
    const { error: imageError } = await supabase.from("product_images").insert(imagesToInsert);
    if (imageError) console.error("Error inserting images:", imageError);
  }

  revalidatePath("/admin/products");
  return { success: true, product };
}

export async function getAdminProductById(id: string) {
  const supabase = await createAdminClient();
  const { data: product, error: productError } = await supabase
    .from("products")
    .select("*, product_images(image_url)")
    .eq("id", id)
    .single();

  if (productError) throw new Error(productError.message);
  return product;
}

export async function updateProductRecord(id: string, data: any) {
  const supabase = await createAdminClient();

  // 1. Update product
  const updateData: any = {
    title: data.title,
    slug: data.title.toLowerCase().replace(/\s+/g, '-'),
    description: data.description,
    price: data.price,
    stock: data.stock,
    category_id: data.category_id,
  };
  
  if (data.images && data.images.length > 0) {
    updateData.featured_image = data.images[0];
  }

  const { error: productError } = await supabase
    .from("products")
    .update(updateData)
    .eq("id", id);

  if (productError) return { error: productError.message };

  // 2. We skip complex image replacing logic for simplicity, but we can insert new images
  if (data.images && data.images.length > 0 && !data.keepExistingImages) {
    // Delete old images
    await supabase.from("product_images").delete().eq("product_id", id);
    
    // Insert new images
    const imagesToInsert = data.images.map((url: string) => ({
      product_id: id,
      image_url: url,
    }));
    
    const { error: imageError } = await supabase.from("product_images").insert(imagesToInsert);
    if (imageError) console.error("Error inserting images:", imageError);
  }

  revalidatePath(`/admin/products`);
  return { success: true };
}
