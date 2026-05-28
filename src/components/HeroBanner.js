import React, { useState, useEffect } from 'react';
import { banners } from '../data/products';
import './HeroBanner.css';

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const banner = banners[current];

  return (
    <div className="hero">
      <div
        className="hero__slide"
        style={{ background: banner.bg }}
        key={banner.id}
      >
        <div className="hero__content">
          <div className="hero__emoji">{banner.emoji}</div>
          <h1 className="hero__title">{banner.title}</h1>
          <p className="hero__subtitle">{banner.subtitle}</p>
          <button className="hero__btn">{banner.cta}</button>
        </div>
      </div>

      {/* Dots */}
      <div className="hero__dots">
        {banners.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

      {/* Arrows */}
      <button className="hero__arrow hero__arrow--left" onClick={() =>
        setCurrent(c => (c - 1 + banners.length) % banners.length)
      }>‹</button>
      <button className="hero__arrow hero__arrow--right" onClick={() =>
        setCurrent(c => (c + 1) % banners.length)
      }>›</button>
    </div>
  );
}
