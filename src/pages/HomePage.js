import React, { useState, useMemo } from 'react';
import HeroBanner from '../components/HeroBanner';
import CategoryGrid from '../components/CategoryGrid';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './HomePage.css';

const ALL_CATEGORIES = ['All', ...new Set(products.map(p => p.category))];

export default function HomePage({ addToCart, searchQuery }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const filtered = useMemo(() => {
    let list = [...products];

    // Filter by search
    if (searchQuery) {
      list = list.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (activeCategory !== 'All') {
      list = list.filter(p => p.category === activeCategory);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':  return list.sort((a, b) => a.price - b.price);
      case 'price-high': return list.sort((a, b) => b.price - a.price);
      case 'rating':     return list.sort((a, b) => b.rating - a.rating);
      case 'discount':   return list.sort((a, b) => (b.oldPrice - b.price) / b.oldPrice - (a.oldPrice - a.price) / a.oldPrice);
      default:           return list;
    }
  }, [searchQuery, activeCategory, sortBy]);

  return (
    <div className="homepage">
      {/* Hero - only when not searching */}
      {!searchQuery && <HeroBanner />}

      {/* Category cards - only on main page */}
      {!searchQuery && <CategoryGrid />}

      {/* Product Section */}
      <section className="homepage__products">
        <div className="homepage__toolbar">
          <h2 className="homepage__section-title">
            {searchQuery
              ? `Search results for "${searchQuery}" (${filtered.length})`
              : 'Featured Products'}
          </h2>
          <div className="homepage__filters">
            {/* Category tabs */}
            <div className="homepage__cats">
              {ALL_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  className={`homepage__cat-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Sort */}
            <select
              className="homepage__sort"
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Avg. Customer Review</option>
              <option value="discount">Biggest Discount</option>
            </select>
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="homepage__grid">
            {filtered.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <div className="homepage__empty">
            <div className="homepage__empty-icon">🔍</div>
            <h3>No results found</h3>
            <p>Try different keywords or browse our categories</p>
          </div>
        )}
      </section>
    </div>
  );
}
