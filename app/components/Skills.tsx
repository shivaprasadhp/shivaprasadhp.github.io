'use client';

const SKILLS = [
  {
    title: 'Strategy & Discovery',
    items: [
      'Product Strategy & Roadmaps',
      'User Research & Interviews',
      'Problem Validation',
      'PRD & Documentation',
      'Stakeholder Management',
    ],
  },
  {
    title: 'Analytics & Execution',
    items: [
      'Mixpanel & Google Analytics',
      'CRM Funnel Analysis',
      'Drop-off Identification',
      'Agile & Scrum',
      'Cross-functional Alignment',
    ],
  },
  {
    title: 'Tools & AI',
    items: [
      'Figma (Wireframing & Prototypes)',
      'ChatGPT, Claude, LM Studio',
      'Workflow Automation',
      'API Integration',
      'Notion, ChatPRD, Lovable',
    ],
  },
  {
    title: 'Frameworks',
    items: [
      'AARRR (Pirate Metrics)',
      'Jobs to be Done (JTBD)',
      'User Journey Mapping',
      'Problem Structuring',
      'North Star Metric',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container">

        <div className="section-label-col fade-up" style={{ marginBottom: '2rem' }}>skills</div>

        <div className="skills-cards fade-up delay-1">
          {SKILLS.map((group) => (
            <div key={group.title} className="skills-card">
              <h3 className="skills-card-title">{group.title}</h3>
              <ul className="skills-card-list">
                {group.items.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                    <span style={{ color: '#9f67ff', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
