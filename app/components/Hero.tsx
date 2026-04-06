'use client';

import { useEffect, useState } from 'react';

const CYCLE_WORDS = [
  'DISCOVER. VALIDATE. SHIP.',
  'USER FIRST. ALWAYS.',
  '0→1 BUILDER',
  'KILL THE FRICTION',
  'METRICS OVER OPINIONS',
  'RESEARCH-LED PM',
  'FROM INSIGHT TO IMPACT',
  'ASK WHY FIRST',
];

const STATS = [
  { num: '6+', label: 'Years cross-functional', sub: 'Edtech · SaaS · B2B across 4 companies' },
  { num: '5',  label: 'Case studies built',     sub: 'Fintech · Marketplace · Escrow · Quick Commerce · AI Infra' },
  { num: '4',  label: 'Domains explored',       sub: 'Personal Finance · Trust & Safety · Hyperlocal · AI Infrastructure' },
  { num: '2',  label: 'Certifications',         sub: 'AI PM · HelloPM 2026 + Gen AI Mastermind · OutSkill' },
];

const FOCUSES = [
  { label: 'Fintech',           desc: 'Personal finance visibility, subscription awareness, spend intelligence' },
  { label: 'Trust & Safety',    desc: 'Fraud reduction, escrow infrastructure, marketplace confidence' },
  { label: 'Quick Commerce',    desc: 'Unit economics, dark store efficiency, hyperlocal delivery' },
  { label: 'AI Infrastructure', desc: 'Local agent orchestration, private compute, zero-cost pipelines' },
];

const TOOLS = [
  { name: 'Figma',     icon: '/images/icons/figma.svg' },
  { name: 'Notion',    icon: '/images/icons/notion.svg' },
  { name: 'Slack',     icon: '/images/icons/slack.svg' },
  { name: 'Jira',      icon: '/images/icons/jira.svg' },
  { name: 'Amplitude', icon: '/images/icons/amplitude.svg' },
  { name: 'ChatGPT',   icon: '/images/icons/openai.svg' },
  { name: 'Mixpanel',  icon: '/images/icons/mixpanel.svg' },
  { name: 'GA4',       icon: '/images/icons/googleanalytics.svg' },
  { name: 'Cursor',    icon: null },
  { name: 'Claude',    icon: null },
  { name: 'LM Studio', icon: null },
  { name: 'Lovable',   icon: null },
  { name: 'ChatPRD',   icon: null },
];

function ToolItem({ name, icon }: { name: string; icon: string | null }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem', flexShrink: 0, width: '72px' }}>
      <div style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {icon ? (
          <img src={icon} alt={name} width={30} height={30} style={{ objectFit: 'contain' }} />
        ) : (
          <div style={{
            width: '30px', height: '30px', border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.4rem', fontFamily: 'var(--font-condensed)', fontWeight: 700,
            letterSpacing: '0.05em', textTransform: 'uppercase' as const,
            color: 'var(--text2)', textAlign: 'center' as const, lineHeight: 1.2, padding: '2px',
          }}>{name}</div>
        )}
      </div>
      <span style={{
        fontFamily: 'var(--font-condensed)', fontSize: '0.65rem', fontWeight: 600,
        letterSpacing: '0.1em', textTransform: 'uppercase' as const,
        color: 'var(--text2)', textAlign: 'center' as const, whiteSpace: 'nowrap',
      }}>{name}</span>
    </div>
  );
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % CYCLE_WORDS.length);
        setAnimating(false);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero">

      {/* ── FULL SCREEN HERO ── */}
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>

        {/* ── TOP BAR ── */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '6rem 3rem 0' }}>
          <div className="fade-up" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%', background: '#22c55e',
              boxShadow: '0 0 8px rgba(34,197,94,0.7)', display: 'inline-block', animation: 'dot-pulse 2s infinite',
            }} />
            <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text2)' }}>
              Available for PM roles
            </span>
          </div>
        </div>

        {/* ── MAIN CONTENT: LEFT BIO + RIGHT NAME/CTAs ── */}
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '3rem 3rem 2rem', alignItems: 'center' }}>

          {/* LEFT — about bio */}
          <div style={{ borderRight: '1px solid var(--border)', paddingRight: '4rem' }}>
            <p style={{
              fontFamily: 'var(--font-condensed)', fontSize: '0.65rem', fontWeight: 600,
              letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '2rem',
            }}>About</p>

            <p className="about-bio fade-up">
              I spend most of my time figuring out <strong>why things break</strong> before building fixes.
              Six years across edtech and SaaS gave me a ground-level view of how users actually behave —
              not how we assume they do.
            </p>
            <p className="about-bio fade-up delay-1">
              My work sits at the intersection of <strong>product thinking and operational reality</strong>.
              I&apos;ve built 0→1 concepts across fintech, marketplace trust, and quick commerce —
              from problem framing to prototype. Currently pursuing PM roles where
              <strong> discovery and systems thinking</strong> are valued over feature velocity.
            </p>

            <div className="about-badges fade-up delay-2" style={{ marginTop: '1.5rem' }}>
              {['0→1 Discovery', 'User Research', 'Fintech', 'Trust & Safety', 'Quick Commerce', 'AI Infrastructure'].map((b) => (
                <span key={b} className="badge"><span className="badge-dot" />{b}</span>
              ))}
            </div>
          </div>

          {/* RIGHT — name, tagline, CTAs */}
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
              Shivaprasad HP.<br /><em>0→1 product thinker.</em>
            </h1>

            <div className="hero-actions fade-up delay-1">
              <a href="#projects" className="link-underline"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                See Case Studies →
              </a>
              <a href="/Shivaprasad-HP.pdf" download className="link-muted">Download Resume ↓</a>
            </div>

            <div className="hero-companies fade-up delay-2" style={{ marginTop: '2.5rem' }}>
              <span className="hero-companies-label">worked with</span>
              {["Way.com", "Vedantu", "Extramarks", "BYJU'S"].map((c) => (
                <span key={c} className="company-pill">{c}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── CYCLING WORD BAR ── */}
        <div style={{
          borderTop: '1px solid var(--border)', overflow: 'hidden',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          minHeight: '120px', background: 'var(--surface)', position: 'relative',
        }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'var(--accent)' }} />
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: 'var(--text)',
            lineHeight: 1,
            opacity: animating ? 0 : 1,
            transform: animating ? 'translateY(12px)' : 'translateY(0)',
            transition: 'opacity 0.35s ease, transform 0.35s ease',
            whiteSpace: 'nowrap',
          }}>
            {CYCLE_WORDS[wordIndex]}
          </span>
        </div>

        {/* ── TOOLS MARQUEE ── */}
        <div style={{ background: 'var(--surface)', padding: '1.5rem 0 1.25rem', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--border)' }}>
          <p style={{
            fontFamily: 'var(--font-condensed)', fontSize: '0.6rem', fontWeight: 700,
            letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text2)',
            textAlign: 'center', marginBottom: '1.25rem',
          }}>Tools & Stack</p>
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to right, var(--surface), transparent)', zIndex: 2, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to left, var(--surface), transparent)', zIndex: 2, pointerEvents: 'none' }} />
            <div style={{ display: 'flex', gap: '3rem', animation: 'toolscroll 30s linear infinite', width: 'max-content', paddingLeft: '3rem' }}>
              {[...TOOLS, ...TOOLS].map((t, i) => <ToolItem key={i} name={t.name} icon={t.icon} />)}
            </div>
          </div>
        </div>

      </div>

      {/* ── STATS + FOCUS AREAS — id="about" for navbar ── */}
      <div id="about" style={{ scrollMarginTop: '6rem', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

            {/* LEFT — stats */}
            <div className="hero-stats fade-up">
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

            {/* RIGHT — focus areas */}
            <div className="fade-up delay-1">
              <p className="section-label-col" style={{ marginBottom: '1rem' }}>Focus areas</p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {FOCUSES.map((f, i) => (
                  <div key={f.label} style={{
                    display: 'grid', gridTemplateColumns: '130px 1fr', gap: '1.5rem',
                    alignItems: 'start', padding: '1rem 0', borderTop: '1px solid var(--border)',
                    ...(i === FOCUSES.length - 1 ? { borderBottom: '1px solid var(--border)' } : {}),
                  }}>
                    <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text)' }}>
                      {f.label}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.7 }}>{f.desc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes dot-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(34,197,94,0.7); }
          50% { opacity: 0.4; box-shadow: 0 0 3px rgba(34,197,94,0.3); }
        }
        @keyframes toolscroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hero-stat-text { display: flex; flex-direction: column; gap: 0.2rem; }
        @media (max-width: 960px) {
          #about > .container > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        @media (max-width: 768px) {
          #hero > div:first-child > div:nth-child(2) { grid-template-columns: 1fr !important; }
          #hero > div:first-child > div:nth-child(2) > div:first-child {
            border-right: none !important; border-bottom: 1px solid var(--border);
            padding-right: 0 !important; padding-bottom: 2rem;
          }
          #hero > div:first-child > div:nth-child(2) > div:last-child { padding-left: 0 !important; }
        }
      `}</style>
    </section>
  );
}
