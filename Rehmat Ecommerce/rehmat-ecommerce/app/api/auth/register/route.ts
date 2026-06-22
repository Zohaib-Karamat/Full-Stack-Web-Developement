import { NextResponse } from "next/server";
import { registerSchema } from "@/validations/auth";
import { createClient, createAdminClient } from "@/utils/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = registerSchema.parse(body);

    const supabase = await createClient();
    const adminAuth = await createAdminClient();

    // 1. Sign up the user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: validatedData.email,
      password: validatedData.password,
      options: {
        data: {
          name: validatedData.name,
        },
      },
    });

    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 400 });
    }

    // 2. Add user to our custom users table
    if (authData.user) {
      const { error: dbError } = await adminAuth.from("users").insert({
        id: authData.user.id,
        name: validatedData.name,
        email: validatedData.email,
        role: "user", // Default role
      });

      if (dbError) {
        // If this fails, we probably should rollback auth, but for simplicity we'll just return the error
        console.error("Database Insert Error:", dbError);
        return NextResponse.json({ error: "Failed to create user profile" }, { status: 500 });
      }
    }

    return NextResponse.json(
      { message: "Registration successful", user: authData.user },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json({ error: "Validation failed", details: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
