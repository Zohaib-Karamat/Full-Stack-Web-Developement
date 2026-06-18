import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const inputClass =
  "h-12 w-full rounded-sm bg-neutral-100 px-4 font-poppins text-sm text-black outline-none placeholder:text-black/50 focus:ring-1 focus:ring-primary/50";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:py-16 lg:px-8">
          <nav className="mb-10 flex items-center gap-3 font-poppins text-sm sm:mb-16">
            <Link href="/" className="text-black/50 transition-colors hover:text-black">
              Home
            </Link>
            <span className="text-black/50">/</span>
            <span className="text-black">Contact</span>
          </nav>

          <section className="grid gap-8 lg:grid-cols-[340px_1fr]">
            <aside className="rounded-sm bg-white px-6 py-8 shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] sm:px-9 sm:py-10">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-white">
                      <Phone className="h-5 w-5" />
                    </span>
                    <h2 className="font-poppins text-base font-medium text-black">Call To Us</h2>
                  </div>

                  <div className="flex flex-col gap-4 font-poppins text-sm leading-5 text-black">
                    <p>We are available 24/7, 7 days a week.</p>
                    <p>Phone: +8801611112222</p>
                  </div>
                </div>

                <div className="h-px w-full bg-black/30" />

                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-white">
                      <Mail className="h-5 w-5" />
                    </span>
                    <h2 className="font-poppins text-base font-medium text-black">Write To Us</h2>
                  </div>

                  <div className="flex flex-col gap-4 font-poppins text-sm leading-5 text-black">
                    <p>Fill out our form and we will contact you within 24 hours.</p>
                    <p>Emails: customer@exclusive.com</p>
                    <p>Emails: support@exclusive.com</p>
                  </div>
                </div>
              </div>
            </aside>

            <section className="rounded-sm bg-white px-4 py-8 shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] sm:px-8 sm:py-10">
              <form className="flex flex-col gap-8">
                <div className="grid gap-4 md:grid-cols-3">
                  <input className={inputClass} type="text" placeholder="Your Name *" aria-label="Your Name" />
                  <input className={inputClass} type="email" placeholder="Your Email *" aria-label="Your Email" />
                  <input className={inputClass} type="tel" placeholder="Your Phone *" aria-label="Your Phone" />
                </div>

                <textarea
                  className="min-h-52 w-full resize-y rounded-sm bg-neutral-100 px-4 py-3 font-poppins text-sm text-black outline-none placeholder:text-black/50 focus:ring-1 focus:ring-primary/50"
                  placeholder="Your Message"
                  aria-label="Your Message"
                />

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="rounded-sm bg-primary px-12 py-4 font-poppins text-base font-medium text-neutral-50 transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </section>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
