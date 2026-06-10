export default function FooterDesign() {
  return (
    <section className="w-full bg-gray-800 px-6 py-11 text-slate-50">
      <div className="mx-auto flex w-full max-w-[1002px] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-1.5">
            <div className="relative h-5 w-8">
              <div className="absolute left-[5.64px] top-[10.59px] h-2.5 w-3 bg-white" />
              <div className="absolute left-[18.35px] top-0 h-2.5 w-3 bg-white" />
              <div className="absolute left-0 top-0 h-2 w-2.5 bg-green-500" />
              <div className="absolute left-[6.34px] top-[0.78px] h-2 w-2.5 bg-green-500" />
              <div className="absolute left-[12.61px] top-[11.56px] h-2 w-2.5 bg-green-500" />
              <div className="absolute left-[19.16px] top-[11.01px] h-2 w-2.5 bg-green-500" />
            </div>
            <div className="h-4 w-24 rounded bg-white" />
          </div>

          <div className="flex flex-col gap-1.5 text-[9.74px] leading-3 text-slate-50">
            <div>Copyright © 2020 Landify UI Kit.</div>
            <div>All rights reserved</div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 rounded-full bg-white/10">
              <div className="absolute left-[5.2px] top-[5.2px] h-3 w-3 rounded-full bg-white" />
            </div>
            <div className="relative h-8 w-8 rounded-full bg-white/10">
              <div className="absolute left-[5.2px] top-[5.2px] h-3 w-3 rounded-full bg-white" />
            </div>
            <div className="relative h-8 w-8 rounded-full bg-white/10">
              <div className="absolute left-[5.57px] top-[6.68px] h-2.5 w-2.5 rounded-full bg-white" />
            </div>
            <div className="relative h-8 w-8 rounded-full bg-white/10">
              <div className="absolute left-[5.2px] top-[7.05px] h-2 w-3 rounded bg-white" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row lg:gap-10">
          <div className="flex flex-col gap-4">
            <div className="text-sm font-semibold text-white">Company</div>
            <div className="space-y-2 text-[9.74px] leading-3 text-slate-50">
              <div>About us</div>
              <div>Blog</div>
              <div>Contact us</div>
              <div>Pricing</div>
              <div>Testimonials</div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-sm font-semibold text-white">Support</div>
            <div className="space-y-2 text-[9.74px] leading-3 text-slate-50">
              <div>Help center</div>
              <div>Terms of service</div>
              <div>Legal</div>
              <div>Privacy policy</div>
              <div>Status</div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-sm font-semibold text-white">Stay up to date</div>
            <div className="h-7 w-44 rounded-md bg-white/20" />
            <div className="h-7 w-7 rounded-full bg-white/20" />
            <div className="text-[9.74px] leading-3 text-gray-300">Your email address</div>
          </div>
        </div>
      </div>
    </section>
  )
}
