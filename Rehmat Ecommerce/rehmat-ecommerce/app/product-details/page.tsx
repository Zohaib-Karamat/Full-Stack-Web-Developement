import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import {
  Heart,
  Minus,
  Plus,
  RefreshCcw,
  Star,
  Truck,
} from "lucide-react";

const productImages = [
  "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=500&auto=format&fit=crop",
];

const sizes = ["XS", "S", "M", "L", "XL"];

const relatedProducts = [
  {
    title: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    discountPercentage: 40,
    rating: 5,
    reviewCount: 88,
    imageUrl:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=500&auto=format&fit=crop",
  },
  {
    title: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    discountPercentage: 35,
    rating: 4,
    reviewCount: 75,
    imageUrl: "/products/keyboard.png",
  },
  {
    title: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    discountPercentage: 30,
    rating: 5,
    reviewCount: 99,
    imageUrl: "/products/monitor.png",
  },
  {
    title: "RGB liquid CPU Cooler",
    price: 160,
    originalPrice: 170,
    rating: 4,
    reviewCount: 65,
    imageUrl:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=500&auto=format&fit=crop",
  },
];

function Rating() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex text-amber-400">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${star < 5 ? "fill-current" : "fill-gray-300 text-gray-300"}`}
          />
        ))}
      </div>
      <span className="font-poppins text-sm text-black/50">(150 Reviews)</span>
    </div>
  );
}

export default function ProductDetailsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:py-16 lg:px-8">
          <nav className="mb-10 flex flex-wrap items-center gap-3 font-poppins text-sm sm:mb-16">
            <Link href="/" className="text-black/50 transition-colors hover:text-black">
              Account
            </Link>
            <span className="text-black/40">/</span>
            <Link href="#" className="text-black/50 transition-colors hover:text-black">
              Gaming
            </Link>
            <span className="text-black/40">/</span>
            <span className="text-black">Havic HV G-92 Gamepad</span>
          </nav>

          <section className="grid gap-10 lg:grid-cols-[1.55fr_1fr] xl:gap-16">
            <div className="grid gap-6 sm:grid-cols-[170px_1fr]">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
                {productImages.map((image, index) => (
                  <button
                    key={image}
                    className={`flex h-32 items-center justify-center overflow-hidden rounded-sm bg-neutral-100 p-4 transition ring-primary/60 hover:ring-1 sm:h-[138px] ${
                      index === 0 ? "ring-1" : ""
                    }`}
                    aria-label={`View product image ${index + 1}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image}
                      alt=""
                      className="h-full w-full object-contain mix-blend-multiply"
                    />
                  </button>
                ))}
              </div>

              <div className="flex min-h-[420px] items-center justify-center rounded-sm bg-neutral-100 p-8 sm:min-h-[600px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={productImages[0]}
                  alt="Havic HV G-92 Gamepad"
                  className="max-h-[380px] w-full max-w-[520px] object-contain mix-blend-multiply"
                />
              </div>
            </div>

            <aside className="flex flex-col">
              <h1 className="font-inter text-2xl font-semibold leading-7 tracking-wide text-black">
                Havic HV G-92 Gamepad
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-4">
                <Rating />
                <span className="hidden h-5 w-px bg-black/30 sm:block" />
                <span className="font-poppins text-sm text-green-500">In Stock</span>
              </div>

              <p className="mt-4 font-inter text-2xl font-normal tracking-wide text-black">
                $192.00
              </p>

              <p className="mt-6 max-w-[390px] border-b border-black/50 pb-6 font-poppins text-sm leading-5 text-black">
                PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
              </p>

              <div className="mt-6 flex items-center gap-6">
                <span className="font-inter text-xl tracking-wide text-black">Colours:</span>
                <div className="flex items-center gap-2">
                  <button className="h-5 w-5 rounded-full border-2 border-black p-0.5" aria-label="Blue">
                    <span className="block h-full w-full rounded-full bg-indigo-300" />
                  </button>
                  <button className="h-5 w-5 rounded-full bg-red-400" aria-label="Red" />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-6">
                <span className="font-inter text-xl tracking-wide text-black">Size:</span>
                <div className="flex items-center gap-4">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`grid h-8 min-w-8 place-items-center rounded-sm border px-2 font-poppins text-sm font-medium transition-colors ${
                        size === "M"
                          ? "border-primary bg-primary text-white"
                          : "border-black/50 text-black hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex h-11 overflow-hidden rounded-sm border border-black/50">
                  <button className="grid w-10 place-items-center border-r border-black/50 hover:bg-neutral-100" aria-label="Decrease quantity">
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="grid w-20 place-items-center font-poppins text-xl font-medium">2</span>
                  <button className="grid w-10 place-items-center bg-primary text-white hover:bg-red-600" aria-label="Increase quantity">
                    <Plus className="h-5 w-5" />
                  </button>
                </div>

                <button className="h-11 rounded-sm bg-primary px-12 font-poppins text-base font-medium text-neutral-50 transition-colors hover:bg-red-600">
                  Buy Now
                </button>

                <button className="grid h-11 w-11 place-items-center rounded-sm border border-black/50 transition-colors hover:border-primary hover:text-primary" aria-label="Add to wishlist">
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-10 overflow-hidden rounded-sm border border-black/50">
                <div className="flex items-center gap-4 border-b border-black/50 p-4">
                  <Truck className="h-10 w-10 shrink-0 text-black" />
                  <div className="font-poppins text-black">
                    <h2 className="text-base font-medium">Free Delivery</h2>
                    <p className="mt-1 text-xs font-medium underline">
                      Enter your postal code for Delivery Availability
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4">
                  <RefreshCcw className="h-10 w-10 shrink-0 text-black" />
                  <div className="font-poppins text-black">
                    <h2 className="text-base font-medium">Return Delivery</h2>
                    <p className="mt-1 text-xs font-medium">
                      Free 30 Days Delivery Returns. <span className="underline">Details</span>
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </section>

          <section className="mt-24 sm:mt-32">
            <div className="mb-12 flex items-center gap-4">
              <span className="h-10 w-5 rounded bg-primary" />
              <h2 className="font-poppins text-base font-semibold text-primary">Related Item</h2>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
