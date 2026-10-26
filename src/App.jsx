import { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('blush_bloom_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState('');
  const toastTimer = useRef(null);

  useEffect(() => {
    try {
      localStorage.setItem('blush_bloom_cart', JSON.stringify(cartItems));
    } catch {
      // ignore storage error
    }
  }, [cartItems]);

  useEffect(() => {
    return () => {
      window.clearTimeout(toastTimer.current);
    };
  }, []);

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  function addToCart(product) {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });

    setToast(`${product.name} added to your bag`);

    window.clearTimeout(toastTimer.current);

    toastTimer.current = window.setTimeout(() => {
      setToast('');
    }, 2600);
  }

  function updateQuantity(id, nextQuantity) {
    if (nextQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: nextQuantity } : item
      )
    );
  }

  function removeItem(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <>
      <ScrollToTop />

      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <Routes>
        <Route
          path="/"
          element={<Home onAdd={addToCart} />}
        />

        <Route
          path="/shop"
          element={<Shop onAdd={addToCart} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="*"
          element={
            <main className="container section-pad text-center">
              <h1>Oops, this page wandered off.</h1>
              <Link className="btn-blush mt-3" to="/">
                Back home
              </Link>
            </main>
          }
        />
      </Routes>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onClearCart={clearCart}
      />

      {toast && (
        <div className="toast-message" role="status">
          ♡ &nbsp; {toast}
        </div>
      )}
    </>
  );
}
