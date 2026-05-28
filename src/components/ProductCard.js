import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function StarRating({ rating }) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.3 ? 1 : 0;
  const empty = 5 - full - half;
  return (
    <span className="stars">
      {'★'.repeat(full)}
      {half ? '½' : ''}
      {'☆'.repeat(empty)}
    </span>
  );
}

export default function ProductCard({ product, addToCart }) {
  const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

  return (
    <div className="pcard">
      {product.badge && (
        <span className={`pcard__badge pcard__badge--${product.badge === 'Best Seller' ? 'orange' : product.badge === "Amazon's Choice" ? 'blue' : 'red'}`}>
          {product.badge}
        </span>
      )}
      <Link to={`/product/${product.id}`} className="pcard__img-wrap">
        <div className="pcard__img"><img src={product.image} alt={product.title} className="pcard__img" /></div>
      </Link>
      <div className="pcard__body">
        <Link to={`/product/${product.id}`} className="pcard__title">
          {product.title}
        </Link>
        <div className="pcard__rating">
          <StarRating rating={product.rating} />
          <span className="pcard__reviews">({product.reviews.toLocaleString()})</span>
        </div>
        <div className="pcard__pricing">
          <span className="pcard__price">₹{product.price.toLocaleString()}</span>
          <span className="pcard__old">₹{product.oldPrice.toLocaleString()}</span>
          <span className="pcard__discount">-{discount}%</span>
        </div>
        {product.prime && (
          <div className="pcard__prime">✓ Prime FREE Delivery</div>
        )}
        <button className="pcard__btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
