import './Hero.css'

export default function Booking() {
  return (
    <section className="booking-shell">
      <div className="booking-left">
        <div className="booking-eyebrow">Easy and Fast</div>
        <h2 className="booking-title">Book Your Next Trip<br/>In 3 Easy Steps</h2>

        <ol className="booking-steps" aria-hidden>
          <li className="step">
            <div className="step-icon bg-amber" />
            <div className="step-text">
              <div className="step-title">Choose Destination</div>
              <div className="step-desc">Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit. Urna, tortor tempus.</div>
            </div>
          </li>

          <li className="step">
            <div className="step-icon bg-orange" />
            <div className="step-text">
              <div className="step-title">Make Payment</div>
              <div className="step-desc">Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit. Urna, tortor tempus.</div>
            </div>
          </li>

          <li className="step">
            <div className="step-icon bg-sky" />
            <div className="step-text">
              <div className="step-title">Reach Airport on Selected Date</div>
              <div className="step-desc">Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit. Urna, tortor tempus.</div>
            </div>
          </li>
        </ol>
      </div>

      <div className="booking-right">
        <div className="booking-bg-circle" aria-hidden="true" />

        <article className="booking-card senior">
          <img className="booking-img" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop" alt="Trip to Greece" />

          <div className="booking-meta">
            <h3 className="booking-meta-title">Trip To Greece</h3>

            <div className="booking-meta-row">
              <div className="meta-left">
                <div className="meta-dates">14-29 June</div>
                <div className="meta-by">by Robbin joseph</div>
              </div>

              <div className="meta-right">
                <div className="icons-row">
                  <span className="icon">◐</span>
                  <span className="icon">▤</span>
                  <span className="icon">✈</span>
                </div>
                <div className="people">24 people going</div>
              </div>
            </div>
          </div>

          <aside className="booking-floating senior" aria-label="progress">
            <div className="floating-panel">
              <div className="fp-left">
                <div className="fp-eyebrow">Ongoing</div>
                <div className="fp-title">Trip to rome</div>
                <div className="fp-bar"><div className="fp-fill" style={{width: '40%'}}/></div>
              </div>
              <div className="fp-avatar"><img src="https://placehold.co/36x32" alt="avatar"/></div>
            </div>
          </aside>
        </article>
      </div>
    </section>
  )
}
