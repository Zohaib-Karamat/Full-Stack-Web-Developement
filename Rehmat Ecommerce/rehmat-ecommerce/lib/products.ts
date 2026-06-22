import { createClient } from "@/utils/supabase/server";

export type Product = {
  id: string;
  title: string;
  slug?: string;
  imageUrl: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: string;
  subCategory: string;
  keywords: string[];
  description: string;
};

export const PRODUCTS_API_URL = "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json";

export async function getProducts(): Promise<Product[]> {
  try {
    const { createAdminClient } = await import("@/utils/supabase/server");
    const supabase = await createAdminClient();
    const { data: dbProducts, error } = await supabase
      .from('products')
      .select('*, categories(name)');

    let allProducts: Product[] = [];

    if (!error && dbProducts) {
      allProducts = dbProducts.map((p: any) => ({
        id: p.id,
        title: p.title,
        slug: p.slug,
        imageUrl: p.featured_image || "https://placehold.co/400x400/png",
        price: Number(p.price),
        originalPrice: Number(p.price) * 1.25,
        rating: 4.5, // Default for now
        reviewCount: 120, // Default for now
        category: p.categories?.name || "Uncategorized",
        subCategory: "General",
        keywords: [],
        description: p.description || "",
      }));
    }

    try {
      const res = await fetch(PRODUCTS_API_URL, { next: { revalidate: 3600 } });
      const apiData = await res.json();
      
      const apiProducts: Product[] = apiData.map((p: any) => ({
        id: String(p.id),
        title: p.name || p.title,
        slug: (p.name || p.title || "").toLowerCase().replace(/\s+/g, '-'),
        imageUrl: p.image,
        price: Number(p.price),
        originalPrice: Number(p.price) * 1.25,
        rating: p.rating?.stars || 4.5,
        reviewCount: p.rating?.count || 120,
        category: "External API",
        subCategory: "General",
        keywords: [],
        description: p.description || "API Product",
      }));

      allProducts = [...allProducts, ...apiProducts];
    } catch (apiErr) {
      console.error("Error fetching API products:", apiErr);
    }

    return allProducts;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getProductById(id?: string): Promise<Product | undefined> {
  if (!id) return undefined;
  try {
    const { createAdminClient } = await import("@/utils/supabase/server");
    const supabase = await createAdminClient();
    
    // Check DB first
    const { data: p, error } = await supabase
      .from('products')
      .select('*, categories(name)')
      .eq('id', id)
      .single();

    if (!error && p) {
      return {
        id: p.id,
        title: p.title,
        slug: p.slug,
        imageUrl: p.featured_image || "https://placehold.co/400x400/png",
        price: Number(p.price),
        originalPrice: Number(p.price) * 1.25,
        rating: 4.5,
        reviewCount: 120,
        category: p.categories?.name || "Uncategorized",
        subCategory: "General",
        keywords: [],
        description: p.description || "",
      };
    }

    // If not in DB, check API
    const res = await fetch(PRODUCTS_API_URL, { next: { revalidate: 3600 } });
    const apiData = await res.json();
    const apiProduct = apiData.find((item: any) => String(item.id) === id);

    if (apiProduct) {
      return {
        id: String(apiProduct.id),
        title: apiProduct.name || apiProduct.title,
        slug: (apiProduct.name || apiProduct.title || "").toLowerCase().replace(/\s+/g, '-'),
        imageUrl: apiProduct.image,
        price: Number(apiProduct.price),
        originalPrice: Number(apiProduct.price) * 1.25,
        rating: apiProduct.rating?.stars || 4.5,
        reviewCount: apiProduct.rating?.count || 120,
        category: "External API",
        subCategory: "General",
        keywords: [],
        description: apiProduct.description || "API Product",
      };
    }

    return undefined;
  } catch (err) {
    console.error(err);
    return undefined;
  }
}
