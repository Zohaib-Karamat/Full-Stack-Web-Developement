import React, { useState } from 'react';

const reviews = [
  {
    id: 1,
    avatar: 'https://i.pravatar.cc/150?img=11',
    name: 'Mike taylor',
    role: 'Lahore, Pakistan',
    text: 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.',
    time: '2 hours ago'
  },
  {
    id: 2,
    avatar: 'https://i.pravatar.cc/150?img=12',
    name: 'Chris Thomas',
    role: 'CEO of Red Button',
    text: 'Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is.',
    time: '4 hours ago'
  },
  {
    id: 3,
    avatar: 'https://i.pravatar.cc/150?img=13',
    name: 'Sarah Connor',
    role: 'Marketing Director',
    text: 'Extremely we promotion remainder resolving garret. The edward hardly on people no happen before.',
    time: '1 day ago'
  },
  {
    id: 4,
    avatar: 'https://i.pravatar.cc/150?img=14',
    name: 'John Doe',
    role: 'Freelancer',
    text: 'Marianne or husbands if at shyness behavior. Boy regret cannot sir nay. Picture letters evident who whatever happen.',
    time: '2 days ago'
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(null);
  const [animating, setAnimating] = useState(false);

  const navigate = (dir) => {
    if (animating) return;
    
    setDirection(dir);
    setAnimating(true);
    
    setTimeout(() => {
      let nextIndex;
      if (dir === 'up') {
        nextIndex = (current + 1) % reviews.length;
      } else {
        nextIndex = (current - 1 + reviews.length) % reviews.length;
      }
      setCurrent(nextIndex);
      setDirection(null);
      setAnimating(false);
    }, 320);
  };

  const currentReview = reviews[current];
  const nextReviewIndex = (current + 1) % reviews.length;
  const nextReview = reviews[nextReviewIndex];

  let animationClass = 'slide-in-down';
  if (animating) {
    animationClass = direction === 'up' ? 'slide-exit-up' : 'slide-exit-down';
  }

  return (
    <section style={{ padding: '80px 20px', backgroundColor: '#ffffff', fontFamily: 'Inter, sans-serif' }}>
      <style>
        {`
          @keyframes slideInDown {
            from { transform: translateY(-30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes slideOutUp {
            from { transform: translateY(0); opacity: 1; }
            to { transform: translateY(-30px); opacity: 0; }
          }
          @keyframes slideOutDown {
            from { transform: translateY(0); opacity: 1; }
            to { transform: translateY(30px); opacity: 0; }
          }
          .slide-in-down {
            animation: slideInDown 320ms cubic-bezier(.4,0,.2,1) forwards;
          }
          .slide-exit-up {
            animation: slideOutUp 320ms cubic-bezier(.4,0,.2,1) forwards;
          }
          .slide-exit-down {
            animation: slideOutDown 320ms cubic-bezier(.4,0,.2,1) forwards;
          }
        `}
      </style>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '60px', alignItems: 'center' }}>
        
        {/* LEFT COLUMN */}
        <div style={{ flex: '0 0 350px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 'bold', letterSpacing: '2px', color: '#5e6282', textTransform: 'uppercase' }}>
              TESTIMONIALS
            </div>
            <h2 style={{ fontSize: '40px', fontWeight: '800', color: '#14183E', margin: '10px 0 0 0', lineHeight: '1.2' }}>
              What People Say About Us.
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '40px' }}>
            {reviews.map((_, idx) => (
              <div 
                key={idx}
                onClick={() => {
                  if (animating || idx === current) return;
                  const dir = idx > current ? 'up' : 'down';
                  navigate(dir);
                }}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: idx === current ? '#39425D' : '#E5E5E5',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
              />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '40px', paddingRight: '20px' }}>
          
          {/* STACKED CARDS */}
          <div style={{ position: 'relative', width: '500px', height: '240px' }}>
            
            {/* BACK CARD */}
            <div style={{
              position: 'absolute',
              top: '50px',
              left: '40px',
              right: '-40px',
              height: '100%',
              backgroundColor: '#ffffff',
              border: '2px solid #F7F7F7',
              borderRadius: '10px',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              zIndex: 1,
            }}>
              <h4 style={{ margin: 0, color: '#5E6282', fontSize: '16px' }}>{nextReview.name}</h4>
              <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#5E6282' }}>{nextReview.role}</p>
            </div>

            {/* FRONT CARD */}
            <div 
              key={current}
              className={animationClass}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                padding: '35px 35px 35px 35px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                zIndex: 2,
              }}
            >
              <img 
                src={currentReview.avatar} 
                alt={currentReview.name}
                style={{
                  position: 'absolute',
                  top: '-25px',
                  left: '-25px',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }}
              />
              <p style={{ color: '#5E6282', lineHeight: '1.8', fontSize: '15px', margin: 0, fontWeight: '500' }}>
                "{currentReview.text}"
              </p>
              <div style={{ marginTop: '25px' }}>
                <h4 style={{ margin: 0, color: '#5E6282', fontSize: '16px', fontWeight: '600' }}>{currentReview.name}</h4>
                <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#5E6282' }}>{currentReview.role}</p>
              </div>
            </div>

          </div>

          {/* NAV BUTTONS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <button 
              onClick={() => navigate('down')}
              disabled={animating}
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: animating ? 'default' : 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#39425D',
                opacity: animating ? 0.5 : 1
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
            </button>
            <button 
              onClick={() => navigate('up')}
              disabled={animating}
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: animating ? 'default' : 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#39425D',
                opacity: animating ? 0.5 : 1
              }}
            >
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
