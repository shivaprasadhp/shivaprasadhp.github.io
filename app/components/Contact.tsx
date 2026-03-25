'use client';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <p className="section-label-col fade-up" style={{ marginBottom: '1.5rem' }}>get in touch</p>
        <h2 className="contact-title fade-up delay-1">
          open to the<br />right <em>opportunity.</em>
        </h2>
        <p className="contact-sub fade-up delay-2">
          Looking for product roles where discovery and empathy matter. Let&apos;s talk.
        </p>
        <div className="contact-links-row fade-up delay-3">
          <a href="mailto:shivaprasadhp@yahoo.com" className="contact-email">
            shivaprasadhp@yahoo.com
          </a>
          <a
            href="https://www.linkedin.com/in/shivaprasad-hp-220a00106"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social"
          >
            LinkedIn ↗
          </a>
          <a href="tel:+919496656647" className="contact-social">
            +91 94966 56647 ↗
          </a>
        </div>
      </div>
    </section>
  );
}
