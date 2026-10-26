
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Leaf, Heart } from 'lucide-react';

import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import { products } from '../data/products';

export default function Home({ onAdd }) {
  return (
    <>
      {/* Hero section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 hero-copy">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                YOUR EVERYDAY BEAUTY RITUAL
              </span>

              <h1>
                Find your
                <br />
                <em>soft glow.</em>
              </h1>

              <p>
                Feel-good makeup made for real life, real skin,
                and every version of you. Your beauty, your way.
              </p>

              <div className="hero-actions">
                <Link to="/shop" className="btn-blush">
                  Shop the collection <ArrowRight size={17} />
                </Link>

                <Link to="/about" className="text-link">
                  Get to know us
                </Link>
              </div>

              <div className="hero-proof">
                <div className="proof-icons">
                  <span>✿</span>
                  <span>♡</span>
                  <span>✧</span>
                </div>

                <span>Loved by your kind of beautiful</span>
              </div>
            </div>

            <div className="col-lg-6 hero-visual">
              <div className="hero-image-main">
                <img
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=90"
                  alt="Soft pink beauty editorial"
                />
              </div>

              <div className="floating-note">
                <span className="note-flower">✿</span>
                <span>
                  made for
                  <br />
                  <b>your glow</b>
                </span>
              </div>

              <div className="hero-sticker">
                A LITTLE
                <br />
                BLUSH
                <br />
                <span>GOES A LONG WAY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand promises */}
      <section className="promise-strip">
        <div className="container">
          <div>
            <Sparkles />
            <span>Feel-good formulas</span>
          </div>

          <div>
            <Leaf />
            <span>Everyday essentials</span>
          </div>

          <div>
            <Heart />
            <span>Beauty for everyone</span>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="section-pad container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE GOOD STUFF</p>
            <h2>
              Little things, <em>big glow.</em>
            </h2>
            <p>
              Meet the pieces you'll reach for every single day.
            </p>
          </div>

          <Link to="/shop" className="text-link">
            Shop all products <ArrowRight size={16} />
          </Link>
        </div>

        <div className="row g-4">
          {products
            .filter((p) => [20, 31, 25, 6].includes(p.id))
            .map((product) => (
              <div className="col-6 col-lg-3" key={product.id}>
                <ProductCard product={product} onAdd={onAdd} />
              </div>
            ))}
        </div>
      </section>

      {/* Brand story */}
      <section className="story-banner container">
        <div className="story-banner-image">
          <img
            src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1200&q=85"
            alt="Beauty products in a soft pink setting"
            loading="lazy"
          />
        </div>

        <div className="story-banner-copy">
          <p className="eyebrow">A BEAUTY KIND OF DIFFERENT</p>

          <h2>
            Less perfect.
            <br />
            <em>More you.</em>
          </h2>

          <p>
            We believe makeup should be fun, never a rulebook.
            Play with color, keep it simple, or start all over.
            There's room for every mood here.
          </p>

          <Link to="/about" className="btn-blush">
            Our little story <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
