import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { ChevronDown, ChevronUp, X } from "lucide-react";

const cartItems = [
  {
    name: "LCD Monitor",
    price: 650,
    quantity: "01",
    subtotal: 650,
    imageUrl: "/products/monitor.png",
    removable: true,
  },
  {
    name: "H1 Gamepad",
    price: 550,
    quantity: "02",
    subtotal: 1100,
    imageUrl:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=300&auto=format&fit=crop",
    removable: false,
  },
];

function QuantityBox({ value }: { value: string }) {
  return (
    <div className="flex h-11 w-16 items-center justify-center gap-3 rounded-sm border border-black/40 font-poppins text-base text-black">
      <span>{value}</span>
      <span className="flex flex-col">
        <ChevronUp className="h-4 w-4" />
        <ChevronDown className="h-4 w-4" />
      </span>
    </div>
  );
}

export default function CartPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:py-16 lg:px-8">
          <nav className="mb-14 flex items-center gap-3 font-poppins text-sm">
            <Link href="/" className="text-black/50 transition-colors hover:text-black">
              Home
            </Link>
            <span className="text-black/40">/</span>
            <span className="text-black">Cart</span>
          </nav>

          <section className="flex flex-col gap-6">
            <div className="hidden min-h-16 grid-cols-[1.5fr_1fr_1fr_1fr] items-center rounded-sm bg-white px-10 font-poppins text-base text-black shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] md:grid">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span className="text-right">Subtotal</span>
            </div>

            {cartItems.map((item) => (
              <article
                key={item.name}
                className="grid gap-5 rounded-sm bg-white p-6 font-poppins text-base text-black shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] md:min-h-24 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:items-center md:px-10"
              >
                <div className="flex items-center gap-5">
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="max-h-12 max-w-12 object-contain mix-blend-multiply"
                    />
                    {item.removable ? (
                      <button
                        className="absolute -left-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-primary text-white"
                        aria-label={`Remove ${item.name}`}
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    ) : null}
                  </div>
                  <span>{item.name}</span>
                </div>

                <div className="flex items-center justify-between md:block">
                  <span className="text-black/50 md:hidden">Price</span>
                  <span>${item.price}</span>
                </div>

                <div className="flex items-center justify-between md:block">
                  <span className="text-black/50 md:hidden">Quantity</span>
                  <QuantityBox value={item.quantity} />
                </div>

                <div className="flex items-center justify-between md:block md:text-right">
                  <span className="text-black/50 md:hidden">Subtotal</span>
                  <span>${item.subtotal}</span>
                </div>
              </article>
            ))}

            <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/"
                className="w-fit rounded-sm border border-black/50 px-12 py-4 font-poppins text-base font-medium text-black transition-colors hover:border-primary hover:text-primary"
              >
                Return To Shop
              </Link>
              <button className="w-fit rounded-sm border border-black/50 px-12 py-4 font-poppins text-base font-medium text-black transition-colors hover:border-primary hover:text-primary">
                Update Cart
              </button>
            </div>
          </section>

          <section className="mt-20 grid gap-8 lg:grid-cols-[1fr_470px] lg:items-start">
            <form className="flex flex-col gap-4 sm:flex-row">
              <input
                type="text"
                placeholder="Coupon Code"
                className="h-14 w-full rounded-sm border border-black px-6 font-poppins text-base text-black outline-none placeholder:text-black/50 focus:ring-1 focus:ring-primary sm:max-w-72"
              />
              <button
                type="submit"
                className="h-14 w-fit rounded-sm bg-primary px-12 font-poppins text-base font-medium text-neutral-50 transition-colors hover:bg-red-600"
              >
                Apply Coupon
              </button>
            </form>

            <aside className="rounded-sm border-2 border-black p-6 font-poppins text-black">
              <h1 className="mb-6 text-xl font-medium">Cart Total</h1>

              <div className="flex items-center justify-between border-b border-black/40 py-4 text-base">
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>
              <div className="flex items-center justify-between border-b border-black/40 py-4 text-base">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex items-center justify-between py-4 text-base">
                <span>Total:</span>
                <span>$1750</span>
              </div>

              <div className="mt-4 flex justify-center">
                <button className="rounded-sm bg-primary px-12 py-4 font-poppins text-base font-medium text-neutral-50 transition-colors hover:bg-red-600">
                  Procees to checkout
                </button>
              </div>
            </aside>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
