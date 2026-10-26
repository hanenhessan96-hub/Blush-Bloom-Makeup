
import { Heart, Sparkles, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main>
      {/* Page hero */}
      <section className="page-hero about-hero">
        <div className="container">
          <p className="eyebrow">A NOTE FROM OUR HEART</p>

          <h1>
            Beauty should feel
            <br />
            <em>like you.</em>
          </h1>

          <p>
            Not a mask. Not a rule. Just a little ritual
            that reminds you how lovely you already are.
          </p>
        </div>
      </section>

      {/* Brand story */}
      <section className="container section-pad">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 about-image">
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=85"
              alt="A curated collection of makeup essentials"
              loading="lazy"
            />

            <span className="image-caption">
              A little color. A lot of you.
            </span>
          </div>

          <div className="col-lg-6 about-copy">
            <p className="eyebrow">WHY BLUSH BLOOM?</p>

            <h2>
              Made for your
              <br />
              <em>kind of beautiful.</em>
            </h2>

            <p>
              Blush Bloom started with a simple thought:
              makeup should be something you enjoy, not
              something you have to get right. We love soft
              colors, easy textures, and products that fit
              into your real life.
            </p>

            <p>
              Whether you're getting ready for a big day
              or just adding a little gloss before heading
              out, we want every moment with your makeup
              bag to feel like yours.
            </p>

            <Link to="/shop" className="btn-blush">
              Find your favorites
            </Link>
          </div>
        </div>
      </section>

      {/* Brand values */}
      <section className="values-section">
        <div className="container section-pad">
          <div className="text-center mb-5">
            <p className="eyebrow">OUR LITTLE PROMISES</p>

            <h2>
              Good beauty, <em>good feelings.</em>
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="value-card">
                <span><Heart /></span>

                <h3>Come as you are</h3>

                <p>
                  Beauty has no single look. We're here for
                  every shade, style, and version of you.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="value-card">
                <span><Sparkles /></span>

                <h3>Keep it joyful</h3>

                <p>
                  Makeup is play. Experiment, express
                  yourself, and wear what makes you smile.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="value-card">
                <span><Leaf /></span>

                <h3>Choose thoughtfully</h3>

                <p>
                  We believe in making considered choices
                  as we grow and learn as a brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
