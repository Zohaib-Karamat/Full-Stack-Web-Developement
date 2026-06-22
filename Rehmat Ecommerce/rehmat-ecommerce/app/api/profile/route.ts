import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { updateProfileSchema } from "@/validations/auth";

export async function GET() {
  try {
    const supabase = await createClient();
    
    // Get currently logged in user
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Fetch full profile from users table
    const { data: profile, error: dbError } = await supabase
      .from("users")
      .select("*")
      .eq("id", user.id)
      .single();

    if (dbError) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    return NextResponse.json({ profile }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const supabase = await createClient();
    
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = updateProfileSchema.parse(body);

    const { data: updatedProfile, error: dbError } = await supabase
      .from("users")
      .update(validatedData)
      .eq("id", user.id)
      .select()
      .single();

    if (dbError) {
      return NextResponse.json({ error: "Failed to update profile" }, { status: 400 });
    }

    return NextResponse.json({ message: "Profile updated", profile: updatedProfile }, { status: 200 });
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json({ error: "Validation failed", details: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
