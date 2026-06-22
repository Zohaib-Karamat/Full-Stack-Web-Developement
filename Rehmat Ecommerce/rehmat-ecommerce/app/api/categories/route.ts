import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { createCategorySchema } from "@/validations/category";

// Helper to check if current user is admin
async function isAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;
  
  const { data } = await supabase.from("users").select("role").eq("id", user.id).single();
  return data?.role === "admin";
}

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: categories, error } = await supabase.from("categories").select("*").order("created_at", { ascending: false });

    if (error) throw error;
    return NextResponse.json({ categories }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to fetch categories" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (!(await isAdmin())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const body = await request.json();
    const validatedData = createCategorySchema.parse(body);

    const slug = validatedData.slug || validatedData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    const supabase = await createClient();
    const { data, error } = await supabase
      .from("categories")
      .insert({ name: validatedData.name, slug })
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json({ message: "Category created", category: data }, { status: 201 });
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json({ error: "Validation failed", details: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
