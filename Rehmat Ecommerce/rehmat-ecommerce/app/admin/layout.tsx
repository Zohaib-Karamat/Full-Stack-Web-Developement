"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, Tag, ShoppingCart, Users, LogOut, ArrowLeft } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";
import Image from "next/image";

const sidebarLinks = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Products", href: "/admin/products", icon: Package },
  { name: "Categories", href: "/admin/categories", icon: Tag },
  { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { name: "Users", href: "/admin/users", icon: Users },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { signOut, user } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex-shrink-0 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-800">
          <Link href="/" className="font-inter font-bold text-xl tracking-wider text-white">
            Exclusive
            <span className="text-red-500 text-xs ml-1 align-top">ADMIN</span>
          </Link>
        </div>

        <nav className="flex-1 py-6 px-4 flex flex-col gap-2">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/admin");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors font-poppins text-sm ${
                  isActive ? "bg-red-500 text-white font-medium" : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition-colors font-poppins text-sm mb-2">
            <ArrowLeft className="w-5 h-5" />
            Back to Store
          </Link>
          <button
            onClick={signOut}
            className="flex w-full items-center gap-3 px-4 py-3 rounded-md text-gray-300 hover:bg-red-500 hover:text-white transition-colors font-poppins text-sm"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header for Mobile & Quick Actions */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
          <div className="md:hidden font-inter font-bold text-xl tracking-wider">
            Exclusive <span className="text-red-500 text-xs align-top">ADMIN</span>
          </div>
          <div className="hidden md:flex font-poppins font-semibold text-lg text-black">
            {sidebarLinks.find(l => pathname === l.href || (pathname.startsWith(l.href) && l.href !== "/admin"))?.name || "Admin Panel"}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col text-right hidden sm:flex">
              <span className="font-poppins text-sm font-medium text-black">{user?.email || "Admin User"}</span>
              <span className="font-poppins text-xs text-gray-500">Administrator</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold font-inter text-lg">
              {user?.email?.charAt(0).toUpperCase() || "A"}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
