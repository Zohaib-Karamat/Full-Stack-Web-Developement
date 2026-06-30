import Link from "next/link";
import { Heart, Eye, Star } from "lucide-react";
import AddToCartButton from "./AddToCartButton";

interface ProductCardProps {
  id?: string;
  title: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  isNew?: boolean;
  rating: number;
  reviewCount: number;
  imageUrl: string;
}

export default function ProductCard({
  id,
  title,
  price,
  originalPrice,
  discountPercentage,
  isNew,
  rating,
  reviewCount,
  imageUrl,
}: ProductCardProps) {
  const href = id ? `/product-details?id=${id}` : "/product-details";

  return (
    <div className="group flex w-full cursor-pointer flex-col gap-4">
      {/* Image Container */}
      <Link
        href={href}
        className="relative flex h-[250px] w-full items-center justify-center overflow-hidden rounded-sm bg-[#F5F5F5]"
      >
        {/* Badges */}
        {discountPercentage && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-poppins px-3 py-1 rounded-sm">
            -{discountPercentage}%
          </div>
        )}
        {isNew && (
          <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-poppins px-3 py-1 rounded-sm">
            NEW
          </div>
        )}

        {/* Action Icons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="bg-white p-1.5 rounded-full shadow-sm transition-colors">
            <Heart className="w-5 h-5 text-black" />
          </span>
          <span className="bg-white p-1.5 rounded-full shadow-sm transition-colors">
            <Eye className="w-5 h-5 text-black" />
          </span>
        </div>

        {/* Product Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={title}
          className="object-contain max-h-[180px] max-w-[190px] mix-blend-multiply drop-shadow-sm hover:scale-105 transition-transform duration-300"
        />

        {/* Add to Cart Button (Hover) */}
        <AddToCartButton
          productId={id}
          className="absolute bottom-0 w-full bg-black py-2 text-center font-poppins font-medium text-white opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100"
        />
      </Link>

      {/* Details */}
      <div className="flex flex-col gap-2">
        <Link href={href} className="text-black transition-colors hover:text-red-500">
          <h3 className="font-poppins font-medium text-base truncate">
            {title}
          </h3>
        </Link>
        <div className="flex items-center gap-3 font-poppins font-medium text-base">
          <span className="text-red-500">${price}</span>
          {originalPrice && (
            <span className="text-black opacity-50 line-through">
              ${originalPrice}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex text-amber-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-4 h-4 ${star <= Math.round(rating) ? "fill-current" : "text-gray-300 fill-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-black opacity-50 text-sm font-poppins font-semibold">
            ({reviewCount})
          </span>
        </div>
      </div>
    </div>
  );
}
