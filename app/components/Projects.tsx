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
};

const PROJECTS: Project[] = [
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
    index: '03',
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
    index: '04',
    productType: 'Dev Tool / AI',
    title: 'Local AI Agent Orchestrator',
    desc: 'Enterprise AI tools demanded 10GB of bloatware. I built a private, zero-cost alternative from source.',
    slug: 'local-ai-agent-orchestrator',
    tags: ['AI', 'Privacy', 'DevTools'],
    prototypeUrl: '',
    externalUrl: 'https://gamma.app/public/n148ya7ctexkuqd',
    tiles: [
      { label: 'Problem', value: 'Standard AI coding agents required 6GB+ MSVC install — incompatible with a multi-language monorepo environment' },
      { label: 'Impact', value: '95% footprint reduction (10GB+ → <500MB), zero cloud dependency, $0/month running cost' },
    ],
  },
  {
    index: '05',
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

function ProjectRow({ p, index }: { p: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

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
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const href = p.externalUrl || `/case-studies/${p.slug}`;

  return (
    <div
      ref={ref}
      style={{
        borderTop: '1px solid var(--border)',
        ...(index === PROJECTS.length - 1 ? { borderBottom: '1px solid var(--border)' } : {}),
        transition: 'opacity 0.4s ease',
        opacity: expanded ? 1 : 0.3,
      }}
    >
      {/* Row header — always visible */}
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
          color: 'var(--accent)',
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
          color: 'var(--accent)',
          border: '1px solid rgba(232,18,28,0.3)',
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
            paddingBottom: '2rem',
          }}>
            {/* spacer for index column */}
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
                <a
                  href={href}
                  target={p.externalUrl ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {p.externalUrl ? 'View presentation →' : 'Read case study →'}
                </a>
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
              </div>
            </div>

            {/* Right — problem + impact tiles */}
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
                    color: 'var(--accent)',
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
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container">

        <div className="section-grid" style={{ marginBottom: '4rem' }}>
          <div className="section-label-col fade-up">Projects</div>
          <h2 className="section-heading fade-up delay-1">
            Products I&apos;ve<br /><em>Designed.</em>
          </h2>
        </div>

        <div>
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.title} p={p} index={i} />
          ))}
        </div>

        <div className="fade-up delay-2" style={{ marginTop: '4rem', textAlign: 'center' }}>
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
