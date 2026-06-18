"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow flex flex-col lg:flex-row items-center mb-10 mt-10 gap-10 lg:gap-20">
        
        {/* Left Side - Image (Flush Left) */}
        <div className="w-full lg:w-[55%] xl:w-[805px] bg-[#CBE4E8] rounded-tr-sm rounded-br-sm flex items-end justify-center pt-16 lg:h-[781px] overflow-hidden">
          <Image 
            src="/signup.svg" 
            alt="Sign up illustration" 
            width={919} 
            height={706} 
            className="object-contain w-[90%] max-w-[800px] h-auto -ml-4 lg:-ml-10" 
            priority
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-[45%] xl:w-[635px] flex justify-center lg:justify-start px-4 lg:pl-16 xl:pl-32">
          <div className="w-full max-w-[370px] flex flex-col gap-12">
            
            <div className="flex flex-col gap-6">
              <h1 className="text-black text-4xl font-medium font-inter tracking-wider">
                Create an account
              </h1>
              <p className="text-black text-base font-normal font-poppins">
                Enter your details below
              </p>
            </div>

            <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-10">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name"
                  className="w-full border-b border-black/50 pb-2 text-base font-normal font-poppins text-black placeholder:text-black/40 focus:outline-none focus:border-black transition-colors bg-transparent"
                  required
                />
                
                <input 
                  type="text" 
                  name="emailOrPhone"
                  placeholder="Email or Phone Number"
                  className="w-full border-b border-black/50 pb-2 text-base font-normal font-poppins text-black placeholder:text-black/40 focus:outline-none focus:border-black transition-colors bg-transparent"
                  required
                />

                <input 
                  type="password" 
                  name="password"
                  placeholder="Password"
                  className="w-full border-b border-black/50 pb-2 text-base font-normal font-poppins text-black placeholder:text-black/40 focus:outline-none focus:border-black transition-colors bg-transparent"
                  required
                />
              </div>

              <div className="flex flex-col gap-4 mt-2">
                <button 
                  type="button"
                  className="w-full bg-red-500 hover:bg-red-600 text-white text-base font-medium font-poppins py-4 rounded-sm transition-colors"
                >
                  Create Account
                </button>
                  
                  <button 
                    type="button"
                    className="w-full bg-transparent border border-black/40 hover:bg-gray-50 text-black text-base font-normal font-poppins py-4 rounded-sm transition-colors flex items-center justify-center gap-4"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.52 12.2727C23.52 11.4218 23.4436 10.6036 23.3018 9.81818H12V14.46H18.4582C18.18 15.96 17.3291 17.2364 16.0527 18.0873V21.1091H19.9364C22.2055 19.0145 23.52 15.9273 23.52 12.2727Z" fill="#4285F4"/>
                      <path d="M12 24C15.24 24 17.9564 22.92 19.9364 21.1091L16.0527 18.0873C14.9836 18.8073 13.6091 19.2327 12 19.2327C8.87455 19.2327 6.22909 17.1273 5.27455 14.3H1.27636V17.3891C3.25091 21.3164 7.30909 24 12 24Z" fill="#34A853"/>
                      <path d="M5.27455 14.3C5.03455 13.58 4.89818 12.8055 4.89818 12C4.89818 11.1945 5.03455 10.42 5.27455 9.7V6.61091H1.27636C0.463636 8.23091 0 10.0636 0 12C0 13.9364 0.463636 15.7691 1.27636 17.3891L5.27455 14.3Z" fill="#FBBC05"/>
                      <path d="M12 4.76727C13.7673 4.76727 15.3491 5.37818 16.5927 6.56727L20.0236 3.13636C17.9455 1.18909 15.24 0 12 0C7.30909 0 3.25091 2.68364 1.27636 6.61091L5.27455 9.7C6.22909 6.87273 8.87455 4.76727 12 4.76727Z" fill="#EA4335"/>
                    </svg>
                    Sign up with Google
                  </button>
                </div>

                <div className="flex items-center justify-center gap-4 mt-4">
                  <span className="text-black/70 text-base font-normal font-poppins">
                    Already have account?
                  </span>
                  <Link 
                    href="/login" 
                    className="text-black text-base font-medium font-poppins border-b border-black/50 pb-[2px] hover:text-red-500 hover:border-red-500 transition-colors"
                  >
                    Log in
                  </Link>
                </div>
              </form>

            </div>
          </div>


      </main>

      <Footer />
    </div>
  );
}
