import React from 'react';
import { categories } from '../data/products';
import './CategoryGrid.css';

export default function CategoryGrid() {
  return (
    <section className="cat-section">
      <div className="cat-grid">
        {categories.map(cat => (
          <div className="cat-card" key={cat.title}>
            <h3 className="cat-card__title">{cat.title}</h3>
            <div className="cat-card__items">
              {cat.items.map(item => (
                <div className="cat-card__item" key={item.label}>
                  <div className="cat-card__img">{item.emoji}</div>
                  <span className="cat-card__label">{item.label}</span>
                </div>
              ))}
            </div>
            <button className="cat-card__link">See all deals →</button>
          </div>
        ))}
      </div>
    </section>
  );
}
