import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Image from "next/image";
import Link from "next/link";
import { 
  Store, 
  CircleDollarSign, 
  ShoppingBag, 
  Coins, 
  AtSign,
  Camera,
  Briefcase
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />

      <main className="flex-grow pb-20">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-10 sm:py-16">
          <div className="flex items-center gap-3 text-sm font-poppins">
            <Link href="/" className="text-black/50 hover:text-black transition-colors">
              Home
            </Link>
            <span className="text-black/50">/</span>
            <span className="text-black">About</span>
          </div>
        </div>

        {/* Our Story Section */}
        <section className="w-full flex flex-col lg:flex-row items-center justify-between mb-24 lg:mb-32">
          {/* Left Text */}
          <div className="w-full lg:w-1/2 px-4 lg:pl-8 xl:pl-[135px] lg:pr-16 flex flex-col gap-10 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl font-semibold font-inter tracking-wider text-black">
              Our Story
            </h1>
            <div className="flex flex-col gap-6 text-black font-poppins text-base font-normal leading-6">
              <p className="max-w-[525px]">
                Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 millions customers across the region.
              </p>
              <p className="max-w-[505px]">
                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assortment in categories ranging from consumer.
              </p>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="w-full lg:w-1/2 lg:pl-10">
            <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-pink-400 rounded-tl-sm rounded-bl-sm overflow-hidden relative">
              <Image 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop" 
                alt="Two women shopping with bags" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Statistics Grid */}
        <section className="mx-auto max-w-7xl px-4 lg:px-8 mb-24 lg:mb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center gap-6 p-8 border border-black/30 rounded-sm hover:bg-red-500 hover:text-white hover:border-transparent transition-all duration-300 group cursor-pointer">
              <div className="w-20 h-20 bg-black/30 rounded-full flex items-center justify-center p-2 group-hover:bg-white/30 transition-colors">
                <div className="w-full h-full bg-black group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
                  <Store className="w-8 h-8 text-white group-hover:text-black transition-colors" />
                </div>
              </div>
              <div className="text-center flex flex-col gap-3">
                <h3 className="text-3xl font-bold font-inter tracking-wider">10.5k</h3>
                <p className="text-base font-normal font-poppins group-hover:text-white text-black transition-colors">Sellers active our site</p>
              </div>
            </div>

            {/* Stat 2 (Active state example) */}
            <div className="flex flex-col items-center justify-center gap-6 p-8 bg-red-500 text-white rounded-sm shadow-[0px_2px_10px_2px_rgba(0,0,0,0.20)] transition-all duration-300 group cursor-pointer">
              <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center p-2">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <CircleDollarSign className="w-8 h-8 text-black" />
                </div>
              </div>
              <div className="text-center flex flex-col gap-2">
                <h3 className="text-3xl font-bold font-inter tracking-wider">33k</h3>
                <p className="text-base font-normal font-poppins">Monthly Product Sale</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center gap-6 p-8 border border-black/30 rounded-sm hover:bg-red-500 hover:text-white hover:border-transparent transition-all duration-300 group cursor-pointer">
              <div className="w-20 h-20 bg-black/30 rounded-full flex items-center justify-center p-2 group-hover:bg-white/30 transition-colors">
                <div className="w-full h-full bg-black group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
                  <ShoppingBag className="w-8 h-8 text-white group-hover:text-black transition-colors" />
                </div>
              </div>
              <div className="text-center flex flex-col gap-3">
                <h3 className="text-3xl font-bold font-inter tracking-wider">45.5k</h3>
                <p className="text-base font-normal font-poppins group-hover:text-white text-black transition-colors">Customer active in our site</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center justify-center gap-6 p-8 border border-black/30 rounded-sm hover:bg-red-500 hover:text-white hover:border-transparent transition-all duration-300 group cursor-pointer">
              <div className="w-20 h-20 bg-black/30 rounded-full flex items-center justify-center p-2 group-hover:bg-white/30 transition-colors">
                <div className="w-full h-full bg-black group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
                  <Coins className="w-8 h-8 text-white group-hover:text-black transition-colors" />
                </div>
              </div>
              <div className="text-center flex flex-col gap-3">
                <h3 className="text-3xl font-bold font-inter tracking-wider">25k</h3>
                <p className="text-base font-normal font-poppins group-hover:text-white text-black transition-colors">Annual gross sale in our site</p>
              </div>
            </div>

          </div>
        </section>

        {/* Team Grid */}
        <section className="mx-auto max-w-7xl px-4 lg:px-8 mb-24 lg:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            
            {/* Team Member 1 */}
            <div className="flex flex-col items-start gap-8">
              <div className="w-full h-[350px] sm:h-[430px] bg-neutral-100 rounded-sm overflow-hidden relative flex items-end justify-center">
                <Image 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" 
                  alt="Tom Cruise" 
                  width={300}
                  height={400}
                  className="object-cover w-[80%] h-[90%]"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[32px] font-medium font-inter tracking-wider text-black">Tom Cruise</h3>
                  <p className="text-base font-normal font-poppins text-black">Founder & Chairman</p>
                </div>
                <div className="flex items-center gap-4">
                  <Link href="#" className="hover:text-red-500 transition-colors"><AtSign className="w-5 h-5 text-black hover:text-red-500 transition-colors" /></Link>
                  <Link href="#" className="hover:text-red-500 transition-colors"><Camera className="w-5 h-5 text-black hover:text-red-500 transition-colors" /></Link>
                  <Link href="#" className="hover:text-red-500 transition-colors"><Briefcase className="w-5 h-5 text-black hover:text-red-500 transition-colors" /></Link>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-start gap-8">
              <div className="w-full h-[350px] sm:h-[430px] bg-neutral-100 rounded-sm overflow-hidden relative flex items-end justify-center">
                <Image 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
                  alt="Emma Watson" 
                  width={300}
                  height={400}
                  className="object-cover w-[80%] h-[90%]"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[32px] font-medium font-inter tracking-wider text-black">Emma Watson</h3>
                  <p className="text-base font-normal font-poppins text-black">Managing Director</p>
                </div>
                <div className="flex items-center gap-4">
                  <Link href="#" className="hover:text-red-500 transition-colors"><AtSign className="w-5 h-5 text-black hover:text-red-500 transition-colors" /></Link>
                  <Link href="#" className="hover:text-red-500 transition-colors"><Camera className="w-5 h-5 text-black hover:text-red-500 transition-colors" /></Link>
                  <Link href="#" className="hover:text-red-500 transition-colors"><Briefcase className="w-5 h-5 text-black hover:text-red-500 transition-colors" /></Link>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-start gap-8">
              <div className="w-full h-[350px] sm:h-[430px] bg-neutral-100 rounded-sm overflow-hidden relative flex items-end justify-center">
                <Image 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop" 
                  alt="Will Smith" 
                  width={300}
                  height={400}
                  className="object-cover w-[80%] h-[90%]"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[32px] font-medium font-inter tracking-wider text-black">Will Smith</h3>
                  <p className="text-base font-normal font-poppins text-black">Product Designer</p>
                </div>
                <div className="flex items-center gap-4">
                  <Link href="#" className="hover:text-red-500 transition-colors"><AtSign className="w-5 h-5 text-black hover:text-red-500 transition-colors" /></Link>
                  <Link href="#" className="hover:text-red-500 transition-colors"><Camera className="w-5 h-5 text-black hover:text-red-500 transition-colors" /></Link>
                  <Link href="#" className="hover:text-red-500 transition-colors"><Briefcase className="w-5 h-5 text-black hover:text-red-500 transition-colors" /></Link>
                </div>
              </div>
            </div>

          </div>

          {/* Pagination dots */}
          <div className="flex items-center justify-center gap-3">
            <button className="w-3 h-3 rounded-full bg-black/30 hover:bg-black transition-colors" aria-label="Page 1"></button>
            <button className="w-3 h-3 rounded-full bg-black/30 hover:bg-black transition-colors" aria-label="Page 2"></button>
            <button className="w-3.5 h-3.5 rounded-full border-2 border-black/30 flex items-center justify-center p-[2px]" aria-label="Page 3 (Active)">
              <div className="w-full h-full rounded-full bg-red-500"></div>
            </button>
            <button className="w-3 h-3 rounded-full bg-black/30 hover:bg-black transition-colors" aria-label="Page 4"></button>
            <button className="w-3 h-3 rounded-full bg-black/30 hover:bg-black transition-colors" aria-label="Page 5"></button>
          </div>
        </section>

        {/* Reusable Features Section */}
        <div className="mx-auto max-w-7xl px-4 lg:px-8 mt-10">
          <Features />
        </div>

      </main>

      <Footer />
    </div>
  );
}
