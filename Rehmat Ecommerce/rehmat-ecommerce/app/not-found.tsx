import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header />

      <main className="flex-1">
        <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-10 sm:py-16 lg:px-8">
          <nav className="flex items-center gap-3 font-poppins text-sm">
            <Link href="/" className="text-black/50 transition-colors hover:text-black">
              Home
            </Link>
            <span className="text-black/50">/</span>
            <span className="text-black">404 Error</span>
          </nav>

          <section className="flex min-h-[360px] flex-col items-center justify-center gap-10 py-16 text-center sm:min-h-[450px] sm:py-20">
            <div className="flex flex-col items-center gap-6">
              <h1 className="font-inter text-5xl font-medium tracking-[1.5px] text-black sm:text-7xl lg:text-[110px] lg:leading-[1.05] lg:tracking-[3.3px]">
                404 Not Found
              </h1>
              <p className="font-poppins text-base font-normal leading-6 text-black">
                Your visited page not found. You may go home page.
              </p>
            </div>

            <Link
              href="/"
              className="rounded-sm bg-primary px-12 py-4 font-poppins text-base font-medium leading-6 text-neutral-50 transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2"
            >
              Back to home page
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
