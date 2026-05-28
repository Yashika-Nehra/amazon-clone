import React from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';

export default function CartPage({ cart, removeFromCart, updateQty }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="cart-empty__icon">🛒</div>
        <h2>Your Amazon Cart is empty</h2>
        <p>Shop today's deals or find something you'll love.</p>
        <Link to="/" className="cart-empty__btn">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-main">
        <h1 className="cart-title">Shopping Cart</h1>
        <div className="cart-header-row">
          <span />
          <span className="cart-header-price">Price</span>
        </div>

        {cart.map(item => (
          <div className="cart-item" key={item.id}>
            <div className="cart-item__img">{item.emoji}</div>
            <div className="cart-item__details">
              <Link to={`/product/${item.id}`} className="cart-item__title">{item.title}</Link>
              {item.prime && <div className="cart-item__prime">✓ In Stock — Prime Delivery</div>}
              <div className="cart-item__actions">
                <div className="cart-item__qty">
                  <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                </div>
                <span className="cart-item__divider">|</span>
                <button className="cart-item__delete" onClick={() => removeFromCart(item.id)}>Delete</button>
                <span className="cart-item__divider">|</span>
                <button className="cart-item__save">Save for later</button>
              </div>
            </div>
            <div className="cart-item__price">₹{(item.price * item.qty).toLocaleString()}</div>
          </div>
        ))}

        <div className="cart-subtotal">
          Subtotal ({totalItems} item{totalItems > 1 ? 's' : ''}):&nbsp;
          <strong>₹{subtotal.toLocaleString()}</strong>
        </div>
      </div>

      {/* Order Summary */}
      <div className="cart-summary">
        <div className="cart-summary__box">
          <div className="cart-summary__prime">
            <span>✓</span> Your order qualifies for FREE Delivery.
          </div>
          <div className="cart-summary__total">
            Subtotal ({totalItems} item{totalItems > 1 ? 's' : ''}):&nbsp;
            <strong>₹{subtotal.toLocaleString()}</strong>
          </div>
          <button className="cart-summary__btn">Proceed to Buy</button>
        </div>
      </div>
    </div>
  );
}
