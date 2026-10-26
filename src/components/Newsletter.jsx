
import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim()) {
      setSent(true);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-box">
          <p className="eyebrow">A LITTLE NOTE FROM US</p>

          <h2>
            Good things look <em>good on you.</em>
          </h2>

          <p>
            Get first dibs on new drops, beauty notes, and little treats.
          </p>

          {sent ? (
            <div className="success-note" role="status">
              <CheckCircle2 />
              You're on the list — thank you!
            </div>
          ) : (
            <form
              className="newsletter-form"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email address"
              />

              <button type="submit" aria-label="Subscribe">
                <ArrowRight />
              </button>
            </form>
          )}

          <small>No spam, just the good stuff.</small>
        </div>
      </div>
    </section>
  );
}
