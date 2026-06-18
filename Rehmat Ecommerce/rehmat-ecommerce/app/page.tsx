import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";
import {
  MoveLeft,
  MoveRight,
  Smartphone,
  Monitor,
  Watch,
  Camera,
  Headphones,
  Gamepad,
  Truck,
  HeadphonesIcon,
  ShieldCheck,
} from "lucide-react";

import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <Hero />

      <main className="mx-auto flex max-w-7xl flex-col gap-14 px-4 pb-16 sm:gap-20 sm:pb-24 lg:gap-24 lg:px-8">
        {/* Flash Sales Section */}
        <section className="border-b border-gray-200 pb-12 sm:pb-16">
          <SectionHeading
            subtitle="Today's"
            title="Flash Sales"
            actionButton={
              <div className="flex gap-2">
                <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
                  <MoveLeft className="w-5 h-5" />
                </button>
                <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
                  <MoveRight className="w-5 h-5" />
                </button>
              </div>
            }
          >
            {/* Countdown timer mockup */}
            <div className="mb-1 grid grid-cols-4 gap-2 text-black sm:flex sm:items-center sm:gap-4">
              <div className="flex flex-col items-center">
                <span className="text-xs font-medium font-poppins">Days</span>
                <span className="font-inter text-2xl font-bold tracking-normal sm:text-3xl">
                  03
                </span>
              </div>
              <span className="mb-1 hidden text-3xl font-bold text-red-500 sm:block">
                :
              </span>
              <div className="flex flex-col items-center">
                <span className="text-xs font-medium font-poppins">Hours</span>
                <span className="font-inter text-2xl font-bold tracking-normal sm:text-3xl">
                  23
                </span>
              </div>
              <span className="mb-1 hidden text-3xl font-bold text-red-500 sm:block">
                :
              </span>
              <div className="flex flex-col items-center">
                <span className="text-xs font-medium font-poppins">
                  Minutes
                </span>
                <span className="font-inter text-2xl font-bold tracking-normal sm:text-3xl">
                  19
                </span>
              </div>
              <span className="mb-1 hidden text-3xl font-bold text-red-500 sm:block">
                :
              </span>
              <div className="flex flex-col items-center">
                <span className="text-xs font-medium font-poppins">
                  Seconds
                </span>
                <span className="font-inter text-2xl font-bold tracking-normal sm:text-3xl">
                  56
                </span>
              </div>
            </div>
          </SectionHeading>

          <div className="grid grid-cols-2 gap-4 sm:gap-7 lg:grid-cols-4">
            <ProductCard
              title="HAVIT HV-G92 Gamepad"
              price={120}
              originalPrice={160}
              discountPercentage={40}
              rating={5}
              reviewCount={88}
              imageUrl="/products/keyboard.png"
            />
            <ProductCard
              title="AK-900 Wired Keyboard"
              price={960}
              originalPrice={1160}
              discountPercentage={35}
              rating={4}
              reviewCount={75}
              imageUrl="/products/keyboard.png"
            />
            <ProductCard
              title="IPS LCD Gaming Monitor"
              price={370}
              originalPrice={400}
              discountPercentage={30}
              rating={5}
              reviewCount={99}
              imageUrl="/products/monitor.png"
            />
            <ProductCard
              title="S-Series Comfort Chair"
              price={375}
              originalPrice={400}
              discountPercentage={25}
              rating={4.5}
              reviewCount={99}
              imageUrl="/products/duffle-bag.png"
            />
          </div>
          <div className="mt-10 flex justify-center sm:mt-12">
            <button className="w-full rounded-sm bg-red-500 px-8 py-4 font-poppins font-medium text-white transition-colors hover:bg-red-600 sm:w-auto sm:px-12">
              View All Products
            </button>
          </div>
        </section>

        {/* Categories Section */}
        <section className="border-b border-gray-200 pb-12 sm:pb-16">
          <SectionHeading
            subtitle="Categories"
            title="Browse By Category"
            actionButton={
              <div className="flex gap-2">
                <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
                  <MoveLeft className="w-5 h-5" />
                </button>
                <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
                  <MoveRight className="w-5 h-5" />
                </button>
              </div>
            }
          />
          <div className="flex snap-x gap-4 overflow-x-auto pb-4 sm:gap-7">
            <div className="snap-start">
              <CategoryCard icon={<Smartphone />} label="Phones" />
            </div>
            <div className="snap-start">
              <CategoryCard icon={<Monitor />} label="Computers" />
            </div>
            <div className="snap-start">
              <CategoryCard icon={<Watch />} label="SmartWatch" />
            </div>
            <div className="snap-start">
              <CategoryCard icon={<Camera />} label="Camera" isActive />
            </div>
            <div className="snap-start">
              <CategoryCard icon={<Headphones />} label="HeadPhones" />
            </div>
            <div className="snap-start">
              <CategoryCard icon={<Gamepad />} label="Gaming" />
            </div>
          </div>
        </section>

        {/* Best Selling Section */}
        <section>
          <SectionHeading
            subtitle="This Month"
            title="Best Selling Products"
            actionButton={
              <button className="rounded-sm bg-red-500 px-8 py-3 font-poppins font-medium text-white transition-colors hover:bg-red-600 sm:px-12 sm:py-4">
                View All
              </button>
            }
          />
          <div className="grid grid-cols-1 justify-items-center gap-7 sm:grid-cols-2 lg:grid-cols-4">
            <ProductCard
              title="The north coat"
              price={260}
              originalPrice={360}
              rating={5}
              reviewCount={65}
              imageUrl="/products/duffle-bag.png"
            />
            <ProductCard
              title="Gucci duffle bag"
              price={960}
              originalPrice={1160}
              rating={4.5}
              reviewCount={65}
              imageUrl="/products/duffle-bag.png"
            />
            <ProductCard
              title="RGB liquid CPU Cooler"
              price={160}
              originalPrice={170}
              rating={4.5}
              reviewCount={65}
              imageUrl="/products/monitor.png"
            />
            <ProductCard
              title="Small BookSelf"
              price={360}
              rating={5}
              reviewCount={65}
              imageUrl="/products/keyboard.png"
            />
          </div>
        </section>

        {/* Promo Banner */}
        <section className="relative mt-4 flex min-h-[500px] w-full flex-col-reverse items-center overflow-hidden rounded-sm bg-black p-6 sm:p-8 md:mt-10 md:flex-row md:p-14">
          <div className="absolute inset-0 z-0">
            {/* Faded blur effect */}
            <div className="absolute left-[30%] w-[500px] h-[500px] bg-white opacity-[0.05] rounded-full blur-[100px]"></div>
          </div>

          <div className="z-10 flex w-full flex-col gap-6 md:w-1/2 md:gap-8">
            <span className="text-[#00ff66] font-semibold font-poppins text-base">
              Categories
            </span>
            <h2 className="max-w-[400px] font-inter text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl lg:text-5xl">
              Enhance Your Music Experience
            </h2>

            {/* Circular countdown */}
            <div className="mt-2 grid grid-cols-2 gap-3 sm:mt-4 sm:flex sm:gap-6">
              <div className="bg-white rounded-full w-[70px] h-[70px] flex flex-col justify-center items-center text-black">
                <span className="font-semibold text-lg leading-5">23</span>
                <span className="text-[10px]">Hours</span>
              </div>
              <div className="bg-white rounded-full w-[70px] h-[70px] flex flex-col justify-center items-center text-black">
                <span className="font-semibold text-lg leading-5">05</span>
                <span className="text-[10px]">Days</span>
              </div>
              <div className="bg-white rounded-full w-[70px] h-[70px] flex flex-col justify-center items-center text-black">
                <span className="font-semibold text-lg leading-5">59</span>
                <span className="text-[10px]">Minutes</span>
              </div>
              <div className="bg-white rounded-full w-[70px] h-[70px] flex flex-col justify-center items-center text-black">
                <span className="font-semibold text-lg leading-5">35</span>
                <span className="text-[10px]">Seconds</span>
              </div>
            </div>

            <button className="mt-2 w-full rounded-sm bg-[#00ff66] px-10 py-4 font-poppins font-medium text-black transition-colors hover:bg-green-500 sm:w-fit">
              Buy Now!
            </button>
          </div>

          <div className="z-10 flex w-full justify-center pb-10 md:w-1/2 md:pb-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=800&auto=format&fit=crop"
              alt="JBL Speaker"
              className="object-contain max-h-[350px] w-auto"
            />
          </div>
        </section>

        {/* Explore Our Products Section */}
        <section>
          <SectionHeading
            subtitle="Our Products"
            title="Explore Our Products"
            actionButton={
              <div className="flex gap-2">
                <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
                  <MoveLeft className="w-5 h-5" />
                </button>
                <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
                  <MoveRight className="w-5 h-5" />
                </button>
              </div>
            }
          />
          <div className="grid grid-cols-1 justify-items-center gap-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            <ProductCard
              title="Breed Dry Dog Food"
              price={100}
              rating={3}
              reviewCount={35}
              imageUrl="/products/duffle-bag.png"
            />
            <ProductCard
              title="CANON EOS DSLR Camera"
              price={360}
              rating={4}
              reviewCount={95}
              imageUrl="/products/monitor.png"
            />
            <ProductCard
              title="ASUS FHD Gaming Laptop"
              price={700}
              rating={5}
              reviewCount={325}
              imageUrl="/products/keyboard.png"
            />
            <ProductCard
              title="Curology Product Set"
              price={500}
              rating={4}
              reviewCount={145}
              imageUrl="/products/duffle-bag.png"
            />
            <ProductCard
              title="Kids Electric Car"
              price={960}
              rating={5}
              reviewCount={65}
              isNew
              imageUrl="/products/duffle-bag.png"
            />
            <ProductCard
              title="Jr. Zoom Soccer Cleats"
              price={1160}
              rating={5}
              reviewCount={35}
              imageUrl="/products/duffle-bag.png"
            />
            <ProductCard
              title="GP11 Shooter USB Gamepad"
              price={660}
              rating={4.5}
              reviewCount={55}
              isNew
              imageUrl="/products/keyboard.png"
            />
            <ProductCard
              title="Quilted Satin Jacket"
              price={660}
              rating={4.5}
              reviewCount={55}
              imageUrl="/products/duffle-bag.png"
            />
          </div>
          <div className="mt-12 flex justify-center">
            <button className="w-full rounded-sm bg-red-500 px-8 py-4 font-poppins font-medium text-white transition-colors hover:bg-red-600 sm:w-auto sm:px-12">
              View All Products
            </button>
          </div>
        </section>

        {/* New Arrival Section */}
        <section>
          <SectionHeading subtitle="Featured" title="New Arrival" />
          <div className="grid h-auto grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:h-[600px]">
            {/* PS5 - Large Left */}
            <div className="relative flex min-h-[300px] items-end justify-center overflow-hidden rounded-sm bg-black p-6 sm:p-8 md:min-h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=600&auto=format&fit=crop"
                alt="PlayStation 5"
                className="absolute top-0 w-full h-full object-cover opacity-80"
              />
              <div className="relative z-10 flex w-full flex-col gap-4 font-poppins text-white">
                <h3 className="text-2xl font-semibold font-inter tracking-wider">
                  PlayStation 5
                </h3>
                <p className="text-sm font-light max-w-[242px]">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <button className="w-fit border-b border-white pb-1 font-medium hover:opacity-80 transition-opacity">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Right Side Grid */}
            <div className="flex h-full flex-col gap-6 md:gap-8">
              {/* Women's Collection - Top Half */}
              <div className="relative flex min-h-[280px] flex-1 items-end overflow-hidden rounded-sm bg-black p-6 sm:p-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop"
                  alt="Women's Collection"
                  className="absolute top-0 right-0 h-full w-full object-cover opacity-60"
                />
                <div className="relative z-10 flex w-full flex-col gap-4 font-poppins text-white">
                  <h3 className="text-2xl font-semibold font-inter tracking-wider">
                    Women&apos;s Collections
                  </h3>
                  <p className="text-sm font-light max-w-[255px]">
                    Featured woman collections that give you another vibe.
                  </p>
                  <button className="w-fit border-b border-white pb-1 font-medium hover:opacity-80 transition-opacity">
                    Shop Now
                  </button>
                </div>
              </div>

              {/* Bottom Half - Two Columns */}
              <div className="grid min-h-[280px] flex-1 grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
                <div className="relative flex min-h-[240px] items-end justify-center overflow-hidden rounded-sm bg-black p-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=600&auto=format&fit=crop"
                    alt="Speakers"
                    className="absolute top-0 w-full h-full object-cover opacity-80"
                  />
                  <div className="relative z-10 flex w-full flex-col gap-2 font-poppins text-white">
                    <h3 className="text-2xl font-semibold font-inter tracking-wider">
                      Speakers
                    </h3>
                    <p className="text-sm font-light text-gray-300">
                      Amazon wireless speakers
                    </p>
                    <button className="w-fit border-b border-white pb-1 font-medium hover:opacity-80 transition-opacity mt-1">
                      Shop Now
                    </button>
                  </div>
                </div>
                <div className="relative flex min-h-[240px] items-end justify-center overflow-hidden rounded-sm bg-black p-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=600&auto=format&fit=crop"
                    alt="Perfume"
                    className="absolute top-0 w-full h-full object-cover opacity-80"
                  />
                  <div className="relative z-10 flex w-full flex-col gap-2 font-poppins text-white">
                    <h3 className="text-2xl font-semibold font-inter tracking-wider">
                      Perfume
                    </h3>
                    <p className="text-sm font-light text-gray-300">
                      GUCCI INTENSE OUD EDP
                    </p>
                    <button className="w-fit border-b border-white pb-1 font-medium hover:opacity-80 transition-opacity mt-1">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <Features />
      </main>
      <Footer />
    </div>
  );
}
