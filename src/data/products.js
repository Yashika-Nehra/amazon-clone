import phone from '../assets/images/phone.png';
import headphone from '../assets/images/headphone.jpg';
import watch from '../assets/images/watch.jpg';
import laptop from '../assets/images/laptop.jpg';
import books from '../assets/images/books.jpg';
import camera from '../assets/images/camera.jpg';
import bagpack from '../assets/images/bagpack.jpg';
import chair from '../assets/images/chair.jpg';
import controller from '../assets/images/controller.png';
import cookware from '../assets/images/cookware.jpg';
import printer from '../assets/images/printer.jpg';
import tv from '../assets/images/tv.jpg';
import decor from '../assets/images/decor.jpg';
import appliances from '../assets/images/appliances.jpg';
import menswear from '../assets/images/menwear.jpg';
import footwear from '../assets/images/footwear.jpg';
import handbags from '../assets/images/handbags.jpg';
import sunglasses from '../assets/images/sunglasses.jpg';
import notebooks from '../assets/images/notebooks.jpg';
import pens from '../assets/images/pens.jpg';
import art_supplies from '../assets/images/art_supplies.jpg';
export const products = [
  {
    id: 1,
    image: phone,
    title: 'Samsung Galaxy A55 5G (128GB, Awesome Iceblue)',
    category: 'Electronics',
    price: 24999,
    oldPrice: 32999,
    rating: 4.3,
    reviews: 4821,
    prime: true,
    badge: 'Best Seller',
    description: 'Experience the next level with Samsung Galaxy A55 5G. Featuring a stunning 6.6" Super AMOLED display, 50MP triple camera, and all-day battery life.',
    features: ['6.6" Super AMOLED 120Hz display', '50MP + 12MP + 5MP Triple Camera', '5000mAh Battery with 25W fast charging', '5G connectivity', '8GB RAM + 128GB Storage'],
  },
  {
    id: 2,
    image: headphone,
    title: 'boAt Rockerz 450 Bluetooth Wireless Headphone',
    category: 'Electronics',
    price: 1299,
    oldPrice: 2990,
    rating: 4.1,
    reviews: 12440,
    prime: true,
    badge: 'Deal of the Day',
    description: 'boAt Rockerz 450 is a wireless headphone that delivers powerful audio with up to 15 hours playtime and a foldable design for easy portability.',
    features: ['15 hours playback time', 'Soft padded ear cushions', '40mm dynamic driver', 'Built-in mic for calls', 'Foldable design'],
  },
  {
    id: 3,
    image: watch,
    title: 'Noise ColorFit Pro 5 Smart Watch with Bluetooth Calling',
    category: 'Electronics',
    price: 3499,
    oldPrice: 7999,
    rating: 4.2,
    reviews: 9872,
    prime: true,
    badge: 'Limited Deal',
    description: 'Stay connected and track your health with Noise ColorFit Pro 5. Features Bluetooth calling, health monitoring, and 100+ watch faces.',
    features: ['1.85" HD display', 'Bluetooth calling', '100+ sports modes', 'SpO2 & Heart rate monitor', '7 days battery life'],
  },
  {
    id: 4,
    image: laptop,
    title: 'Lenovo IdeaPad Slim 3 Intel Core i5 12th Gen Laptop',
    category: 'Computers',
    price: 42990,
    oldPrice: 55990,
    rating: 4.4,
    reviews: 3211,
    prime: false,
    badge: null,
    description: 'Powered by 12th Gen Intel Core i5, this slim and lightweight laptop is perfect for everyday productivity and entertainment.',
    features: ['Intel Core i5 12th Gen', '16GB DDR4 RAM', '512GB SSD', '15.6" FHD Anti-glare display', 'Windows 11 Home'],
  },
  {
    id: 5,
    image: camera,
    title: 'Canon EOS 1500D 24.1MP DSLR Camera with 18-55mm Lens',
    category: 'Camera',
    price: 34990,
    oldPrice: 42990,
    rating: 4.6,
    reviews: 7654,
    prime: true,
    badge: 'Amazon\'s Choice',
    description: 'The Canon EOS 1500D is an excellent entry-level DSLR for beginners. Shoot stunning photos and Full HD videos with ease.',
    features: ['24.1MP APS-C CMOS Sensor', 'DIGIC 4+ Image Processor', 'Full HD 1080p video recording', 'Built-in Wi-Fi & NFC', '9-point AF system'],
  },
  {
    id: 6,
    image: printer,
    title: 'HP DeskJet 2331 All-in-One Colour Printer',
    category: 'Computers',
    price: 2699,
    oldPrice: 4299,
    rating: 3.9,
    reviews: 5432,
    prime: true,
    badge: null,
    description: 'HP DeskJet 2331 is a reliable all-in-one printer for home use. Print, scan and copy with ease at an affordable price.',
    features: ['Print, Scan & Copy', 'Up to 7.5 ppm (Black)', 'USB Connectivity', 'Compact Design', 'Compatible with HP Instant Ink'],
  },
  {
    id: 7,
    image: controller,
    title: 'Sony DualSense Wireless Controller for PS5',
    category: 'Gaming',
    price: 5499,
    oldPrice: 6490,
    rating: 4.8,
    reviews: 8901,
    prime: true,
    badge: 'Best Seller',
    description: 'Experience a new generation of gaming with the DualSense wireless controller featuring haptic feedback and adaptive triggers.',
    features: ['Haptic feedback', 'Adaptive triggers', 'Built-in microphone', 'USB Type-C charging', 'Up to 12 hours battery'],
  },
  {
    id: 8,
    image: tv,
    title: 'MI 108cm (43 inch) 4K Ultra HD Smart Android TV',
    category: 'Electronics',
    price: 26999,
    oldPrice: 35999,
    rating: 4.3,
    reviews: 15230,
    prime: true,
    badge: null,
    description: 'MI 43 inch 4K TV delivers a stunning cinematic experience with Dolby Vision, Dolby Audio, and Android TV 11.',
    features: ['43" 4K Ultra HD display', 'Dolby Vision & Dolby Audio', 'Android TV 11 with Google Assistant', 'Chromecast built-in', '3 HDMI + 2 USB ports'],
  },
  {
    id: 9,
    image: bagpack,
    title: 'Safari Polyester 55 cms Cabin Backpack',
    category: 'Bags',
    price: 899,
    oldPrice: 1999,
    rating: 4.0,
    reviews: 3340,
    prime: false,
    badge: null,
    description: 'Durable and stylish travel backpack with multiple compartments, perfect for short trips and daily commuting.',
    features: ['Water resistant material', 'Laptop sleeve up to 15.6"', 'Multiple compartments', 'Padded shoulder straps', '3 year warranty'],
  },
  {
    id: 10,
    image: cookware,
    title: 'Prestige Omega Select Plus Non-Stick Kadai 2.5L',
    category: 'Kitchen',
    price: 799,
    oldPrice: 1295,
    rating: 4.3,
    reviews: 6721,
    prime: true,
    badge: 'Amazon\'s Choice',
    description: 'Cook healthy meals with this premium non-stick Kadai. Features a thick base for even heat distribution and a durable non-stick coating.',
    features: ['2.5L capacity', 'Hard anodized body', 'PFOA-free non-stick coating', 'Induction compatible', 'Glass lid included'],
  },
  {
    id: 11,
    image: books,
    title: 'Atomic Habits by James Clear — Paperback',
    category: 'Books',
    price: 349,
    oldPrice: 699,
    rating: 4.7,
    reviews: 22100,
    prime: true,
    badge: 'Best Seller',
    description: 'The #1 New York Times bestseller. James Clear reveals how tiny changes can lead to remarkable results in your habits and life.',
    features: ['320 pages', 'Paperback edition', 'English language', 'Publisher: Penguin Books', 'Available in multiple formats'],
  },
  {
    id: 12,
    image: chair,
    title: 'Green Soul Monster Series High Back Ergonomic Chair',
    category: 'Furniture',
    price: 12999,
    oldPrice: 24999,
    rating: 4.2,
    reviews: 4102,
    prime: true,
    badge: null,
    description: 'Premium ergonomic gaming and office chair with lumbar support, adjustable armrests, and high-density foam cushioning.',
    features: ['High back design', 'Adjustable lumbar support', '3D armrests', 'Tilt lock mechanism', 'Max load: 120kg'],
  },
];

export const categories = [
  {
    title: 'Top Deals in Electronics',
    items: [
      { label: 'Smartphones', image: phone },
      { label: 'Laptops', image: laptop },
      { label: 'Headphones', image: headphone },
      { label: 'Smart TVs', image: tv },
    ],
  },
  {
    title: 'Home & Kitchen',
    items: [
      { label: 'Cookware', image: cookware },
      { label: 'Furniture', image: chair },
      { label: 'Décor', image: decor },
      { label: 'Appliances', image: appliances },
    ],
  },
  {
    title: 'Fashion Trending',
    items: [
      { label: 'Men\'s Wear', image: menswear },
      { label: 'Footwear', image: footwear },
      { label: 'Handbags', image: handbags },
      { label: 'Sunglasses', image: sunglasses },
    ],
  },
  {
    title: 'Books & Stationery',
    items: [
      { label: 'Bestsellers', image: books },
      { label: 'Notebooks', image: notebooks },
      { label: 'Pens', image: pens },
      { label: 'Art Supplies', image: art_supplies },
    ],
  },
];

export const banners = [
  {
    id: 1,
    title: 'Great Indian Sale',
    subtitle: 'Up to 80% off on Electronics, Fashion & More',
    cta: 'Shop Now',
    bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    emoji: '🛍️',
  },
  {
    id: 2,
    title: 'Prime Day Deals',
    subtitle: 'Exclusive deals for Prime members — Join today',
    cta: 'Get Prime',
    bg: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    emoji: '⚡',
  },
  {
    id: 3,
    title: 'New Arrivals in Tech',
    subtitle: 'The latest gadgets, just landed',
    cta: 'Explore Now',
    bg: 'linear-gradient(135deg, #FC5C7D 0%, #6A3093 100%)',
    emoji: '🚀',
  },
];
