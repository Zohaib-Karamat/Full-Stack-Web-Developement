import { NextResponse } from "next/server";

export class ApiError extends Error {
  statusCode: number;
  details?: any;

  constructor(message: string, statusCode: number, details?: any) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    this.name = "ApiError";
  }
}

export function handleApiError(error: any) {
  console.error("API Error:", error);

  if (error instanceof ApiError) {
    return NextResponse.json(
      { error: error.message, details: error.details },
      { status: error.statusCode }
    );
  }

  if (error.name === "ZodError") {
    return NextResponse.json(
      { error: "Validation failed", details: error.errors },
      { status: 400 }
    );
  }

  const message = error.message || "Internal server error";
  return NextResponse.json({ error: message }, { status: 500 });
}

export function successResponse(data: any, status: number = 200) {
  return NextResponse.json(data, { status });
}
