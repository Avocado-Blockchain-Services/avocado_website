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

interface TechPageProps {
  data: {
    slug: string
    name: string
    title: string
    description: string
    keyword: string
    capabilities: string[]
    useCases: string[]
    icon: string
  }
}

export function TechPage({ data }: TechPageProps) {
  useEffect(() => {
    trackEvent('Landing Page Viewed', {
      page: `tech-${data.slug}`,
      keyword: data.keyword,
      intent: 'informational'
    })
  }, [data.slug, data.keyword])

  const relatedSolutions = solutions.filter(s => 
    s.techStack.some(tech => tech.toLowerCase().includes(data.name.toLowerCase()))
  ).slice(0, 3)

  const faqItems = [
    {
      question: `Why choose Avocado for ${data.name} development?`,
      answer: `Avocado has deep expertise in ${data.name} with proven experience delivering production-grade applications for Fortune 500 clients including BBVA, Banorte, and Bitso. We're ISO 27001 certified, Google Cloud Platform experts, and deliver in 3 weeks with fixed pricing. You get senior engineers, not junior contractors.`
    },
    {
      question: `How long does it take to build with ${data.name}?`,
      answer: `At Avocado, we deliver ${data.name}-based MVPs in 2-3 weeks using our 4-phase protocol: Recon → Scaffold → Sprint → Deploy. Our fastest projects launch in 72 hours for proof-of-concepts, while more complex enterprise platforms take the full 3 weeks. Traditional agencies often quote 3-6 months for the same scope.`
    },
    {
      question: `What's included in a ${data.name} project?`,
      answer: 'Our fixed-price quote includes: product scoping and requirements documentation, UX/UI design, frontend and backend development, automated testing and QA, cloud deployment and infrastructure setup, security audit, 30 days post-launch support, and full code ownership transfer.'
    },
    {
      question: `Can you integrate ${data.name} with our existing systems?`,
      answer: `Absolutely. We specialize in enterprise integrations including legacy systems, APIs, databases, and third-party services. Our team has extensive experience with ${data.name} and can work with your existing infrastructure securely and efficiently.`
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
            &gt; TECHNOLOGY
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4 flex items-center justify-center gap-3">
            <span>{data.icon}</span>
            <span>{data.name}</span>
          </h1>
          <p className="text-white/80 text-lg mb-6">
            {data.description}
          </p>
        </div>

        <div className="flex justify-center">
          <Button variant="primary" asChild>
            <a href="/signal" onClick={() => trackEvent('Tech Hero CTA Clicked', { tech: data.slug })}>
              Start a {data.name} Project →
            </a>
          </Button>
        </div>
      </Section>

      {/* Capabilities Section */}
      <Section className="py-20 bg-void-surface">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">
            &gt; WHAT WE BUILD
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
            {data.name.toUpperCase()} CAPABILITIES
          </h2>
          <p className="text-white/80 text-lg">
            Our team has deep expertise in {data.name} development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {data.capabilities.map((capability, idx) => (
            <Card key={idx} className="p-6">
              <div className="text-signal text-xs font-mono mb-2">CAPABILITY {idx + 1}</div>
              <h3 className="text-xl font-bold text-white font-mono">{capability}</h3>
            </Card>
          ))}
        </div>
      </Section>

      {/* Use Cases Section */}
      <Section className="py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">
            &gt; USE CASES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
            WHAT YOU CAN BUILD WITH {data.name.toUpperCase()}
          </h2>
          <p className="text-white/80 text-lg">
            Real-world applications we've delivered using {data.name}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {data.useCases.map((useCase, idx) => (
            <Card key={idx} className="p-6 text-center">
              <h3 className="text-lg font-bold text-white font-mono">{useCase}</h3>
            </Card>
          ))}
        </div>
      </Section>

      {/* Related Solutions */}
      {relatedSolutions.length > 0 && (
        <Section className="py-20 bg-void-surface">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-signal text-lg md:text-xl font-mono mb-3">
              &gt; SOLUTIONS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
              BUILT WITH {data.name.toUpperCase()}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
      )}

      {/* Why Avocado Section */}
      <Section className="py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">
            &gt; WHY AVOCADO
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
            EXPERT {data.name.toUpperCase()} DEVELOPMENT
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-6">
            <div className="text-signal text-xs font-mono mb-2">PROVEN EXPERTISE</div>
            <h3 className="text-xl font-bold text-white font-mono mb-3">Battle-Tested</h3>
            <p className="text-white/80">
              Trusted by Fortune 500 companies including BBVA, Banorte, and Grupo Salinas. ISO 27001 certified.
            </p>
          </Card>

          <Card className="p-6">
            <div className="text-signal text-xs font-mono mb-2">RAPID DELIVERY</div>
            <h3 className="text-xl font-bold text-white font-mono mb-3">3 Weeks</h3>
            <p className="text-white/80">
              Ship production-ready {data.name} applications in 3 weeks using our 4-phase protocol.
            </p>
          </Card>

          <Card className="p-6">
            <div className="text-signal text-xs font-mono mb-2">FIXED PRICING</div>
            <h3 className="text-xl font-bold text-white font-mono mb-3">No Surprises</h3>
            <p className="text-white/80">
              Transparent fixed-price quotes. You know exactly what you're paying before we start.
            </p>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button variant="secondary" asChild>
            <a href="/company">Learn More About Avocado →</a>
          </Button>
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
