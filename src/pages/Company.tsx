import { Section } from '@/components/layout/Section'
import { SEO } from '@/components/seo/SEO'
import { Schema } from '@/components/seo/Schema'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export function Company() {
  return (
    <>
      <SEO
        title="Enterprise Blockchain & AI Development | Mexico"
        description="Google for Startups company. ISO27001 certified. Enterprise blockchain development for Chivas, Banorte, BBVA, Bitso. NFT strategy, smart contracts, Web3 integration in Mexico."
      />
      <Schema data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Avocado",
        "url": "https://avocado.dev/company",
        "description": "Enterprise blockchain and AI development studio. Google for Startups company based in Mexico City.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mexico City",
          "addressCountry": "MX"
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Partnership",
            "name": "Google for Startups"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Certification",
            "name": "ISO27001"
          }
        ]
      }} />

      <Section className="py-24 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
           <h1 className="text-4xl md:text-6xl font-bold font-mono text-white">
             ENTERPRISE CLIENTS.<br />
             <span className="text-signal">STARTUP SPEED.</span>
           </h1>
           <p className="text-xl text-text-secondary">
             We bring velocity to the enterprise and structure to the startup.
           </p>
        </div>
      </Section>

      {/* Credentials */}
      <Section className="py-12 border-y border-void-elevated bg-void-surface">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
             <img src="/clients/Google for Startups black color letter.png" alt="Google for Startups" className="h-12 w-auto invert" />
             <img src="/clients/iso27001.png" alt="ISO 27001" className="h-20 w-auto invert" />
             <img src="/clients/espmx.vc.png" alt="ESPMX VC" className="h-12 w-auto invert" />
         </div>
      </Section>

      {/* Blockchain Credentials */}
      <Section className="py-24">
        <h2 className="text-2xl font-mono text-center mb-8 text-text-secondary">&gt; BLOCKCHAIN &amp; WEB3 CREDENTIALS</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-center mb-12">
          <p className="text-text-secondary text-lg">
            As a <span className="text-signal font-semibold">Google Web3 &amp; AI Startup Company</span>, Avocado has delivered enterprise blockchain solutions across sports, finance, and consumer brands in Mexico and Latin America.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="p-6">
            <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; SPORTS &amp; ENTERTAINMENT</div>
            <p className="text-text-secondary text-sm">
              Selección Mexicana + Bitso fan engagement. Chivas NFT strategy. Historic Club América + Chivas "Clásico" blockchain activation.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; ENTERPRISE FINANCE</div>
            <p className="text-text-secondary text-sm">
              Banorte consortium blockchain PoCs. BBVA loyalty program integration. NFT-based rewards infrastructure.
            </p>
          </Card>
        </div>
      </Section>

      {/* Clients Grid */}
      <Section className="py-24 bg-void-surface">
        <h2 className="text-2xl font-mono text-center mb-16 text-text-secondary">TRUSTED BY</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
           {[
             { name: 'Chivas', src: '/clients/ChivasLogo.png' },
             { name: 'Banorte', src: '/clients/Banorte Logo.png' },
             { name: 'BBVA', src: '/clients/BBVA Logo.png' },
             { name: 'Grupo Salinas', src: '/clients/Grupo Salinas Logo.png' },
             { name: 'BitSo', src: '/clients/BitSo Logo.png' },
             { name: 'HouseBlocks', src: '/clients/HouseBlocks Logo.png' },
           ].map((client) => (
             <Card key={client.name} className="p-8 flex items-center justify-center hover:bg-void-elevated transition-colors min-h-[160px]">
                <img src={client.src} alt={client.name} className="max-h-12 w-auto max-w-full grayscale hover:grayscale-0 transition-all" />
             </Card>
           ))}
        </div>
      </Section>

      <Section className="py-24 text-center">
         <h2 className="text-2xl font-bold font-mono text-white mb-8">LOOKING FOR OUR PRODUCTS?</h2>
         <Button variant="ghost" asChild>
           <a href="/ventures">See Persea Labs -&gt;</a>
         </Button>
      </Section>
    </>
  )
}
