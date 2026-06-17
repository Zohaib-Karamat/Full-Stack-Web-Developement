import Image from "next/image";
import { Heart, Eye, Star } from "lucide-react";

interface ProductCardProps {
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
  title,
  price,
  originalPrice,
  discountPercentage,
  isNew,
  rating,
  reviewCount,
  imageUrl,
}: ProductCardProps) {
  return (
    <div className="flex flex-col gap-4 w-[270px] group cursor-pointer">
      {/* Image Container */}
      <div className="w-full h-[250px] relative bg-[#F5F5F5] rounded-sm overflow-hidden flex items-center justify-center">
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
          <button className="bg-white p-1.5 rounded-full shadow-sm hover:bg-gray-100 transition-colors">
            <Heart className="w-5 h-5 text-black" />
          </button>
          <button className="bg-white p-1.5 rounded-full shadow-sm hover:bg-gray-100 transition-colors">
            <Eye className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Product Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={imageUrl} 
          alt={title} 
          className="object-contain max-h-[180px] max-w-[190px] mix-blend-multiply drop-shadow-sm hover:scale-105 transition-transform duration-300" 
        />

        {/* Add to Cart Button (Hover) */}
        <div className="absolute bottom-0 w-full bg-black text-white py-2 text-center font-poppins font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Add To Cart
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-2">
        <h3 className="text-black font-poppins font-medium text-base truncate">{title}</h3>
        <div className="flex items-center gap-3 font-poppins font-medium text-base">
          <span className="text-red-500">${price}</span>
          {originalPrice && (
            <span className="text-black opacity-50 line-through">${originalPrice}</span>
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
