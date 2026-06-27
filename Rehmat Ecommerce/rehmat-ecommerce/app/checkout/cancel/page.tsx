"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { XCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ---------------------------------------------------------------------------
// Inner component (needs useSearchParams, must be inside Suspense)
// ---------------------------------------------------------------------------

function CancelContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
      <div className="w-full max-w-md">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <span className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-red-50">
            <XCircle className="h-16 w-16 text-red-500" />
          </span>
        </div>

        {/* Heading */}
        <h1 className="mb-3 font-poppins text-3xl font-semibold text-black">
          Payment Cancelled
        </h1>

        {/* Message */}
        <p className="mb-4 font-poppins text-base text-black/60">
          Your payment was cancelled. Your order has not been charged.
        </p>

        {/* Note */}
        <div className="mb-8 rounded-sm border border-amber-200 bg-amber-50 px-5 py-4">
          <p className="font-poppins text-sm text-amber-800">
            Your cart has been cleared. Please return to the shop to add items
            again.
          </p>
        </div>

        {/* Order ID (if present) */}
        {orderId && (
          <p className="mb-6 font-poppins text-xs text-black/40">
            Reference: {orderId}
          </p>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="flex items-center justify-center rounded-sm bg-primary px-10 py-4 font-poppins text-base font-medium text-white transition-colors hover:bg-red-600"
          >
            Return to Shop
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center rounded-sm border border-gray-300 px-10 py-4 font-poppins text-base font-medium text-black transition-colors hover:border-black"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function CheckoutCancelPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header />
      <Suspense
        fallback={
          <main className="flex flex-1 items-center justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-primary" />
          </main>
        }
      >
        <CancelContent />
      </Suspense>
      <Footer />
    </div>
  );
}
