import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { SEO } from '@/components/seo/SEO'
import { Schema } from '@/components/seo/Schema'
import { CTASection } from '@/components/marketing/CTASection'
import caseStudiesData from '@/data/case-studies.json'

export function CaseStudiesHub() {
  return (
    <>
      <SEO
        title="Case Studies | Avocado Dev Studio"
        description="Explore how Avocado has helped Fortune 500 banks, professional sports teams, and leading fintechs build award-winning digital products. BBVA, Chivas, Bitso, Banorte, and more."
        canonical="https://avocadoblock.com/case-studies"
      />
      <Schema
        type="CollectionPage"
        data={{
          name: 'Case Studies | Avocado Dev Studio',
          description: 'Award-winning blockchain, AI, and Web3 projects for enterprise clients',
          url: 'https://avocadoblock.com/case-studies',
        }}
      />

      {/* Hero */}
      <Section className="pt-32 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-signal font-mono mb-4">[CASE_STUDIES]</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            REAL RESULTS FOR
            <br />
            <span className="text-signal">ENTERPRISE CLIENTS</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            From Fortune 500 banks to championship sports teams—see how we've delivered 
            award-winning blockchain, AI, and Web3 solutions that drive measurable business impact.
          </p>
        </div>
      </Section>

      {/* Case Studies Grid */}
      <Section className="py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudiesData.map((caseStudy) => (
            <a 
              key={caseStudy.slug} 
              href={`/case-studies/${caseStudy.slug}`}
              className="group"
            >
              <Card className="h-full p-8 hover:border-signal/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-signal font-mono text-sm">{caseStudy.industry}</span>
                  <span className="text-white/40 font-mono text-sm group-hover:text-signal transition-colors">
                    [VIEW →]
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-signal transition-colors">
                  {caseStudy.name}
                </h2>
                <p className="text-white/60 mb-6">
                  {caseStudy.metaDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.techStack.slice(0, 4).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-void-elevated text-white/60 text-xs font-mono rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {caseStudy.techStack.length > 4 && (
                    <span className="px-2 py-1 bg-void-elevated text-white/40 text-xs font-mono rounded">
                      +{caseStudy.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section className="py-16 bg-void-surface">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-signal mb-2">Fortune 500</p>
            <p className="text-white/60">Enterprise Clients</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-signal mb-2">Clio Award</p>
            <p className="text-white/60">Winning Projects</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-signal mb-2">20,000+ TPS</p>
            <p className="text-white/60">Blockchain Performance</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-signal mb-2">ISO 27001</p>
            <p className="text-white/60">Certified Security</p>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  )
}
