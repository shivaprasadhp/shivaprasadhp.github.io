'use client';

import { useEffect, useRef, useState } from 'react';

type Project = {
  index: string;
  productType: string;
  title: string;
  desc: string;
  slug: string;
  tags: string[];
  prototypeUrl: string;
  tiles: { label: string; value: string }[];
  externalUrl?: string;
  embedUrl?: string;
  videoUrl?: string;
};

const BUILT: Project[] = [
  {
    index: '01',
    productType: 'Consumer Feature',
    title: 'Money Guard',
    desc: 'Most people don\'t know what they\'re paying for. I designed a fix.',
    slug: 'money-guard',
    tags: ['Fintech', 'UX', 'Retention'],
    prototypeUrl: 'https://ai.studio/apps/drive/1DLlQP3prwFAPYY49cRBBPqr22LZxnK7T?fullscreenApplet=true',
    tiles: [
      { label: 'Problem', value: 'Silent subscriptions draining users monthly — 63–75% unaware' },
      { label: 'Impact', value: '30-day spend visibility surfaced hidden renewals before they hit' },
    ],
  },
  {
    index: '02',
    productType: 'Dev Tool / AI',
    title: 'Local AI Agent Orchestrator',
    desc: 'Enterprise AI tools demanded 10GB of bloatware. I built a private, zero-cost alternative from source.',
    slug: 'local-ai-agent-orchestrator',
    tags: ['AI', 'Privacy', 'DevTools'],
    prototypeUrl: '',
    tiles: [
      { label: 'Problem', value: 'Standard AI coding agents required 6GB+ MSVC install — incompatible with a multi-language monorepo environment' },
      { label: 'Impact', value: '95% footprint reduction (10GB+ → <500MB), zero cloud dependency, $0/month running cost' },
    ],
  },
  {
    index: '03',
    productType: 'Dev Tool / AI',
    title: 'Screenly AI',
    desc: 'Evaluating 10+ JDs a day manually was costing hours. I built a local AI system that does it in under 2 minutes.',
    slug: 'screenly-ai',
    tags: ['AI', 'Product Ops', 'DevTools'],
    prototypeUrl: '',
    videoUrl: '/Videos/screenly-ai-demo.mp4',
    tiles: [
      { label: 'Problem', value: 'No structured way to score JD fit, tailor applications, or track decisions across 10+ roles per day' },
      { label: 'Impact', value: 'Local AI pipeline scores fit, generates tailored resume summaries, interview stories and outreach drafts — zero API cost, zero data leakage' },
    ],
  },
];

const CASE_STUDIES: Project[] = [
  {
    index: '01',
    productType: 'Platform Feature',
    title: 'OLX Trust & Safety',
    desc: 'P2P fraud was killing buyer confidence. I redesigned trust from the ground up.',
    slug: 'olx-trust-safety',
    tags: ['Marketplace', 'Trust', 'Payments'],
    prototypeUrl: '',
    tiles: [
      { label: 'Problem', value: 'High fraud rates eroding confidence in every transaction' },
      { label: 'Impact', value: '~25% estimated drop in fraud escalations (modeled); improved transaction completion across P2P flows' },
    ],
  },
  {
    index: '02',
    productType: 'Platform Feature',
    title: 'SureLock',
    desc: 'High-value P2P trades had zero protection. I built the trust layer.',
    slug: 'surelock',
    tags: ['Escrow', 'B2B', 'Security'],
    prototypeUrl: 'https://escrow-buddy-modes.lovable.app',
    tiles: [
      { label: 'Problem', value: 'Payments released before delivery — no recourse for buyers' },
      { label: 'Impact', value: '~60% reduction in fraud & disputes with only ~2% appeal rate' },
    ],
  },
  {
    index: '03',
    productType: 'Growth Strategy',
    title: 'Swiggy Instamart — Society Mode',
    desc: 'Dark stores were bleeding money on last-mile. I rethought the model.',
    slug: 'swiggy-instamart',
    tags: ['Hyperlocal', 'Unit Economics', 'Strategy'],
    prototypeUrl: '',
    tiles: [
      { label: 'Problem', value: 'Per-delivery costs unsustainable in dense residential clusters' },
      { label: 'Impact', value: 'Unit economics flipped from ₹30–70 loss to +₹20 profit' },
    ],
  },
];

function ProjectRow({
  p,
  isLast,
  accentColor,
}: {
  p: Project;
  isLast: boolean;
  accentColor: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setExpanded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const href = p.externalUrl ? p.externalUrl : `/case-studies/${p.slug}`;

  return (
    <div
      ref={ref}
      style={{
        borderTop: '1px solid var(--border)',
        ...(isLast ? { borderBottom: '1px solid var(--border)' } : {}),
        transition: 'opacity 0.4s ease',
        opacity: expanded ? 1 : 0.3,
      }}
    >
      {/* Row header */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '3rem 1fr auto auto',
        gap: '2rem',
        alignItems: 'center',
        padding: '1.75rem 0',
      }}>
        <span style={{
          fontFamily: 'var(--font-condensed)',
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.14em',
          color: accentColor,
        }}>{p.index}</span>

        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          color: 'var(--text)',
          lineHeight: 1,
        }}>{p.title}</span>

        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {p.tags.map((t) => (
            <span key={t} style={{
              fontFamily: 'var(--font-condensed)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text2)',
              border: '1px solid var(--border)',
              padding: '0.2rem 0.55rem',
            }}>{t}</span>
          ))}
        </div>

        <span style={{
          fontFamily: 'var(--font-condensed)',
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: accentColor,
          border: `1px solid ${accentColor === 'var(--accent)' ? 'rgba(232,18,28,0.3)' : 'rgba(255,255,255,0.15)'}`,
          padding: '0.2rem 0.6rem',
          whiteSpace: 'nowrap',
        }}>{p.productType}</span>
      </div>

      {/* Expandable detail */}
      <div style={{
        display: 'grid',
        gridTemplateRows: expanded ? '1fr' : '0fr',
        transition: 'grid-template-rows 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <div style={{ overflow: 'hidden' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '3rem 1fr 1fr',
            gap: '2rem',
            paddingBottom: p.embedUrl || p.videoUrl ? '1.5rem' : '2rem',
          }}>
            <div />

            {/* Left — desc + actions */}
            <div>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--text2)',
                lineHeight: 1.75,
                marginBottom: '1.5rem',
              }}>{p.desc}</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {p.embedUrl ? (
                  <button
                    onClick={() => setShowEmbed(v => !v)}
                    className="btn-primary"
                    style={{ cursor: 'pointer', border: 'none', background: 'none' }}
                  >
                    {showEmbed ? 'Hide presentation ↑' : 'View presentation ↓'}
                  </button>
                ) : (
                  <a
                    href={href}
                    target={p.externalUrl ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    {p.externalUrl ? 'View presentation →' : 'Read case study →'}
                  </a>
                )}
                {p.prototypeUrl && (
                  <a
                    href={p.prototypeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    View prototype ↗
                  </a>
                )}
                {p.videoUrl && (
                  <button
                    onClick={() => setShowVideo(v => !v)}
                    className="btn-outline"
                    style={{ cursor: 'pointer' }}
                  >
                    {showVideo ? 'Hide demo ↑' : 'Watch demo ↓'}
                  </button>
                )}
              </div>
            </div>

            {/* Right — tiles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {p.tiles.map((tile) => (
                <div key={tile.label} style={{
                  padding: '0.85rem 1rem',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.3rem',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-condensed)',
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: accentColor,
                  }}>{tile.label}</span>
                  <span style={{
                    fontSize: '0.85rem',
                    color: 'var(--text2)',
                    lineHeight: 1.55,
                  }}>{tile.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inline embed */}
          {p.embedUrl && (
            <div style={{
              display: 'grid',
              gridTemplateRows: showEmbed ? '1fr' : '0fr',
              transition: 'grid-template-rows 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              marginLeft: '5rem',
              marginBottom: showEmbed ? '2rem' : 0,
            }}>
              <div style={{ overflow: 'hidden' }}>
                <iframe
                  src={p.embedUrl}
                  style={{
                    width: '100%',
                    height: '480px',
                    border: '1px solid var(--border)',
                    display: 'block',
                    marginTop: '0.5rem',
                  }}
                  allow="fullscreen"
                  title={p.title}
                />
              </div>
            </div>
          )}
          {p.videoUrl && (
            <div style={{
              display: 'grid',
              gridTemplateRows: showVideo ? '1fr' : '0fr',
              transition: 'grid-template-rows 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              marginLeft: '5rem',
              marginBottom: showVideo ? '2rem' : 0,
            }}>
              <div style={{ overflow: 'hidden' }}>
                <video
                  controls
                  preload="metadata"
                  style={{
                    width: '100%',
                    maxHeight: '540px',
                    border: '1px solid var(--border)',
                    display: 'block',
                    marginTop: '0.5rem',
                    background: '#000',
                  }}
                  title={`${p.title} demo`}
                >
                  <source src={p.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function GroupHeader({ label, heading, count }: { label: string; heading: string; count: number }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '3rem 1fr auto',
      alignItems: 'end',
      gap: '2rem',
      paddingBottom: '1rem',
      borderBottom: '1px solid var(--border)',
      marginBottom: 0,
    }}>
      <span style={{
        fontFamily: 'var(--font-condensed)',
        fontSize: '0.6rem',
        fontWeight: 700,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--text2)',
        opacity: 0.5,
        paddingBottom: '0.1rem',
      }}>{label}</span>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--text)',
        lineHeight: 1,
      }}>{heading}</span>
      <span style={{
        fontFamily: 'var(--font-condensed)',
        fontSize: '0.6rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--text2)',
        opacity: 0.4,
      }}>{count} project{count !== 1 ? 's' : ''}</span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container">

        {/* Section heading */}
        <div className="section-grid" style={{ marginBottom: '4rem' }}>
          <div className="section-label-col fade-up">Projects</div>
          <h2 className="section-heading fade-up delay-1">
            Products I&apos;ve<br /><em>Built &amp; Designed.</em>
          </h2>
        </div>

        {/* Group 1 — Built & Shipped */}
        <div style={{ marginBottom: '5rem' }}>
          <GroupHeader label="Group 01" heading="Built &amp; Shipped" count={BUILT.length} />
          {BUILT.map((p, i) => (
            <ProjectRow
              key={p.title}
              p={p}
              isLast={i === BUILT.length - 1}
              accentColor="var(--accent)"
            />
          ))}
        </div>

        {/* Group 2 — Case Studies */}
        <div style={{ marginBottom: '5rem' }}>
          <GroupHeader label="Group 02" heading="Case Studies" count={CASE_STUDIES.length} />
          {CASE_STUDIES.map((p, i) => (
            <ProjectRow
              key={p.title}
              p={p}
              isLast={i === CASE_STUDIES.length - 1}
              accentColor="var(--text2)"
            />
          ))}
        </div>

        {/* CTA */}
        <div className="fade-up delay-2" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text2)', marginBottom: '1rem' }}>
            Want to dig into the thinking behind these?
          </p>
          <a href="#contact" className="btn-primary" style={{ display: 'inline-block' }}>
            Let&apos;s talk →
          </a>
        </div>

      </div>
    </section>
  );
}
