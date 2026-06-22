import { NextResponse } from "next/server";
import { loginSchema } from "@/validations/auth";
import { createClient } from "@/utils/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = loginSchema.parse(body);

    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: validatedData.email,
      password: validatedData.password,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 401 });
    }

    // Fetch the user's role from the custom users table using the admin client to bypass RLS
    const { createAdminClient } = await import("@/utils/supabase/server");
    const adminSupabase = await createAdminClient();
    const { data: userData, error: roleError } = await adminSupabase
      .from("users")
      .select("role")
      .eq("id", data.user.id)
      .single();

    if (roleError) console.error("Error fetching role:", roleError);

    return NextResponse.json(
      { 
        message: "Login successful", 
        user: {
          ...data.user,
          role: userData?.role || "user"
        } 
      },
      { status: 200 }
    );
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json({ error: "Validation failed", details: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
