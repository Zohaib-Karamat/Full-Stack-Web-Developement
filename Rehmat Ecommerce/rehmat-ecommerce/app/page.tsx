import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";
import { MoveLeft, MoveRight, Smartphone, Monitor, Watch, Camera, Headphones, Gamepad, Truck, HeadphonesIcon, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col gap-24 pb-24">
        
        {/* Flash Sales Section */}
        <section className="border-b border-gray-200 pb-16">
          <SectionHeading 
            subtitle="Today's" 
            title="Flash Sales"
            actionButton={
              <div className="flex gap-2">
                <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200"><MoveLeft className="w-5 h-5"/></button>
                <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200"><MoveRight className="w-5 h-5"/></button>
              </div>
            }
          >
            {/* Countdown timer mockup */}
            <div className="flex items-center gap-4 text-black mb-1">
              <div className="flex flex-col items-center">
                <span className="text-xs font-medium font-poppins">Days</span>
                <span className="text-3xl font-bold font-inter tracking-wider">03</span>
              </div>
              <span className="text-red-500 text-3xl font-bold mb-1">:</span>
              <div className="flex flex-col items-center">
                <span className="text-xs font-medium font-poppins">Hours</span>
                <span className="text-3xl font-bold font-inter tracking-wider">23</span>
              </div>
              <span className="text-red-500 text-3xl font-bold mb-1">:</span>
              <div className="flex flex-col items-center">
                <span className="text-xs font-medium font-poppins">Minutes</span>
                <span className="text-3xl font-bold font-inter tracking-wider">19</span>
              </div>
              <span className="text-red-500 text-3xl font-bold mb-1">:</span>
              <div className="flex flex-col items-center">
                <span className="text-xs font-medium font-poppins">Seconds</span>
                <span className="text-3xl font-bold font-inter tracking-wider">56</span>
              </div>
            </div>
          </SectionHeading>
          
          <div className="flex gap-7 overflow-x-auto pb-4 scrollbar-hide snap-x">
            <div className="snap-start"><ProductCard title="HAVIT HV-G92 Gamepad" price={120} originalPrice={160} discountPercentage={40} rating={5} reviewCount={88} imageUrl="https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=600&auto=format&fit=crop" /></div>
            <div className="snap-start"><ProductCard title="AK-900 Wired Keyboard" price={960} originalPrice={1160} discountPercentage={35} rating={4} reviewCount={75} imageUrl="https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=600&auto=format&fit=crop" /></div>
            <div className="snap-start"><ProductCard title="IPS LCD Gaming Monitor" price={370} originalPrice={400} discountPercentage={30} rating={5} reviewCount={99} imageUrl="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=600&auto=format&fit=crop" /></div>
            <div className="snap-start"><ProductCard title="S-Series Comfort Chair" price={375} originalPrice={400} discountPercentage={25} rating={4.5} reviewCount={99} imageUrl="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=600&auto=format&fit=crop" /></div>
          </div>
          <div className="flex justify-center mt-12">
            <button className="bg-red-500 text-white px-12 py-4 rounded-sm font-poppins font-medium hover:bg-red-600 transition-colors">
              View All Products
            </button>
          </div>
        </section>

        {/* Categories Section */}
        <section className="border-b border-gray-200 pb-16">
          <SectionHeading 
            subtitle="Categories" 
            title="Browse By Category"
            actionButton={
              <div className="flex gap-2">
                <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200"><MoveLeft className="w-5 h-5"/></button>
                <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200"><MoveRight className="w-5 h-5"/></button>
              </div>
            }
          />
          <div className="flex gap-7 overflow-x-auto pb-4 scrollbar-hide snap-x">
            <div className="snap-start"><CategoryCard icon={<Smartphone />} label="Phones" /></div>
            <div className="snap-start"><CategoryCard icon={<Monitor />} label="Computers" /></div>
            <div className="snap-start"><CategoryCard icon={<Watch />} label="SmartWatch" /></div>
            <div className="snap-start"><CategoryCard icon={<Camera />} label="Camera" isActive /></div>
            <div className="snap-start"><CategoryCard icon={<Headphones />} label="HeadPhones" /></div>
            <div className="snap-start"><CategoryCard icon={<Gamepad />} label="Gaming" /></div>
          </div>
        </section>

        {/* Best Selling Section */}
        <section>
          <SectionHeading 
            subtitle="This Month" 
            title="Best Selling Products"
            actionButton={
              <button className="bg-red-500 text-white px-12 py-4 rounded-sm font-poppins font-medium hover:bg-red-600 transition-colors">
                View All
              </button>
            }
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            <ProductCard title="The north coat" price={260} originalPrice={360} rating={5} reviewCount={65} imageUrl="https://images.unsplash.com/photo-1539533018447-63fcce26154c?q=80&w=600&auto=format&fit=crop" />
            <ProductCard title="Gucci duffle bag" price={960} originalPrice={1160} rating={4.5} reviewCount={65} imageUrl="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600&auto=format&fit=crop" />
            <ProductCard title="RGB liquid CPU Cooler" price={160} originalPrice={170} rating={4.5} reviewCount={65} imageUrl="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=600&auto=format&fit=crop" />
            <ProductCard title="Small BookSelf" price={360} rating={5} reviewCount={65} imageUrl="https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=600&auto=format&fit=crop" />
          </div>
        </section>

        {/* Promo Banner */}
        <section className="bg-black w-full min-h-[500px] flex flex-col-reverse md:flex-row items-center p-8 md:p-14 overflow-hidden relative mt-10">
          <div className="absolute inset-0 z-0">
            {/* Faded blur effect */}
            <div className="absolute left-[30%] w-[500px] h-[500px] bg-white opacity-[0.05] rounded-full blur-[100px]"></div>
          </div>
          
          <div className="z-10 flex flex-col gap-8 w-full md:w-1/2">
            <span className="text-[#00ff66] font-semibold font-poppins text-base">Categories</span>
            <h2 className="text-white text-5xl font-semibold font-inter leading-[60px] tracking-widest max-w-[400px]">
              Enhance Your Music Experience
            </h2>
            
            {/* Circular countdown */}
            <div className="flex gap-6 mt-4">
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
            
            <button className="bg-[#00ff66] text-black w-fit px-10 py-4 rounded-sm font-poppins font-medium hover:bg-green-500 transition-colors mt-2">
              Buy Now!
            </button>
          </div>
          
          <div className="z-10 w-full md:w-1/2 flex justify-center pb-10 md:pb-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=800&auto=format&fit=crop" alt="JBL Speaker" className="object-contain max-h-[350px] w-auto" />
          </div>
        </section>

        {/* Explore Our Products Section */}
        <section>
          <SectionHeading 
            subtitle="Our Products" 
            title="Explore Our Products"
            actionButton={
              <div className="flex gap-2">
                <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200"><MoveLeft className="w-5 h-5"/></button>
                <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200"><MoveRight className="w-5 h-5"/></button>
              </div>
            }
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 gap-y-12">
            <ProductCard title="Breed Dry Dog Food" price={100} rating={3} reviewCount={35} imageUrl="https://images.unsplash.com/photo-1589924691995-400dc9cecb58?q=80&w=600&auto=format&fit=crop" />
            <ProductCard title="CANON EOS DSLR Camera" price={360} rating={4} reviewCount={95} imageUrl="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop" />
            <ProductCard title="ASUS FHD Gaming Laptop" price={700} rating={5} reviewCount={325} imageUrl="https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=600&auto=format&fit=crop" />
            <ProductCard title="Curology Product Set" price={500} rating={4} reviewCount={145} imageUrl="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop" />
            <ProductCard title="Kids Electric Car" price={960} rating={5} reviewCount={65} isNew imageUrl="https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&w=600&auto=format&fit=crop" />
            <ProductCard title="Jr. Zoom Soccer Cleats" price={1160} rating={5} reviewCount={35} imageUrl="https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=600&auto=format&fit=crop" />
            <ProductCard title="GP11 Shooter USB Gamepad" price={660} rating={4.5} reviewCount={55} isNew imageUrl="https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=600&auto=format&fit=crop" />
            <ProductCard title="Quilted Satin Jacket" price={660} rating={4.5} reviewCount={55} imageUrl="https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&auto=format&fit=crop" />
          </div>
          <div className="flex justify-center mt-12">
            <button className="bg-red-500 text-white px-12 py-4 rounded-sm font-poppins font-medium hover:bg-red-600 transition-colors">
              View All Products
            </button>
          </div>
        </section>

        {/* New Arrival Section */}
        <section>
          <SectionHeading subtitle="Featured" title="New Arrival" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-auto md:h-[600px]">
            {/* PS5 - Large Left */}
            <div className="bg-black relative rounded-sm flex items-end justify-center p-8 overflow-hidden min-h-[300px] md:min-h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=600&auto=format&fit=crop" alt="PlayStation 5" className="absolute top-0 w-full h-full object-cover opacity-80" />
              <div className="relative z-10 w-full text-white font-poppins flex flex-col gap-4">
                <h3 className="text-2xl font-semibold font-inter tracking-wider">PlayStation 5</h3>
                <p className="text-sm font-light max-w-[242px]">Black and White version of the PS5 coming out on sale.</p>
                <button className="w-fit border-b border-white pb-1 font-medium hover:opacity-80 transition-opacity">Shop Now</button>
              </div>
            </div>

            {/* Right Side Grid */}
            <div className="flex flex-col gap-8 h-full">
              {/* Women's Collection - Top Half */}
              <div className="bg-black relative rounded-sm flex items-end p-8 overflow-hidden flex-1 min-h-[280px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop" alt="Women's Collection" className="absolute top-0 right-0 h-full w-full object-cover opacity-60" />
                <div className="relative z-10 w-full text-white font-poppins flex flex-col gap-4">
                  <h3 className="text-2xl font-semibold font-inter tracking-wider">Women&apos;s Collections</h3>
                  <p className="text-sm font-light max-w-[255px]">Featured woman collections that give you another vibe.</p>
                  <button className="w-fit border-b border-white pb-1 font-medium hover:opacity-80 transition-opacity">Shop Now</button>
                </div>
              </div>

              {/* Bottom Half - Two Columns */}
              <div className="grid grid-cols-2 gap-8 flex-1 min-h-[280px]">
                <div className="bg-black relative rounded-sm flex items-end justify-center p-6 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=600&auto=format&fit=crop" alt="Speakers" className="absolute top-0 w-full h-full object-cover opacity-80" />
                  <div className="relative z-10 w-full text-white font-poppins flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold font-inter tracking-wider">Speakers</h3>
                    <p className="text-sm font-light text-gray-300">Amazon wireless speakers</p>
                    <button className="w-fit border-b border-white pb-1 font-medium hover:opacity-80 transition-opacity mt-1">Shop Now</button>
                  </div>
                </div>
                <div className="bg-black relative rounded-sm flex items-end justify-center p-6 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=600&auto=format&fit=crop" alt="Perfume" className="absolute top-0 w-full h-full object-cover opacity-80" />
                  <div className="relative z-10 w-full text-white font-poppins flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold font-inter tracking-wider">Perfume</h3>
                    <p className="text-sm font-light text-gray-300">GUCCI INTENSE OUD EDP</p>
                    <button className="w-fit border-b border-white pb-1 font-medium hover:opacity-80 transition-opacity mt-1">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 pt-10">
          <div className="flex flex-col items-center gap-6">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center p-2">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                <Truck className="text-white w-10 h-10" />
              </div>
            </div>
            <div className="text-center font-poppins">
              <h4 className="font-semibold text-xl uppercase mb-2">FREE AND FAST DELIVERY</h4>
              <p className="text-sm">Free delivery for all orders over $140</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center p-2">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                <HeadphonesIcon className="text-white w-10 h-10" />
              </div>
            </div>
            <div className="text-center font-poppins">
              <h4 className="font-semibold text-xl uppercase mb-2">24/7 CUSTOMER SERVICE</h4>
              <p className="text-sm">Friendly 24/7 customer support</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center p-2">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                <ShieldCheck className="text-white w-10 h-10" />
              </div>
            </div>
            <div className="text-center font-poppins">
              <h4 className="font-semibold text-xl uppercase mb-2">MONEY BACK GUARANTEE</h4>
              <p className="text-sm">We return money within 30 days</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
