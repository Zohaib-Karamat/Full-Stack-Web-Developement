"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { ChevronDown, ChevronUp, X, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

function QuantityBox({ value, onChange }: { value: number, onChange: (newVal: number) => void }) {
  const increase = () => onChange(value + 1);
  const decrease = () => onChange(value > 1 ? value - 1 : 1);

  return (
    <div className="flex h-11 w-16 items-center justify-center gap-3 rounded-sm border border-black/40 font-poppins text-base text-black">
      <span>{value.toString().padStart(2, '0')}</span>
      <span className="flex flex-col">
        <button onClick={increase} className="hover:text-primary"><ChevronUp className="h-4 w-4" /></button>
        <button onClick={decrease} className="hover:text-primary"><ChevronDown className="h-4 w-4" /></button>
      </span>
    </div>
  );
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = () => {
    setLoading(true);
    fetch("/api/cart")
      .then(res => {
        if (res.status === 401) {
          window.location.href = "/login";
          throw new Error("Unauthorized");
        }
        return res.json();
      })
      .then(data => {
        setCartItems(data.items || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Cart fetch error:", err);
        setLoading(false);
      });
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems(items => items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const handleRemove = async (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
    try {
      await fetch(`/api/cart?item_id=${id}`, { method: "DELETE" });
    } catch (err) {
      console.error(err);
      fetchCart();
    }
  };

  const handleUpdateCart = async () => {
    setUpdating(true);
    try {
      const res = await fetch("/api/cart", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cartItems.map(i => ({ id: i.id, quantity: i.quantity })) })
      });
      if (res.ok) {
        fetchCart();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdating(false);
    }
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (Number(item.products?.price || 0) * item.quantity), 0);
  const total = subtotal;

  const [checkingOut, setCheckingOut] = useState(false);

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;
    setCheckingOut(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      if (res.ok) {
        alert("Order placed successfully with Cash on Delivery!");
        window.location.href = "/orders"; // Redirect to orders page
      } else {
        const data = await res.json();
        alert(data.error || "Checkout failed");
      }
    } catch (err) {
      console.error(err);
      alert("Checkout failed");
    } finally {
      setCheckingOut(false);
    }
  };

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

            {loading && cartItems.length === 0 ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-red-500" />
              </div>
            ) : cartItems.length === 0 ? (
              <div className="text-center py-20 text-gray-500 font-poppins">
                Your cart is empty.
              </div>
            ) : (
              cartItems.map((item) => {
                const product = item.products;
                const itemSubtotal = Number(product?.price || 0) * item.quantity;
                return (
                  <article
                    key={item.id}
                    className="grid gap-5 rounded-sm bg-white p-6 font-poppins text-base text-black shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] md:min-h-24 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:items-center md:px-10"
                  >
                    <div className="flex items-center gap-5">
                      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={product?.featured_image || "https://placehold.co/100x100"}
                          alt={product?.title || "Product"}
                          className="max-h-12 max-w-12 object-contain mix-blend-multiply"
                        />
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="absolute -left-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-primary text-white hover:bg-red-600 transition-colors"
                          aria-label={`Remove ${product?.title}`}
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="truncate">{product?.title || "Unknown Product"}</span>
                    </div>

                    <div className="flex items-center justify-between md:block">
                      <span className="text-black/50 md:hidden">Price</span>
                      <span>${Number(product?.price || 0).toFixed(2)}</span>
                    </div>

                    <div className="flex items-center justify-between md:block">
                      <span className="text-black/50 md:hidden">Quantity</span>
                      <QuantityBox value={item.quantity} onChange={(val) => updateQuantity(item.id, val)} />
                    </div>

                    <div className="flex items-center justify-between md:block md:text-right">
                      <span className="text-black/50 md:hidden">Subtotal</span>
                      <span>${itemSubtotal.toFixed(2)}</span>
                    </div>
                  </article>
                );
              })
            )}

            <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/"
                className="w-fit rounded-sm border border-black/50 px-12 py-4 font-poppins text-base font-medium text-black transition-colors hover:border-primary hover:text-primary"
              >
                Return To Shop
              </Link>
              <button 
                onClick={handleUpdateCart}
                disabled={updating || cartItems.length === 0}
                className="w-fit rounded-sm border border-black/50 px-12 py-4 font-poppins text-base font-medium text-black transition-colors hover:border-primary hover:text-primary disabled:opacity-50 flex gap-2 items-center"
              >
                {updating ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
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
                type="button"
                className="h-14 w-fit rounded-sm bg-primary px-12 font-poppins text-base font-medium text-neutral-50 transition-colors hover:bg-red-600"
              >
                Apply Coupon
              </button>
            </form>

            <aside className="rounded-sm border-2 border-black p-6 font-poppins text-black">
              <h1 className="mb-6 text-xl font-medium">Cart Total</h1>

              <div className="flex items-center justify-between border-b border-black/40 py-4 text-base">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between border-b border-black/40 py-4 text-base">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex items-center justify-between py-4 text-base">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="mt-4 flex justify-center">
                <button 
                  onClick={handleCheckout}
                  disabled={checkingOut || cartItems.length === 0}
                  className="rounded-sm bg-primary px-12 py-4 font-poppins text-base font-medium text-neutral-50 transition-colors hover:bg-red-600 disabled:opacity-50 flex gap-2 items-center"
                >
                  {checkingOut ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
                  Process to checkout
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
