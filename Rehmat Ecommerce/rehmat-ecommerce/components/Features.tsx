import { Truck, HeadphonesIcon, ShieldCheck } from "lucide-react";

export default function Features() {
  return (
    <section className="mt-24 sm:mt-0 grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-20">
      <div className="flex flex-col items-center gap-6">
        <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center p-2">
          <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
            <Truck className="text-white w-10 h-10" />
          </div>
        </div>
        <div className="text-center font-poppins">
          <h4 className="font-semibold text-xl uppercase mb-2">
            FREE AND FAST DELIVERY
          </h4>
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
          <h4 className="font-semibold text-xl uppercase mb-2">
            24/7 CUSTOMER SERVICE
          </h4>
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
          <h4 className="font-semibold text-xl uppercase mb-2">
            MONEY BACK GUARANTEE
          </h4>
          <p className="text-sm">We return money within 30 days</p>
        </div>
      </div>
    </section>
  );
}
