const communityCards = [
  {
    title: 'Membership Organisations',
    description:
      'Our membership management software provides full automation of membership renewals and payments',
    icon: 'members',
  },
  {
    title: 'National Associations',
    description:
      'Our membership management software provides full automation of membership renewals and payments',
    icon: 'building',
  },
  {
    title: 'Clubs And Groups',
    description:
      'Our membership management software provides full automation of membership renewals and payments',
    icon: 'clubs',
  },
]

function IconShape({ type }) {
  return (
    <div className="relative h-10 w-11">
      <div className="absolute right-0 top-1 h-9 w-9 rounded-bl-sm rounded-br-md rounded-tl-xl rounded-tr-sm bg-green-100" />
      <svg
        className="absolute left-0 top-0 h-8 w-8 text-green-950"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        {type === 'members' && (
          <>
            <circle cx="16" cy="10" r="4" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="8.5" cy="12.5" r="3" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="23.5" cy="12.5" r="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 24v-2.2c0-3.1 3.6-5.1 8-5.1s8 2 8 5.1V24" stroke="currentColor" strokeWidth="1.7" />
            <path d="M2.5 23v-1.6c0-2.2 2.5-3.8 5.7-4" stroke="currentColor" strokeWidth="1.5" />
            <path d="M29.5 23v-1.6c0-2.2-2.5-3.8-5.7-4" stroke="currentColor" strokeWidth="1.5" />
          </>
        )}

        {type === 'building' && (
          <>
            <path d="M8 27V9l14-5v23" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            <path d="M22 13h5v14H5v-8h3" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            <path d="M12 12h2M17 10h2M12 16h2M17 14h2M12 20h2M17 18h2M12 24h2M17 22h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </>
        )}

        {type === 'clubs' && (
          <>
            <circle cx="16" cy="9" r="4" stroke="currentColor" strokeWidth="1.7" />
            <circle cx="9.5" cy="21" r="4.5" stroke="currentColor" strokeWidth="1.7" />
            <circle cx="22.5" cy="21" r="4.5" stroke="currentColor" strokeWidth="1.7" />
            <path d="M16 13v4.5M13.5 18.5l-1.3 1.2M18.5 18.5l1.3 1.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </>
        )}
      </svg>
    </div>
  )
}

export default function Community() {
  return (
    <section className="w-full bg-white pb-8 pt-2">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-24">
        <div className="mx-auto flex max-w-[430px] flex-col items-center gap-1.5 text-center">
          <h2 className="text-2xl font-semibold leading-8 text-nexcent-dark">
            Manage your entire community in a single system
          </h2>
          <p className="text-xs leading-4 text-nexcent-muted">Who is Nextcent suitable for?</p>
        </div>

        <div className="mt-4 grid items-stretch gap-6 md:grid-cols-3 md:justify-between lg:px-24">
          {communityCards.map((card) => (
            <article
              key={card.title}
              className="mx-auto flex w-full max-w-52 flex-col items-center gap-1.5 rounded-md bg-white px-6 py-4 text-center shadow-[0px_1.392px_2.784px_0px_rgba(171,190,209,0.20)]"
            >
              <div className="flex w-48 flex-col items-center gap-3">
                <IconShape type={card.icon} />
                <h3 className="self-stretch text-xl font-bold leading-6 text-nexcent-dark">
                  {card.title}
                </h3>
              </div>
              <p className="text-[9.74px] leading-3 text-nexcent-muted">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
