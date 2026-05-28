import React from 'react';
import { categories } from '../data/products';
import './CategoryGrid.css';

// Exact imports matching your filenames
import smartphonesImg from '../assets/images/phone.png';
import laptopsImg from '../assets/images/laptop.jpg';
import headphonesImg from '../assets/images/headphone.jpg';
import tvImg from '../assets/images/tv.jpg';
import cookwareImg from '../assets/images/cookware.jpg';
import furnitureImg from '../assets/images/chair.jpg';
import decorImg from '../assets/images/decor.jpg';
import appliancesImg from '../assets/images/appliances.jpg';
import mensWearImg from '../assets/images/menwear.jpg';
import footwearImg from '../assets/images/footwear.jpg';
import handbagsImg from '../assets/images/handbags.jpg';
import sunglassesImg from '../assets/images/sunglasses.jpg';
import bestsellersImg from '../assets/images/books.jpg';
import notebooksImg from '../assets/images/notebooks.jpg';
import pensImg from '../assets/images/pens.jpg';
import artSuppliesImg from '../assets/images/art_supplies.jpg';

const imageMap = {
  'Smartphones':  smartphonesImg,
  'Laptops':      laptopsImg,
  'Headphones':   headphonesImg,
  'Smart TVs':    tvImg,
  'Cookware':     cookwareImg,
  'Furniture':    furnitureImg,
  'Décor':        decorImg,
  'Appliances':   appliancesImg,
  "Men's Wear":   mensWearImg,
  'Footwear':     footwearImg,
  'Handbags':     handbagsImg,
  'Sunglasses':   sunglassesImg,
  'Bestsellers':  bestsellersImg,
  'Notebooks':    notebooksImg,
  'Pens':         pensImg,
  'Art Supplies': artSuppliesImg,
};

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
                  <div className="cat-card__img">
                    {imageMap[item.label] ? (
                      <img
                        src={imageMap[item.label]}
                        alt={item.label}
                      />
                    ) : (
                      item.emoji
                    )}
                  </div>
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