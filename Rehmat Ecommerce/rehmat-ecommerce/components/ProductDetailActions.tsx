"use client";

import { useState } from "react";
import { Minus, Plus, Heart } from "lucide-react";
import AddToCartButton from "./AddToCartButton";

export default function ProductDetailActions({ productId }: { productId: string }) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(q => q + 1);
  const decrease = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <div className="mt-6 flex flex-wrap items-center gap-4">
      <div className="flex h-11 overflow-hidden rounded-sm border border-black/50">
        <button 
          onClick={decrease}
          className="grid w-10 place-items-center border-r border-black/50 hover:bg-neutral-100" 
          aria-label="Decrease quantity"
        >
          <Minus className="h-5 w-5" />
        </button>
        <span className="grid w-20 place-items-center font-poppins text-xl font-medium">
          {quantity}
        </span>
        <button 
          onClick={increase}
          className="grid w-10 place-items-center bg-primary text-white hover:bg-red-600" 
          aria-label="Increase quantity"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>

      <AddToCartButton 
        productId={productId} 
        quantity={quantity}
        label="Add To Cart"
        className="h-11 rounded-sm bg-primary px-12 font-poppins text-base font-medium text-neutral-50 transition-colors hover:bg-red-600"
      />

      <button className="grid h-11 w-11 place-items-center rounded-sm border border-black/50 transition-colors hover:border-primary hover:text-primary" aria-label="Add to wishlist">
        <Heart className="h-5 w-5" />
      </button>
    </div>
  );
}
