import { useEffect } from 'react'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { FAQ } from '@/components/marketing/FAQ'
import { CTASection } from '@/components/marketing/CTASection'
import { SEO } from '@/components/seo/SEO'
import { Schema } from '@/components/seo/Schema'
import { trackEvent } from '@/lib/analytics'

interface TechPageProps {
  data: {
    slug: string
    name: string
    metaTitle: string
    metaDescription: string
    h1: string
    intro: string
    description: string
    capabilities: Array<{
      title: string
      description: string
    }>
    useCases: Array<{
      title: string
      description: string
    }>
    whyVertexAI?: Array<{
      title: string
      description: string
    }>
    whySolidity?: Array<{
      title: string
      description: string
    }>
    whyEthereum?: Array<{
      title: string
      description: string
    }>
    industries: string[]
    solutions: string[]
    caseStudies: string[]
    relatedTech: string[]
    faqs: Array<{
      question: string
      answer: string
    }>
  }
}

export function TechPage({ data }: TechPageProps) {
  useEffect(() => {
    trackEvent('Tech Page Viewed', {
      technology: data.slug,
      page: `tech/${data.slug}`
    })
  }, [data.slug])

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `${data.name} Development Services`,
    "provider": {
      "@type": "Organization",
      "name": "Avocado Dev Studio",
      "@id": "https://avocadoblock.com/#organization"
    },
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "Canada" }
    ],
    "description": data.metaDescription
  }

  const whySection = data.whyVertexAI || data.whySolidity || data.whyEthereum
  const whyTitle = data.whyVertexAI
    ? 'WHY VERTEX AI'
    : data.whySolidity
    ? 'WHY SOLIDITY'
    : 'WHY ETHEREUM'

  return (
    <>
      <SEO title={data.metaTitle} description={data.metaDescription} />
      <Schema data={serviceSchema} />

      {/* Hero Section */}
      <Section className="py-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">
            &gt; {data.name.toUpperCase()}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-white mb-6">
            {data.h1}
          </h1>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            {data.intro}
          </p>
          <Button variant="primary" size="lg" asChild>
            <a
              href="/signal"
              onClick={() =>
                trackEvent('Tech Hero CTA Clicked', {
                  technology: data.slug
                })
              }
            >
              Hire {data.name} Experts →
            </a>
          </Button>
        </div>
      </Section>

      {/* Overview Section */}
      <Section className="py-20 bg-void-surface">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-signal text-lg md:text-xl font-mono mb-3">
              &gt; OVERVIEW
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
              WHAT IS {data.name.toUpperCase()}?
            </h2>
          </div>
          <Card className="p-8">
            <p className="text-white/80 text-lg leading-relaxed">
              {data.description}
            </p>
          </Card>
        </div>
      </Section>

      {/* Capabilities Section */}
      <Section className="py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-signal text-lg md:text-xl font-mono mb-3">
              &gt; OUR EXPERTISE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
              {data.name.toUpperCase()} CAPABILITIES
            </h2>
            <p className="text-white/80 text-lg">
              Avocado's team delivers production-grade {data.name} applications for enterprises and startups.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {data.capabilities.map((capability, index) => (
              <Card key={index} className="p-6 flex flex-col gap-3">
                <div className="text-signal text-xs font-mono">
                  CAPABILITY {index + 1}
                </div>
                <h3 className="text-xl font-bold text-white font-mono">
                  {capability.title}
                </h3>
                <p className="text-white/80">{capability.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="secondary" asChild>
              <a
                href="/playbook"
                onClick={() =>
                  trackEvent('Tech Capabilities CTA Clicked', {
                    technology: data.slug
                  })
                }
              >
                See How We Work →
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Use Cases Section */}
      <Section className="py-20 bg-void-surface">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-signal text-lg md:text-xl font-mono mb-3">
              &gt; REAL-WORLD APPLICATIONS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
              PROJECTS WE'VE BUILT
            </h2>
            <p className="text-white/80 text-lg">
              Avocado has delivered {data.name} projects for Fortune 500 companies and industry innovators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {data.useCases.map((useCase, index) => (
              <Card key={index} className="p-6 flex flex-col gap-4">
                <div className="text-signal text-sm font-mono">
                  USE CASE {index + 1}
                </div>
                <h3 className="text-lg font-bold text-white font-mono">
                  {useCase.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Section */}
      {whySection && whySection.length > 0 && (
        <Section className="py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-signal text-lg md:text-xl font-mono mb-3">
                &gt; ADVANTAGES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
                {whyTitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {whySection.map((reason, index) => (
                <Card key={index} className="p-6 flex flex-col gap-3">
                  <h3 className="text-lg font-bold text-white font-mono">
                    {reason.title}
                  </h3>
                  <p className="text-white/80">{reason.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Social Proof Section */}
      {data.caseStudies && data.caseStudies.length > 0 && (
        <Section className="py-20 bg-void-surface">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-signal text-lg md:text-xl font-mono mb-3">
              &gt; PROVEN RESULTS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
              TRUSTED BY INDUSTRY LEADERS
            </h2>
            <p className="text-white/80 text-lg">
              See how we've delivered {data.name} solutions for Fortune 500 companies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {data.caseStudies.map((caseStudySlug) => (
              <a
                key={caseStudySlug}
                href={`/case-studies/${caseStudySlug}`}
                onClick={() =>
                  trackEvent('Tech Case Study Clicked', {
                    technology: data.slug,
                    caseStudy: caseStudySlug
                  })
                }
                className="block p-8 border border-void-elevated rounded-lg hover:border-signal transition-colors text-center"
              >
                <div className="text-signal font-mono text-2xl mb-2">
                  {caseStudySlug.toUpperCase()}
                </div>
                <p className="text-white/60 text-sm">View Case Study →</p>
              </a>
            ))}
          </div>

          <div className="text-center space-y-4">
            <p className="text-white/80 text-lg font-mono">
              ISO 27001 CERTIFIED • GOOGLE FOR STARTUPS • GCP EXPERTS
            </p>
          </div>
        </Section>
      )}

      {/* Internal Links Section */}
      <Section className="py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">
            &gt; EXPLORE MORE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
            RELATED CONTENT
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Industries */}
          {data.industries && data.industries.length > 0 && (
            <div>
              <h3 className="text-signal font-mono text-sm mb-4">INDUSTRIES</h3>
              <div className="space-y-3">
                {data.industries.map((industrySlug) => (
                  <a
                    key={industrySlug}
                    href={`/industries/${industrySlug}`}
                    onClick={() =>
                      trackEvent('Tech Internal Link Clicked', {
                        technology: data.slug,
                        destination: `industries/${industrySlug}`
                      })
                    }
                    className="block p-4 border border-void-elevated rounded-lg hover:border-signal transition-colors"
                  >
                    <span className="text-white text-sm">
                      {industrySlug.replace(/-/g, ' ').toUpperCase()}
                    </span>
                    <span className="text-signal ml-2">→</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Solutions */}
          {data.solutions && data.solutions.length > 0 && (
            <div>
              <h3 className="text-signal font-mono text-sm mb-4">SOLUTIONS</h3>
              <div className="space-y-3">
                {data.solutions.map((solutionSlug) => (
                  <a
                    key={solutionSlug}
                    href={`/solutions/${solutionSlug}`}
                    onClick={() =>
                      trackEvent('Tech Internal Link Clicked', {
                        technology: data.slug,
                        destination: `solutions/${solutionSlug}`
                      })
                    }
                    className="block p-4 border border-void-elevated rounded-lg hover:border-signal transition-colors"
                  >
                    <span className="text-white text-sm">
                      {solutionSlug.replace(/-/g, ' ').toUpperCase()}
                    </span>
                    <span className="text-signal ml-2">→</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Related Technologies */}
          {data.relatedTech && data.relatedTech.length > 0 && (
            <div>
              <h3 className="text-signal font-mono text-sm mb-4">
                RELATED TECH
              </h3>
              <div className="space-y-3">
                {data.relatedTech.map((techSlug) => (
                  <a
                    key={techSlug}
                    href={`/tech/${techSlug}`}
                    onClick={() =>
                      trackEvent('Tech Internal Link Clicked', {
                        technology: data.slug,
                        destination: `tech/${techSlug}`
                      })
                    }
                    className="block p-4 border border-void-elevated rounded-lg hover:border-signal transition-colors"
                  >
                    <span className="text-white text-sm">
                      {techSlug.replace(/-/g, ' ').toUpperCase()}
                    </span>
                    <span className="text-signal ml-2">→</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="py-20 bg-void-surface">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">
            &gt; FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
            COMMON QUESTIONS
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <FAQ items={data.faqs} />
        </div>
      </Section>

      <CTASection />
    </>
  )
}
