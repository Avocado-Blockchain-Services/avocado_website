import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { FAQ } from '@/components/marketing/FAQ'
import { CTASection } from '@/components/marketing/CTASection'
import { SEO } from '@/components/seo/SEO'
import { Schema } from '@/components/seo/Schema'
import { trackEvent } from '@/lib/analytics'
import solutions from '@/data/solutions.json'
import technologies from '@/data/technologies.json'
import caseStudies from '@/data/case-studies.json'

interface IndustryPageProps {
  data: {
    slug: string
    name: string
    title: string
    description: string
    keyword: string
    painPoints: string[]
    solutions: string[]
    caseStudy: string
    icon: string
  }
}

export function IndustryPage({ data }: IndustryPageProps) {
  useEffect(() => {
    trackEvent('Landing Page Viewed', {
      page: `industry-${data.slug}`,
      keyword: data.keyword,
      intent: 'commercial'
    })
  }, [data.slug, data.keyword])

  const caseStudy = caseStudies.find(cs => cs.slug === data.caseStudy)
  const relatedSolutions = solutions.slice(0, 3)
  const relatedTech = technologies.slice(0, 3)

  const faqItems = [
    {
      question: `How long does it take to build an MVP for ${data.name.toLowerCase()}?`,
      answer: `At Avocado, we deliver ${data.name.toLowerCase()} MVPs in 3 weeks (21 days) using our 4-phase protocol: Recon → Scaffold → Sprint → Deploy. Our fastest projects launch in 72 hours for proof-of-concepts, while more complex enterprise platforms take the full 3 weeks. Traditional agencies often quote 3-6 months for the same scope.`
    },
    {
      question: `Do you have experience with ${data.name.toLowerCase()} compliance requirements?`,
      answer: `Yes—Avocado is ISO 27001 certified and has worked with Fortune 500 clients including BBVA and Banorte. We understand regulatory requirements, security standards, and compliance frameworks specific to ${data.name.toLowerCase()}. Every project includes security audits and compliance documentation.`
    },
    {
      question: `What's included in the fixed-price quote?`,
      answer: 'Our fixed-price quote includes: product scoping and requirements documentation, UX/UI design, frontend and backend development, automated testing and QA, cloud deployment and infrastructure setup, security audit, 30 days post-launch support, and full code ownership transfer. The only things NOT included are third-party service costs and out-of-scope feature requests.'
    },
    {
      question: `Can you integrate with our existing ${data.name.toLowerCase()} systems?`,
      answer: `Absolutely. We specialize in enterprise integrations including legacy systems, APIs, databases, and third-party services. Our team has extensive experience with ${data.name.toLowerCase()} technology stacks and can work with your existing infrastructure securely and efficiently.`
    }
  ]

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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `MVP Development for ${data.name}`,
    "provider": {
      "@type": "Organization",
      "name": "Avocado Dev Studio"
    },
    "description": data.description
  }

  return (
    <>
      <SEO
        title={`${data.title} | Avocado`}
        description={data.description}
      />
      <Schema data={articleSchema} />
      <Schema data={serviceSchema} />

      {/* Hero Section */}
      <Section className="py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">
            &gt; {data.name.toUpperCase()}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4 flex items-center justify-center gap-3">
            <span>{data.icon}</span>
            <span>{data.title}</span>
          </h1>
          <p className="text-white/80 text-lg mb-6">
            {data.description}
          </p>
        </div>

        <div className="flex justify-center">
          <Button variant="primary" asChild>
            <a href="/signal" onClick={() => trackEvent('Industry Hero CTA Clicked', { industry: data.slug })}>
              Get a Free Quote →
            </a>
          </Button>
        </div>
      </Section>

      {/* Pain Points Section */}
      <Section className="py-20 bg-void-surface">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">
            &gt; CHALLENGES WE SOLVE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
            COMMON {data.name.toUpperCase()} PAIN POINTS
          </h2>
          <p className="text-white/80 text-lg">
            We understand the unique challenges facing {data.name.toLowerCase()} organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {data.painPoints.map((point, idx) => (
            <Card key={idx} className="p-6">
              <div className="text-signal text-xs font-mono mb-2">PROBLEM {idx + 1}</div>
              <h3 className="text-xl font-bold text-white font-mono mb-2">{point}</h3>
              <p className="text-white/80">
                Traditional development approaches struggle with this. We solve it in weeks.
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Solutions Section */}
      <Section className="py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">
            &gt; OUR APPROACH
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
            HOW WE HELP {data.name.toUpperCase()} COMPANIES
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {data.solutions.map((solution, idx) => (
            <Card key={idx} className="p-6">
              <div className="text-signal text-xs font-mono mb-2">SOLUTION {idx + 1}</div>
              <h3 className="text-lg font-bold text-white font-mono">{solution}</h3>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary" asChild>
            <a href="/protocol">Learn About Our 4-Phase Protocol →</a>
          </Button>
        </div>
      </Section>

      {/* Case Study Section */}
      {caseStudy && (
        <Section className="py-20 bg-void-surface">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-signal text-lg md:text-xl font-mono mb-3">
              &gt; CASE STUDY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
              {caseStudy.client.toUpperCase()} SUCCESS STORY
            </h2>
          </div>

          <Card className="p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-signal text-xs font-mono mb-2">CHALLENGE</div>
                <p className="text-white/80 mb-6">{caseStudy.challenge}</p>
                
                <div className="text-signal text-xs font-mono mb-2">SOLUTION</div>
                <p className="text-white/80">{caseStudy.solution}</p>
              </div>
              <div>
                <div className="text-signal text-xs font-mono mb-2">RESULTS</div>
                <ul className="space-y-2 mb-6">
                  {caseStudy.results.map((result, idx) => (
                    <li key={idx} className="text-white/80 flex items-start gap-2">
                      <span className="text-signal">✓</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-signal text-xs font-mono mb-2">TECH STACK</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseStudy.techStack.map((tech, idx) => (
                    <span key={idx} className="text-xs font-mono text-white/60 border border-void-elevated px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="text-signal text-xs font-mono mb-1">TIMELINE</div>
                <div className="text-white font-mono">{caseStudy.timeline}</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button variant="secondary" asChild>
                <Link to={`/case-studies/${caseStudy.slug}`}>Read Full Case Study →</Link>
              </Button>
            </div>
          </Card>
        </Section>
      )}

      {/* Related Solutions */}
      <Section className="py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">
            &gt; POPULAR SOLUTIONS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
            WHAT WE BUILD FOR {data.name.toUpperCase()}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {relatedSolutions.map(solution => (
            <Card key={solution.slug} className="p-6">
              <div className="text-4xl mb-3">{solution.icon}</div>
              <h3 className="text-xl font-bold text-white font-mono mb-2">{solution.name}</h3>
              <p className="text-white/80 mb-4 text-sm">{solution.description}</p>
              <Button variant="secondary" className="w-full" asChild>
                <Link to={`/solutions/${solution.slug}`}>
                  Learn More →
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Related Technologies */}
      <Section className="py-20 bg-void-surface">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">
            &gt; TECHNOLOGIES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
            OUR TECH STACK
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {relatedTech.map(tech => (
            <Link
              key={tech.slug}
              to={`/tech/${tech.slug}`}
              className="block p-6 border border-void-elevated rounded-lg hover:border-signal transition-colors"
              onClick={() => trackEvent('Industry Tech Link Clicked', { industry: data.slug, tech: tech.slug })}
            >
              <div className="text-4xl mb-3">{tech.icon}</div>
              <div className="text-signal font-mono text-sm mb-2">{tech.name}</div>
              <p className="text-white/60 text-sm">{tech.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="py-20">
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
