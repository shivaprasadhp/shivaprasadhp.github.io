'use client';

const STATS = [
  { num: '6', label: 'Years of cross-functional experience', sub: 'Edtech, SaaS and B2B sales across 4 companies' },
  { num: '4', label: 'Case studies', sub: 'Fintech, Marketplace, Escrow and Quick Commerce' },
  { num: '3', label: 'Domains explored', sub: 'Personal Finance, Trust & Safety, Hyperlocal Delivery' },
  { num: '2', label: 'Certifications', sub: 'AI Product Manager · HelloPM 2026 + Gen AI Mastermind · OutSkill' },
];

export default function Hero() {
  return (
    <section id="hero">
      {/* Top — name + photo */}
      <div className="container" style={{
        minHeight: '80vh',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '4rem',
        alignItems: 'center',
        paddingTop: '8rem',
        paddingBottom: '2rem',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p className="hero-greeting fade-up">Hello, I am</p>

          <h1 className="hero-title fade-up delay-1">
            Shivaprasad HP.<br />
            a <em>product-minded</em><br />
            professional.
          </h1>

          <p className="hero-sub fade-up delay-2">
            6 years understanding users, surfacing friction, and influencing
            roadmaps across edtech and SaaS. Certified AI PM — now building products with intent.
          </p>

          <div className="hero-actions fade-up delay-3">
            <a
              href="#projects"
              className="link-underline"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              See My Case Studies →
            </a>

            <a
              href="/Shivaprasad-HP.pdf"
              download
              className="link-underline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              Download Resume ↓
            </a>
          </div>

          <div className="hero-companies fade-up delay-4">
            <span className="hero-companies-label">worked with</span>
            {['Way.com', 'Vedantu', 'Extramarks', "BYJU'S"].map((c) => (
              <span key={c} className="company-pill">{c}</span>
            ))}
          </div>
        </div>

        <div className="hero-photo fade-up delay-2">
          <img src="/images/profile_pic.png" alt="Shivaprasad HP" />
        </div>
      </div>

      {/* Bottom — stats row */}
      <div className="container">
        <div className="hero-stats fade-up delay-3">
          {STATS.map((s) => (
            <div key={s.label} className="hero-stat-row">
              <span className="hero-stat-num">{s.num}</span>
              <div className="hero-stat-text">
                <span className="hero-stat-label">{s.label}</span>
                <span className="hero-stat-sub">{s.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
