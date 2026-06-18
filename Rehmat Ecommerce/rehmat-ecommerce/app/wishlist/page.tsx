import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Eye, ShoppingCart, Star, Trash2 } from "lucide-react";

type WishlistProduct = {
  title: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  isNew?: boolean;
  rating?: number;
  reviewCount?: number;
  imageUrl: string;
};

const wishlistProducts: WishlistProduct[] = [
  {
    title: "Gucci duffle bag",
    price: 960,
    originalPrice: 1160,
    discountPercentage: 35,
    imageUrl: "/products/duffle-bag.png",
  },
  {
    title: "RGB liquid CPU Cooler",
    price: 1960,
    imageUrl:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=500&auto=format&fit=crop",
  },
  {
    title: "GP11 Shooter USB Gamepad",
    price: 550,
    imageUrl:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=500&auto=format&fit=crop",
  },
  {
    title: "Quilted Satin Jacket",
    price: 750,
    imageUrl:
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=500&auto=format&fit=crop",
  },
];

const recommendedProducts: WishlistProduct[] = [
  {
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    originalPrice: 1160,
    discountPercentage: 35,
    rating: 5,
    reviewCount: 65,
    imageUrl:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=500&auto=format&fit=crop",
  },
  {
    title: "IPS LCD Gaming Monitor",
    price: 1160,
    rating: 5,
    reviewCount: 65,
    imageUrl: "/products/monitor.png",
  },
  {
    title: "HAVIT HV-G92 Gamepad",
    price: 560,
    isNew: true,
    rating: 5,
    reviewCount: 65,
    imageUrl:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=500&auto=format&fit=crop",
  },
  {
    title: "AK-900 Wired Keyboard",
    price: 200,
    rating: 5,
    reviewCount: 65,
    imageUrl: "/products/keyboard.png",
  },
];

function ProductTile({
  product,
  action,
}: {
  product: WishlistProduct;
  action: "delete" | "view";
}) {
  return (
    <article className="group flex flex-col gap-4">
      <div className="relative flex h-[250px] items-center justify-center overflow-hidden rounded-sm bg-neutral-100 p-6">
        {product.discountPercentage ? (
          <span className="absolute left-3 top-3 rounded-sm bg-primary px-3 py-1 font-poppins text-xs text-white">
            -{product.discountPercentage}%
          </span>
        ) : null}

        {product.isNew ? (
          <span className="absolute left-3 top-3 rounded-sm bg-green-500 px-3 py-1 font-poppins text-xs text-white">
            NEW
          </span>
        ) : null}

        <button
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white text-black shadow-sm transition-colors hover:text-primary"
          aria-label={action === "delete" ? "Remove from wishlist" : "View product"}
        >
          {action === "delete" ? <Trash2 className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.imageUrl}
          alt={product.title}
          className="max-h-[165px] max-w-[190px] object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
        />

        <button className="absolute bottom-0 left-0 flex w-full items-center justify-center gap-2 bg-black py-2 font-poppins text-sm font-medium text-white">
          <ShoppingCart className="h-5 w-5" />
          Add To Cart
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="truncate font-poppins text-base font-medium text-black">{product.title}</h2>
        <div className="flex items-center gap-3 font-poppins text-base font-medium">
          <span className="text-primary">${product.price}</span>
          {product.originalPrice ? (
            <span className="text-black/50 line-through">${product.originalPrice}</span>
          ) : null}
        </div>

        {product.rating ? (
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${
                    star <= Math.round(product.rating ?? 0)
                      ? "fill-current"
                      : "fill-gray-300 text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="font-poppins text-sm font-semibold text-black/50">
              ({product.reviewCount})
            </span>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function WishlistPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:py-20 lg:px-8">
          <section>
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h1 className="font-poppins text-xl font-normal text-black">Wishlist (4)</h1>
              <button className="w-fit rounded-sm border border-black/50 px-12 py-4 font-poppins text-base font-medium text-black transition-colors hover:border-primary hover:text-primary">
                Move All To Bag
              </button>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {wishlistProducts.map((product) => (
                <ProductTile key={product.title} product={product} action="delete" />
              ))}
            </div>
          </section>

          <section className="mt-20 sm:mt-24">
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="h-10 w-5 rounded bg-primary" />
                <h2 className="font-poppins text-xl font-normal text-black">Just For You</h2>
              </div>

              <button className="w-fit rounded-sm border border-black/50 px-12 py-4 font-poppins text-base font-medium text-black transition-colors hover:border-primary hover:text-primary">
                See All
              </button>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {recommendedProducts.map((product) => (
                <ProductTile key={product.title} product={product} action="view" />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
