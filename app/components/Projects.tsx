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
    desc: 'Subscription leakage prevention — giving users visibility into auto-renewals, renewal alerts, and spend tracking.',
    slug: 'money-guard',
    tags: ['Fintech', 'UX', 'Retention'],
    prototypeUrl: 'https://ai.studio/apps/drive/1DLlQP3prwFAPYY49cRBBPqr22LZxnK7T?fullscreenApplet=true',
    tiles: [
      { label: 'Problem', value: 'Users unaware of silent subscription charges bleeding monthly spend' },
      { label: 'Metrics', value: 'DAU retention, subscription cancellation rate, alert CTR' },
      { label: 'Impact', value: 'Reduced unnoticed renewals by surfacing 30-day spend visibility' },
    ],
  },
  {
    index: '02',
    role: 'Product Case Study',
    domainType: 'Trust & Safety',
    productType: 'Platform Feature',
    domain: 'Trust & Safety · Marketplace',
    title: 'OLX Trust & Safety',
    desc: 'Improving peer-to-peer marketplace trust while preserving liquidity for both buyers and sellers.',
    slug: 'olx-trust-safety',
    tags: ['Marketplace', 'Trust', 'Payments'],
    prototypeUrl: '',
    tiles: [
      { label: 'Problem', value: 'High fraud rates eroding buyer confidence in P2P transactions' },
      { label: 'Metrics', value: 'Dispute rate, successful transaction %, trust score adoption' },
      { label: 'Impact', value: 'Improved transaction completion while reducing fraud escalations' },
    ],
  },
  {
    index: '03',
    role: 'Product Case Study',
    domainType: 'Trust & Safety',
    productType: 'Platform Feature',
    domain: 'Enterprise Security',
    title: 'SureLock',
    desc: 'Partial escrow mechanism for P2P transactions with staged payment release based on delivery confirmation.',
    slug: 'surelock',
    tags: ['Escrow', 'B2B', 'Security'],
    prototypeUrl: 'https://escrow-buddy-modes.lovable.app',
    tiles: [
      { label: 'Problem', value: 'No trust layer for high-value P2P exchanges — payments released before delivery confirmed' },
      { label: 'Metrics', value: 'Escrow adoption rate, dispute resolution time, payment release accuracy' },
      { label: 'Impact', value: 'Staged release model reduced payment disputes in pilot transactions' },
    ],
  },
  {
    index: '04',
    role: 'Product Case Study',
    domainType: 'Logistics',
    productType: 'Growth Strategy',
    domain: 'Quick Commerce · Logistics',
    title: 'Swiggy Instamart — Society Mode',
    desc: 'Micro-fulfillment model consolidating deliveries within residential clusters to improve unit economics.',
    slug: 'swiggy-instamart',
    tags: ['Hyperlocal', 'Unit Economics', 'Strategy'],
    prototypeUrl: '',
    tiles: [
      { label: 'Problem', value: 'Delivery costs too high for dense residential clusters' },
      { label: 'Metrics', value: 'Cost per delivery, cluster order density, delivery time per zone' },
      { label: 'Impact', value: 'Consolidated delivery model improved per-order margin in pilot zones' },
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
            Products I've<br />thought <em>about.</em>
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
