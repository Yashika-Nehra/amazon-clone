# Amazon Clone — React

A fully responsive Amazon homepage clone built with React and React Router.

## Features

- 🏠 **Home Page** — Hero banner carousel, category grid, product listings
- 🔍 **Search** — Filter products by keyword in real-time
- 🏷️ **Category Filter** — Browse by Electronics, Books, Fashion, etc.
- 🔃 **Sort** — By price, rating, or discount
- 🛒 **Cart** — Add/remove items, update quantity, see subtotal
- 📄 **Product Detail Page** — Full product info, features, buy box
- 📱 **Responsive** — Works on mobile, tablet, and desktop
- 🔔 **Toast Notifications** — Confirmation when items are added

## Getting Started

### Install dependencies
```bash
npm install
```

### Run the app
```bash
npm start
```
Opens at `http://localhost:3000`

### Build for production
```bash
npm run build
```

## Project Structure

```
src/
  components/
    Navbar.js / .css         ← Top navigation bar
    SubNav.js / .css         ← Department links bar
    HeroBanner.js / .css     ← Auto-playing carousel
    CategoryGrid.js / .css   ← 4-column category cards
    ProductCard.js / .css    ← Product listing card
    Footer.js / .css         ← Site footer
    Toast.js / .css          ← Add-to-cart notification
  pages/
    HomePage.js / .css       ← Main landing page
    CartPage.js / .css       ← Shopping cart
    ProductPage.js / .css    ← Product detail view
  data/
    products.js              ← All product & category data
  App.js                     ← Routes & global state
  index.js                   ← Entry point
  index.css                  ← Global styles & CSS variables
```

## Next Steps to Extend

- 🔐 Add Firebase Auth for user login
- 🗄️ Connect to a real backend (Node.js + Express or Firebase Firestore)
- 💳 Add Razorpay/Stripe for payments
- 🖼️ Replace emoji with real product images
- 📦 Add order history page
