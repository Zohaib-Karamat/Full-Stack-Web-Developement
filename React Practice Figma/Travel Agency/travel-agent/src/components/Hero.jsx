import { useState } from 'react'
import './Hero.css'
import heroBackground from '../assets/bg.svg'
import heroIllustration from '../assets/hero.svg'
import Category from './Category'
import Destinations from './Destinations'
import Booking from './Booking'
import Testimonials from './Testimonials'
import Logos from './Logos'
import Subscribe from './Subscribe'
import Footer from './Footer'

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="hero-shell">
      <div className="hero-background-layer" aria-hidden="true">
        <img src={heroBackground} alt="" className="hero-background-image" />
      </div>

      <header className="hero-navbar">
        <a href="#top" className="hero-brand" aria-label="Jadoo home" onClick={closeMenu}>
          Jadoo
        </a>

        <nav className="hero-nav hero-nav-desktop" aria-label="Primary navigation">
          <a href="#destinations">Destinations</a>
          <a href="#hotels">Hotels</a>
          <a href="#flights">Flights</a>
          <a href="#bookings">Bookings</a>
        </nav>

        <div className="hero-nav-actions hero-nav-desktop-actions">
          <a href="#login" className="hero-login-link">
            Login
          </a>
          <button type="button" className="hero-signup-button">
            Sign up
          </button>
          <button type="button" className="hero-language" aria-label="Change language">
            <span>EN</span>
            <span className="hero-caret" aria-hidden="true">
              ▾
            </span>
          </button>
        </div>

        <button
          type="button"
          className="hero-menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`hero-mobile-menu${menuOpen ? ' is-open' : ''}`} id="mobile-navigation">
          <nav className="hero-nav hero-nav-mobile" aria-label="Mobile navigation">
            <a href="#destinations" onClick={closeMenu}>
              Destinations
            </a>
            <a href="#hotels" onClick={closeMenu}>
              Hotels
            </a>
            <a href="#flights" onClick={closeMenu}>
              Flights
            </a>
            <a href="#bookings" onClick={closeMenu}>
              Bookings
            </a>
          </nav>

          <div className="hero-mobile-actions">
            <a href="#login" className="hero-login-link" onClick={closeMenu}>
              Login
            </a>
            <button type="button" className="hero-signup-button">
              Sign up
            </button>
            <button type="button" className="hero-language" aria-label="Change language">
              <span>EN</span>
              <span className="hero-caret" aria-hidden="true">
                ▾
              </span>
            </button>
          </div>
        </div>
      </header>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="hero-eyebrow">BEST DESTINATIONS AROUND THE WORLD</p>

          <h1 id="hero-title" className="hero-title">
            Travel, <span className="hero-highlight">enjoy</span>
            <br />and live a new
            <br />and full life
          </h1>

          <p className="hero-description">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          <div className="hero-actions">
            <button type="button" className="hero-button hero-button-primary">
              Find out more
            </button>

            <button type="button" className="hero-button hero-button-secondary">
              <span className="hero-play-icon" aria-hidden="true">
                ▶
              </span>
              <span>Play Demo</span>
            </button>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <img src={heroIllustration} alt="" className="hero-image" />
        </div>
      </section>

      <Category />

      <Destinations />

      <Booking />

      <Testimonials />

      <Logos />

      <Subscribe />

      <Footer />
    </main>
  )
}

export default Hero