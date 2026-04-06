'use client';

const SKILLS = [
  {
    num: '01',
    title: 'Strategy & Discovery',
    items: ['Product Strategy & Roadmaps', 'User Research & Interviews', 'Problem Validation', 'PRD & Documentation', 'Stakeholder Management'],
  },
  {
    num: '02',
    title: 'Analytics & Execution',
    items: ['Mixpanel & Google Analytics', 'CRM Funnel Analysis', 'Drop-off Identification', 'Agile & Scrum', 'Cross-functional Alignment'],
  },
  {
    num: '03',
    title: 'Tools & AI',
    items: ['Figma (Wireframing & Prototypes)', 'ChatGPT, Claude, LM Studio', 'Workflow Automation', 'API Integration', 'Notion, ChatPRD, Lovable'],
  },
  {
    num: '04',
    title: 'Frameworks',
    items: ['AARRR (Pirate Metrics)', 'Jobs to be Done (JTBD)', 'User Journey Mapping', 'Problem Structuring', 'North Star Metric'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container">

        <div className="section-grid" style={{ marginBottom: '4rem' }}>
          <div className="section-label-col fade-up">Skills</div>
          <h2 className="section-heading fade-up delay-1">
            How I<br /><em>work.</em>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {SKILLS.map((s, i) => (
            <div
              key={s.title}
              className={`fade-up delay-${i + 1}`}
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr 1fr',
                gap: '3rem',
                alignItems: 'start',
                padding: '2.5rem 0',
                borderTop: '1px solid var(--border)',
                ...(i === SKILLS.length - 1 ? { borderBottom: '1px solid var(--border)' } : {}),
              }}
            >
              {/* Number */}
              <span style={{
                fontFamily: 'var(--font-condensed)',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                color: 'var(--accent)',
                paddingTop: '0.4rem',
              }}>{s.num}</span>

              {/* Title */}
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: 'var(--text)',
                lineHeight: 1,
              }}>{s.title}</div>

              {/* Items */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '0.35rem' }}>
                {s.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: 'var(--font-condensed)',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text2)',
                      border: '1px solid var(--border)',
                      padding: '0.4rem 1rem',
                      transition: 'color 0.2s, border-color 0.2s',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      (e.target as HTMLElement).style.color = 'var(--text)';
                      (e.target as HTMLElement).style.borderColor = 'var(--border-hover)';
                    }}
                    onMouseLeave={e => {
                      (e.target as HTMLElement).style.color = 'var(--text2)';
                      (e.target as HTMLElement).style.borderColor = 'var(--border)';
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
