import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/marketing/CTASection'
import { SEO } from '@/components/seo/SEO'
import { Schema } from '@/components/seo/Schema'
import { trackEvent } from '@/lib/analytics'
import industries from '@/data/industries.json'

interface CaseStudyPageProps {
  data: {
    slug: string
    client: string
    title: string
    description: string
    keyword: string
    industry: string
    challenge: string
    solution: string
    results: string[]
    techStack: string[]
    timeline: string
    logo: string
  }
}

export function CaseStudyPage({ data }: CaseStudyPageProps) {
  useEffect(() => {
    trackEvent('Landing Page Viewed', {
      page: `case-study-${data.slug}`,
      keyword: data.keyword,
      intent: 'informational'
    })
  }, [data.slug, data.keyword])

  const relatedIndustry = industries.find(i => i.slug === data.industry)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.title,
    "description": data.description,
    "author": {
      "@type": "Organization",
      "name": "Avocado Dev Studio"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Avocado Dev Studio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://avocadoblock.com/logo.svg"
      }
    }
  }

  return (
    <>
      <SEO
        title={data.title}
        description={data.description}
      />
      <Schema data={articleSchema} />

      {/* Hero Section */}
      <Section className="py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">
            &gt; CASE STUDY
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            {data.client}
          </h1>
          <p className="text-white/80 text-lg mb-6">
            {data.description}
          </p>
          {relatedIndustry && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-void-surface rounded-lg">
              <span className="text-2xl">{relatedIndustry.icon}</span>
              <span className="text-white/80">{relatedIndustry.name}</span>
            </div>
          )}
        </div>
      </Section>

      {/* Quick Stats */}
      <Section className="py-12 bg-void-surface">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-signal text-xs font-mono mb-2">CLIENT</div>
            <div className="text-2xl font-bold text-white font-mono">{data.client}</div>
          </div>
          <div className="text-center">
            <div className="text-signal text-xs font-mono mb-2">TIMELINE</div>
            <div className="text-2xl font-bold text-white font-mono">{data.timeline}</div>
          </div>
          <div className="text-center">
            <div className="text-signal text-xs font-mono mb-2">INDUSTRY</div>
            <div className="text-2xl font-bold text-white font-mono capitalize">{data.industry}</div>
          </div>
        </div>
      </Section>

      {/* Challenge Section */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="text-signal text-lg md:text-xl font-mono mb-3">
              &gt; THE CHALLENGE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-6">
              WHAT {data.client.toUpperCase()} NEEDED
            </h2>
            <Card className="p-8">
              <p className="text-white/80 text-lg leading-relaxed">
                {data.challenge}
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Solution Section */}
      <Section className="py-20 bg-void-surface">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="text-signal text-lg md:text-xl font-mono mb-3">
              &gt; THE SOLUTION
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-6">
              HOW AVOCADO HELPED
            </h2>
            <Card className="p-8">
              <p className="text-white/80 text-lg leading-relaxed">
                {data.solution}
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Results Section */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-signal text-lg md:text-xl font-mono mb-3">
              &gt; THE RESULTS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-6">
              MEASURABLE IMPACT
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {data.results.map((result, idx) => (
              <Card key={idx} className="p-6 text-center">
                <div className="text-signal text-4xl mb-3">✓</div>
                <h3 className="text-lg font-bold text-white font-mono">{result}</h3>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Tech Stack Section */}
      <Section className="py-20 bg-void-surface">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-signal text-lg md:text-xl font-mono mb-3">
              &gt; TECHNOLOGY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-6">
              TECH STACK
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Technologies used to build this solution.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {data.techStack.map((tech, idx) => (
              <div key={idx} className="px-6 py-3 bg-void-base border border-void-elevated rounded-lg">
                <span className="text-white font-mono text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-signal text-lg md:text-xl font-mono mb-3">
              &gt; THE PROCESS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-6">
              HOW WE DELIVERED IN {data.timeline.toUpperCase()}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="text-signal text-xs font-mono mb-2">PHASE 1-2</div>
              <h3 className="text-xl font-bold text-white font-mono mb-3">Recon & Scaffold</h3>
              <p className="text-white/80">
                Stakeholder interviews, technical architecture, and rapid prototyping. Clear scope defined upfront.
              </p>
            </Card>

            <Card className="p-6">
              <div className="text-signal text-xs font-mono mb-2">PHASE 3</div>
              <h3 className="text-xl font-bold text-white font-mono mb-3">Sprint</h3>
              <p className="text-white/80">
                Agile 3-day sprints with daily standups. Continuous integration, automated testing, code reviews.
              </p>
            </Card>

            <Card className="p-6">
              <div className="text-signal text-xs font-mono mb-2">PHASE 4</div>
              <h3 className="text-xl font-bold text-white font-mono mb-3">Deploy</h3>
              <p className="text-white/80">
                Security audit, performance optimization, monitoring setup, and knowledge transfer.
              </p>
            </Card>

            <Card className="p-6">
              <div className="text-signal text-xs font-mono mb-2">POST-LAUNCH</div>
              <h3 className="text-xl font-bold text-white font-mono mb-3">Support</h3>
              <p className="text-white/80">
                30 days of post-launch support including bug fixes, monitoring, and performance optimization.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Related Industry */}
      {relatedIndustry && (
        <Section className="py-20 bg-void-surface">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-signal text-lg md:text-xl font-mono mb-3">
                &gt; RELATED EXPERTISE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-6">
                MORE {relatedIndustry.name.toUpperCase()} SOLUTIONS
              </h2>
            </div>

            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-4xl mb-4">{relatedIndustry.icon}</div>
                  <h3 className="text-2xl font-bold text-white font-mono mb-4">
                    {relatedIndustry.name}
                  </h3>
                  <p className="text-white/80 mb-6">
                    {relatedIndustry.description}
                  </p>
                  <Button variant="secondary" asChild>
                    <Link to={`/industries/${relatedIndustry.slug}`}>
                      Explore {relatedIndustry.name} Solutions →
                    </Link>
                  </Button>
                </div>
                <div>
                  <div className="text-signal text-xs font-mono mb-3">COMMON CHALLENGES</div>
                  <ul className="space-y-2">
                    {relatedIndustry.painPoints.map((point, idx) => (
                      <li key={idx} className="text-white/80 flex items-start gap-2">
                        <span className="text-signal">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </Section>
      )}

      {/* CTA Section */}
      <Section className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">
            &gt; READY TO START?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-6">
            BUILD YOUR OWN SUCCESS STORY
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Get a free scoping call and fixed-price quote. No commitment required.
          </p>
          <Button variant="primary" asChild>
            <a href="/signal" onClick={() => trackEvent('Case Study CTA Clicked', { client: data.slug })}>
              Schedule a Call →
            </a>
          </Button>
        </div>
      </Section>

      <CTASection />
    </>
  )
}
