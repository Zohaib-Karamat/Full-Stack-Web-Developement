const NAV_ITEMS = ['Home', 'Features', 'Community', 'Blog', 'Pricing']

export default function NavLinks({ className = '' }) {
  return (
    <nav className={`flex flex-wrap items-start justify-start gap-3 sm:gap-4 ${className}`}>
      {NAV_ITEMS.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="w-full text-left text-xs font-medium leading-4 text-nexcent-nav transition-colors hover:text-nexcent-dark sm:w-auto"
        >
          {item}
        </a>
      ))}
    </nav>
  )
}
