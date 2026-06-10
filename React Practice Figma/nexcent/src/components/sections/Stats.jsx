const stats = [
  {
    label: 'Members',
    value: '2,245,341',
    icon: 'members',
  },
  {
    label: 'Clubs',
    value: '46,328',
    icon: 'clubs',
  },
  {
    label: 'Event Bookings',
    value: '828,867',
    icon: 'events',
  },
  {
    label: 'Payments',
    value: '1,926,436',
    icon: 'payments',
  },
]

function StatIcon({ type }) {
  const iconClass = 'h-8 w-8 text-nexcent-green'

  if (type === 'members') {
    return (
      <svg className={iconClass} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="13" cy="11" r="4.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="22" cy="12.5" r="3.4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5.5 25v-2.2c0-3.5 3.4-6.1 7.5-6.1s7.5 2.6 7.5 6.1V25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M20.5 18.1c3.4.5 6 2.7 6 5.5V25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'clubs') {
    return (
      <svg className={iconClass} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="8.8" r="3.8" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="9" cy="21.5" r="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="23" cy="21.5" r="4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M16 12.8v4.4M13.5 18.4 11.9 20M18.5 18.4l1.6 1.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'events') {
    return (
      <svg className={iconClass} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M7 13h18v12H7V13Z" fill="currentColor" opacity=".16" />
        <path d="M7 13h18v12H7V13Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M10 8v4M22 8v4M6 17h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 22h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg className={iconClass} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="5" y="9" width="22" height="15" rx="2.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 14h22" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 20h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export default function Stats() {
  return (
    <section className="w-full bg-nexcent-bg py-11">
      <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-9 px-6 sm:px-12 lg:flex-row lg:items-center lg:px-24">
        <div className="flex w-full max-w-96 flex-col items-start gap-1.5">
          <h2 className="max-w-full text-2xl font-semibold leading-8 text-nexcent-dark sm:max-w-[420px]">
            Helping a local <span className="text-nexcent-green">business reinvent itself</span>
          </h2>
          <p className="text-xs leading-4 text-zinc-900 sm:text-sm">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className="grid w-full max-w-[540px] grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-start gap-3">
              <StatIcon type={stat.icon} />
              <div className="flex w-full max-w-[160px] flex-col items-start">
                <strong className="w-full truncate text-xl font-bold leading-6 text-nexcent-dark">
                  {stat.value}
                </strong>
                <span className="w-full truncate text-xs leading-4 text-nexcent-muted">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
