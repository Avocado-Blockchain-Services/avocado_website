import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { SEO } from '@/components/seo/SEO'
import { Schema } from '@/components/seo/Schema'
import { CTASection } from '@/components/marketing/CTASection'
import industriesData from '@/data/industries.json'

export function IndustriesHub() {
  return (
    <>
      <SEO
        title="Industries We Serve | Avocado Dev Studio"
        description="Avocado builds AI, blockchain, and Web3 solutions for banking, fintech, sports, and entertainment industries. ISO 27001 certified. Fortune 500 experience."
        canonical="https://avocadoblock.com/industries"
      />
      <Schema
        type="CollectionPage"
        data={{
          name: 'Industries We Serve | Avocado Dev Studio',
          description: 'Enterprise software development for banking, fintech, sports, and entertainment',
          url: 'https://avocadoblock.com/industries',
        }}
      />

      {/* Hero */}
      <Section className="pt-32 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-signal font-mono mb-4">[INDUSTRIES]</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            DEEP EXPERTISE IN
            <br />
            <span className="text-signal">YOUR INDUSTRY</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            We don't just write code—we understand the unique challenges, regulations, 
            and opportunities in your sector. That's why Fortune 500s trust us.
          </p>
        </div>
      </Section>

      {/* Industries Grid */}
      <Section className="py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {industriesData.map((industry) => (
            <a 
              key={industry.slug} 
              href={`/industries/${industry.slug}`}
              className="group"
            >
              <Card className="h-full p-8 hover:border-signal/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{(industry as any).icon || '🏢'}</span>
                  <span className="text-white/40 font-mono text-sm group-hover:text-signal transition-colors">
                    [EXPLORE →]
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-signal transition-colors">
                  {industry.name}
                </h2>
                <p className="text-white/60 mb-6">
                  {industry.metaDescription}
                </p>
                <div className="pt-4 border-t border-void-elevated">
                  <p className="text-white/40 text-sm font-mono mb-2">KEY CLIENTS:</p>
                  <div className="flex flex-wrap gap-2">
                    {(industry as any).clients?.slice(0, 3).map((client: string) => (
                      <span 
                        key={client} 
                        className="text-white/80 text-sm"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      {/* Why Industry Expertise Matters */}
      <Section className="py-16 bg-void-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Why Industry Expertise Matters
          </h2>
          <p className="text-white/60 text-lg mb-12">
            Generic dev shops write generic code. We've spent years learning the regulations, 
            workflows, and user expectations in each industry we serve. That means faster 
            development, fewer surprises, and solutions that actually work in the real world.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <p className="text-signal font-mono mb-2">[01]</p>
              <h3 className="text-white font-bold mb-2">Regulatory Knowledge</h3>
              <p className="text-white/60 text-sm">
                We understand PCI DSS, ISO 27001, KYC/AML, and industry-specific compliance requirements.
              </p>
            </div>
            <div>
              <p className="text-signal font-mono mb-2">[02]</p>
              <h3 className="text-white font-bold mb-2">Proven Patterns</h3>
              <p className="text-white/60 text-sm">
                We've solved your industry's common challenges before—no reinventing the wheel.
              </p>
            </div>
            <div>
              <p className="text-signal font-mono mb-2">[03]</p>
              <h3 className="text-white font-bold mb-2">Stakeholder Language</h3>
              <p className="text-white/60 text-sm">
                We speak your language and understand what your executives and users need.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  )
}
