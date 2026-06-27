import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Stripe from "stripe";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import stripe from "@/lib/stripe";
import { createAdminClient } from "@/utils/supabase/server";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface OrderItem {
  id: string;
  quantity: number;
  price: number;
  products: {
    title: string;
    featured_image: string | null;
  } | null;
}

interface Order {
  id: string;
  total_amount: number;
  order_status: string;
  order_items: OrderItem[];
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function truncate(str: string, len = 20) {
  return str.length > len ? `${str.slice(0, len)}…` : str;
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  if (!session_id) {
    redirect("/");
  }

  // Retrieve Stripe session (with expanded payment_intent)
  let session: Stripe.Checkout.Session;
  try {
    session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["payment_intent"],
    });
  } catch {
    redirect("/");
  }

  const isPaid = session.payment_status === "paid";

  // Fetch order from Supabase
  let order: Order | null = null;
  const orderId = session.metadata?.order_id;
  if (orderId) {
    const supabase = await createAdminClient();
    const { data } = await supabase
      .from("orders")
      .select(
        "id, total_amount, order_status, order_items(id, quantity, price, products(title, featured_image))",
      )
      .eq("id", orderId)
      .single();
    order = data as Order | null;
  }

  const paymentIntent =
    session.payment_intent && typeof session.payment_intent !== "string"
      ? (session.payment_intent as Stripe.PaymentIntent)
      : null;

  // -------------------------------------------------------------------------
  // Not-paid state
  // -------------------------------------------------------------------------

  if (!isPaid) {
    return (
      <div className="flex min-h-screen w-full flex-col bg-white">
        <Header />
        <main className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
          <div className="max-w-md">
            <div className="mb-6 flex justify-center">
              <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-yellow-50">
                <CheckCircle2 className="h-12 w-12 text-yellow-500" />
              </span>
            </div>
            <h1 className="mb-3 font-poppins text-2xl font-semibold text-black">
              Payment Pending
            </h1>
            <p className="font-poppins text-base text-black/60">
              Your payment is still being processed. Please check back shortly
              or contact support if the issue persists.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="rounded-sm bg-primary px-8 py-3.5 font-poppins text-sm font-medium text-white transition-colors hover:bg-red-600"
              >
                Continue Shopping
              </Link>
              <Link
                href="/contact"
                className="rounded-sm border border-gray-300 px-8 py-3.5 font-poppins text-sm font-medium text-black transition-colors hover:border-black"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Success state
  // -------------------------------------------------------------------------

  const amountTotal = session.amount_total ? session.amount_total / 100 : 0;
  const currency = (session.currency ?? "usd").toUpperCase();

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:py-20 lg:px-8">
          {/* Hero */}
          <div className="mb-10 flex flex-col items-center text-center">
            <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-green-50">
              <CheckCircle2 className="h-20 w-20 text-green-500" />
            </div>
            <h1 className="mb-2 font-poppins text-3xl font-semibold text-black">
              Payment Successful!
            </h1>
            <p className="font-poppins text-base text-black/60">
              Thank you for your order. Your payment has been confirmed.
            </p>
          </div>

          {/* Order details card */}
          <div className="mb-8 rounded-sm border border-gray-200 p-6 font-poppins shadow-sm">
            <h2 className="mb-5 text-lg font-semibold text-black">
              Order Details
            </h2>

            <dl className="grid gap-3 text-sm sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <dt className="text-black/50">Order ID</dt>
                <dd className="font-medium text-black">
                  {orderId ? truncate(orderId, 24) : "—"}
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-black/50">Payment Status</dt>
                <dd>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-xs font-semibold text-green-700">
                    Paid
                  </span>
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-black/50">Amount Paid</dt>
                <dd className="font-medium text-black">
                  {currency} {amountTotal.toFixed(2)}
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-black/50">Transaction ID</dt>
                <dd className="font-mono text-xs text-black/70">
                  {paymentIntent ? truncate(paymentIntent.id, 28) : "—"}
                </dd>
              </div>
              {session.customer_email && (
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <dt className="text-black/50">Email</dt>
                  <dd className="font-medium text-black">
                    {session.customer_email}
                  </dd>
                </div>
              )}
            </dl>
          </div>

          {/* Ordered items */}
          {order && order.order_items?.length > 0 && (
            <div className="mb-8 rounded-sm border border-gray-200 p-6 font-poppins shadow-sm">
              <h2 className="mb-5 text-lg font-semibold text-black">
                Items Ordered
              </h2>
              <ul className="flex flex-col divide-y divide-gray-100">
                {order.order_items.map((item) => (
                  <li key={item.id} className="flex items-center gap-4 py-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-sm border border-gray-100 bg-gray-50">
                      {item.products?.featured_image ? (
                        <Image
                          src={item.products.featured_image}
                          alt={item.products.title}
                          fill
                          className="object-contain mix-blend-multiply p-1"
                          sizes="64px"
                        />
                      ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src="https://placehold.co/64x64"
                          alt={item.products?.title || "Product"}
                          className="h-full w-full object-contain"
                        />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-black">
                        {item.products?.title || "Unknown Product"}
                      </p>
                      <p className="text-xs text-black/50">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm font-medium text-black">
                      ${(Number(item.price) * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/"
              className="flex flex-1 items-center justify-center rounded-sm bg-primary py-4 font-poppins text-base font-medium text-white transition-colors hover:bg-red-600"
            >
              Continue Shopping
            </Link>
            <Link
              href="/orders"
              className="flex flex-1 items-center justify-center rounded-sm border border-gray-300 py-4 font-poppins text-base font-medium text-black transition-colors hover:border-black"
            >
              View All Orders
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
