import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      {/* Decorative blurred background */}
      <div className="footer-bg-blur" />

      <div className="footer-container">
        <div className="footer-brand-column">
          <h2 className="footer-logo">Jadoo.</h2>
          <p className="footer-description">
            Book your trip in minute, get full<br/>Control for much longer.
          </p>
        </div>

        <div className="footer-links-column">
          <h3 className="footer-links-title">Company</h3>
          <ul className="footer-links-list">
            <li><a href="#about">About</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#mobile">Mobile</a></li>
          </ul>
        </div>

        <div className="footer-links-column">
          <h3 className="footer-links-title">Contact</h3>
          <ul className="footer-links-list">
            <li><a href="#help">Help/FAQ</a></li>
            <li><a href="#press">Press</a></li>
            <li><a href="#affilates">Affilates</a></li>
          </ul>
        </div>

        <div className="footer-links-column">
          <h3 className="footer-links-title">More</h3>
          <ul className="footer-links-list">
            <li><a href="#airlinefees">Airlinefees</a></li>
            <li><a href="#airline">Airline</a></li>
            <li><a href="#tips">Low fare tips</a></li>
          </ul>
        </div>

        <div className="footer-social-column">
          <div className="footer-social-icons">
            <a href="#facebook" className="social-icon" aria-label="Facebook">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 18V9.5H0V6.5H2.5V4C2.5 1.5 4 0 7 0H10V3H7.5C6.5 3 6 3.5 6 4.5V6.5H10L9.5 9.5H6V18H2.5Z" fill="#080809"/>
              </svg>
            </a>
            <a href="#instagram" className="social-icon instagram-bg" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9 0C6.556 0 6.25.01 5.29.054C4.331.098 3.676.25 3.09.478C2.484.713 1.964 1.033 1.444 1.553C0.924 2.073 0.604 2.593 0.369 3.199C0.141 3.785-.011 4.44-.055 5.399C-.099 6.359-.11 6.665-.11 9.109C-.11 11.553-.099 11.859-.055 12.819C-.011 13.778.141 14.433.369 15.019C0.604 15.625 0.924 16.145 1.444 16.665C1.964 17.185 2.484 17.505 3.09 17.74C3.676 17.968 4.331 18.12 5.29 18.164C6.25 18.208 6.556 18.218 9 18.218C11.444 18.218 11.75 18.208 12.71 18.164C13.669 18.12 14.324 17.968 14.91 17.74C15.516 17.505 16.036 17.185 16.556 16.665C17.076 16.145 17.396 15.625 17.631 15.019C17.859 14.433 18.011 13.778 18.055 12.819C18.099 11.859 18.11 11.553 18.11 9.109C18.11 6.665 18.099 6.359 18.055 5.399C18.011 4.44 17.859 3.785 17.631 3.199C17.396 2.593 17.076 2.073 16.556 1.553C16.036 1.033 15.516.713 14.91.478C14.324.25 13.669.098 12.71.054C11.75.01 11.444 0 9 0ZM9 1.636C11.403 1.636 11.688 1.645 12.637 1.688C13.515 1.728 13.996 1.875 14.316 2.001C14.74 2.166 15.042 2.362 15.36 2.68C15.678 2.998 15.874 3.3 16.039 3.724C16.165 4.044 16.312 4.525 16.352 5.403C16.395 6.352 16.404 6.637 16.404 9.04C16.404 11.443 16.395 11.728 16.352 12.677C16.312 13.555 16.165 14.036 16.039 14.356C15.874 14.78 15.678 15.082 15.36 15.4C15.042 15.718 14.74 15.914 14.316 16.079C13.996 16.205 13.515 16.352 12.637 16.392C11.688 16.435 11.403 16.444 9 16.444C6.597 16.444 6.312 16.435 5.363 16.392C4.485 16.352 4.004 16.205 3.684 16.079C3.26 15.914 2.958 15.718 2.64 15.4C2.322 15.082 2.126 14.78 1.961 14.356C1.835 14.036 1.688 13.555 1.648 12.677C1.605 11.728 1.596 11.443 1.596 9.04C1.596 6.637 1.605 6.352 1.648 5.403C1.688 4.525 1.835 4.044 1.961 3.724C2.126 3.3 2.322 2.998 2.64 2.68C2.958 2.362 3.26 2.166 3.684 2.001C4.004 1.875 4.485 1.728 5.363 1.688C6.312 1.645 6.597 1.636 9 1.636ZM9 4.382C6.433 4.382 4.35 6.465 4.35 9.032C4.35 11.599 6.433 13.682 9 13.682C11.567 13.682 13.65 11.599 13.65 9.032C13.65 6.465 11.567 4.382 9 4.382ZM9 11.96C7.382 11.96 6.072 10.65 6.072 9.032C6.072 7.414 7.382 6.104 9 6.104C10.618 6.104 11.928 7.414 11.928 9.032C11.928 10.65 10.618 11.96 9 11.96ZM13.805 5.409C14.437 5.409 14.95 4.896 14.95 4.264C14.95 3.632 14.437 3.119 13.805 3.119C13.173 3.119 12.66 3.632 12.66 4.264C12.66 4.896 13.173 5.409 13.805 5.409Z" fill="white"/>
              </svg>
            </a>
            <a href="#twitter" className="social-icon" aria-label="Twitter">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 1.892C19.25 2.222 18.45 2.442 17.6 2.542C18.47 2.022 19.14 1.202 19.46 0.221999C18.65 0.701999 17.76 1.052 16.8 1.242C16.04 0.431999 14.95 0 13.78 0C11.47 0 9.6 1.87 9.6 4.18C9.6 4.51 9.64 4.83 9.71 5.14C6.24 4.96 3.14 3.3 1.06 0.791999C0.7 1.412 0.49 2.142 0.49 2.922C0.49 4.372 1.23 5.652 2.35 6.402C1.69 6.382 1.05 6.202 0.49 5.892V5.942C0.49 7.932 1.9 9.592 3.77 9.972C3.42 10.072 3.05 10.122 2.67 10.122C2.4 10.122 2.14 10.092 1.88 10.042C2.4 11.672 3.92 12.862 5.71 12.892C4.31 13.992 2.54 14.652 0.62 14.652C0.28 14.652 -0.06 14.632 -0.4 14.592C1.41 15.752 3.56 16.422 5.86 16.422C13.38 16.422 17.49 10.192 17.49 4.792C17.49 4.612 17.49 4.432 17.48 4.262C18.28 3.682 18.98 2.962 19.53 2.142" fill="#080809"/>
              </svg>
            </a>
          </div>

          <p className="footer-discover-text">Discover our app</p>
          <div className="footer-store-buttons">
            <a href="#playstore" className="store-badge" aria-label="Get it on Google Play">
              <div className="store-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.208 1.472C2.924 1.764 2.76 2.22 2.76 2.82V21.168C2.76 21.768 2.924 22.236 3.208 22.524L3.3 22.608L14.496 11.412L14.484 11.4L3.3 0.204001L3.208 1.472Z" fill="#3BCEFF"/>
                  <path d="M18.192 15.108L14.496 11.412V11.4L18.192 7.70401L18.288 7.76401L22.668 10.26C23.916 10.968 23.916 12.132 22.668 12.852L18.288 15.048L18.192 15.108Z" fill="#FFC900"/>
                  <path d="M18.288 15.048L14.496 11.4L3.3 22.608C3.768 23.076 4.548 23.136 5.484 22.608L18.288 15.048Z" fill="#ED2024"/>
                  <path d="M18.288 7.764L5.484 0.203998C4.548 -0.324002 3.768 -0.276002 3.3 0.203998L14.496 11.4L18.288 7.764Z" fill="#1AC459"/>
                </svg>
              </div>
              <div className="store-text">
                <span className="store-sub">GET IT ON</span>
                <span className="store-main">Google Play</span>
              </div>
            </a>
            
            <a href="#appstore" className="store-badge" aria-label="Available on the Apple Store">
              <div className="store-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.32 8.79C16.3 11.48 18.72 12.4 18.75 12.42C18.73 12.48 18.36 13.73 17.48 15.01C16.71 16.14 15.91 17.26 14.65 17.28C13.41 17.31 13 16.55 11.58 16.55C10.15 16.55 9.71 17.28 8.52 17.31C7.29 17.33 6.37 16.05 5.59 14.93C3.99 12.63 2.76 8.71 4.41 6.09C5.23 4.79 6.55 3.96 8 3.93C9.21 3.91 10.33 4.75 11.07 4.75C11.8 4.75 13.16 3.75 14.59 3.87C15.2 3.89 16.91 4.12 18 5.72C17.91 5.78 16.34 6.69 16.32 8.79ZM13.88 2.65C14.54 1.85 14.98 0.77 14.86 -0.01C13.98 0.03 12.84 0.58 12.16 1.39C11.55 2.1 11.03 3.22 11.17 4.29C12.16 4.36 13.22 3.45 13.88 2.65Z" fill="white"/>
                </svg>
              </div>
              <div className="store-text">
                <span className="store-sub">Available on the</span>
                <span className="store-main">Apple Store</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-copyright">
        All rights reserved@jadoo.co
      </div>
    </footer>
  );
}
