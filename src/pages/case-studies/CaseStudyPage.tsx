import { useEffect } from 'react'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { CTASection } from '@/components/marketing/CTASection'
import { SEO } from '@/components/seo/SEO'
import { Schema } from '@/components/seo/Schema'
import { trackEvent } from '@/lib/analytics'

interface CaseStudyPageProps {
  data: {
    slug: string
    name: string
    fullName: string
    metaTitle: string
    metaDescription: string
    h1: string
    industry: string
    client: {
      name: string
      description: string
      size: string
      location: string
    }
    challenge: {
      title: string
      description: string
      painPoints: string[]
    }
    solution: {
      title: string
      description: string
      technicalApproach: Array<{
        title: string
        description: string
      }>
      timeline: string
    }
    results: {
      metrics: Array<{
        value: string
        label: string
        description: string
      }>
      businessImpact: string
      quote: {
        text: string
        author: string
      }
    }
    techStack: string[]
    industries: string[]
    solutions: string[]
    technologies: string[]
    relatedCaseStudies: string[]
  }
}

export function CaseStudyPage({ data }: CaseStudyPageProps) {
  useEffect(() => {
    trackEvent('Case Study Viewed', {
      caseStudy: data.slug,
      client: data.name,
      page: `case-studies/${data.slug}`
    })
  }, [data.slug, data.name])

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.fullName,
    "description": data.metaDescription,
    "author": {
      "@type": "Organization",
      "name": "Avocado Dev Studio"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Avocado Dev Studio",
      "@id": "https://avocadoblock.com/#organization"
    },
    "articleSection": "Case Study",
    "keywords": [data.industry, data.name, ...data.techStack].join(', ')
  }

  return (
    <>
      <SEO title={data.metaTitle} description={data.metaDescription} />
      <Schema data={articleSchema} />

      {/* Hero Section */}
      <Section className="py-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">
            &gt; CASE STUDY
          </div>
          <div className="text-white/60 text-sm mb-4 font-mono">
            {data.industry.toUpperCase()}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-white mb-6">
            {data.h1}
          </h1>
          <p className="text-white/80 text-xl leading-relaxed mb-8">
            {data.fullName}
          </p>
        </div>

        {/* Client Info */}
        <Card className="max-w-4xl mx-auto p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-signal font-mono text-sm mb-3">CLIENT</h2>
              <p className="text-white text-2xl font-bold font-mono mb-4">
                {data.client.name}
              </p>
              <p className="text-white/80 leading-relaxed">
                {data.client.description}
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-signal font-mono text-xs mb-1">SIZE</div>
                <div className="text-white/80">{data.client.size}</div>
              </div>
              <div>
                <div className="text-signal font-mono text-xs mb-1">
                  LOCATION
                </div>
                <div className="text-white/80">{data.client.location}</div>
              </div>
              <div>
                <div className="text-signal font-mono text-xs mb-1">
                  INDUSTRY
                </div>
                <div className="text-white/80">{data.industry}</div>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* Challenge Section */}
      <Section className="py-20 bg-void-surface">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-signal text-lg md:text-xl font-mono mb-3">
              &gt; THE CHALLENGE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
              {data.challenge.title}
            </h2>
          </div>

          <Card className="p-8 mb-8">
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {data.challenge.description}
            </p>
            <div className="border-t border-void-elevated pt-6">
              <div className="text-signal font-mono text-sm mb-4">
                KEY PAIN POINTS
              </div>
              <div className="space-y-3">
                {data.challenge.painPoints.map((point, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="text-signal font-mono flex-shrink-0">
                      ×
                    </span>
                    <p className="text-white/80">{point}</p>
                  </div>
                ))}
              </div>
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

          <div className="grid md:grid-cols-1 gap-6 mb-12">
            {data.solution.technicalApproach.map((approach, index) => (
              <Card key={index} className="p-8">
                <div className="text-signal font-mono text-sm mb-3">
                  APPROACH {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-white font-mono mb-4">
                  {approach.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {approach.description}
                </p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-void-surface">
            <div className="text-signal font-mono text-sm mb-2">TIMELINE</div>
            <p className="text-white/80">{data.solution.timeline}</p>
          </Card>
        </div>
      </Section>

      {/* Results Section */}
      <Section className="py-20 bg-void-surface">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-signal text-lg md:text-xl font-mono mb-3">
              &gt; THE RESULTS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
              MEASURABLE IMPACT
            </h2>
          </div>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {data.results.metrics.map((metric, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-signal text-4xl font-bold font-mono mb-2">
                  {metric.value}
                </div>
                <div className="text-white font-mono text-sm mb-2">
                  {metric.label}
                </div>
                <p className="text-white/60 text-xs">{metric.description}</p>
              </Card>
            ))}
          </div>

          {/* Business Impact */}
          <Card className="p-8 mb-8">
            <div className="text-signal font-mono text-sm mb-4">
              BUSINESS IMPACT
            </div>
            <p className="text-white/80 text-lg leading-relaxed">
              {data.results.businessImpact}
            </p>
          </Card>

          {/* Quote */}
          <Card className="p-8 bg-signal/5 border-signal/30">
            <blockquote className="text-white text-xl italic leading-relaxed mb-4">
              "{data.results.quote.text}"
            </blockquote>
            <div className="text-white/60 font-mono text-sm">
              — {data.results.quote.author}
            </div>
          </Card>
        </div>
      </Section>

      {/* Tech Stack Section */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-signal text-lg md:text-xl font-mono mb-3">
              &gt; TECH STACK
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
              TECHNOLOGIES USED
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {data.techStack.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 border border-void-elevated rounded-lg bg-void-surface"
              >
                <span className="text-white font-mono text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

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

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
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
                      trackEvent('Case Study Internal Link Clicked', {
                        caseStudy: data.slug,
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
                      trackEvent('Case Study Internal Link Clicked', {
                        caseStudy: data.slug,
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
                      trackEvent('Case Study Internal Link Clicked', {
                        caseStudy: data.slug,
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

        {/* Related Case Studies */}
        {data.relatedCaseStudies && data.relatedCaseStudies.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h3 className="text-signal font-mono text-sm mb-6 text-center">
              MORE CASE STUDIES
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {data.relatedCaseStudies.map((caseStudySlug) => (
                <a
                  key={caseStudySlug}
                  href={`/case-studies/${caseStudySlug}`}
                  onClick={() =>
                    trackEvent('Case Study Related Clicked', {
                      from: data.slug,
                      to: caseStudySlug
                    })
                  }
                  className="block p-6 border border-void-elevated rounded-lg hover:border-signal transition-colors text-center"
                >
                  <div className="text-signal font-mono text-xl mb-2">
                    {caseStudySlug.toUpperCase()}
                  </div>
                  <p className="text-white/60 text-sm">View Case Study →</p>
                </a>
              ))}
            </div>
          </div>
        )}
      </Section>

      <CTASection />
    </>
  )
}
