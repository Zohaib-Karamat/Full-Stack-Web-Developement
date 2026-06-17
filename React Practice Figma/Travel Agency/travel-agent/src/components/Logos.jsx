import React from 'react';
import './Logos.css';
import axonLogo from '../assets/logos/axon.svg';
import expediaLogo from '../assets/logos/expedia.svg';
import italiaLogo from '../assets/logos/italia.svg';
import jetstarLogo from '../assets/logos/jetstar.svg';
import qantasLogo from '../assets/logos/qantas.svg';

const logos = [
  { id: 1, name: 'Axon', url: axonLogo },
  { id: 2, name: 'Jetstar', url: jetstarLogo },
  { id: 3, name: 'Expedia', url: expediaLogo },
  { id: 4, name: 'Qantas', url: qantasLogo },
  { id: 5, name: 'Alitalia', url: italiaLogo }
];

export default function Logos() {
  return (
    <section className="logos-section">
      <div className="logos-container">
        {logos.map((logo) => (
          <div key={logo.id} className="logo-item">
            <img 
              src={logo.url} 
              alt={logo.name} 
              className="logo-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
