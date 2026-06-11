import './Hero.css'
import ring from '../assets/ring.svg'

const cards = [
  {
    title: 'Rome, Italy',
    price: '$5,42k',
    days: '10 Days Trip',
    img: 'https://images.pexels.com/photos/3617457/pexels-photo-3617457.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'London, UK',
    price: '$4.2k',
    days: '12 Days Trip',
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Full Europe',
    price: '$15k',
    days: '28 Days Trip',
    img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800&auto=format&fit=crop',
  },
]

export default function Destinations() {
  return (
    <section className="destinations-shell" aria-labelledby="destinations-title">
      <div className="destinations-inner">
        <div className="destinations-header">
          <div className="destinations-eyebrow">Top Selling</div>
          <h2 id="destinations-title" className="destinations-title">Top Destinations</h2>
        </div>

        <div className="destinations-grid">
          {cards.map((c) => (
            <article key={c.title} className="destination-card">
              <div className="destination-media">
                <img src={c.img} alt={c.title} className="destination-img" />
              </div>

              <div className="destination-bottom">
                <div className="destination-meta">
                  <div className="destination-left">
                    <div className="destination-place">{c.title}</div>
                    <div className="destination-days">
                      <svg className="destination-plane" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" fill="currentColor" />
                      </svg>
                      <span>{c.days}</span>
                    </div>
                  </div>

                  <div className="destination-price">{c.price}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <img src={ring} alt="decorative ring" className="destinations-ring" aria-hidden="true" />
    </section>
  )
}
