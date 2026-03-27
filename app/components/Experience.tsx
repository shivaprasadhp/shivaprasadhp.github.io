'use client';

const EXPERIENCE = [
  {
    company: 'Independent PM — Career Transition',
    location: 'Kerala',
    role: 'AI PM Certification & Product Case Studies',
    period: 'Aug 2024 – Present',
    bullets: [
      'Completed AI Product Manager certification (HelloPM, 2026) and Generative AI Mastermind (OutSkill, 2025).',
      'Built 4 end-to-end product case studies across fintech (Money Guard), marketplace trust (OLX), escrow infrastructure (SureLock), and quick commerce (Swiggy Instamart Society Mode).',
      'Designed and shipped interactive prototypes using Lovable and Google AI Studio.',
    ],
  },
  {
    company: 'Way.com',
    location: 'Kerala',
    role: 'Growth & Retention Manager',
    period: 'Jan 2022 – Jul 2024',
    bullets: [
      'Identified failure in confirmation email delivery across non-standard domains through user complaints and funnel analysis — partnered with internal teams to resolve, reducing repeat issue-related contacts.',
      'Analyzed cancellation patterns through call audits, identified key drop-off drivers, and translated insights into a retention framework adopted by CX and fed as structured inputs into product discussions.',
      'Identified untargeted app pitching as an adoption funnel friction point and redesigned the pitch around contextual triggers, improving conversion in the app install funnel.',
    ],
  },
  {
    company: 'Vedantu',
    location: 'Kerala',
    role: 'Business Development Manager',
    period: 'Jan 2021 – Dec 2021',
    bullets: [
      'Identified recurring drop-off patterns across pricing, trust, and feature gaps through 40+ monthly product demo audits — structured findings into a feedback framework guiding the sales team on customer decision barriers.',
      'Translated structured product friction insights from demo audits to management, ensuring customer signals were consistently documented and fed into product improvement discussions.',
    ],
  },
  {
    company: 'Extramarks Education',
    location: 'Bangalore',
    role: 'Assistant Manager',
    period: 'Jun 2019 – Dec 2020',
    bullets: [
      'Managed a team of 10 across product demos and user feedback collection while coordinating cross-functionally between sales, logistics, and operations.',
      'Standardized how customer insights were captured and escalated, contributing to onboarding process improvements across the platform.',
    ],
  },
  {
    company: "BYJU'S",
    location: 'Bangalore',
    role: 'Business Development Associate',
    period: 'Aug 2018 – May 2019',
    bullets: [
      'Analyzed user behavior across 150+ product demos, identifying recurring objections and feeding structured insights into the sales and product feedback process.',
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
              <ul className="exp-bullets">
                {e.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              <span className="exp-period">{e.period}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
