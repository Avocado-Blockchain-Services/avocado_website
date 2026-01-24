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
      title: 'Digital Products',
      timeline: '1-3 weeks',
      idealFor: 'Founders ready to launch',
      desc: 'Apps, platforms, and tools your customers will love. From concept to live product in weeks.',
      action: 'Build My Product'
    },
    {
      title: 'AI-Powered Experiences',
      timeline: '1-3 weeks',
      idealFor: 'Companies looking to automate',
      desc: 'Chatbots, recommendation engines, document processing. AI that solves real business problems.',
      action: 'Explore AI'
    },
    {
      title: 'Fan Engagement & Loyalty',
      timeline: '2-4 weeks',
      idealFor: 'Brands wanting deeper connections',
      desc: 'Rewards platforms, NFT campaigns, digital collectibles. Trusted by Chivas, Club América, and Bitso.',
      action: 'Launch Campaign'
    },
    {
      title: 'Technical Rescue',
      timeline: '3-7 days',
      idealFor: 'Projects stuck or behind',
      desc: 'We fix failing projects fast. Clean, documented, ready for your team to take over.',
      action: 'Rescue Project'
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
