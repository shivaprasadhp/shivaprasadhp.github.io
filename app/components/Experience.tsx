'use client';

type ExperienceEntry = {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
  reflection: string;
};

const EXPERIENCE: ExperienceEntry[] = [
  {
    company: 'Product Portfolio & Prototyping',
    location: 'Kerala',
    role: 'Independent PM & Product Designer',
    period: 'Aug 2024 – Present',
    bullets: [
      'Built 5 end-to-end product case studies across fintech, marketplace trust, escrow, and quick commerce — each validated through primary user research (surveys + interviews) and structured problem framing.',
      'Designed interactive prototypes using Lovable and Google AI Studio, published publicly for recruiter and peer review.',
      'Completed AI Product Manager certification (HelloPM, 2026) and Generative AI Mastermind (OutSkill, 2025).',
    ],
    reflection: "Choosing to build in public rather than just apply — because case studies that ship are more credible than slide decks that don't.",
  },
  {
    company: 'Way.com',
    location: 'Kerala',
    role: 'Growth & Retention Product Operations',
    period: 'Jan 2022 – Jul 2024',
    bullets: [
      'Investigated the activation funnel to identify drop-off points and root causes, partnering with engineering to resolve recurring issues and reduce repeat support contacts over time.',
      'Listened to 50+ user calls to understand churn reasons and translated patterns into a retention playbook adopted by CX and fed as structured inputs into product discussions.',
      'Improved activation by shifting notifications from generic timing to user-intent-based triggers, improving conversion in the app install funnel.',
    ],
    reflection: 'This is where I learned that product feedback loops only work if someone does the hard work of translating user signals into structured inputs — and I made that my job.',
  },
  {
    company: 'Vedantu',
    location: 'Kerala',
    role: 'Business Development Manager',
    period: 'Jan 2021 – Dec 2021',
    bullets: [
      'Spoke with users regularly to understand concerns around pricing and trust, sharing structured insights with product teams to inform decision-making.',
      'Built a feedback loop to capture patterns from demos and surface recurring friction — findings fed into product and sales positioning improvements.',
    ],
    reflection: 'Taught me how to find patterns in qualitative noise — consistent conversations with users is a lot of signal if you know what to listen for.',
  },
  {
    company: 'Extramarks Education',
    location: 'Bangalore',
    role: 'Assistant Manager',
    period: 'Jun 2019 – Dec 2020',
    bullets: [
      'Led a team of 10 across product demos and user feedback collection, coordinating cross-functionally between sales, logistics, and operations.',
      'Built a shared system to organize recurring patterns from field interactions, contributing to onboarding process improvements for product and sales teams.',
    ],
    reflection: "Running a team while staying close to users taught me that good process and good empathy aren't in conflict — they reinforce each other.",
  },
  {
    company: "BYJU'S",
    location: 'Bangalore',
    role: 'Business Development Associate',
    period: 'Aug 2018 – May 2019',
    bullets: [
      'Tracked objection patterns across 150+ demos and flagged recurring themes — findings fed into product refinements and helped shape how the sales team positioned the product.',
    ],
    reflection: 'Where it started — sitting across from users every day and noticing that the same friction kept showing up. That pattern-recognition instinct never left.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container">

        <div className="section-grid" style={{ marginBottom: '4rem' }}>
          <div className="section-label-col fade-up">Experience</div>
          <h2 className="section-heading fade-up delay-1">
            Where I&apos;ve<br /><em>been.</em>
          </h2>
        </div>

        <div className="exp-rows">
          {EXPERIENCE.map((e, i) => (
            <div key={e.company} className={`exp-row fade-up delay-${(i % 3) + 1}`}>
              <div>
                <div className="exp-co">{e.company}</div>
                {e.location && <div className="exp-location">{e.location}</div>}
                <div className="exp-role-label">{e.role}</div>
              </div>
              <div>
                <ul className="exp-bullets">
                  {e.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <p style={{
                  marginTop: '0.85rem',
                  fontSize: '0.8rem',
                  fontStyle: 'italic',
                  color: 'var(--text2)',
                  lineHeight: 1.6,
                  borderLeft: '2px solid var(--border)',
                  paddingLeft: '0.75rem',
                }}>
                  {e.reflection}
                </p>
              </div>
              <span className="exp-period">{e.period}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
