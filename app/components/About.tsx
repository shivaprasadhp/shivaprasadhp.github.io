'use client';

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container">
        <div className="section-grid">

          <div className="section-label-col fade-up" style={{ position: 'sticky', top: '8rem' }}>
            About Me
          </div>

          <div className="fade-up delay-1">
            <p className="about-bio">
              I'm a <em>product-minded professional</em> who spent 6 years as the <strong>voice
              of the user</strong> inside sales and growth teams across edtech and SaaS —
              turning friction points into roadmap items and partner pain into product direction.
            </p>
            <p className="about-bio">
              In 2026, I made it official — completing my <strong>AI Product Manager</strong> certification
              from HelloPM and building case studies in fintech, hyperlocal delivery, and marketplace trust.
              Based in <strong>Kerala</strong>, open to relocate.
            </p>

            {/* Certifications */}
            <div className="cert-section">
              <p className="cert-title">Certifications & Education</p>
              <div className="cert-cards">
                <div className="cert-card">
                  <div className="cert-icon">🎓</div>
                  <div className="cert-info">
                    <span className="cert-name">AI Product Manager</span>
                    <span className="cert-issuer">HelloPM · 2026</span>
                  </div>
                  <span className="cert-badge">Certified</span>
                </div>
                <div className="cert-card">
                  <div className="cert-icon">🤖</div>
                  <div className="cert-info">
                    <span className="cert-name">Generative AI Mastermind</span>
                    <span className="cert-issuer">OutSkill</span>
                  </div>
                  <span className="cert-badge">Certified</span>
                </div>
                <div className="cert-card">
                  <div className="cert-icon">🏛️</div>
                  <div className="cert-info">
                    <span className="cert-name">MBA — International Business</span>
                    <span className="cert-issuer">LPU · 2016–2018</span>
                  </div>
                  <span className="cert-badge">Degree</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
