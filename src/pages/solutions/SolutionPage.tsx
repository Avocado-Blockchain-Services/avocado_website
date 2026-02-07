import { useEffect } from 'react'

import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { FAQ } from '@/components/marketing/FAQ'
import { CTASection } from '@/components/marketing/CTASection'
import { SEO } from '@/components/seo/SEO'
import { Schema } from '@/components/seo/Schema'
import { trackEvent } from '@/lib/analytics'

interface SolutionPageProps {
  data: {
    slug: string
    name: string
    title: string
    description: string
    keyword: string
    features: string[]
    techStack: string[]
    timeline: string
    icon: string
  }
}

export function SolutionPage({ data }: SolutionPageProps) {
  useEffect(() => {
    trackEvent('Landing Page Viewed', {
      page: `solution-${data.slug}`,
      keyword: data.keyword,
      intent: 'commercial'
    })
  }, [data.slug, data.keyword])

  const phases = [
    {
      phase: 'PHASE 1',
      title: 'Recon (Days 1-2)',
      desc: 'Stakeholder interviews, competitive analysis, and feature prioritization. Clear scope, fixed-price quote, zero ambiguity.',
      deliverables: 'PRD, technical architecture, fixed quote'
    },
    {
      phase: 'PHASE 2',
      title: 'Scaffold (Days 3-5)',
      desc: 'Technical foundation and design system. Cloud infrastructure, databases, CI/CD pipelines, wireframes.',
      deliverables: 'Prototype, design system, dev environment'
    },
    {
      phase: 'PHASE 3',
      title: 'Sprint (Days 6-18)',
      desc: 'Build using agile 3-day sprints with daily standups. Automated testing, continuous deployment.',
      deliverables: 'Working MVP in staging, tests, documentation'
    },
    {
      phase: 'PHASE 4',
      title: 'Deploy (Days 19-21)',
      desc: 'Security audit, performance optimization, monitoring setup. Knowledge transfer and documentation.',
      deliverables: 'Live product, monitoring, 30 days support'
    }
  ]

  const faqItems = [
    {
      question: `How much does ${data.name.toLowerCase()} cost?`,
      answer: `${data.name} costs vary based on complexity, integrations, and features. At Avocado, we provide transparent fixed-price quotes after a free scoping call. Factors affecting cost include number of user roles, AI/ML features, blockchain integration, and third-party APIs. You'll know exactly what you're paying before we start. Typical timeline: ${data.timeline}.`
    },
    {
      question: `What's included in the ${data.timeline} timeline?`,
      answer: 'Our fixed-price quote includes: product scoping and requirements documentation, UX/UI design, frontend and backend development, automated testing and QA, cloud deployment and infrastructure setup, security audit, 30 days post-launch support, and full code ownership transfer. The only things NOT included are third-party service costs and out-of-scope feature requests.'
    },
    {
      question: `Can you integrate with our existing systems?`,
      answer: `Absolutely. We specialize in enterprise integrations including legacy systems, APIs, databases, and third-party services. Our team has extensive experience with modern tech stacks and can work with your existing infrastructure securely and efficiently.`
    },
    {
      question: `Do you provide ongoing support after launch?`,
      answer: 'Yes—every Avocado project includes 30 days of post-launch support (bug fixes, monitoring, performance optimization). After that, most clients choose one of two paths: (1) transition the codebase to their internal team with full documentation and knowledge transfer, or (2) continue with Avocado via a dedicated team engagement for ongoing feature development.'
    }
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": data.name,
    "provider": {
      "@type": "Organization",
      "name": "Avocado Dev Studio"
    },
    "description": data.description
  }

  return (
    <>
      <SEO
        title={data.title}
        description={data.description}
      />
      <Schema data={serviceSchema} />

      {/* Hero Section */}
      <Section className="py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">
            &gt; {data.name.toUpperCase()}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4 flex items-center justify-center gap-3">
            <span>{data.icon}</span>
            <span>{data.name}</span>
          </h1>
          <p className="text-white/80 text-lg mb-6">
            {data.description}
          </p>
          <div className="inline-block px-4 py-2 bg-void-surface rounded-lg">
            <span className="text-signal font-mono text-sm">TIMELINE: </span>
            <span className="text-white font-mono">{data.timeline}</span>
          </div>
        </div>

        <div className="flex justify-center">
          <Button variant="primary" asChild>
            <a href="/signal" onClick={() => trackEvent('Solution Hero CTA Clicked', { solution: data.slug })}>
              Get a Free Quote →
            </a>
          </Button>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="py-20 bg-void-surface">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">
            &gt; KEY FEATURES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
            WHAT'S INCLUDED
          </h2>
          <p className="text-white/80 text-lg">
            Enterprise-grade features built into every {data.name.toLowerCase()} project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {data.features.map((feature, idx) => (
            <Card key={idx} className="p-6">
              <div className="text-signal text-xs font-mono mb-2">FEATURE {idx + 1}</div>
              <h3 className="text-xl font-bold text-white font-mono">{feature}</h3>
            </Card>
          ))}
        </div>
      </Section>

      {/* Tech Stack Section */}
      <Section className="py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">
            &gt; TECHNOLOGY STACK
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
            BUILT WITH PROVEN TECHNOLOGIES
          </h2>
          <p className="text-white/80 text-lg">
            Modern, scalable, enterprise-ready infrastructure.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {data.techStack.map((tech, idx) => (
            <div key={idx} className="px-6 py-3 bg-void-surface border border-void-elevated rounded-lg">
              <span className="text-white font-mono text-sm">{tech}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section className="py-20 bg-void-surface">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">
            &gt; 4-PHASE PROTOCOL
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
            RECON → SCAFFOLD → SPRINT → DEPLOY
          </h2>
          <p className="text-white/80 text-lg">
            Our proven development process delivers {data.name.toLowerCase()} in {data.timeline}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {phases.map(p => (
            <Card key={p.phase} className="p-6 flex flex-col gap-4">
              <div className="text-signal text-xs font-mono">{p.phase}</div>
              <h3 className="text-xl font-bold text-white font-mono">{p.title}</h3>
              <p className="text-white/80">{p.desc}</p>
              <div className="text-white/60 text-sm">
                <span className="font-mono text-signal text-xs">DELIVERABLES:</span> {p.deliverables}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="secondary" asChild>
            <a href="/protocol">Learn More About Our Protocol →</a>
          </Button>
        </div>
      </Section>

      {/* Related Links */}
      <Section className="py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; EXPLORE MORE</div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
            RELATED SERVICES
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <a 
            href="/mvp-development" 
            onClick={() => trackEvent('Solution Internal Link Clicked', { destination: 'mvp-development' })} 
            className="block p-6 border border-void-elevated rounded-lg hover:border-signal transition-colors text-center"
          >
            <div className="text-signal font-mono text-sm mb-2">MVP</div>
            <p className="text-white/60 text-sm">Full MVP development services</p>
          </a>
          <a 
            href="/services" 
            onClick={() => trackEvent('Solution Internal Link Clicked', { destination: 'services' })} 
            className="block p-6 border border-void-elevated rounded-lg hover:border-signal transition-colors text-center"
          >
            <div className="text-signal font-mono text-sm mb-2">SERVICES</div>
            <p className="text-white/60 text-sm">All services we offer</p>
          </a>
          <a 
            href="/protocol" 
            onClick={() => trackEvent('Solution Internal Link Clicked', { destination: 'protocol' })} 
            className="block p-6 border border-void-elevated rounded-lg hover:border-signal transition-colors text-center"
          >
            <div className="text-signal font-mono text-sm mb-2">PROTOCOL</div>
            <p className="text-white/60 text-sm">How we work</p>
          </a>
          <a 
            href="/company" 
            onClick={() => trackEvent('Solution Internal Link Clicked', { destination: 'company' })} 
            className="block p-6 border border-void-elevated rounded-lg hover:border-signal transition-colors text-center"
          >
            <div className="text-signal font-mono text-sm mb-2">COMPANY</div>
            <p className="text-white/60 text-sm">Our story and credentials</p>
          </a>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="py-20 bg-void-surface">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; FAQ</div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
            COMMON QUESTIONS
          </h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <FAQ items={faqItems} />
        </div>
      </Section>

      <CTASection />
    </>
  )
}
