import React from 'react';
import './Subscribe.css';
import starsIcon from '../assets/stars.svg';
import ringIcon from '../assets/ring.svg';

export default function Subscribe() {
  return (
    <section className="subscribe-section" id="subscribe">
      <div className="subscribe-wrapper">
        <div className="subscribe-stars">
          <img src={starsIcon} alt="" aria-hidden="true" />
        </div>
        
        <div className="subscribe-send-icon">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12L22 2L15 22L11 16L22 2L9 13L2 12Z" fill="white"/>
           </svg>
        </div>

        <div className="subscribe-container">
          <div className="subscribe-bg-elements">
            <div className="subscribe-ring-left">
              <img src={ringIcon} alt="" aria-hidden="true" />
            </div>
            <div className="subscribe-ring-right">
              <img src={ringIcon} alt="" aria-hidden="true" />
            </div>
          </div>

          <h2 className="subscribe-title">
            Subscribe to get information, latest news and other<br/>interesting offers about Jadoo
          </h2>

          <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
            <div className="subscribe-input-group">
              <svg className="subscribe-envelope-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#39425D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="#39425D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input type="email" placeholder="Your email" required />
            </div>
            <button type="submit" className="subscribe-button">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
