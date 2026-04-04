'use client';

const FOCUSES = [
  { label: 'Fintech', desc: 'Personal finance visibility, subscription awareness, spend intelligence' },
  { label: 'Trust & Safety', desc: 'Fraud reduction, escrow infrastructure, marketplace confidence' },
  { label: 'Quick Commerce', desc: 'Unit economics, dark store efficiency, hyperlocal delivery' },
  { label: 'AI Infrastructure', desc: 'Local agent orchestration, private compute, zero-cost pipelines' },
];

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ scrollMarginTop: '6rem' }}>
      <div className="container">

        <div className="section-grid" style={{ marginBottom: '4rem' }}>
          <div className="section-label-col fade-up">About</div>
          <h2 className="section-heading fade-up delay-1">
            Systems<br /><em>thinker.</em>
          </h2>
        </div>

        <div className="about-two-col fade-up delay-2">
          <div>
            <p className="about-bio">
              I spend most of my time figuring out <strong>why things break</strong> before building fixes. 
              Six years across edtech and SaaS gave me a ground-level view of how users actually behave — 
              not how we assume they do.
            </p>
            <p className="about-bio">
              My work sits at the intersection of <strong>product thinking and operational reality</strong>. 
              I&apos;ve built 0→1 concepts across fintech, marketplace trust, and quick commerce — 
              from problem framing to prototype. Currently pursuing PM roles where 
              <strong> discovery and systems thinking</strong> are valued over feature velocity.
            </p>
            <div className="about-badges" style={{ marginTop: '1.5rem' }}>
              {['0→1 Discovery', 'User Research', 'Fintech', 'Trust & Safety', 'Quick Commerce', 'AI Infrastructure'].map((b) => (
                <span key={b} className="badge">
                  <span className="badge-dot" />
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="section-label-col" style={{ marginBottom: '1.25rem' }}>Focus areas</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {FOCUSES.map((f, i) => (
                <div
                  key={f.label}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '120px 1fr',
                    gap: '2rem',
                    alignItems: 'start',
                    padding: '1.25rem 0',
                    borderTop: '1px solid var(--border)',
                    ...(i === FOCUSES.length - 1 ? { borderBottom: '1px solid var(--border)' } : {}),
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-condensed)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text)',
                  }}>
                    {f.label}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.7 }}>
                    {f.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
