'use client';

import { useRouter } from 'next/navigation';

const PROJECTS = [
  {
    index: '01',
    role: 'Product Case Study',
    domainType: 'Fintech',
    productType: 'Consumer Feature',
    domain: 'Fintech · Personal Finance',
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
    role: 'Product Case Study',
    domainType: 'Trust & Safety',
    productType: 'Platform Feature',
    domain: 'Trust & Safety · Marketplace',
    title: 'OLX Trust & Safety',
    desc: 'P2P fraud was killing buyer confidence. I redesigned trust from the ground up.',
    slug: 'olx-trust-safety',
    tags: ['Marketplace', 'Trust', 'Payments'],
    prototypeUrl: '',
    tiles: [
      { label: 'Problem', value: 'High fraud rates eroding confidence in every transaction' },
      { label: 'Impact', value: 'Improved transaction completion while cutting fraud escalations' },
    ],
  },
  {
    index: '03',
    role: 'Product Case Study',
    domainType: 'Trust & Safety',
    productType: 'Platform Feature',
    domain: 'Enterprise Security',
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
    role: 'Product Case Study',
    domainType: 'Logistics',
    productType: 'Growth Strategy',
    domain: 'Quick Commerce · Logistics',
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

export default function Projects() {
  const router = useRouter();

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
              <div className="project-card-header">

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span className="project-index">{p.index}</span>
                    <span className="project-domain">{p.domain}</span>
                  </div>

                  <div className="project-domain">
                    {p.role} · {p.domainType} · {p.productType}
                  </div>
                </div>

                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>

              </div>

              <div className="project-card-body">
                <div className="project-title">{p.title}</div>
                <p className="project-desc">{p.desc}</p>
              </div>

              <div className="project-tiles">
                {p.tiles.map((tile) => (
                  <div key={tile.label} className="project-tile">
                    <span className="project-tile-label">{tile.label}</span>
                    <span className="project-tile-value">{tile.value}</span>
                  </div>
                ))}
              </div>

              <div className="project-card-actions">
                <button
                  className="btn-primary"
                  onClick={() => router.push(`/case-studies/${p.slug}`)}
                >
                  Read case study →
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
