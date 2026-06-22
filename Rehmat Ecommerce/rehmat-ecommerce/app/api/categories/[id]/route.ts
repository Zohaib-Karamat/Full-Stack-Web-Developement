import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { updateCategorySchema } from "@/validations/category";

async function isAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;
  
  const { data } = await supabase.from("users").select("role").eq("id", user.id).single();
  return data?.role === "admin";
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 403 });

    const { id } = await params;
    const body = await request.json();
    const validatedData = updateCategorySchema.parse(body);

    const updateData: any = { ...validatedData };
    if (validatedData.name && !validatedData.slug) {
      updateData.slug = validatedData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    }

    const supabase = await createClient();
    const { data, error } = await supabase
      .from("categories")
      .update(updateData)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json({ message: "Category updated", category: data }, { status: 200 });
  } catch (error: any) {
    if (error.name === "ZodError") return NextResponse.json({ error: "Validation failed" }, { status: 400 });
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 403 });

    const { id } = await params;
    const supabase = await createClient();
    const { error } = await supabase.from("categories").delete().eq("id", id);

    if (error) throw error;
    return NextResponse.json({ message: "Category deleted" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
