export default function CarouselDots({ activeIndex = 0, total = 3 }) {
  return (
    <div className="flex items-center justify-center gap-2 pb-8">
      {Array.from({ length: total }, (_, index) => (
        <span
          key={index}
          className={`size-2.5 rounded-full ${
            index === activeIndex ? 'bg-nexcent-green' : 'bg-nexcent-green/30'
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}
