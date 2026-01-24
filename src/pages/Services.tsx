import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { FAQ, servicesFAQItems } from '@/components/marketing/FAQ'
import { ComparisonTable } from '@/components/marketing/ComparisonTable'
import { CTASection } from '@/components/marketing/CTASection'
import { SEO } from '@/components/seo/SEO'

export function Services() {
  const services = [
    {
      title: 'Blockchain & Web3',
      timeline: '1-3 weeks',
      idealFor: 'Enterprises entering Web3 or launching NFT/token projects',
      desc: 'NFT strategy, smart contract development, and blockchain integration. Google for Startups company with projects for Chivas, Bitso, and Banorte.',
      action: 'Explore Web3'
    },
    {
      title: 'MVP Development',
      timeline: '1-3 weeks',
      idealFor: 'Founders with validated ideas ready to build',
      desc: 'PoC in 3 days. Production-ready MVP in 1-3 weeks. AI-accelerated, human-verified.',
      action: 'Start an MVP'
    },
    {
      title: 'Scale Engineering',
      timeline: 'Ongoing',
      idealFor: 'Products hitting growth limits',
      desc: 'Scale existing products to handle 10x-100x growth. Infrastructure that doesn\'t break.',
      action: 'Scale Your Product'
    },
    {
      title: 'Technical Rescue',
      timeline: '3-7 days',
      idealFor: 'Projects that are stuck, broken, or behind',
      desc: 'Fix and stabilize failing or stalled projects. Clean, documented, maintainable.',
      action: 'Rescue My Project'
    },
  ]

  return (
    <>
      <SEO
        title="Services | Blockchain, AI & MVP Development"
        description="Blockchain & Web3 development. AI-driven MVPs in 1-3 weeks. PoC in 3 days. Google for Startups company trusted by Chivas, Banorte, BBVA."
      />

      <Section className="py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; SERVICES</div>
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">WHAT WE BUILD</h1>
          <p className="text-text-secondary text-lg">MVPs. Scalable systems. Rescue operations. No discovery theater.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {services.map(s => (
            <Card key={s.title} className="p-6 flex flex-col gap-4">
              <div className="text-signal text-xs font-mono">{s.timeline}</div>
              <h3 className="text-xl font-bold text-white font-mono">{s.title}</h3>
              <div className="text-text-tertiary text-sm">Ideal for: {s.idealFor}</div>
              <p className="text-text-secondary flex-1">{s.desc}</p>
              <Button variant="secondary" className="w-full" asChild>
                <a href="/signal">{s.action} →</a>
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="py-20 bg-void-surface">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; COMPARISON</div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">US VS. THEM</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <ComparisonTable />
        </div>
      </Section>

      <Section className="py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; FAQ</div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">QUESTIONS?</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <FAQ items={servicesFAQItems} />
        </div>
      </Section>

      <CTASection />
    </>
  )
}
