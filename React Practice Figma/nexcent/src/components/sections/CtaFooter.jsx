function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 25" fill="none" aria-hidden="true">
      <path
        d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

import logo from '../../assets/images/logo.svg'

function SocialIcon({ type }) {
  const common = 'h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white'

  if (type === 'instagram') {
    return (
      <div className={common} aria-label="Instagram">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      </div>
    )
  }

  if (type === 'dribbble') {
    return (
      <div className={common} aria-label="Dribbble">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6 14.5c2.5 2.8 5.5 3.8 9 3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M17 6.5c-3 2.8-6 3.5-10 3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
    )
  }

  if (type === 'twitter') {
    return (
      <div className={common} aria-label="Twitter">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6 8.5c1.1.7 2.4 1.2 3.8 1.4 1.3-1.5 3.5-1.7 5.2-.4-.3.7-.8 1.3-1.4 1.6.9 0 1.7-.2 2.5-.8-.5.9-1.3 1.7-2.3 2.1-.9.4-1.9.4-2.8.1-1.2 1.5-3.1 2.3-5 2.2 0 .1 0 .2 0 .3 0 1.8 1.3 3.4 3 3.8-1 .2-2.1.2-3.1 0 1 1.7 2.8 2.8 4.8 2.8-1.6 1.2-3.6 1.8-5.6 1.8-.4 0-.8 0-1.2-.1 2 1.3 4.3 2 6.8 2" 
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    )
  }

  return (
    <div className={common} aria-label="Youtube">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 7.5h10c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M10 9.5l4 2.5-4 2.5v-5Z" fill="currentColor" />
      </svg>
    </div>
  )
}

export default function CtaFooter() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1002px] flex-col items-center gap-6 bg-slate-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <h2 className="w-full max-w-[617px] text-center text-3xl font-semibold leading-[46px] text-gray-800 sm:text-4xl md:text-5xl md:leading-[52.9px]">
          Pellentesque suscipit fringilla libero eu.
        </h2>
        <button className="inline-flex items-center justify-center gap-1.5 rounded bg-green-500 px-6 py-2.5 text-xs font-medium text-white transition hover:bg-green-600 sm:px-8 sm:text-sm">
          <span>Get a Demo</span>
          <span className="inline-flex rotate-180">
            <ArrowIcon />
          </span>
        </button>
      </div>

      <div className="w-full bg-gray-800 px-4 py-10 text-slate-50 sm:px-6 sm:py-12 lg:px-24">
        <div className="mx-auto grid w-full max-w-[1002px] gap-10 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
          <div className="flex flex-col gap-7">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Nexcent logo" className="h-10 w-auto" />
            </div>

            <div className="flex flex-col gap-1.5 text-[9.74px] leading-3 text-slate-50">
              <div>Copyright © 2020 Landify UI Kit.</div>
              <div>All rights reserved</div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <SocialIcon type="instagram" />
              <SocialIcon type="dribbble" />
              <SocialIcon type="twitter" />
              <SocialIcon type="youtube" />
            </div>
          </div>

          <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
              <div className="relative w-full max-w-[280px]">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-gray-300 focus:border-white/30 focus:outline-none focus:ring-0"
                />
                <button
                  type="button"
                  className="absolute right-1.5 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md bg-green-500 text-white"
                >
                  <svg width="12" height="12" viewBox="0 0 24 25" fill="none" aria-hidden="true">
                    <path
                      d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
