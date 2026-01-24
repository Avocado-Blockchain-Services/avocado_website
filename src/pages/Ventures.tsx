import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/marketing/CTASection'
import { SEO } from '@/components/seo/SEO'
import { Schema } from '@/components/seo/Schema'

const perseaAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://avocado.dev/ventures#persea-social",
  "name": "Persea Social",
  "description": "Social engagement platform for building authentic communities",
  "applicationCategory": "SocialNetworkingApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "creator": {
    "@id": "https://avocado.dev/#organization"
  }
}

const perseaAiSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://avocado.dev/ventures#persea-ai",
  "name": "Persea.ai",
  "description": "AI-powered data pipeline platform built on Google Cloud Vertex AI",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "creator": {
    "@id": "https://avocado.dev/#organization"
  }
}

const ventures = [
  {
    name: 'Persea Social',
    tagline: 'Social Engagement Platform',
    challenge: 'Build a social platform that helps creators build authentic communities.',
    approach: 'Mobile-first design with real-time engagement features and analytics.',
    stack: ['Solidity', 'React', 'Python', 'GCP'],
    metric: 'Shipped in 2 weeks, 10K users in month 1',
    url: 'https://perseasocial.com',
    image: '/persea-social.webp'
  },
  {
    name: 'Persea.ai',
    tagline: 'AI Data Pipeline Platform',
    challenge: 'Process and analyze massive document volumes with AI.',
    approach: 'Serverless architecture with Vertex AI for intelligent document processing.',
    stack: ['Vertex AI', 'Python', 'React', 'GCP'],
    metric: 'Processing 1M+ documents/day, 99.9% uptime',
    url: 'https://persea.ai',
    image: '/persea-ai.webp'
  }
]

export function Ventures() {
  return (
    <>
      <SEO
        title="Ventures | What We've Built"
        description="We build our own products. Persea Social and Persea.ai - proof we know what we're doing."
      />
      <Schema data={perseaAppSchema} />
      <Schema data={perseaAiSchema} />

      <Section className="py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; VENTURES</div>
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">OUR PRODUCTS</h1>
          <p className="text-text-secondary text-lg">We build our own products. This is the best proof we know what we're doing.</p>
        </div>

        <div className="space-y-16">
          {ventures.map((venture) => (
            <Card key={venture.name} className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="text-signal text-lg md:text-xl font-mono mb-3">{venture.tagline.toUpperCase()}</div>
                  <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-6">{venture.name}</h2>

                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-text-tertiary text-xs font-mono mb-1">THE CHALLENGE</div>
                      <p className="text-text-secondary">{venture.challenge}</p>
                    </div>
                    <div>
                      <div className="text-text-tertiary text-xs font-mono mb-1">OUR APPROACH</div>
                      <p className="text-text-secondary">{venture.approach}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-text-tertiary text-xs font-mono mb-2">THE STACK</div>
                    <div className="flex flex-wrap gap-2">
                      {venture.stack.map(tech => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-void-surface border border-signal/20 rounded-lg p-4 mb-6">
                    <div className="text-signal text-xs font-mono mb-1">&gt; KEY_METRIC</div>
                    <p className="text-white font-mono">{venture.metric}</p>
                  </div>

                  <Button variant="secondary" asChild>
                    <a href={venture.url} target="_blank" rel="noopener noreferrer">
                      Visit {venture.name} →
                    </a>
                  </Button>
                </div>

                {/* Placeholder for screenshot */}
                <div className="bg-void-surface border border-void-elevated rounded-lg aspect-video flex items-center justify-center">
                  <span className="text-text-tertiary font-mono text-sm">[Screenshot]</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  )
}
