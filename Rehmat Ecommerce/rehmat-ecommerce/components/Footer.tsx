import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-16 w-full bg-black pb-6 pt-14 text-white sm:mt-24 sm:pt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8 lg:px-8">
        
        {/* Column 1 */}
        <div className="flex flex-col gap-4 font-poppins text-sm">
          <Link href="/" className="mb-2 bg-white rounded-md w-fit p-1">
            <Image src="/logo.png" alt="Rehmat Ecom Logo" width={100} height={100} className="object-contain w-20 sm:w-24" />
          </Link>
          <p className="font-medium text-base mb-1">Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="relative mt-1">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent border border-white rounded-sm py-3 pl-4 pr-12 w-full focus:outline-none placeholder-gray-400"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 font-poppins text-sm">
          <h3 className="font-medium text-lg font-inter mb-2">Support</h3>
          <p className="max-w-[175px]">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4 font-poppins text-sm">
          <h3 className="font-medium text-lg font-inter mb-2">Account</h3>
          <Link href="/account" className="hover:opacity-80">My Account</Link>
          <Link href="/login" className="hover:opacity-80">Login / Register</Link>
          <Link href="/cart" className="hover:opacity-80">Cart</Link>
          <Link href="/wishlist" className="hover:opacity-80">Wishlist</Link>
          <Link href="/shop" className="hover:opacity-80">Shop</Link>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-4 font-poppins text-sm">
          <h3 className="font-medium text-lg font-inter mb-2">Quick Link</h3>
          <Link href="/privacy" className="hover:opacity-80">Privacy Policy</Link>
          <Link href="/terms" className="hover:opacity-80">Terms Of Use</Link>
          <Link href="/faq" className="hover:opacity-80">FAQ</Link>
          <Link href="/contact" className="hover:opacity-80">Contact</Link>
        </div>

        {/* Column 5 */}
        <div className="flex flex-col gap-3 font-poppins text-sm">
          <h3 className="mb-1 font-inter text-lg font-medium">Download App</h3>
          <p className="text-[11px] font-medium text-white/60">Save $3 with App New User Only</p>

          <div className="flex items-center gap-2">
            <div aria-label="Dummy QR code" className="grid h-[76px] w-[76px] grid-cols-5 grid-rows-5 gap-1 bg-white p-1">
              {Array.from({ length: 25 }).map((_, index) => (
                <span
                  key={index}
                  className={[
                    0, 1, 3, 4, 5, 7, 9, 10, 11, 13, 15, 16, 18, 19, 20, 22, 24,
                  ].includes(index) ? "bg-black" : "bg-white"}
                />
              ))}
            </div>

            <div className="flex h-[76px] flex-col justify-between">
              <a href="#" className="flex h-[34px] w-[110px] items-center gap-2 rounded border border-white/70 bg-black px-2 text-white">
                <span className="grid h-5 w-5 place-items-center rounded-sm border border-white/50 text-[10px]">▶</span>
                <span className="leading-none">
                  <span className="block text-[7px]">GET IT ON</span>
                  <span className="block text-[12px] font-semibold">Google Play</span>
                </span>
              </a>
              <a href="#" className="flex h-[34px] w-[110px] items-center gap-2 rounded border border-white/70 bg-black px-2 text-white">
                <span className="text-lg leading-none">●</span>
                <span className="leading-none">
                  <span className="block text-[7px]">Download on the</span>
                  <span className="block text-[12px] font-semibold">App Store</span>
                </span>
              </a>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-6 text-white">
            <a href="#" aria-label="Facebook" className="text-lg leading-none hover:text-red-400">f</a>
            <a href="#" aria-label="Twitter" className="text-lg leading-none hover:text-red-400">𝕏</a>
            <a href="#" aria-label="Instagram" className="grid h-5 w-5 place-items-center rounded-md border border-white text-xs hover:text-red-400">◎</a>
            <a href="#" aria-label="LinkedIn" className="text-sm font-semibold leading-none hover:text-red-400">in</a>
          </div>
        </div>

      </div>
      <div className="mt-12 flex w-full items-center justify-center border-t border-gray-800 px-4 pt-6 text-center opacity-40 sm:mt-16">
        <p className="font-poppins text-sm">© Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
}
