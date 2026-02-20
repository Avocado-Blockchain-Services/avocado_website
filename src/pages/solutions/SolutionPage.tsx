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
    metaTitle: string
    metaDescription: string
    h1: string
    intro: string
    problem: {
      title: string
      description: string
      painPoints: string[]
    }
    solution: {
      title: string
      description: string
      features: Array<{
        title: string
        description: string
      }>
    }
    process: {
      title: string
      phases: Array<{
        phase: string
        description: string
      }>
    }
    industries: string[]
    technologies: string[]
    caseStudies: string[]
    relatedSolutions: string[]
    faqs: Array<{
      question: string
      answer: string
    }>
  }
}

export function SolutionPage({ data }: SolutionPageProps) {
  useEffect(() => {
    trackEvent('Solution Page Viewed', {
      solution: data.slug,
      page: `solutions/${data.slug}`
    })
  }, [data.slug])

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": data.name,
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
                trackEvent('Solution Hero CTA Clicked', {
                  solution: data.slug
                })
              }
            >
              Get a Free Quote →
            </a>
          </Button>
        </div>
      </Section>

      {/* Problem Section */}
      <Section className="py-20 bg-void-surface">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-signal text-lg md:text-xl font-mono mb-3">
              &gt; THE PROBLEM
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
              {data.problem.title}
            </h2>
          </div>

          <Card className="p-8 mb-8">
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {data.problem.description}
            </p>
            <div className="space-y-3">
              {data.problem.painPoints.map((point, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-signal font-mono flex-shrink-0">×</span>
                  <p className="text-white/80">{point}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Solution Section */}
      <Section className="py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-signal text-lg md:text-xl font-mono mb-3">
              &gt; THE SOLUTION
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
              {data.solution.title}
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              {data.solution.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {data.solution.features.map((feature, index) => (
              <Card key={index} className="p-6 flex flex-col gap-3">
                <div className="text-signal text-xs font-mono">
                  FEATURE {index + 1}
                </div>
                <h3 className="text-xl font-bold text-white font-mono">
                  {feature.title}
                </h3>
                <p className="text-white/80">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="py-20 bg-void-surface">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-signal text-lg md:text-xl font-mono mb-3">
              &gt; OUR PROCESS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
              {data.process.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.process.phases.map((phase, index) => (
              <Card key={index} className="p-6 flex flex-col gap-4">
                <div className="text-signal text-sm font-mono">
                  {phase.phase}
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {phase.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="primary" asChild>
              <a
                href="/playbook"
                onClick={() =>
                  trackEvent('Solution Process CTA Clicked', {
                    solution: data.slug
                  })
                }
              >
                Learn About Our Playbook →
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Social Proof Section */}
      {data.caseStudies && data.caseStudies.length > 0 && (
        <Section className="py-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-signal text-lg md:text-xl font-mono mb-3">
              &gt; PROVEN RESULTS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
              REAL PROJECTS, REAL RESULTS
            </h2>
            <p className="text-white/80 text-lg">
              See how we've delivered {data.name.toLowerCase()} for leading companies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {data.caseStudies.map((caseStudySlug) => (
              <a
                key={caseStudySlug}
                href={`/case-studies/${caseStudySlug}`}
                onClick={() =>
                  trackEvent('Solution Case Study Clicked', {
                    solution: data.slug,
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
        </Section>
      )}

      {/* Internal Links Section */}
      <Section className="py-20 bg-void-surface">
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
              <h3 className="text-signal font-mono text-sm mb-4">
                INDUSTRIES WE SERVE
              </h3>
              <div className="space-y-3">
                {data.industries.map((industrySlug) => (
                  <a
                    key={industrySlug}
                    href={`/industries/${industrySlug}`}
                    onClick={() =>
                      trackEvent('Solution Internal Link Clicked', {
                        solution: data.slug,
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

          {/* Technologies */}
          {data.technologies && data.technologies.length > 0 && (
            <div>
              <h3 className="text-signal font-mono text-sm mb-4">
                TECHNOLOGIES
              </h3>
              <div className="space-y-3">
                {data.technologies.map((techSlug) => (
                  <a
                    key={techSlug}
                    href={`/tech/${techSlug}`}
                    onClick={() =>
                      trackEvent('Solution Internal Link Clicked', {
                        solution: data.slug,
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

          {/* Related Solutions */}
          {data.relatedSolutions && data.relatedSolutions.length > 0 && (
            <div>
              <h3 className="text-signal font-mono text-sm mb-4">
                RELATED SOLUTIONS
              </h3>
              <div className="space-y-3">
                {data.relatedSolutions.map((solutionSlug) => (
                  <a
                    key={solutionSlug}
                    href={`/solutions/${solutionSlug}`}
                    onClick={() =>
                      trackEvent('Solution Internal Link Clicked', {
                        solution: data.slug,
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
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="py-20">
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
