'use client';

type ExperienceEntry = {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
};

const EXPERIENCE: ExperienceEntry[] = [
  {
    company: 'AI Product Specialization & Projects',
    location: 'Kerala',
    role: 'AI Product Manager Training & Case Studies',
    period: '2024-Present',
    bullets: [
      'Completed AI Product Manager (HelloPM) and Gen AI Mastermind programs, building hands-on AI systems and product case studies.',
      'Built 4 end-to-end product case studies across fintech, marketplace trust, escrow, and quick commerce, each validated through primary user research (surveys + interviews) and structured problem framing.',
      'Designed interactive prototypes using Lovable and Google AI Studio, published publicly for recruiter and peer review.',
    ],
  },
  {
    company: 'Way.com',
    location: 'Kerala',
    role: 'Product Manager (Growth & Activation)',
    period: 'Jan 2022-Jul 2024',
    bullets: [
      'Owned activation funnel (install to task), improving conversion from under 15% to about 40-50%.',
      'Identified trust and effort barriers through user behavior and support insights.',
      'Built support-to-product conversion system (nudges + guided flows).',
      'Reduced drop-offs by 60%, increasing self-serve adoption.',
    ],
  },
  {
    company: 'Vedantu',
    location: 'Kerala',
    role: 'Product & Growth Associate',
    period: 'Jan 2021-Dec 2021',
    bullets: [
      'Identified pricing and trust concerns impacting conversion through user interactions.',
      'Built feedback loop to convert insights into product inputs, improving demo-to-conversion clarity.',
      'Surfaced recurring friction points across user journey for product prioritization.',
    ],
  },
  {
    company: 'Extramarks Education',
    location: 'Bangalore',
    role: 'Product Operations Associate',
    period: 'Jun 2019-Dec 2020',
    bullets: [
      'Structured insights from 100+ field interactions to identify recurring user pain points.',
      'Built a centralized system to surface patterns for product and sales teams.',
      'Improved visibility of user issues, enabling more targeted product decisions.',
    ],
  },
  {
    company: "BYJU'S",
    location: 'Bangalore',
    role: 'Business Development Associate',
    period: 'Aug 2018-May 2019',
    bullets: [
      'Analyzed 150+ demos to identify recurring objection patterns affecting conversion.',
      'Synthesized insights that informed product positioning and messaging improvements.',
    ],
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
              </div>
              <span className="exp-period">{e.period}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
