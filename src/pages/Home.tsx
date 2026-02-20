import { useState } from 'react'
import { BootSequence } from '@/components/terminal/BootSequence'
import { Hero } from '@/components/marketing/Hero'
import { StackMarquee } from '@/components/marketing/StackMarquee'
import { CTASection } from '@/components/marketing/CTASection'
import { FAQ, homeFAQItems } from '@/components/marketing/FAQ'
import { MethodPreview } from '@/components/marketing/MethodPreview'
import { Section } from '@/components/layout/Section'
import { SEO } from '@/components/seo/SEO'
import { Schema } from '@/components/seo/Schema'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://avocadoblock.com/#organization",
  "name": "Avocado",
  "alternateName": ["Avocado Dev Studio", "Avocado"],
  "description": "High-velocity engineering studio that ships MVPs in weeks, not quarters. Specializing in AI/ML products, blockchain applications, and scalable web platforms.",
  "url": "https://avocadoblock.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://avocadoblock.com/logo.svg",
    "width": 200,
    "height": 42
  },
  "foundingDate": "2018",
  "founders": [
    {
      "@type": "Person",
      "name": "Avocado Team",
      "jobTitle": "Founders"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/avocado",
    "https://twitter.com/avocadoblock",
    "https://www.facebook.com/avocadoblock",
    "https://instagram.com/avocadoblockchain"
  ],
  "knowsAbout": [
    "Blockchain Development",
    "Web3 Development",
    "NFT Development",
    "Smart Contract Development",
    "Solidity",
    "AI/ML Product Engineering",
    "Rapid MVP Development",
    "React",
    "JavaScript",
    "Python",
    "Google Cloud Vertex AI",
    "Google Cloud Platform"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Engineering Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "MVP Development",
          "description": "Launch a production-ready MVP in 4-8 weeks"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Scale Engineering",
          "description": "Scale existing products to handle 10x-100x growth"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Agent Automation",
          "description": "Custom AI agents that automate business workflows — lead qualification, customer support, operations, and reporting"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Technical Rescue",
          "description": "Fix and stabilize failing or stalled projects"
        }
      }
    ]
  }
}

export function Home() {
  const [showBoot, setShowBoot] = useState(true)

  return (
    <>
      <SEO
        title="Ship in weeks, not quarters"
        description="High-velocity engineering studio that ships MVPs in weeks, not quarters. Specializing in AI/ML products, blockchain applications, and scalable web platforms."
      />
      <Schema data={organizationSchema} />

      {showBoot && <BootSequence onComplete={() => setShowBoot(false)} />}

      <Hero />
      <StackMarquee />

      <Section id="trust" className="py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; CREDENTIALS</div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-white">ENTERPRISE VERIFIED</h2>
          <p className="text-white/80 text-lg">Trusted by Fortune 500 companies and backed by industry leaders.</p>
        </div>

        {/* Credentials Bar */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16">
          <Card className="px-6 py-5 flex items-center gap-3">
            <div className="w-3 h-3 bg-signal rounded-full animate-pulse" />
            <span className="font-mono text-white text-base">Google for Startups: AI + Blockchain</span>
          </Card>
          <Card className="px-6 py-5 flex items-center gap-3">
            <div className="w-3 h-3 bg-signal rounded-full animate-pulse" />
            <span className="font-mono text-white text-base">ISO 27001 Certified</span>
          </Card>
          <Card className="px-6 py-5 flex items-center gap-3">
            <div className="w-3 h-3 bg-signal rounded-full animate-pulse" />
            <span className="font-mono text-white text-base">Clio Sports Silver 2022</span>
          </Card>
          <Card className="px-6 py-5 flex items-center gap-3">
            <div className="w-3 h-3 bg-signal rounded-full animate-pulse" />
            <span className="font-mono text-white text-base">ESPMX VC Backed</span>
          </Card>
        </div>

        {/* Client Logos */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center text-white/60 text-sm font-mono mb-8 tracking-wider">
            TRUSTED BY ENTERPRISE
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 items-center justify-items-center">
            {[
              { name: 'BBVA', src: '/clients/Logo_BBVA.svg' },
              { name: 'Banorte', src: '/clients/Logo_de_Banorte.svg' },
              { name: 'Grupo Salinas', src: '/clients/Logo_Grupo_Salinas.svg' },
              { name: 'Chivas', src: '/clients/Logo_Chivas.png' },
              { name: 'Bitso', src: '/clients/Logo_Bitso.svg' },
              { name: 'Ava Labs', src: '/clients/Logo_AvaLabs.png' },
              { name: 'HouseBlocks', src: '/clients/Logo_HouseBlocks.png' },
            ].map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center p-4 h-16 w-full"
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-14">
          <Button variant="secondary" asChild>
            <a href="/company">Enterprise clients. Startup speed. -&gt;</a>
          </Button>
        </div>
      </Section>

      <Section id="method" className="py-24 bg-void-surface">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; PLAYBOOK</div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-white">HOW WE WORK</h2>
          <p className="text-white/80 text-lg mb-2">Four phases. Results on day one. No death by meetings.</p>
          <p className="text-white/60 text-base">You see progress daily. Not PowerPoints. Not status reports. Working software.</p>
        </div>
        <MethodPreview />
      </Section>

      <Section id="faq" className="py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; FAQ</div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-white">QUESTIONS?</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <FAQ items={homeFAQItems} />
        </div>
      </Section>

      <CTASection />
    </>
  )
}
