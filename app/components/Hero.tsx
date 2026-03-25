'use client';

const STATS = [
  { num: '6', label: 'Years of cross-functional experience', sub: 'Edtech, SaaS and B2B sales across 4 companies' },
  { num: '4', label: 'Case studies', sub: 'Fintech, Marketplace, Escrow and Quick Commerce' },
  { num: '4', label: 'Domains explored', sub: 'Personal Finance, Trust & Safety, Hyperlocal Delivery, Quick Commerce' },
  { num: '2', label: 'Certifications', sub: 'AI Product Manager · HelloPM 2026 + Gen AI Mastermind · OutSkill' },
];

const CERTS = [
  { name: 'AI Product Manager', issuer: 'HelloPM · 2026', badge: 'Certified' },
  { name: 'Generative AI Mastermind', issuer: 'OutSkill · 2025', badge: 'Certified' },
  { name: 'MBA — International Business', issuer: 'LPU · 2016–2018', badge: 'Degree' },
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
            <em>0→1 product thinker.</em>
          </h1>

          <p className="hero-sub fade-up delay-2">
            Built 0→1 product concepts across fintech, trust & safety, and quick commerce — from user research to prototyping. Backed by 6+ years in edtech and SaaS, and an AI PM certification (HelloPM, 2026).
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
        </div>

        <div className="hero-photo fade-up delay-2">
          <img src="/images/profile_pic.png" alt="Shivaprasad HP" />
        </div>
      </div>

      {/* Bottom — stats + certs side by side */}
      <div className="container">

        {/* Worked with — full width above grid */}
        <div className="hero-companies fade-up" style={{ marginBottom: '2rem' }}>
          <span className="hero-companies-label">worked with</span>
          {['Way.com', 'Vedantu', 'Extramarks', "BYJU'S"].map((c) => (
            <span key={c} className="company-pill">{c}</span>
          ))}
        </div>

        <div id="about" style={{ scrollMarginTop: "6rem" }} className="hero-bottom-grid fade-up delay-1">

          {/* Left — stats */}
          <div className="hero-stats">
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

          {/* Right — certifications */}
          <div className="hero-certs">
            <p className="cert-title">Certifications & Education</p>
            <div className="cert-cards">
              {CERTS.map((c) => (
                <div key={c.name} className="cert-card">
                  <div className="cert-info">
                    <span className="cert-name">{c.name}</span>
                    <span className="cert-issuer">{c.issuer}</span>
                  </div>
                  <span className="cert-badge">{c.badge}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
