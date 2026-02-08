import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { SEO } from '@/components/seo/SEO'
import { Schema } from '@/components/seo/Schema'
import { CTASection } from '@/components/marketing/CTASection'
import solutionsData from '@/data/solutions.json'

export function SolutionsHub() {
  return (
    <>
      <SEO
        title="Solutions | Avocado Dev Studio"
        description="AI chatbots, NFT marketplaces, smart contracts, SaaS MVPs, and loyalty platforms. Enterprise-grade solutions built by a team with Fortune 500 experience."
        canonical="https://avocadoblock.com/solutions"
      />
      <Schema
        type="CollectionPage"
        data={{
          name: 'Solutions | Avocado Dev Studio',
          description: 'AI, blockchain, and Web3 solutions for enterprise clients',
          url: 'https://avocadoblock.com/solutions',
        }}
      />

      {/* Hero */}
      <Section className="pt-32 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-signal font-mono mb-4">[SOLUTIONS]</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            BATTLE-TESTED
            <br />
            <span className="text-signal">SOLUTION BLUEPRINTS</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            We've built these solutions for Fortune 500 banks, sports teams, and fintechs. 
            Now we can build them for you—faster and with fewer risks.
          </p>
        </div>
      </Section>

      {/* Solutions Grid */}
      <Section className="py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionsData.map((solution) => (
            <a 
              key={solution.slug} 
              href={`/solutions/${solution.slug}`}
              className="group"
            >
              <Card className="h-full p-8 hover:border-signal/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{solution.icon || '⚡'}</span>
                  <span className="text-white/40 font-mono text-sm group-hover:text-signal transition-colors">
                    [LEARN MORE →]
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-signal transition-colors">
                  {solution.name}
                </h2>
                <p className="text-white/60 text-sm mb-4">
                  {solution.metaDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {solution.techStack?.slice(0, 3).map((tech: string) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-void-elevated text-white/60 text-xs font-mono rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="py-16 bg-void-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Not Your First Rodeo? Neither Is It Ours.
          </h2>
          <p className="text-white/60 text-lg mb-12">
            Every solution we offer has been battle-tested in production with real users 
            and real stakes. We know the pitfalls and how to avoid them.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold text-signal mb-2">50+</p>
              <p className="text-white/60 text-sm">Projects Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-signal mb-2">6-8</p>
              <p className="text-white/60 text-sm">Weeks Avg. Timeline</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-signal mb-2">ISO 27001</p>
              <p className="text-white/60 text-sm">Certified Security</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-signal mb-2">GCP</p>
              <p className="text-white/60 text-sm">Partner Expertise</p>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  )
}
