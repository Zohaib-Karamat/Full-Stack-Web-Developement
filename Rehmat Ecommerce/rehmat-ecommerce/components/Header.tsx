import Link from "next/link";
import { Search, Heart, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200">
      {/* Top Banner */}
      <div className="w-full bg-black text-white text-sm py-3 px-4 flex justify-between items-center hidden md:flex">
        <div className="flex-1 text-center font-poppins">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <Link href="#" className="font-semibold underline ml-2">
            ShopNow
          </Link>
        </div>
        <div className="flex items-center gap-2 font-poppins">
          English <span className="text-xs">▼</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-5 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold font-inter tracking-wider">
          Exclusive
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-poppins text-base font-normal">
          <Link href="/" className="hover:underline underline-offset-4 font-medium">Home</Link>
          <Link href="/contact" className="hover:underline underline-offset-4">Contact</Link>
          <Link href="/about" className="hover:underline underline-offset-4">About</Link>
          <Link href="/signup" className="hover:underline underline-offset-4">Sign Up</Link>
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex relative items-center">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-gray-100 text-sm font-poppins rounded-md pl-4 pr-10 py-2 w-64 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
            <Search className="absolute right-3 w-5 h-5 text-gray-500" />
          </div>
          <div className="flex items-center gap-4">
            <button aria-label="Wishlist">
              <Heart className="w-6 h-6 hover:text-red-500 transition-colors" />
            </button>
            <button aria-label="Cart" className="relative">
              <ShoppingCart className="w-6 h-6 hover:text-red-500 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
