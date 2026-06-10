import Navbar from '../components/layout/Navbar'
import Clients from '../components/sections/Clients'
import Community from '../components/sections/Community'
import BlogSection from '../components/sections/BlogSection'
import FooterDesign from '../components/sections/FooterDesign'
import Hero from '../components/sections/Hero'
import Pixelgrade from '../components/sections/Pixelgrade'
import Stats from '../components/sections/Stats'
import CtaFooter from '../components/sections/CtaFooter'

export default function LandingPage() {
  return (
    <div className="min-h-svh bg-white">
      <Navbar />
      <Hero />
      <Clients />
      <Community />
      <Pixelgrade />
      <Stats />
      
      <BlogSection />
      <CtaFooter />
    </div>
  )
}
