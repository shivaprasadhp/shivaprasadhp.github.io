'use client';

import { useEffect, useState } from 'react';

const STEPS = [
  { num: '01', word: 'SPOT THE PROBLEM' },
  { num: '02', word: 'TALK TO USERS' },
  { num: '03', word: 'FIND THE PATTERN' },
  { num: '04', word: 'DEFINE THE FIX' },
  { num: '05', word: 'SHIP IT' },
  { num: '06', word: 'CLOSE THE LOOP' },
];

export default function ProcessArc() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActiveIndex((i) => (i + 1) % STEPS.length);
        setAnimating(false);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '5rem 0' }}>
      <div className="container">

        {/* Label */}
        <p className="section-label-col fade-up" style={{ marginBottom: '3rem' }}>How I work</p>

        {/* Step indicators */}
        <div className="fade-up delay-1" style={{
          display: 'flex',
          gap: '0',
          marginBottom: '3rem',
          borderTop: '1px solid var(--border)',
        }}>
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              onClick={() => setActiveIndex(i)}
              style={{
                flex: 1,
                padding: '1rem 0',
                borderRight: '1px solid var(--border)',
                borderBottom: i === activeIndex ? '2px solid var(--accent)' : '2px solid transparent',
                cursor: 'pointer',
                transition: 'border-color 0.3s',
                textAlign: 'center',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-condensed)',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                color: i === activeIndex ? 'var(--accent)' : 'var(--text2)',
                transition: 'color 0.3s',
              }}>{s.num}</span>
            </div>
          ))}
        </div>

        {/* Big cycling word */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '140px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            left: 0, top: 0, bottom: 0,
            width: '4px',
            background: 'var(--accent)',
          }} />
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 7vw, 7rem)',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: 'var(--text)',
            lineHeight: 1,
            opacity: animating ? 0 : 1,
            transform: animating ? 'translateY(12px)' : 'translateY(0)',
            transition: 'opacity 0.35s ease, transform 0.35s ease',
            whiteSpace: 'nowrap',
          }}>
            {STEPS[activeIndex].word}
          </span>
        </div>

      </div>
    </section>
  );
}
