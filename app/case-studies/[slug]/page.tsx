import CaseStudyClient from './CaseStudyClient';

const CASE_ORDER = [
  'money-guard',
  'olx-trust-safety',
  'surelock',
  'local-ai-agent-orchestrator',
  'swiggy-instamart',
];

export function generateStaticParams() {
  return CASE_ORDER.map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CaseStudyClient slug={slug} />;
}
