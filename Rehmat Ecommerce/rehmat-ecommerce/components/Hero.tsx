"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
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
    <section className="max-w-7xl mx-auto px-4 lg:px-8 mb-24 flex flex-col md:flex-row gap-8">
      {/* Sidebar Categories */}
      <div className="md:w-64 pt-10 border-r border-gray-200 pr-4 hidden md:block">
        <ul className="flex flex-col gap-4 font-poppins text-base text-black">
          {categories.map((cat, idx) => (
            <li key={idx} className="flex justify-between items-center cursor-pointer hover:text-red-500 transition-colors">
              <span>{cat}</span>
              {(idx === 0 || idx === 1) && <ChevronRight className="w-4 h-4 text-black" />}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Banner Slider Area */}
      <div className="flex-1 pt-10">
        <div className="bg-black w-full h-[344px] relative overflow-hidden flex items-center p-12">
          
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 w-full h-full p-8 md:p-12 flex items-center transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Banner Text Content */}
              <div className="z-20 flex flex-col gap-4 md:gap-6 w-full md:w-3/5 lg:w-1/2">
                <div className="flex items-center gap-4 md:gap-6">
                  {/* Apple Logo placeholder */}
                  <div className="w-8 h-10 md:w-10 md:h-12 flex items-center justify-center">
                    <svg className="w-8 h-10 md:w-10 md:h-12 text-white fill-current" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                    </svg>
                  </div>
                  <span className="text-neutral-50 text-sm md:text-base font-poppins">{slide.title}</span>
                </div>
                
                <h1 className="text-neutral-50 text-3xl md:text-5xl font-semibold font-inter leading-[40px] md:leading-[60px] tracking-wider md:tracking-widest max-w-[400px]">
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
              <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-end z-10">
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
                className={`rounded-full transition-all duration-300 ${
                  currentSlide === idx 
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
