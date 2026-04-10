'use client';

import { useRouter } from 'next/navigation';

const CASE_STUDIES: Record<string, { title: string; embedUrl: string }> = {
  'money-guard': {
    title: 'Money Guard',
    embedUrl: 'https://gamma.app/embed/snx23vxgdotmc0g',
  },
  'olx-trust-safety': {
    title: 'OLX Trust & Safety',
    embedUrl: 'https://gamma.app/embed/cuaqhvoxlki3ygd',
  },
  'surelock': {
    title: 'SureLock',
    embedUrl: 'https://gamma.app/embed/x8ull73d8vh52zu',
  },
  'local-ai-agent-orchestrator': {
    title: 'Local AI Agent Orchestrator',
    embedUrl: 'https://gamma.app/embed/n148ya7ctexkuqd',
  },
  'swiggy-instamart': {
    title: 'Swiggy Instamart',
    embedUrl: 'https://gamma.app/embed/1nj9afa2eo5lg8k',
  },
  'screenly-ai': {
    title: 'Screenly AI',
    embedUrl: 'https://gamma.app/embed/8ama4qehz6hpduq',
  },
};

const CASE_ORDER = [
  'money-guard',
  'olx-trust-safety',
  'surelock',
  'local-ai-agent-orchestrator',
  'swiggy-instamart',
  'screenly-ai',
];

export default function CaseStudyClient({ slug }: { slug: string }) {
  const router = useRouter();
  const study = CASE_STUDIES[slug];

  const currentIndex = CASE_ORDER.indexOf(slug);
  const prevSlug = currentIndex > 0 ? CASE_ORDER[currentIndex - 1] : null;
  const nextSlug = currentIndex < CASE_ORDER.length - 1 ? CASE_ORDER[currentIndex + 1] : null;

  if (!study) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          background: '#0a0a0f',
          color: '#ece9f5',
          fontFamily: "'DM Sans', sans-serif",
          gap: '1.5rem',
        }}
      >
        <p style={{ color: '#6b6880', fontSize: '0.9rem' }}>Case study not found.</p>
        <button
          onClick={() => router.back()}
          style={{
            padding: '0.5rem 1.25rem',
            background: 'transparent',
            color: '#ece9f5',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.85rem',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          ← go back
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#0a0a0f',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          padding: '1rem 2rem',
          background: 'rgba(10,10,15,0.95)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          flexShrink: 0,
        }}
      >
        <button
          onClick={() => router.back()}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.08)',
            color: '#6b6880',
            padding: '0.4rem 0.9rem',
            borderRadius: '4px',
            fontSize: '0.8rem',
            cursor: 'pointer',
            fontFamily: "'DM Sans', sans-serif",
            transition: 'color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#ece9f5';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#6b6880';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
          }}
        >
          ← back
        </button>

        {prevSlug && (
          <button
            onClick={() => router.push(`/case-studies/${prevSlug}`)}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#6b6880',
              padding: '0.4rem 0.9rem',
              borderRadius: '4px',
              fontSize: '0.8rem',
              cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            ← previous
          </button>
        )}

        <span
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontStyle: 'italic',
            fontSize: '1rem',
            color: '#ece9f5',
          }}
        >
          {study.title}
        </span>

        {nextSlug && (
          <button
            onClick={() => router.push(`/case-studies/${nextSlug}`)}
            style={{
              marginLeft: 'auto',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#6b6880',
              padding: '0.4rem 0.9rem',
              borderRadius: '4px',
              fontSize: '0.8rem',
              cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            next →
          </button>
        )}
      </div>

      <iframe
        src={study.embedUrl}
        style={{ flex: 1, width: '100%', border: 'none' }}
        allow="fullscreen"
        title={study.title}
      />
    </div>
  );
}
