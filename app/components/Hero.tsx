'use client';

const CYCLE_WORDS = [
  'PRODUCT THINKING',
  'SYSTEMS DESIGN',
  'USER DISCOVERY',
  'FINTECH',
  'TRUST & SAFETY',
  'QUICK COMMERCE',
  'AI INFRASTRUCTURE',
  '0→1 BUILDER',
];

const FOCUS_AREAS = [
  { num: '01', label: 'FINTECH' },
  { num: '02', label: 'TRUST & SAFETY' },
  { num: '03', label: 'QUICK COMMERCE' },
  { num: '04', label: 'AI INFRASTRUCTURE' },
];

const STATS = [
  { num: '6+', label: 'Years cross-functional', sub: 'Edtech · SaaS · B2B across 4 companies' },
  { num: '5', label: 'Case studies built', sub: 'Fintech · Marketplace · Escrow · Quick Commerce · AI Infra' },
  { num: '4', label: 'Domains explored', sub: 'Personal Finance · Trust & Safety · Hyperlocal · AI Infrastructure' },
  { num: '2', label: 'Certifications', sub: 'AI PM · HelloPM 2026 + Gen AI Mastermind · OutSkill' },
];

const TOOLS = [
  { name: 'Figma',       icon: '⬡' },
  { name: 'Notion',      icon: '◻' },
  { name: 'Mixpanel',    icon: '◈' },
  { name: 'ChatGPT',     icon: '◎' },
  { name: 'Claude',      icon: '◇' },
  { name: 'LM Studio',   icon: '◆' },
  { name: 'Lovable',     icon: '◉' },
  { name: 'GA4',         icon: '◐' },
  { name: 'Amplitude',   icon: '▷' },
  { name: 'Jira',        icon: '◳' },
  { name: 'Slack',       icon: '◑' },
  { name: 'ChatPRD',     icon: '◁' },
];

export default function Hero() {
  return (
    <section id="hero">

      {/* ── VERTICAL TICKER — fixed left side ── */}
      <div style={{
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        width: '2rem',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          transform: 'rotate(-90deg)',
          whiteSpace: 'nowrap',
          animation: 'vticker 20s linear infinite',
        }}>
          {[...CYCLE_WORDS, ...CYCLE_WORDS].map((w, i) => (
            <span key={i} style={{
              fontFamily: 'var(--font-condensed)',
              fontSize: '0.55rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--text3)',
            }}>
              {w}
              <span style={{ color: 'var(--accent)', marginLeft: '1.5rem' }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── FULL SCREEN HERO ── */}
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* ── TOP BAR ── */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '6rem 3rem 0',
        }}>
          <p className="hero-eyebrow fade-up">Product Manager · Kerala, India</p>
          <div className="fade-up delay-1" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#22c55e',
              boxShadow: '0 0 8px rgba(34,197,94,0.7)',
              display: 'inline-block',
              animation: 'dot-pulse 2s infinite',
            }} />
            <span style={{
              fontFamily: 'var(--font-condensed)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text2)',
            }}>Available for PM roles</span>
          </div>
        </div>

        {/* ── MAIN CONTENT: LEFT LIST + RIGHT TEXT ── */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          padding: '3rem 3rem 2rem',
          alignItems: 'center',
        }}>

          {/* LEFT — numbered focus areas */}
          <div style={{ borderRight: '1px solid var(--border)', paddingRight: '4rem' }}>
            <p style={{
              fontFamily: 'var(--font-condensed)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--text2)',
              marginBottom: '2rem',
            }}>Focus Areas</p>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {FOCUS_AREAS.map((f, i) => (
                <div
                  key={f.label}
                  className={`fade-up delay-${i + 1}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    padding: '1.5rem 0',
                    borderTop: '1px solid var(--border)',
                    ...(i === FOCUS_AREAS.length - 1 ? { borderBottom: '1px solid var(--border)' } : {}),
                    transition: 'opacity 0.2s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.4')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  <span style={{
                    fontFamily: 'var(--font-condensed)',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    color: 'var(--accent)',
                    flexShrink: 0,
                  }}>{f.num}</span>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: 'var(--text)',
                    lineHeight: 1,
                  }}>{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — positioning text + CTAs */}
          <div style={{ paddingLeft: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
              <div style={{ width: '180px', height: '220px', overflow: 'hidden', flexShrink: 0 }}>
                <img
                  src="/images/profile_pic.png"
                  alt="Shivaprasad HP"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'grayscale(15%)' }}
                />
              </div>
            </div>

            <h1 className="hero-title fade-up" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', marginBottom: '2rem' }}>
              Shivaprasad HP.<br />
              <em>0→1 product thinker.</em>
            </h1>

            <p className="hero-sub fade-up delay-1">
              Built 0→1 product concepts across fintech, trust & safety, and quick commerce — from user research to prototyping. Backed by 6+ years in edtech and SaaS, and an AI PM certification (HelloPM, 2026).
            </p>

            <div className="hero-actions fade-up delay-2">
              <a
                href="#projects"
                className="link-underline"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                See Case Studies →
              </a>
              <a href="/Shivaprasad-HP.pdf" download className="link-muted">
                Download Resume ↓
              </a>
            </div>

            <div className="hero-companies fade-up delay-3" style={{ marginTop: '2.5rem' }}>
              <span className="hero-companies-label">worked with</span>
              {["Way.com", "Vedantu", "Extramarks", "BYJU'S"].map((c) => (
                <span key={c} className="company-pill">{c}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM — tools marquee ── */}
        <div style={{
          borderTop: '1px solid var(--border)',
          overflow: 'hidden',
          background: 'var(--surface)',
          padding: '1.5rem 0',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            left: 0, top: 0, bottom: 0,
            width: '4px',
            background: 'var(--accent)',
          }} />

          {/* label */}
          <p style={{
            fontFamily: 'var(--font-condensed)',
            fontSize: '0.55rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--text3)',
            textAlign: 'center',
            marginBottom: '1rem',
          }}>Tools & Stack</p>

          {/* scrolling icons row */}
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <div style={{
              display: 'flex',
              gap: '3rem',
              animation: 'toolscroll 22s linear infinite',
              width: 'max-content',
            }}>
              {[...TOOLS, ...TOOLS].map((t, i) => (
                <div key={i} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.4rem',
                  flexShrink: 0,
                }}>
                  <span style={{
                    fontSize: '1.4rem',
                    color: 'var(--text2)',
                    lineHeight: 1,
                  }}>{t.icon}</span>
                  <span style={{
                    fontFamily: 'var(--font-condensed)',
                    fontSize: '0.6rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text3)',
                  }}>{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ── STATS ── */}
      <div className="container" style={{ scrollMarginTop: '6rem' }}>
        <div className="hero-bottom-grid fade-up delay-1">
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
        </div>
      </div>

      <style>{`
        @keyframes dot-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(34,197,94,0.7); }
          50% { opacity: 0.4; box-shadow: 0 0 3px rgba(34,197,94,0.3); }
        }
        @keyframes vticker {
          0%   { transform: rotate(-90deg) translateX(0); }
          100% { transform: rotate(-90deg) translateX(-50%); }
        }
        @keyframes toolscroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hero-stat-text {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        @media (max-width: 768px) {
          #hero > div:first-child > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
          #hero > div:first-child > div:nth-child(2) > div:first-child {
            border-right: none !important;
            border-bottom: 1px solid var(--border);
            padding-right: 0 !important;
            padding-bottom: 2rem;
          }
          #hero > div:first-child > div:nth-child(2) > div:last-child {
            padding-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
