import starsDecoration from '../assets/stars.svg'
import './Hero.css'

const categories = [
  {
    title: 'Calculated Weather',
    description: 'Built Wicket longer admire do barton vanity itself do in it.',
    icon: '☁️',
  },
  {
    title: 'Best Flights',
    description: 'Engrossed listening. Park gate sell they west hard for the.',
    icon: '✈️',
  },
  {
    title: 'Local Events',
    description: 'Barton vanity itself do in it. Prefered to men it engrossed listening.',
    icon: '🎤',
  },
  {
    title: 'Customization',
    description: 'We deliver outsourced aviation services for military customers.',
    icon: '⚙️',
  },
]

function Category() {
  return (
    <section className="hero-category" aria-labelledby="category-title">
      <img src={starsDecoration} alt="Decorative stars" className="hero-category-stars" aria-hidden="true" />

      <div className="hero-category-header">
        <p className="hero-category-eyebrow">CATEGORY</p>
        <h2 id="category-title" className="hero-category-title">
          We Offer Best Services
        </h2>
      </div>

      <div className="hero-category-grid">
        {categories.map((item) => (
          <article key={item.title} className="category-card">
            <span className="category-icon" aria-hidden="true">
              {item.icon}
            </span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Category
