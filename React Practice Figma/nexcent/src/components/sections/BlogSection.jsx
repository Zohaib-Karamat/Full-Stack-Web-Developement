const posts = [
  {
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    alt: 'Team planning at a table',
    title: 'Creating Streamlined Safeguarding Processes with OneRen',
  },
  {
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
    alt: 'Dashboard analytics on a screen',
    title: 'What are your safeguarding responsibilities and how can you manage them?',
  },
  {
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    alt: 'Creative marketing ideas on laptop',
    title: 'Revamping the Membership Model with Triathlon Australia',
  },
]

function ReadMore() {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-semibold leading-5 text-nexcent-green">
      <span>Readmore</span>
      <svg width="16" height="16" viewBox="0 0 24 25" fill="none" aria-hidden="true" className="rotate-180">
        <path
          d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}

export default function BlogSection() {
  return (
    <section id="blog" className="w-full bg-white py-8">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-3 px-6 sm:px-12">
        <div className="flex max-w-[773px] flex-col items-center gap-1.5 text-center">
          <h2 className="text-2xl font-semibold leading-8 text-nexcent-dark">
            Caring is the new marketing
          </h2>
          <p className="w-full max-w-96 text-xs leading-4 text-nexcent-muted">
            The Nextcent blog is the best place to read about the latest membership insights,
            trends and more. See who&apos;s joining the community, read about how our community are
            increasing their membership income and lot&apos;s more.
          </p>
        </div>

        <div className="mt-2 grid w-full justify-center gap-8 px-0 md:grid-cols-3 lg:px-24">
          {posts.map((post) => (
            <article key={post.title} className="flex w-full max-w-[272px] flex-col items-center">
              <img
                src={post.image}
                alt={post.alt}
                className="h-48 w-full max-w-[256px] rounded-md object-cover"
              />
              <div className="-mt-2.5 flex h-full w-full max-w-[248px] flex-col items-center justify-between gap-3 rounded-md bg-slate-50 p-3 text-center shadow-[0px_5.569px_11.137px_0px_rgba(171,190,209,0.40)]">
                <h3 className="min-h-[4.5rem] text-sm font-semibold leading-5 text-neutral-500">{post.title}</h3>
                <button type="button" className="inline-flex items-center gap-1.5">
                  <ReadMore />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
