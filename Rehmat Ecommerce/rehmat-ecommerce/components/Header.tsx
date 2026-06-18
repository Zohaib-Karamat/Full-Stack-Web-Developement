"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Heart, Menu, Search, ShoppingCart, User, ShoppingBag, XCircle, Star, LogOut, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 relative z-50">
      {/* Top Banner */}
      <div className="w-full bg-black text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 py-2 text-xs sm:flex-row sm:py-3 sm:text-sm lg:px-8">
          <div className="hidden w-20 sm:block"></div> {/* Spacer for perfect centering */}
          <div className="flex-1 text-center font-poppins">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <Link href="#" className="font-semibold underline sm:ml-2">
              ShopNow
            </Link>
          </div>
          <div className="flex w-20 items-center justify-end gap-2 font-poppins">
            English <span className="text-xs">▼</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-2 sm:flex-nowrap lg:px-8 lg:py-3">
        <Link href="/" className="shrink-0 flex items-center">
          <Image src="/logo.png" alt="Rehmat Ecom Logo" width={100} height={100} className="object-contain w-20 sm:w-24" priority />
        </Link>

        <nav className="hidden items-center gap-8 font-poppins text-base font-normal md:flex">
          <Link href="/" className="hover:underline underline-offset-4 font-medium">Home</Link>
          <Link href="/contact" className="hover:underline underline-offset-4">Contact</Link>
          <Link href="/about" className="hover:underline underline-offset-4">About</Link>
          <Link href="/signup" className="hover:underline underline-offset-4">Sign Up</Link>
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <div className="relative hidden items-center lg:flex">
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
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                2
              </span>
            </button>

            {/* User Account Dropdown */}
            <div className="relative group hidden sm:block">
              <button aria-label="User Account" className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors">
                <User className="w-5 h-5" />
              </button>
              
              {/* Invisible hover bridge */}
              <div className="absolute top-full right-0 w-full h-4"></div>

              {/* Dropdown Menu */}
              <div className="absolute right-0 top-[calc(100%+0.5rem)] w-64 bg-black/80 backdrop-blur-md text-white rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex flex-col p-2">
                <Link href="/account" className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/20 rounded-sm transition-colors text-sm font-poppins">
                  <User className="w-5 h-5" /> Manage My Account
                </Link>
                <Link href="/orders" className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/20 rounded-sm transition-colors text-sm font-poppins">
                  <ShoppingBag className="w-5 h-5" /> My Order
                </Link>
                <Link href="/cancellations" className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/20 rounded-sm transition-colors text-sm font-poppins">
                  <XCircle className="w-5 h-5" /> My Cancellations
                </Link>
                <Link href="/reviews" className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/20 rounded-sm transition-colors text-sm font-poppins">
                  <Star className="w-5 h-5" /> My Reviews
                </Link>
                <button className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/20 rounded-sm transition-colors text-sm font-poppins w-full text-left">
                  <LogOut className="w-5 h-5" /> Logout
                </button>
              </div>
            </div>

            <button 
              aria-label="Menu" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="relative flex w-full items-center sm:w-80 lg:hidden">
          <input
            type="text"
            placeholder="Search products"
            className="w-full rounded-md bg-gray-100 py-2 pl-4 pr-10 font-poppins text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
          <Search className="absolute right-3 h-5 w-5 text-gray-500" />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm md:hidden">
          <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-xl flex flex-col transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <span className="font-inter font-semibold text-xl">Menu</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-black" />
              </button>
            </div>
            
            <nav className="flex flex-col p-4 gap-4 font-poppins text-base font-medium">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-500 transition-colors">Home</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-500 transition-colors">Contact</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-500 transition-colors">About</Link>
              <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-500 transition-colors">Sign Up</Link>
            </nav>

            <div className="mt-auto p-4 border-t border-gray-200">
              <Link href="/account" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 hover:text-red-500 transition-colors font-poppins text-base font-medium">
                <User className="w-5 h-5" /> My Account
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
