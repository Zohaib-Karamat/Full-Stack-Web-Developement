import Button from '../ui/Button'
import CarouselDots from './CarouselDots'
import heroIllustration from '../../assets/images/hero-illustration.png'

export default function Hero() {
  return (
    <section className="w-full bg-nexcent-bg">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-6 py-12 sm:px-12 sm:py-16 lg:flex-row lg:items-center lg:gap-20 lg:px-24">
        <div className="inline-flex w-full flex-1 flex-col items-start justify-start gap-6 text-center sm:text-left lg:text-left">
          <div className="flex w-full flex-col items-center gap-3 sm:items-start">
            <h1 className="w-full text-4xl font-semibold leading-[48px] tracking-tight sm:text-5xl sm:leading-[52.9px]">
              <span className="block text-nexcent-dark">Lessons and insights</span>
              <span className="block text-nexcent-green">from 8 years</span>
            </h1>
            <p className="w-full max-w-xl text-xs font-normal leading-5 text-nexcent-muted sm:text-sm">
              Where to grow your business as a photographer: site or social media?
            </p>
          </div>
          <Button>Register</Button>
        </div>

        <div className="relative w-full max-w-[391px] shrink-0">
          <img
            src={heroIllustration}
            alt="Developer working with code and design tools"
            className="w-full object-contain"
          />
        </div>
      </div>

      <CarouselDots />
    </section>
  )
}
