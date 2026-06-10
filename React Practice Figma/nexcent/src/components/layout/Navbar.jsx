import { useState } from 'react'
import Logo from '../ui/Logo'
import NavLinks from '../ui/NavLinks'
import Button from '../ui/Button'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white shadow-[var(--shadow-navbar)]">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-6 px-6 py-4 sm:px-12 sm:gap-8 lg:px-24">
        <Logo />

        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-1 items-center justify-end gap-6">
            <NavLinks />
            <Button showIcon>Register Now</Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-nexcent-nav transition hover:bg-slate-50 md:hidden"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-3">
            <NavLinks className="flex w-full flex-col items-center gap-3 text-sm" />
            <div className="mt-4 w-full">
              <Button className="w-full justify-center">Register Now</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
