'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import './HeroSlider.css';

const slides = [
  {
    id: 1,
    image: '/images/hero.png',
    title: 'Smart Investments For A Secure Future',
    subtitle: 'Where Your Money Works For You'
  },
  {
    id: 2,
    image: '/images/meeting.png',
    title: 'Grow Your Wealth With Mutual Funds',
    subtitle: 'Guided by Professional Financial Advisors'
  },
  {
    id: 3,
    image: '/images/meeting.png',
    title: 'Start Your SIP Today',
    subtitle: 'Small steps for giant leaps in wealth creation'
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-overlay">
            <div className="container slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <div className="slide-buttons">
                <Link href="/mutual-funds" className="btn btn-primary">Start Investing</Link>
                <Link href="/contact" className="btn btn-secondary" style={{color: '#fff', borderColor: '#fff'}}>Contact Advisor</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button 
            key={index} 
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
