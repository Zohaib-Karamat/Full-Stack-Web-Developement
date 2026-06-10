const logos = [
  'blocks',
  'leaf',
  'cards',
  'logotype',
  'rings',
  'chain',
  'cards',
]

function ClientLogo({ type, index }) {
  const common = {
    className: 'h-10 w-14 text-[#263238]',
    role: 'img',
    'aria-label': `Client logo ${index + 1}`,
  }

  if (type === 'blocks') {
    return (
      <svg {...common} viewBox="0 0 56 40" fill="none">
        <rect x="12" y="7" width="12" height="12" rx="5" stroke="currentColor" strokeWidth="2" />
        <rect x="26" y="7" width="12" height="12" rx="5" stroke="currentColor" strokeWidth="2" />
        <rect x="12" y="21" width="12" height="12" rx="5" stroke="currentColor" strokeWidth="2" />
        <rect x="26" y="21" width="12" height="12" rx="5" stroke="currentColor" strokeWidth="2" />
        <path d="M18 7v26M12 13h26M12 27h26" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  }

  if (type === 'leaf') {
    return (
      <svg {...common} viewBox="0 0 56 40" fill="none">
        <path
          d="M14 20c7.4-9.2 20.4-9.2 28 0-7.6 9.2-20.6 9.2-28 0Z"
          fill="currentColor"
          opacity=".95"
        />
        <path d="M18 20h20" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M23 15.5c4 3.2 7.3 4.7 12 4.7" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'cards') {
    return (
      <svg {...common} viewBox="0 0 56 40" fill="none">
        <path d="M16 14h14l-3 11H13l3-11Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M31 14h12l-3 11H28l3-11Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M38 10h6l-2 5h-6l2-5Z" fill="currentColor" />
        <path d="M34 9h4l-1.5 4h-4L34 9Z" fill="currentColor" opacity=".75" />
      </svg>
    )
  }

  if (type === 'logotype') {
    return (
      <svg {...common} viewBox="0 0 56 40" fill="none">
        <text
          x="28"
          y="17"
          textAnchor="middle"
          fill="#2f3b8f"
          fontFamily="Inter, Arial, sans-serif"
          fontSize="8"
          fontWeight="800"
          transform="rotate(-18 28 20)"
        >
          LOGO
        </text>
        <text
          x="28"
          y="25"
          textAnchor="middle"
          fill="#2f3b8f"
          fontFamily="Inter, Arial, sans-serif"
          fontSize="8"
          fontWeight="800"
          transform="rotate(-18 28 20)"
        >
          IPSUM
        </text>
      </svg>
    )
  }

  if (type === 'rings') {
    return (
      <svg {...common} viewBox="0 0 56 40" fill="none">
        <rect x="15" y="13" width="26" height="14" rx="7" stroke="currentColor" strokeWidth="2" />
        <rect x="19" y="16" width="18" height="8" rx="4" stroke="currentColor" strokeWidth="2" />
        <rect x="23" y="18.5" width="10" height="3" rx="1.5" fill="currentColor" />
        <circle cx="43" cy="10" r="1.2" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg {...common} viewBox="0 0 56 40" fill="none">
      <path
        d="M15 24.5 25 14.5c2.5-2.5 6.5-2.5 9 0l1.5 1.5"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M41 15.5 31 25.5c-2.5 2.5-6.5 2.5-9 0L20.5 24"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function Clients() {
  return (
    <section className="w-full bg-white py-8">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-24">
        <div className="mx-auto flex max-w-[780px] flex-col items-center gap-2 text-center">
          <h2 className="text-3xl font-semibold leading-9 text-nexcent-dark">Our Clients</h2>
          <p className="text-xs leading-4 text-nexcent-muted">
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        <div className="mt-7 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-7">
          {logos.map((logo, index) => (
            <ClientLogo key={`${logo}-${index}`} type={logo} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
