import { useEffect } from 'react'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { FAQ } from '@/components/marketing/FAQ'
import { CTASection } from '@/components/marketing/CTASection'
import { SEO } from '@/components/seo/SEO'
import { Schema } from '@/components/seo/Schema'
import { trackEvent } from '@/lib/analytics'

interface IndustryPageProps {
  data: {
    slug: string
    name: string
    metaTitle: string
    metaDescription: string
    h1: string
    intro: string
    painPoints: Array<{
      title: string
      description: string
    }>
    solutions: Array<{
      title: string
      description: string
    }>
    caseStudies: string[]
    technologies: string[]
    relatedSolutions: string[]
    faqs: Array<{
      question: string
      answer: string
    }>
  }
}

export function IndustryPage({ data }: IndustryPageProps) {
  useEffect(() => {
    trackEvent('Industry Page Viewed', {
      industry: data.slug,
      page: `industries/${data.slug}`
    })
  }, [data.slug])

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `${data.name} Software Development`,
    "provider": {
      "@type": "Organization",
      "name": "Avocado Dev Studio",
      "@id": "https://avocadoblock.com/#organization"
    },
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "Mexico" }
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
          <p className="text-white/80 text-lg leading-relaxed">
            {data.intro}
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Button variant="primary" asChild>
            <a
              href="/signal"
              onClick={() =>
                trackEvent('Industry Hero CTA Clicked', {
                  industry: data.slug,
                  cta: 'primary'
                })
              }
            >
              Get a Free Quote →
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a
              href="/playbook"
              onClick={() =>
                trackEvent('Industry Hero CTA Clicked', {
                  industry: data.slug,
                  cta: 'secondary'
                })
              }
            >
              How We Work
            </a>
          </Button>
        </div>
      </Section>

      {/* Pain Points Section */}
      <Section className="py-20 bg-void-surface">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">
            &gt; COMMON CHALLENGES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
            PROBLEMS WE SOLVE
          </h2>
          <p className="text-white/80 text-lg">
            These are the challenges our {data.name.toLowerCase()} clients face before working with Avocado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.painPoints.map((pain, index) => (
            <Card key={index} className="p-6 flex flex-col gap-4">
              <div className="text-signal text-sm font-mono">
                CHALLENGE {index + 1}
              </div>
              <h3 className="text-xl font-bold text-white font-mono">
                {pain.title}
              </h3>
              <p className="text-white/80">{pain.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Solutions Section */}
      <Section className="py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">
            &gt; OUR SOLUTIONS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
            WHAT WE BUILD FOR {data.name.toUpperCase()}
          </h2>
          <p className="text-white/80 text-lg">
            Avocado Dev Studio delivers enterprise-grade software solutions tailored to {data.name.toLowerCase()} needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {data.solutions.map((solution, index) => (
            <Card key={index} className="p-8 flex flex-col gap-4">
              <div className="text-signal text-sm font-mono">
                SOLUTION {index + 1}
              </div>
              <h3 className="text-2xl font-bold text-white font-mono">
                {solution.title}
              </h3>
              <p className="text-white/80 leading-relaxed">{solution.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" asChild>
            <a
              href="/signal"
              onClick={() =>
                trackEvent('Industry Solutions CTA Clicked', {
                  industry: data.slug
                })
              }
            >
              Start Your Project →
            </a>
          </Button>
        </div>
      </Section>

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
            <p className="text-white/80 text-lg mb-8">
              Avocado has delivered successful projects for Fortune 500 companies and industry innovators in {data.name.toLowerCase()}.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {data.caseStudies.map((caseStudySlug) => (
              <a
                key={caseStudySlug}
                href={`/case-studies/${caseStudySlug}`}
                onClick={() =>
                  trackEvent('Industry Case Study Clicked', {
                    industry: data.slug,
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
            <p className="text-white/60">
              Enterprise security and compliance built into every project
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
            RELATED SOLUTIONS & TECHNOLOGIES
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {data.relatedSolutions && data.relatedSolutions.length > 0 && (
            <div>
              <h3 className="text-signal font-mono text-sm mb-4">
                SOLUTIONS FOR {data.name.toUpperCase()}
              </h3>
              <div className="space-y-3">
                {data.relatedSolutions.map((solutionSlug) => (
                  <a
                    key={solutionSlug}
                    href={`/solutions/${solutionSlug}`}
                    onClick={() =>
                      trackEvent('Industry Internal Link Clicked', {
                        industry: data.slug,
                        destination: `solutions/${solutionSlug}`
                      })
                    }
                    className="block p-4 border border-void-elevated rounded-lg hover:border-signal transition-colors"
                  >
                    <span className="text-white font-mono">
                      {solutionSlug.replace(/-/g, ' ').toUpperCase()}
                    </span>
                    <span className="text-signal ml-2">→</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {data.technologies && data.technologies.length > 0 && (
            <div>
              <h3 className="text-signal font-mono text-sm mb-4">
                TECHNOLOGIES WE USE
              </h3>
              <div className="space-y-3">
                {data.technologies.map((techSlug) => (
                  <a
                    key={techSlug}
                    href={`/tech/${techSlug}`}
                    onClick={() =>
                      trackEvent('Industry Internal Link Clicked', {
                        industry: data.slug,
                        destination: `tech/${techSlug}`
                      })
                    }
                    className="block p-4 border border-void-elevated rounded-lg hover:border-signal transition-colors"
                  >
                    <span className="text-white font-mono">
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
          <p className="text-white/80">
            Answers to frequently asked questions about {data.name.toLowerCase()} software development.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <FAQ items={data.faqs} />
        </div>
      </Section>

      <CTASection />
    </>
  )
}
