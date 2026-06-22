import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductDetailActions from "@/components/ProductDetailActions";
import Link from "next/link";
import { getProductById, getProducts } from "@/lib/products";
import {
  Heart,
  Minus,
  Plus,
  RefreshCcw,
  Star,
  Truck,
} from "lucide-react";

function Rating({ rating, reviewCount }: { rating: number, reviewCount: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex text-amber-400">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${star <= Math.round(rating) ? "fill-current" : "fill-gray-300 text-gray-300"}`}
          />
        ))}
      </div>
      <span className="font-poppins text-sm text-black/50">({reviewCount} Reviews)</span>
    </div>
  );
}

export default async function ProductDetailsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  
  const product = await getProductById(id);
  const allProducts = await getProducts();
  
  if (!product) {
    return (
      <div className="flex min-h-screen w-full flex-col bg-white">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <h1 className="text-2xl font-semibold">Product not found</h1>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = allProducts.filter(p => p.id !== product.id).slice(0, 4);
  const sizes = ["XS", "S", "M", "L", "XL"];
  
  // Create an array of 4 images (using the same image to simulate multiple angles if there's only 1)
  const productImages = Array(4).fill(product.imageUrl);

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
            <Link href="/products" className="text-black/50 transition-colors hover:text-black">
              {product.category || "Products"}
            </Link>
            <span className="text-black/40">/</span>
            <span className="text-black">{product.title}</span>
          </nav>

          <section className="grid gap-10 lg:grid-cols-[1.55fr_1fr] xl:gap-16">
            <div className="grid gap-6 sm:grid-cols-[170px_1fr]">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
                {productImages.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
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
                  alt={product.title}
                  className="max-h-[380px] w-full max-w-[520px] object-contain mix-blend-multiply"
                />
              </div>
            </div>

            <aside className="flex flex-col">
              <h1 className="font-inter text-2xl font-semibold leading-7 tracking-wide text-black">
                {product.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-4">
                <Rating rating={product.rating} reviewCount={product.reviewCount} />
                <span className="hidden h-5 w-px bg-black/30 sm:block" />
                <span className="font-poppins text-sm text-green-500">In Stock</span>
              </div>

              <p className="mt-4 font-inter text-2xl font-normal tracking-wide text-black">
                ${product.price.toFixed(2)}
              </p>

              <p className="mt-6 max-w-[390px] border-b border-black/50 pb-6 font-poppins text-sm leading-5 text-black">
                {product.description || "High quality product with amazing features."}
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

              <ProductDetailActions productId={product.id} />

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
              {relatedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  title={p.title}
                  price={p.price}
                  originalPrice={p.originalPrice}
                  rating={p.rating}
                  reviewCount={p.reviewCount}
                  imageUrl={p.imageUrl}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
