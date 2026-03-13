'use client';

import { useState } from 'react';

const SKILLS = [
  {
    emoji: '🎯',
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
    emoji: '📊',
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
    emoji: '🛠️',
    title: 'Tools & AI',
    items: [
      'Figma (Wireframing & Prototypes)',
      'ChatGPT, Claude, LM Studio',
      'Workflow Automation',
      'API Integration',
      'Notion, ChatPRD, Lovable',
    ],
  },
];

function SkillPill({ item }: { item: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: '0.88rem',
        color: hovered ? '#9f67ff' : '#b0b0bc',
        background: hovered ? 'rgba(124,58,237,0.08)' : 'transparent',
        border: `1px solid ${hovered ? 'rgba(124,58,237,0.5)' : 'rgba(124,58,237,0.2)'}`,
        borderRadius: '999px',
        padding: '0.4rem 1rem',
        fontWeight: 400,
        letterSpacing: '0.02em',
        lineHeight: 1.5,
        cursor: 'default',
        transition: 'all 0.2s ease',
        boxShadow: hovered ? '0 0 14px rgba(124,58,237,0.15)' : 'none',
        listStyle: 'none',
      }}
    >
      {item}
    </li>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container">

        <div className="section-grid" style={{ marginBottom: '4rem' }}>
          <div className="section-label-col fade-up">skills</div>
          <h2 className="section-heading fade-up delay-1">
            what I bring<br />to the <em>table.</em>
          </h2>
        </div>

        <div className="fade-up delay-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {SKILLS.map((group) => (
            <div
              key={group.title}
              style={{
                display: 'grid',
                gridTemplateColumns: '4rem 14rem 1fr',
                gap: '2rem',
                alignItems: 'start',
                padding: '2.5rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Emoji */}
              <div style={{ fontSize: '1.75rem', lineHeight: 1, paddingTop: '0.1rem' }}>
                {group.emoji}
              </div>

              {/* Title — purple tinted */}
              <div style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: '1.1rem',
                color: '#7c5cbf',
                lineHeight: 1.4,
                paddingTop: '0.25rem',
                fontWeight: 400,
                letterSpacing: '0.01em',
              }}>
                {group.title}
              </div>

              {/* Pills */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}>
                {group.items.map(item => (
                  <SkillPill key={item} item={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
