import React from 'react';
import './SubNav.css';

const links = [
  '☰ All', "Today's Deals", 'Customer Service', 'Prime', 'Registry',
  'Gift Cards', 'Sell', 'New Arrivals', 'Mobiles', 'Electronics',
  'Fashion', 'Home & Kitchen', 'Books', 'Sports',
];

export default function SubNav() {
  return (
    <nav className="subnav">
      {links.map(link => (
        <span key={link} className="subnav__link">{link}</span>
      ))}
    </nav>
  );
}
