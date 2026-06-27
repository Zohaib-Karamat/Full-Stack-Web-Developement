"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------

const shippingSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  streetAddress: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  country: z.string().min(1, "Country is required"),
  phone: z.string().optional(),
});

type ShippingFormData = z.infer<typeof shippingSchema>;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface CartItem {
  id: string;
  quantity: number;
  products: {
    title: string;
    price: number;
    featured_image: string | null;
  };
}

// ---------------------------------------------------------------------------
// Skeleton
// ---------------------------------------------------------------------------

function CheckoutSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
        {/* form skeleton */}
        <div className="flex flex-col gap-5">
          <div className="h-7 w-48 rounded bg-gray-200" />
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-12 w-full rounded-sm bg-gray-200" />
          ))}
        </div>
        {/* summary skeleton */}
        <div className="rounded-sm border border-gray-200 p-6">
          <div className="mb-4 h-6 w-36 rounded bg-gray-200" />
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="mb-3 flex items-center gap-4">
              <div className="h-14 w-14 rounded bg-gray-200" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-3/4 rounded bg-gray-200" />
                <div className="h-4 w-1/4 rounded bg-gray-200" />
              </div>
            </div>
          ))}
          <div className="mt-4 h-12 w-full rounded-sm bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Field component
// ---------------------------------------------------------------------------

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-poppins text-sm font-medium text-black">
        {label}
      </label>
      {children}
      {error && <p className="font-poppins text-xs text-red-500">{error}</p>}
    </div>
  );
}

const inputClass =
  "h-12 w-full rounded-sm border border-gray-300 px-4 font-poppins text-sm text-black outline-none placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary transition-colors";

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function CheckoutPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartLoading, setCartLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema),
  });

  useEffect(() => {
    fetch("/api/cart")
      .then((res) => {
        if (res.status === 401) {
          router.replace("/login");
          throw new Error("Unauthorized");
        }
        return res.json();
      })
      .then((data) => {
        const items: CartItem[] = data.items || [];
        if (items.length === 0) {
          router.replace("/cart");
          return;
        }
        setCartItems(items);
      })
      .catch((err) => {
        if (err.message !== "Unauthorized") console.error(err);
      })
      .finally(() => setCartLoading(false));
  }, [router]);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + Number(item.products?.price ?? 0) * item.quantity,
    0,
  );

  const onSubmit = async (data: ShippingFormData) => {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/payment/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shipping_address: data }),
      });
      const json = await res.json();
      if (!res.ok || json.error) {
        setSubmitError(json.error || "Something went wrong. Please try again.");
        return;
      }
      // Hard-navigate to external Stripe checkout URL
      window.location.assign(json.url);
    } catch {
      setSubmitError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:py-16 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-10 flex items-center gap-3 font-poppins text-sm">
            <Link
              href="/"
              className="text-black/50 transition-colors hover:text-black"
            >
              Home
            </Link>
            <span className="text-black/40">/</span>
            <Link
              href="/cart"
              className="text-black/50 transition-colors hover:text-black"
            >
              Cart
            </Link>
            <span className="text-black/40">/</span>
            <span className="text-black">Checkout</span>
          </nav>

          {cartLoading ? (
            <CheckoutSkeleton />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
                {/* -------------------------------------------------------- */}
                {/* Shipping address form                                     */}
                {/* -------------------------------------------------------- */}
                <div>
                  <h1 className="mb-6 font-poppins text-2xl font-semibold text-black">
                    Shipping Address
                  </h1>

                  <div className="flex flex-col gap-5">
                    <Field label="Full Name" error={errors.fullName?.message}>
                      <input
                        {...register("fullName")}
                        placeholder="John Doe"
                        className={inputClass}
                      />
                    </Field>

                    <Field
                      label="Street Address"
                      error={errors.streetAddress?.message}
                    >
                      <input
                        {...register("streetAddress")}
                        placeholder="123 Main Street"
                        className={inputClass}
                      />
                    </Field>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="City" error={errors.city?.message}>
                        <input
                          {...register("city")}
                          placeholder="New York"
                          className={inputClass}
                        />
                      </Field>

                      <Field
                        label="State / Province"
                        error={errors.state?.message}
                      >
                        <input
                          {...register("state")}
                          placeholder="NY"
                          className={inputClass}
                        />
                      </Field>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Postal Code"
                        error={errors.postalCode?.message}
                      >
                        <input
                          {...register("postalCode")}
                          placeholder="10001"
                          className={inputClass}
                        />
                      </Field>

                      <Field label="Country" error={errors.country?.message}>
                        <input
                          {...register("country")}
                          placeholder="United States"
                          className={inputClass}
                        />
                      </Field>
                    </div>

                    <Field
                      label="Phone (optional)"
                      error={errors.phone?.message}
                    >
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className={inputClass}
                      />
                    </Field>
                  </div>
                </div>

                {/* -------------------------------------------------------- */}
                {/* Order summary                                             */}
                {/* -------------------------------------------------------- */}
                <aside className="rounded-sm border border-gray-200 p-6 font-poppins text-black shadow-sm">
                  <h2 className="mb-5 text-xl font-semibold">Order Summary</h2>

                  {/* Items list */}
                  <ul className="flex flex-col divide-y divide-gray-100">
                    {cartItems.map((item) => {
                      const product = item.products;
                      return (
                        <li
                          key={item.id}
                          className="flex items-center gap-4 py-4"
                        >
                          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-sm border border-gray-100 bg-gray-50">
                            {product?.featured_image ? (
                              <Image
                                src={product.featured_image}
                                alt={product.title}
                                fill
                                className="object-contain mix-blend-multiply p-1"
                                sizes="56px"
                              />
                            ) : (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src="https://placehold.co/56x56"
                                alt={product?.title || "Product"}
                                className="h-full w-full object-contain"
                              />
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium">
                              {product?.title || "Unknown Product"}
                            </p>
                            <p className="text-xs text-black/50">
                              Qty: {item.quantity}
                            </p>
                          </div>
                          <span className="shrink-0 text-sm font-medium">
                            $
                            {(
                              Number(product?.price ?? 0) * item.quantity
                            ).toFixed(2)}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Totals */}
                  <div className="mt-4 space-y-3 border-t border-gray-200 pt-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-black/60">Subtotal</span>
                      <span className="font-medium">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-black/60">Shipping</span>
                      <span className="font-medium text-green-600">Free</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200 pt-3 text-base">
                      <span className="font-semibold">Total</span>
                      <span className="font-semibold">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Error */}
                  {submitError && (
                    <p className="mt-4 rounded-sm bg-red-50 px-4 py-3 text-sm text-red-600">
                      {submitError}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting || cartItems.length === 0}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-sm bg-primary py-4 font-poppins text-base font-medium text-white transition-colors hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {submitting && <Loader2 className="h-5 w-5 animate-spin" />}
                    {submitting ? "Redirecting…" : "Pay with Stripe"}
                  </button>
                </aside>
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
