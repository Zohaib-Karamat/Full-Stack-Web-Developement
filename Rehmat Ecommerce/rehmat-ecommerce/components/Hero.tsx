"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Woman's Fashion",
    subcategories: ["Clothing", "Shoes", "Jewelry", "Watches", "Handbags", "Accessories"],
  },
  {
    name: "Men's Fashion",
    subcategories: ["Clothing", "Shoes", "Watches", "Accessories"],
  },
  { name: "Electronics" },
  { name: "Home & Lifestyle" },
  { name: "Medicine" },
  { name: "Sports & Outdoor" },
  { name: "Baby's & Toys" },
  { name: "Groceries & Pets" },
  { name: "Health & Beauty" },
];

const slides = [
  {
    title: "iPhone 14 Series",
    heading: "Up to 10% off Voucher",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "MacBook Pro",
    heading: "Supercharged for pros",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Apple Watch",
    heading: "The ultimate device",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "AirPods Pro",
    heading: "Magic like you've never heard",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "iPad Air",
    heading: "Light. Speed.",
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=1000&auto=format&fit=crop",
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mx-auto mb-14 flex max-w-7xl flex-col gap-5 px-4 sm:mb-20 md:flex-row md:gap-8 lg:px-8">
      {/* Sidebar Categories */}
      <div className="hidden border-r border-gray-200 pr-4 pt-10 md:block md:w-56 lg:w-64">
        <ul className="flex flex-col gap-4 font-poppins text-base text-black relative">
          {categories.map((cat, idx) => (
            <li key={idx} className="group flex justify-between items-center cursor-pointer hover:text-red-500 transition-colors">
              <span>{cat.name}</span>
              {cat.subcategories && <ChevronRight className="w-4 h-4 text-black group-hover:text-red-500 transition-colors" />}

              {/* Flyout Subcategory Menu */}
              {cat.subcategories && (
                <div className="absolute left-full top-0 ml-4 w-48 bg-white border border-gray-200 shadow-md rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="absolute -left-4 top-0 w-4 h-full bg-transparent"></div> {/* Invisible bridge */}
                  <ul className="flex flex-col py-2">
                    {cat.subcategories.map((sub, subIdx) => (
                      <li key={subIdx} className="px-4 py-2 hover:bg-gray-50 hover:text-red-500 text-black text-sm transition-colors">
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Banner Slider Area */}
      <div className="flex-1 pt-4 md:pt-10">
        <div className="relative flex h-[360px] w-full items-center overflow-hidden rounded-sm bg-black sm:h-[344px]">

          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex h-full w-full items-center p-6 transition-opacity duration-700 ease-in-out sm:p-8 md:p-12 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
            >
              {/* Banner Text Content */}
              <div className="z-20 flex w-full max-w-[22rem] flex-col gap-4 md:w-3/5 md:max-w-[25rem] md:gap-6 lg:w-1/2">
                <div className="flex items-center gap-4 md:gap-6">
                  {/* Apple Logo placeholder */}
                  <div className="w-8 h-10 md:w-10 md:h-12 flex items-center justify-center">
                    <svg className="w-8 h-10 md:w-10 md:h-12 text-white fill-current" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                  </div>
                  <span className="font-poppins text-sm text-neutral-50 md:text-base">{slide.title}</span>
                </div>

                <h1 className="max-w-[400px] font-inter text-3xl font-semibold leading-tight tracking-normal text-neutral-50 sm:text-4xl md:text-5xl">
                  {slide.heading}
                </h1>

                <Link href="#" className="flex items-center gap-2 mt-2 w-fit group">
                  <div className="flex flex-col gap-1">
                    <span className="text-neutral-50 text-sm md:text-base font-medium font-poppins">Shop Now</span>
                    <div className="w-full h-0 border-b border-neutral-50 group-hover:border-transparent transition-colors"></div>
                  </div>
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-neutral-50 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Banner Image */}
              <div className="absolute right-0 top-0 z-10 flex h-full w-full items-center justify-end sm:w-3/5 md:w-1/2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={slide.image} alt={slide.title} className="object-cover h-full w-full opacity-50 md:opacity-60 mask-image-linear-gradient" style={{ maskImage: 'linear-gradient(to right, transparent, black)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%)' }} />
              </div>
            </div>
          ))}

          {/* Slider Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-30">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`rounded-full transition-all duration-300 ${currentSlide === idx
                    ? "w-3.5 h-3.5 border-2 border-white bg-red-500 relative -top-[1px]"
                    : "w-3 h-3 bg-white opacity-50 hover:opacity-100"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
