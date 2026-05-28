import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SubNav from './components/SubNav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import Toast from './components/Toast';
import './App.css';

export default function App() {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 2500);
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    showToast(`"${product.title.slice(0, 30)}..." added to cart`);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const updateQty = (id, qty) => {
    if (qty < 1) { removeFromCart(id); return; }
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  };

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <Router>
      <Navbar
        cartCount={cartCount}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <SubNav />
      <main>
        <Routes>
          <Route path="/" element={
            <HomePage
              addToCart={addToCart}
              searchQuery={searchQuery}
            />
          } />
          <Route path="/cart" element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
              updateQty={updateQty}
            />
          } />
          <Route path="/product/:id" element={
            <ProductPage addToCart={addToCart} />
          } />
        </Routes>
      </main>
      <Footer />
      {toast && <Toast message={toast} />}
    </Router>
  );
}
