"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      if (data.user?.role === "admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/";
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow flex flex-col lg:flex-row items-center mb-10 mt-10 gap-10 lg:gap-20">
        
        {/* Left Side - Image (Flush Left) */}
        <div className="w-full lg:w-[55%] xl:w-[805px] bg-[#CBE4E8] rounded-tr-sm rounded-br-sm flex items-end justify-center pt-16 lg:h-[781px] overflow-hidden">
          <Image 
            src="/signup.svg" 
            alt="Log in illustration" 
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
                Log in to Exclusive
              </h1>
              <p className="text-black text-base font-normal font-poppins">
                Enter your details below
              </p>
            </div>

            <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-10">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-b border-black/50 pb-2 text-base font-normal font-poppins text-black placeholder:text-black/40 focus:outline-none focus:border-black transition-colors bg-transparent"
                  required
                />

                <input 
                  type="password" 
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full border-b border-black/50 pb-2 text-base font-normal font-poppins text-black placeholder:text-black/40 focus:outline-none focus:border-black transition-colors bg-transparent"
                  required
                />
              </div>
              
              {error && <p className="text-red-500 text-sm font-poppins">{error}</p>}

              <div className="flex items-center justify-between mt-2">
                <button 
                  type="submit"
                  disabled={loading}
                  className="bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white text-base font-medium font-poppins py-4 px-12 rounded-sm transition-colors"
                >
                  {loading ? "Logging in..." : "Log In"}
                </button>
                
                <Link 
                  href="/forgot-password" 
                  className="text-red-500 text-base font-normal font-poppins hover:underline transition-all"
                >
                  Forget Password?
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
