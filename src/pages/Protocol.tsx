import { Section } from '@/components/layout/Section'
import { CTASection } from '@/components/marketing/CTASection'
import { SEO } from '@/components/seo/SEO'
import { Schema } from '@/components/seo/Schema'

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How Avocado Builds Software Products",
  "description": "Our 4-phase engineering protocol for shipping production software in weeks, not quarters.",
  "totalTime": "P8W",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "25000-75000"
  },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Recon",
      "text": "48-hour deep-dive into your requirements, existing codebase (if any), and success metrics. Output: Technical spec and architecture diagram.",
      "url": "https://avocadoblock.com/protocol#recon"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Scaffold",
      "text": "Set up infrastructure, CI/CD, and core architecture. First deployable artifact within 1 week.",
      "url": "https://avocadoblock.com/protocol#scaffold"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Sprint",
      "text": "Rapid iteration cycles with daily deployments. Weekly demos. Continuous feedback integration.",
      "url": "https://avocadoblock.com/protocol#sprint"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Deploy",
      "text": "Production launch with monitoring, documentation, and handoff. Optional ongoing support engagement.",
      "url": "https://avocadoblock.com/protocol#deploy"
    }
  ]
}

const phases = [
  {
    id: 'recon',
    title: 'Recon',
    duration: '48 hours',
    desc: 'Requirements deep-dive. Technical spec document. Architecture diagram. Risk assessment.',
    output: 'You know exactly what we\'re building and why.'
  },
  {
    id: 'scaffold',
    title: 'Scaffold',
    duration: 'Week 1',
    desc: 'Infrastructure setup. CI/CD pipeline. Core architecture implementation. First deployable artifact.',
    output: 'Running app on a staging URL.'
  },
  {
    id: 'sprint',
    title: 'Sprint',
    duration: 'Weeks 2-6',
    desc: 'Daily deployments. Weekly demos. Continuous feedback integration. Real-time progress in GitHub.',
    output: 'Feature-complete product.'
  },
  {
    id: 'deploy',
    title: 'Deploy',
    duration: 'Final Week',
    desc: 'Production launch. Monitoring & alerting setup. Documentation. Handoff or ongoing engagement.',
    output: 'Live product, ready to scale.'
  },
]

export function Protocol() {
  return (
    <>
      <SEO
        title="Protocol | How We Work"
        description="Four phases. First code on day one. No death by meetings. Our engineering protocol ships production software in weeks, not quarters."
      />
      <Schema data={howToSchema} />

      <Section className="py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; PROTOCOL</div>
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">HOW WE WORK</h1>
          <p className="text-text-secondary text-lg">Four phases. First code on day one. No death by meetings.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="border-l-2 border-signal pl-8 space-y-16">
            {phases.map((phase, i) => (
              <div key={phase.id} id={phase.id} className="relative scroll-mt-24">
                {/* Timeline dot */}
                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-void-pure border-2 border-signal rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-signal rounded-full" />
                </div>

                {/* Phase number */}
                <div className="text-signal text-lg md:text-xl font-mono mb-3">PHASE {i + 1}</div>

                {/* Phase content */}
                <h2 className="text-2xl md:text-3xl font-bold font-mono text-white mb-2">
                  {phase.title}
                  <span className="text-text-tertiary text-lg font-normal ml-3">({phase.duration})</span>
                </h2>

                <p className="text-text-secondary mb-4">{phase.desc}</p>

                <div className="bg-void-surface border border-void-elevated rounded-lg p-4">
                  <div className="text-signal text-xs font-mono mb-1">&gt; OUTPUT</div>
                  <p className="text-white font-mono">{phase.output}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  )
}
