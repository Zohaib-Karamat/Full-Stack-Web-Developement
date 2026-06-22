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
            <img 
              src="/qrcode.png" 
              alt="QR Code" 
              width="76" 
              height="76" 
              className="h-[76px] w-[76px] bg-white p-1 object-contain" 
            />

            <div className="flex h-[80px] flex-col justify-between">
              <a href="#" className="flex transition-transform hover:scale-105">
                <Image src="/googleplay.svg" alt="Get it on Google Play" width={120} height={36} className="h-9 w-auto object-contain" />
              </a>
              <a href="#" className="flex h-[36px] w-[120px] items-center gap-2 rounded bg-gradient-to-r from-blue-500 to-indigo-600 px-2 text-white shadow-md transition-all hover:scale-105 hover:shadow-lg hover:from-blue-400 hover:to-indigo-500">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 384 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.3zM34.4 104C56.6 77.5 86.4 59.5 119.8 56c5-43.1 31.9-80.4 69.4-104.4C166.4 20.9 135 40 102.6 44.5c-5.7 42.1-32.6 78.4-68.2 100.8z"/></svg>
                <span className="leading-none text-left">
                  <span className="block text-[8px] font-medium text-white/90">Download on the</span>
                  <span className="block text-[13px] font-bold">App Store</span>
                </span>
              </a>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="flex h-9 w-9 items-center justify-center rounded-full bg-black border border-gray-700 text-white transition-transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white transition-transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A66C2] text-white transition-transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

      </div>
      <div className="mt-12 flex w-full items-center justify-center border-t border-gray-800 px-4 pt-6 text-center opacity-40 sm:mt-16">
        <p className="font-poppins text-sm">© Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
}
