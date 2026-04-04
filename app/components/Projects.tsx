'use client';


import Image from 'next/image';

const PROJECTS = [
  {
    index: '01',
    productType: 'Consumer Feature',
    title: 'Money Guard',
    desc: 'Most people don\'t know what they\'re paying for. I designed a fix.',
    slug: 'money-guard',
    thumbnail: '/images/thumb-money-guard.png',
    tags: ['Fintech', 'UX', 'Retention'],
    metrics: ['DAU retention', 'Alert CTR', 'Subscription cancellation rate'],
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
    thumbnail: '/images/thumb-olx-trust-safety.png',
    tags: ['Marketplace', 'Trust', 'Payments'],
    metrics: ['Dispute rate', 'Successful transaction %', 'Trust score adoption'],
    prototypeUrl: '',
    tiles: [
      { label: 'Problem', value: 'High fraud rates eroding confidence in every transaction' },
      { label: 'Impact', value: 'Improved transaction completion while cutting fraud escalations' },
    ],
  },
  {
    index: '03',
    productType: 'Platform Feature',
    title: 'SureLock',
    desc: 'High-value P2P trades had zero protection. I built the trust layer.',
    slug: 'surelock',
    thumbnail: '/images/thumb-surelock.png',
    tags: ['Escrow', 'B2B', 'Security'],
    metrics: ['Escrow adoption rate', 'Dispute resolution time', 'Payment release accuracy'],
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
    thumbnail: '/images/thumb-local-ai-agent.png',
    tags: ['AI', 'Privacy', 'DevTools'],
    metrics: ['Installation footprint', 'API cost', 'Data leakage'],
    accentColor: '#F5E642',
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
    thumbnail: '/images/thumb-swiggy-instamart.png',
    tags: ['Hyperlocal', 'Unit Economics', 'Strategy'],
    metrics: ['Cost per delivery', 'Cluster order density', 'Delivery time per zone'],
    prototypeUrl: '',
    tiles: [
      { label: 'Problem', value: 'Per-delivery costs unsustainable in dense residential clusters' },
      { label: 'Impact', value: 'Unit economics flipped from ₹30–70 loss to +₹20 profit' },
    ],
  },
];

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

        <div className="projects-cards">
          {PROJECTS.map((p, i) => (
            <div key={p.title} className={`project-card fade-up delay-${(i % 3) + 1}`}>

              {/* Thumbnail */}
              <div className="project-thumbnail">
                <Image
                  src={p.thumbnail}
                  alt={`${p.title} thumbnail`}
                  width={600}
                  height={338}
                  className="project-thumbnail-img"
                  priority={i < 2}
                />
              </div>

              {/* Tags + product type badge */}
              <div className="project-card-meta">
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
                <span className="project-type-badge">{p.productType}</span>
              </div>

              {/* Description */}
              <div className="project-card-body">
                <p className="project-desc">{p.desc}</p>
              </div>

              {/* Metrics */}
              <div className="project-metrics">
                <span className="project-metrics-label">Metrics</span>
                <div className="project-metrics-pills">
                  {p.metrics.map((m) => (
                    <span key={m} className="project-metric-pill">{m}</span>
                  ))}
                </div>
              </div>

              {/* Problem + Impact */}
              <div className="project-tiles">
                {p.tiles.map((tile) => (
                  <div key={tile.label} className="project-tile">
                    <span className="project-tile-label">{tile.label}</span>
                    <span className="project-tile-value">{tile.value}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="project-card-actions">
                <button
                  className="btn-primary"
                  onClick={() => { window.location.href = (p as any).externalUrl || `/case-studies/${p.slug}` }}
                >
                  {(p as any).externalUrl ? "View presentation →" : "Read case study →"}
                </button>

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
          ))}
        </div>

      </div>
    </section>
  );
}
