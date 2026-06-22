import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { createProductSchema } from "@/validations/product";

async function isAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;
  
  const { data } = await supabase.from("users").select("role").eq("id", user.id).single();
  return data?.role === "admin";
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";
    const sort = searchParams.get("sort") || "created_at";
    const order = searchParams.get("order") || "desc";

    const offset = (page - 1) * limit;

    const supabase = await createClient();
    let query = supabase.from("products").select("*, categories(name)", { count: "exact" });

    if (search) {
      query = query.ilike("title", `%${search}%`);
    }

    if (category) {
      query = query.eq("category_id", category);
    }

    // Apply sorting
    query = query.order(sort, { ascending: order === "asc" });
    
    // Apply pagination
    query = query.range(offset, offset + limit - 1);

    const { data: products, count, error } = await query;

    if (error) throw error;

    return NextResponse.json({
      products,
      pagination: {
        total: count,
        page,
        limit,
        totalPages: count ? Math.ceil(count / limit) : 0
      }
    }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 403 });

    const body = await request.json();
    const validatedData = createProductSchema.parse(body);

    const slug = validatedData.slug || validatedData.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    const supabase = await createClient();
    const { data, error } = await supabase
      .from("products")
      .insert({ ...validatedData, slug })
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json({ message: "Product created", product: data }, { status: 201 });
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json({ error: "Validation failed", details: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
