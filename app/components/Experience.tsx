'use client';

const EXPERIENCE = [
  {
    company: 'Way.com Kerala',
    role: 'Upsell Manager',
    period: 'Jan 2022 – Jul 2024',
    bullets: [
      'Managed upsell and retention across 30+ B2B partner accounts, driving conversion of free users to premium paid services and maintaining a 30–40% retention rate on at-risk accounts.',
      'Acted as the voice of the customer internally — logged and escalated recurring product complaints and usability issues from partners, several of which fed into product team discussions and feature updates.',
      'Owned client onboarding for new partners, identifying friction points in the process and working with internal teams to streamline activation workflows.',
    ],
  },
  {
    company: 'Vedantu Kerala',
    role: 'Business Development Manager',
    period: 'Jan 2021 – Dec 2021',
    bullets: [
      'Consistently exceeded sales quota through consultative conversations with students and parents, developing a strong instinct for understanding user motivations and decision barriers.',
      'Tracked CRM funnel data to spot drop-off patterns and flagged recurring objections to the team, contributing to process improvements in the conversion workflow.',
    ],
  },
  {
    company: 'Extramarks Education Bangalore',
    role: 'Assistant Manager',
    period: 'Jun 2019 – Dec 2020',
    bullets: [
      'Led sales and client onboarding for an edtech platform, gathering structured feedback from 300+ users on usability issues — findings contributed to an update of the onboarding process.',
      'Supported training initiatives for new team members on product knowledge and sales processes.',
    ],
  },
  {
    company: "BYJU'S Bangalore",
    role: 'Business Development Associate',
    period: 'Aug 2018 – May 2019',
    bullets: [
      'Conducted 150+ product demos and consultative sales calls, building deep familiarity with user learning preferences and common adoption challenges.',
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
            Where I've<br /><em>been.</em>
          </h2>
        </div>

        <div className="exp-rows">
          {EXPERIENCE.map((e, i) => (
            <div key={e.company} className={`exp-row fade-up delay-${(i % 3) + 1}`}>
              <div>
                <div className="exp-co">{e.company}</div>
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
