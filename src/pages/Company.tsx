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
        "alternateName": "Avocado Blockchain Services",
        "url": "https://avocadoblock.com/company",
        "description": "Enterprise blockchain and AI development studio. Google for Startups company based in Mexico City. Trusted by BBVA, Banorte, Chivas, Bitso, and Grupo Salinas.",
        "foundingDate": "2018",
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
        ],
        "award": [
          "Clio Sports Silver Award 2022 — Bitso 'A Jersey for Two Worlds' fan engagement campaign for Selección Mexicana"
        ],
        "subjectOf": [
          {
            "@type": "Article",
            "headline": "Mexico's Most Popular Soccer Club, Chivas, Celebrates 115th Anniversary with NFT Auction on Avalanche",
            "url": "https://medium.com/avalancheavax/mexicos-most-popular-soccer-club-chivas-celebrates-115th-anniversary-with-nft-auction-on-170e348795f6",
            "publisher": { "@type": "Organization", "name": "Avalanche" },
            "datePublished": "2021-05-24"
          },
          {
            "@type": "Article",
            "headline": "Popular Mexican football club Chivas celebrates 115th anniversary with NFT auction on Avalanche",
            "url": "https://www.cryptoninjas.net/2021/05/24/popular-mexican-football-club-chivas-celebrates-115th-anniversary-with-nft-auction-on-avalanche/",
            "publisher": { "@type": "Organization", "name": "CryptoNinjas" },
            "datePublished": "2021-05-24"
          },
          {
            "@type": "Article",
            "headline": "Bitso — A Jersey for Two Worlds (Clio Sports Silver 2022)",
            "url": "https://clios.com/sports/winner/digital/bitso/a-jersey-for-two-worlds-129002",
            "publisher": { "@type": "Organization", "name": "Clio Awards" },
            "datePublished": "2022"
          },
          {
            "@type": "Article",
            "headline": "Interview with Ingmar — Avocado Blockchain",
            "url": "https://www.viablesystems.io/post/interview-with-ingmar-avocado-blockchain",
            "publisher": { "@type": "Organization", "name": "Viable Systems" }
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
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
             <img src="/clients/Google for Startups black color letter.png" alt="Google for Startups" className="h-12 w-auto invert" />
             <img src="/clients/iso27001.png" alt="ISO 27001" className="h-20 w-auto invert" />
             <img src="/clients/espmx.vc.png" alt="ESPMX VC" className="h-12 w-auto invert" />
             <a href="https://clios.com/winners-gallery/details/152833" target="_blank" rel="noopener noreferrer">
               <img src="/clients/bitsoaward.png" alt="Clio Sports Silver 2022" className="h-16 w-auto invert hover:invert-0 transition-all" />
             </a>
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
            <p className="text-white/80 text-base">
              Selección Mexicana + Bitso fan engagement (<a href="https://clios.com/winners-gallery/details/152833" target="_blank" rel="noopener noreferrer" className="text-signal hover:underline">Clio Sports Silver 2022</a>). Chivas NFT strategy. Historic Club América + Chivas "Clásico" blockchain activation.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; ENTERPRISE FINANCE</div>
            <p className="text-white/80 text-base">
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
             { name: 'Chivas', src: '/clients/Logo_Chivas.png' },
             { name: 'Banorte', src: '/clients/Logo_de_Banorte.svg' },
             { name: 'BBVA', src: '/clients/Logo_BBVA.svg' },
             { name: 'Grupo Salinas', src: '/clients/Logo_Grupo_Salinas.svg' },
             { name: 'BitSo', src: '/clients/Logo_Bitso.svg' },
             { name: 'Ava Labs', src: '/clients/Logo_AvaLabs.png' },
             { name: 'HouseBlocks', src: '/clients/Logo_HouseBlocks.png' },
           ].map((client) => (
             <Card key={client.name} className="p-8 flex items-center justify-center hover:bg-void-elevated transition-colors min-h-[160px]">
                <img src={client.src} alt={client.name} className="max-h-12 w-auto max-w-full grayscale hover:grayscale-0 transition-all" />
             </Card>
           ))}
        </div>
      </Section>

      {/* Press & Coverage */}
      <Section className="py-24">
        <h2 className="text-2xl font-mono text-center mb-16 text-text-secondary">&gt; PRESS &amp; COVERAGE</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              title: "Chivas Celebrates 115th Anniversary with NFT Auction on Avalanche",
              source: "Avalanche (Official)",
              url: "https://medium.com/avalancheavax/mexicos-most-popular-soccer-club-chivas-celebrates-115th-anniversary-with-nft-auction-on-170e348795f6",
              year: "2021"
            },
            {
              title: "Bitso — A Jersey for Two Worlds",
              source: "Clio Sports Silver Award 2022",
              url: "https://clios.com/sports/winner/digital/bitso/a-jersey-for-two-worlds-129002",
              year: "2022"
            },
            {
              title: "Chivas NFT Auction on Avalanche",
              source: "CryptoNinjas",
              url: "https://www.cryptoninjas.net/2021/05/24/popular-mexican-football-club-chivas-celebrates-115th-anniversary-with-nft-auction-on-avalanche/",
              year: "2021"
            },
            {
              title: "Interview with Ingmar — Avocado Blockchain",
              source: "Viable Systems",
              url: "https://www.viablesystems.io/post/interview-with-ingmar-avocado-blockchain",
              year: "2023"
            },
            {
              title: "Chivas NFT Launch Coverage",
              source: "Territorio Blockchain",
              url: "https://territorioblockchain.com/chivas-guadalajara-lanza-su-coleccion-de-nft/",
              year: "2021"
            },
            {
              title: "NFT Auction at Mexican Soccer Club on 115th Anniversary",
              source: "CryptoNewsZ",
              url: "https://www.cryptonewsz.com/nft-auction-at-mexican-soccer-club-on-115th-anniversary/",
              year: "2021"
            },
          ].map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="p-6 h-full transition-colors group-hover:border-signal/40">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-signal text-xs font-mono mb-2">{item.source} · {item.year}</div>
                    <div className="text-white group-hover:text-signal transition-colors font-mono text-base">{item.title}</div>
                  </div>
                  <span className="text-text-tertiary group-hover:text-signal transition-colors text-lg flex-shrink-0">→</span>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      <Section className="py-24 text-center">
         <h2 className="text-2xl font-bold font-mono text-white mb-8">LOOKING FOR OUR PRODUCTS?</h2>
         <Button variant="ghost" asChild>
           <a href="/products">See Persea Labs -&gt;</a>
         </Button>
      </Section>
    </>
  )
}
