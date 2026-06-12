import React, { useState } from 'react';
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
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section style={{ padding: '40px 20px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '1100px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        {logos.map((logo) => {
          const isHovered = hoveredId === logo.id;
          return (
            <div 
              key={logo.id}
              onMouseEnter={() => setHoveredId(logo.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                padding: '20px 30px',
                borderRadius: '10px',
                backgroundColor: isHovered ? 'white' : 'transparent',
                boxShadow: isHovered ? '0px 1.85px 3.15px 0px rgba(0,0,0,0.00), 0px 8.15px 6.52px 0px rgba(0,0,0,0.01), 0px 20px 13px 0px rgba(0,0,0,0.01), 0px 38.52px 25.48px 0px rgba(0,0,0,0.01), 0px 64.81px 46.85px 0px rgba(0,0,0,0.02), 0px 100px 80px 0px rgba(0,0,0,0.02)' : 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100px',
                width: '180px'
              }}
            >
              <img 
                src={logo.url} 
                alt={logo.name} 
                style={{
                  maxHeight: '40px',
                  maxWidth: '120px',
                  objectFit: 'contain',
                  filter: isHovered ? 'none' : 'grayscale(100%) opacity(60%)',
                  mixBlendMode: isHovered ? 'normal' : 'luminosity',
                  transition: 'all 0.3s ease'
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
