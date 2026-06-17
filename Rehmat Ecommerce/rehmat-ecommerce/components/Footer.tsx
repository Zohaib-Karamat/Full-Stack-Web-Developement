import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-6 w-full mt-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Column 1 */}
        <div className="flex flex-col gap-4 font-poppins text-sm">
          <Link href="/" className="text-2xl font-bold font-inter tracking-wider mb-2">
            Exclusive
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
        <div className="flex flex-col gap-4 font-poppins text-sm">
          <h3 className="font-medium text-lg font-inter mb-2">Download App</h3>
          <p className="text-xs opacity-70">Save $3 with App New User Only</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-20 h-20 bg-white p-1 rounded-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://placehold.co/80x80?text=QR" alt="QR Code" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-2 h-20">
              <div className="flex-1 bg-white p-1 rounded-sm overflow-hidden flex items-center justify-center">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://placehold.co/110x30?text=Google+Play" alt="Google Play" className="max-w-full max-h-full" />
              </div>
              <div className="flex-1 bg-white p-1 rounded-sm overflow-hidden flex items-center justify-center">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://placehold.co/110x30?text=App+Store" alt="App Store" className="max-w-full max-h-full" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 mt-4">
            {/* Social Icons Placeholders */}
            <div className="w-6 h-6 border rounded-full"></div>
            <div className="w-6 h-6 border rounded-full"></div>
            <div className="w-6 h-6 border rounded-full"></div>
            <div className="w-6 h-6 border rounded-full"></div>
          </div>
        </div>

      </div>
      <div className="w-full border-t border-gray-800 mt-16 pt-6 flex justify-center items-center opacity-40">
        <p className="font-poppins text-sm">© Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
}
