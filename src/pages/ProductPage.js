import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import './ProductPage.css';

export default function ProductPage({ addToCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="pp-notfound">
        <div style={{ fontSize: 64 }}>😕</div>
        <h2>Product not found</h2>
        <Link to="/" className="pp-back-btn">← Back to Home</Link>
      </div>
    );
  }

  const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pp">
      {/* Breadcrumb */}
      <div className="pp__breadcrumb">
        <Link to="/">Home</Link> › <span>{product.category}</span> › <span>{product.title.slice(0, 40)}...</span>
      </div>

      <div className="pp__main">
        {/* Image */}
        <div className="pp__image">
          <div className="pp__img-box">{product.emoji}</div>
        </div>

        {/* Info */}
        <div className="pp__info">
          <h1 className="pp__title">{product.title}</h1>
          <div className="pp__brand">by <span className="pp__brand-link">Amazon Basics</span> | {product.category}</div>

          <div className="pp__rating">
            <span className="pp__stars">{'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}</span>
            <span className="pp__rating-num">{product.rating}</span>
            <span className="pp__reviews">{product.reviews.toLocaleString()} ratings</span>
          </div>

          <div className="pp__divider" />

          <div className="pp__pricing">
            <span className="pp__label">M.R.P.: </span>
            <span className="pp__mrp">₹{product.oldPrice.toLocaleString()}</span>
            <br />
            <span className="pp__label">Deal Price: </span>
            <span className="pp__price">₹{product.price.toLocaleString()}</span>
            <span className="pp__discount"> &nbsp;-{discount}% off</span>
          </div>

          {product.prime && (
            <div className="pp__prime">✓ FREE Delivery for Prime members</div>
          )}

          <div className="pp__divider" />

          <p className="pp__desc">{product.description}</p>

          <ul className="pp__features">
            {product.features.map(f => <li key={f}>{f}</li>)}
          </ul>
        </div>

        {/* Buy Box */}
        <div className="pp__buybox">
          <div className="pp__buy-price">₹{product.price.toLocaleString()}</div>
          {product.prime && <div className="pp__buy-prime">✓ FREE Prime Delivery</div>}
          <div className="pp__buy-stock pp__buy-stock--in">In Stock</div>

          <div className="pp__buy-qty">
            <label>Qty: </label>
            <select value={qty} onChange={e => setQty(Number(e.target.value))}>
              {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n}>{n}</option>)}
            </select>
          </div>

          <button
            className={`pp__buy-btn pp__buy-btn--cart ${added ? 'added' : ''}`}
            onClick={handleAddToCart}
          >
            {added ? '✓ Added to Cart!' : 'Add to Cart'}
          </button>
          <button className="pp__buy-btn pp__buy-btn--buy">Buy Now</button>

          <div className="pp__buy-meta">
            <div>Ships from: <strong>Amazon.in</strong></div>
            <div>Sold by: <strong>Amazon.in</strong></div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="pp__related">
          <h2 className="pp__related-title">Customers also viewed</h2>
          <div className="pp__related-grid">
            {related.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="pp__related-card">
                <div className="pp__related-img">{p.emoji}</div>
                <div className="pp__related-name">{p.title.slice(0, 50)}...</div>
                <div className="pp__related-price">₹{p.price.toLocaleString()}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
