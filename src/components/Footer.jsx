
import { Instagram, ArrowUpRight, Flower2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-5">
            <Link className="brand-mark footer-brand" to="/">
              <span className="brand-icon">
                <Flower2 />
              </span>

              <span>
                blush <b>bloom</b>
                <small>BEAUTY, SOFTLY</small>
              </span>
            </Link>

            <p className="footer-copy mt-3">
              Makeup that feels like you. A little color,
              a little confidence, and a lot of love.
            </p>
          </div>

          <div className="col-6 col-lg-2">
            <h6>Explore</h6>
            <Link to="/shop">Shop all</Link>
            <Link to="/about">Our story</Link>
            <Link to="/contact">Contact us</Link>
          </div>

          <div className="col-6 col-lg-2">
            <h6>Need help?</h6>
            <a href="mailto:hello@blushbloom.example">
              Email us
            </a>
            <Link to="/contact">FAQs &amp; support</Link>
          </div>

          <div className="col-lg-3">
            <h6>Follow the glow</h6>

            <a
              className="social-link"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={17} />
              Instagram
              <ArrowUpRight size={15} />
            </a>

            <p className="tiny-note mt-3">
              Made with love for beauty in every shade.
            </p>
          </div>
        </div>

        <div className="footer-bottom mt-5 pt-3">
          <span>
            © {new Date().getFullYear()} Blush Bloom Beauty
          </span>

          <span>
            Kind to your skin. Kind to the planet.
          </span>
        </div>
      </div>
    </footer>
  );
}
