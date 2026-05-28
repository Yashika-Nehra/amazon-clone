import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ cartCount, searchQuery, setSearchQuery }) {
  const [input, setInput] = useState(searchQuery);
  const [category, setCategory] = useState('All');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(input);
    navigate('/');
  };

  return (
    <header className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar__logo">
        <span className="navbar__logo-text">amazon</span>
        <span className="navbar__logo-in">.in</span>
      </Link>

      {/* Deliver to */}
      <div className="navbar__deliver">
        <span className="navbar__deliver-icon">📍</span>
        <div>
          <div className="navbar__deliver-top">Deliver to</div>
          <div className="navbar__deliver-bottom">India</div>
        </div>
      </div>

      {/* Search Bar */}
      <form className="navbar__search" onSubmit={handleSearch}>
        <select
          className="navbar__search-cat"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          {['All','Electronics','Books','Fashion','Home','Computers','Gaming','Camera'].map(c => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <input
          className="navbar__search-input"
          type="text"
          placeholder="Search Amazon.in"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button className="navbar__search-btn" type="submit">🔍</button>
      </form>

      {/* Right Links */}
      <div className="navbar__links">
        <div className="navbar__link">
          <div className="navbar__link-top">Hello, Sign in</div>
          <div className="navbar__link-bottom">Account &amp; Lists ▾</div>
        </div>
        <div className="navbar__link">
          <div className="navbar__link-top">Returns</div>
          <div className="navbar__link-bottom">&amp; Orders</div>
        </div>
        <Link to="/cart" className="navbar__cart">
          <div className="navbar__cart-icon">
            🛒
            {cartCount > 0 && (
              <span className="navbar__cart-count">{cartCount}</span>
            )}
          </div>
          <div className="navbar__link-bottom">Cart</div>
        </Link>
      </div>
    </header>
  );
}
