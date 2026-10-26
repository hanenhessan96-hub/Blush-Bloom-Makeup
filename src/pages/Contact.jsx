
import { useState } from 'react';
import {
  Mail,
  MapPin,
  Instagram,
  CheckCircle2,
} from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    topic: 'Product question',
    message: '',
  });

  const [sent, setSent] = useState(false);

  function update(event) {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  function resetForm() {
    setSent(false);
    setForm({
      name: '',
      email: '',
      topic: 'Product question',
      message: '',
    });
  }

  return (
    <main>
      <section className="page-hero contact-hero">
        <div className="container">
          <p className="eyebrow">WE'RE ALL EARS</p>

          <h1>
            Let's have a <em>little chat.</em>
          </h1>

          <p>
            Questions, kind words, shade advice —
            we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="container section-pad">
        <div className="row g-5">
          <div className="col-lg-5 contact-details">
            <p className="eyebrow">SAY HELLO</p>

            <h2>
              Here for the
              <br />
              <em>little things.</em>
            </h2>

            <p>
              Need help finding your shade or have a question
              about an order? Send us a note and we'll be
              happy to help.
            </p>

            <div className="contact-detail">
              <span><Mail /></span>
              <div>
                <b>Email us</b>
                <p>hello@blushbloom.example</p>
              </div>
            </div>

            <div className="contact-detail">
              <span><Instagram /></span>
              <div>
                <b>Follow along</b>
                <p>@blushbloombeauty</p>
              </div>
            </div>

            <div className="contact-detail">
              <span><MapPin /></span>
              <div>
                <b>Our little corner</b>
                <p>Online, everywhere you are</p>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-form-card">
              {sent ? (
                <div className="form-success">
                  <CheckCircle2 size={42} />

                  <h2>Thanks for reaching out!</h2>

                  <p>
                    Your message has been noted in this demo.
                    Connect a backend or email service to
                    receive real submissions.
                  </p>

                  <button
                    className="btn-blush"
                    onClick={resetForm}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label
                        className="form-label"
                        htmlFor="name"
                      >
                        Your name
                      </label>

                      <input
                        className="form-control soft-input"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={update}
                        required
                        placeholder="What should we call you?"
                      />
                    </div>

                    <div className="col-md-6">
                      <label
                        className="form-label"
                        htmlFor="email"
                      >
                        Email address
                      </label>

                      <input
                        className="form-control soft-input"
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={update}
                        required
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="col-12">
                      <label
                        className="form-label"
                        htmlFor="topic"
                      >
                        What's on your mind?
                      </label>

                      <select
                        className="form-select soft-input"
                        id="topic"
                        name="topic"
                        value={form.topic}
                        onChange={update}
                      >
                        <option>Product question</option>
                        <option>Order support</option>
                        <option>Shade advice</option>
                        <option>Just saying hi</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label
                        className="form-label"
                        htmlFor="message"
                      >
                        Your message
                      </label>

                      <textarea
                        className="form-control soft-input"
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={update}
                        required
                        placeholder="Tell us a little something..."
                      />
                    </div>

                    <div className="col-12">
                      <button
                        className="btn-blush"
                        type="submit"
                      >
                        Send your note ↗
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
