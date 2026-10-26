import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Menu,
  ShoppingBag,
  X,
  Flower2,
} from 'lucide-react';

export default function Navbar({ cartCount = 0, onOpenCart }) {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  function handleBagClick(e) {
    if (onOpenCart) {
      e.preventDefault();
      onOpenCart();
      close();
    }
  }

  return (
    <header className="site-header">
      <div className="announcement-bar">
        A little love for your everyday glow — free shipping over 500 EGP
      </div>

      <nav
        className="navbar container py-3"
        aria-label="Main navigation"
      >
        <Link
          className="brand-mark"
          to="/"
          onClick={close}
          aria-label="Blush Bloom home"
        >
          <span className="brand-icon">
            <Flower2 />
          </span>

          <span>
            blush <b>bloom</b>
            <small>BEAUTY, SOFTLY</small>
          </span>
        </Link>

        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="main-nav-links"
        >
          {open ? <X /> : <Menu />}
        </button>

        <div
          id="main-nav-links"
          className={`nav-links ${open ? 'nav-links-open' : ''}`}
        >
          <NavLink to="/" end onClick={close}>
            Home
          </NavLink>

          <NavLink to="/shop" onClick={close}>
            Shop
          </NavLink>

          <NavLink to="/about" onClick={close}>
            Our story
          </NavLink>

          <NavLink to="/contact" onClick={close}>
            Contact
          </NavLink>
        </div>

        {onOpenCart ? (
          <button
            type="button"
            className="bag-link border-0 bg-transparent cursor-pointer"
            onClick={handleBagClick}
            aria-label={`Shopping bag, ${cartCount} items`}
          >
            <ShoppingBag size={20} />
            <span className="bag-count">{cartCount}</span>
          </button>
        ) : (
          <Link
            className="bag-link"
            to="/shop"
            aria-label={`Shopping bag, ${cartCount} items`}
          >
            <ShoppingBag size={20} />
            <span className="bag-count">{cartCount}</span>
          </Link>
        )}
      </nav>
    </header>
  );
}
