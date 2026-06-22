"use client";

import { useState } from "react";

export default function AddToCartButton({ 
  productId, 
  quantity = 1, 
  className,
  label = "Add To Cart"
}: { 
  productId?: string;
  quantity?: number;
  className?: string;
  label?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault(); // Stop Link navigation if inside a Link
    
    if (!productId) {
      alert("Product ID is missing");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product_id: productId, quantity })
      });
      if (res.ok) {
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
      } else {
        const data = await res.json();
        // If unauthorized, redirect to login
        if (res.status === 401) {
          window.location.href = "/login";
        } else {
          alert(data.error || "Failed to add to cart");
        }
      }
    } catch (err) {
      alert("Error adding to cart");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleAddToCart} 
      disabled={loading}
      className={className}
    >
      {loading ? "Adding..." : added ? "Added!" : label}
    </button>
  );
}
