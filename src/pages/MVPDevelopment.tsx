import { useEffect } from 'react'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { FAQ } from '@/components/marketing/FAQ'
import { CTASection } from '@/components/marketing/CTASection'
import { SEO } from '@/components/seo/SEO'
import { Schema } from '@/components/seo/Schema'
import { trackEvent } from '@/lib/analytics'

const mvpFAQItems = [
  {
    question: "How much does it cost to build an MVP?",
    answer: "MVP development typically costs between $50K-$150K for a 3-week fixed-scope project, depending on complexity, integrations, and features. At Avocado, we provide transparent fixed-price quotes after a free scoping call. Factors affecting cost include number of user roles, AI/ML features, blockchain integration, and third-party APIs. Our average MVP project is $95K over 21 days."
  },
  {
    question: "How long does it take to develop an MVP?",
    answer: "Avocado delivers enterprise-grade MVPs in 3 weeks (21 days) using our 4-phase protocol: Recon → Scaffold → Sprint → Deploy. Our fastest MVP launched in 72 hours for an AI assistant project, while more complex blockchain platforms take the full 3 weeks. Traditional agencies often quote 3-6 months for the same scope."
  },
  {
    question: "What should be included in an MVP?",
    answer: "An MVP should include only the core features needed to validate your product hypothesis with real users—typically 3-5 main user flows and essential functionality. At Avocado, we use a MoSCoW prioritization workshop (Must have, Should have, Could have, Won't have) to identify the minimum feature set that delivers maximum value. The goal is to launch fast, learn from users, then iterate."
  },
  {
    question: "How do I choose an MVP development company?",
    answer: "Look for three key factors: (1) proven experience with your technology stack and industry, (2) transparent pricing and timeline commitments, and (3) case studies with measurable results and named clients. At Avocado, we provide all three: Fortune 500 clients like BBVA and Banorte, fixed-price quotes, and detailed case studies with specific metrics."
  },
  {
    question: "Can you build an MVP for enterprise companies, not just startups?",
    answer: "Absolutely—in fact, our client roster includes Fortune 500 enterprises (BBVA, Banorte, Grupo Salinas) alongside funded startups. Enterprise MVPs require additional security (we're ISO 27001 certified), compliance features, and integration with legacy systems, all of which we handle routinely. The MVP approach works for any company that needs to validate a new product idea quickly."
  },
  {
    question: "What's the difference between an MVP and a prototype?",
    answer: "A prototype is a clickable mockup or proof-of-concept to visualize an idea (typically non-functional or limited functionality), while an MVP is a fully functional product deployed to real users in production. At Avocado, we deliver working MVPs with clean, scalable code—not throwaway prototypes. Your MVP becomes the foundation for your full product, not something you rebuild later."
  },
  {
    question: "Do you provide ongoing support after the MVP launches?",
    answer: "Yes—every Avocado MVP includes 30 days of post-launch support (bug fixes, monitoring, performance optimization). After that, most clients choose one of two paths: (1) transition the codebase to their internal team with full documentation and knowledge transfer, or (2) continue with Avocado via a dedicated team engagement for ongoing feature development. You're never locked in."
  },
  {
    question: "Can the same team build both AI and blockchain features in one MVP?",
    answer: "Yes—Avocado is one of the few development studios with deep expertise in both AI/ML and blockchain/Web3 development. If your MVP requires, for example, an NFT marketplace with AI-powered recommendations, or a DeFi protocol with predictive risk scoring, we can handle both without coordinating multiple vendors."
  },
  {
    question: "What does fixed-price MVP development include?",
    answer: "Our fixed-price quote includes: product scoping and requirements documentation, UX/UI design, frontend and backend development, automated testing and QA, cloud deployment and infrastructure setup, security audit, 30 days post-launch support, and full code ownership transfer. The only things NOT included are third-party service costs and out-of-scope feature requests."
  },
  {
    question: "How do you build an MVP in 3 weeks without compromising quality?",
    answer: "We use our proprietary 4-phase protocol (Recon → Scaffold → Sprint → Deploy) with daily standups, 3-day agile sprints, and continuous integration/testing. Quality comes from clear scope definition up front (no scope creep), automated testing from day one, and a senior team that's built 200+ MVPs using this exact process. We don't cut corners—we eliminate waste."
  }
]

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://avocadoblock.com/#organization",
  "name": "Avocado Dev Studio",
  "alternateName": "Avocado",
  "url": "https://avocadoblock.com",
  "logo": "https://avocadoblock.com/logo.svg",
  "description": "Avocado Dev Studio is an ISO 27001-certified MVP development company based in Mexico City that ships enterprise-grade AI, blockchain, web, and mobile products in 3 weeks using a fixed-price model.",
  "foundingDate": "2018",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mexico City",
    "addressCountry": "MX"
  },
  "award": [
    "ISO 27001 Certification",
    "Google for Startups Partner",
    "Clio Sports Silver 2022"
  ],
  "slogan": "Ship in weeks, not quarters"
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "MVP Development",
  "provider": {
    "@type": "Organization",
    "name": "Avocado Dev Studio"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Mexico"
    }
  ],
  "description": "Enterprise-grade MVP development services including AI/ML, blockchain/Web3, web applications, and mobile apps. Fixed-price contracts with 3-week delivery timelines.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "50000",
    "highPrice": "150000",
    "description": "Fixed-price MVP development including design, development, testing, deployment, and 30 days support"
  }
}

export function MVPDevelopment() {
  useEffect(() => {
    trackEvent('Landing Page Viewed', {
      page: 'mvp-development',
      keyword: 'MVP development company',
      intent: 'commercial'
    })
  }, [])

  const services = [
    {
      title: 'AI & Machine Learning MVPs',
      timeline: '3 weeks',
      idealFor: 'Teams needing intelligent automation',
      desc: 'Conversational AI chatbots, recommendation engines, sentiment analysis, and predictive analytics. Working models, not just API integrations.',
      action: 'Build AI MVP'
    },
    {
      title: 'Blockchain & Web3 MVPs',
      timeline: '3 weeks',
      idealFor: 'Companies exploring decentralization',
      desc: 'Smart contracts, NFT marketplaces, DeFi platforms, and decentralized applications. Ethereum, Polygon, and Solana expertise.',
      action: 'Build Blockchain MVP'
    },
    {
      title: 'Web Application MVPs',
      timeline: '2-3 weeks',
      idealFor: 'Startups validating SaaS ideas',
      desc: 'SaaS platforms, customer portals, admin dashboards, and data visualization tools. Battle-tested frameworks that scale.',
      action: 'Build Web MVP'
    },
    {
      title: 'Mobile MVPs',
      timeline: '3-4 weeks',
      idealFor: 'Consumer-facing products',
      desc: 'Native iOS/Android or cross-platform apps. We handle App Store and Google Play submission end-to-end.',
      action: 'Build Mobile MVP'
    },
  ]

  const phases = [
    {
      phase: 'PHASE 1',
      title: 'Recon (Days 1-2)',
      desc: 'Stakeholder interviews, competitive analysis, and feature prioritization using MoSCoW method. Clear scope, fixed-price quote, zero ambiguity.',
      deliverables: 'PRD, technical architecture, fixed quote, timeline'
    },
    {
      phase: 'PHASE 2',
      title: 'Scaffold (Days 3-5)',
      desc: 'Technical foundation and design system. Cloud infrastructure, databases, CI/CD pipelines, wireframes, and core API architecture.',
      deliverables: 'Clickable prototype, design system, dev environment, API architecture'
    },
    {
      phase: 'PHASE 3',
      title: 'Sprint (Days 6-18)',
      desc: 'Build your MVP using agile 3-day sprints with daily standups. Automated testing, continuous deployment, code reviews by senior engineers.',
      deliverables: 'Working MVP in staging, automated tests, documentation, QA report'
    },
    {
      phase: 'PHASE 4',
      title: 'Deploy (Days 19-21)',
      desc: 'Security audit, performance optimization, penetration testing. Monitoring, alerting, documentation, and knowledge transfer.',
      deliverables: 'Live product, security audit, monitoring dashboard, 30 days support'
    },
  ]

  return (
    <>
      <SEO
        title="MVP Development Company | Ship in 3 Weeks | Avocado"
        description="Avocado is an MVP development company trusted by BBVA, Banorte & Fortune 500s. We ship AI, blockchain & web MVPs in 3 weeks with fixed pricing. ISO 27001 certified. Get a free quote."
      />
      <Schema data={organizationSchema} />
      <Schema data={serviceSchema} />

      <Section className="py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; MVP DEVELOPMENT</div>
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">SHIP ENTERPRISE-GRADE PRODUCTS IN WEEKS, NOT QUARTERS</h1>
          <p className="text-white/80 text-lg mb-6">
            Avocado Dev Studio is an ISO 27001-certified MVP development company based in Mexico City that ships enterprise-grade products in 3 weeks using a fixed-price model. We've delivered MVPs for Fortune 500 clients including BBVA, Banorte, Bitso, Chivas, and Grupo Salinas.
          </p>
          <p className="text-white/80 text-base">
            Whether you're a VP of Product at a $100M company or a funded startup founder, you get the same thing: working software in production within three weeks—no scope creep, no hourly billing surprises, no compromises on quality.
          </p>
        </div>

        <div className="flex justify-center">
          <Button variant="primary" asChild>
            <a href="/signal" onClick={() => trackEvent('MVP Hero CTA Clicked', { page: 'mvp-development' })}>Get a Free Scoping Call & Fixed Quote →</a>
          </Button>
        </div>
      </Section>

      <Section className="py-20 bg-void-surface">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; MVP SERVICES</div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">WHAT WE BUILD</h2>
          <p className="text-white/80 text-lg">AI, blockchain, web, and mobile MVPs. Fixed scope. Fixed price. Three weeks.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map(s => (
            <Card key={s.title} className="p-6 flex flex-col gap-4">
              <div className="text-signal text-xs font-mono">{s.timeline}</div>
              <h3 className="text-xl font-bold text-white font-mono">{s.title}</h3>
              <div className="text-white/60 text-sm">Ideal for: {s.idealFor}</div>
              <p className="text-white/80 flex-1">{s.desc}</p>
              <Button variant="secondary" className="w-full" asChild>
                <a href="/signal" onClick={() => trackEvent('MVP Service Card Clicked', { service: s.title, action: s.action })}>{s.action} →</a>
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; 4-PHASE PROTOCOL</div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">RECON → SCAFFOLD → SPRINT → DEPLOY</h2>
          <p className="text-white/80 text-lg mb-2">
            Avocado delivers working prototypes in 3 days and full products in 1-3 weeks. This speed comes from our 4-phase protocol.
          </p>
          <p className="text-white/80 text-base">
            You see daily progress visibility and client review sessions every three days. No black-box development. Working software from day three.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {phases.map(p => (
            <Card key={p.phase} className="p-6 flex flex-col gap-4">
              <div className="text-signal text-xs font-mono">{p.phase}</div>
              <h3 className="text-xl font-bold text-white font-mono">{p.title}</h3>
              <p className="text-white/80">{p.desc}</p>
              <div className="text-white/60 text-sm">
                <span className="font-mono text-signal text-xs">DELIVERABLES:</span> {p.deliverables}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="py-20 bg-void-surface">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; LEARN MORE</div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">EXPLORE AVOCADO</h2>
          <p className="text-white/80 text-lg">Discover how we work and what we've built.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <a href="/protocol" onClick={() => trackEvent('MVP Internal Link Clicked', { destination: 'protocol' })} className="block p-6 border border-void-elevated rounded-lg hover:border-signal transition-colors text-center">
            <div className="text-signal font-mono text-sm mb-2">PROTOCOL</div>
            <p className="text-white/60 text-sm">Our 4-phase development process</p>
          </a>
          <a href="/services" onClick={() => trackEvent('MVP Internal Link Clicked', { destination: 'services' })} className="block p-6 border border-void-elevated rounded-lg hover:border-signal transition-colors text-center">
            <div className="text-signal font-mono text-sm mb-2">SERVICES</div>
            <p className="text-white/60 text-sm">All development services we offer</p>
          </a>
          <a href="/ventures" onClick={() => trackEvent('MVP Internal Link Clicked', { destination: 'ventures' })} className="block p-6 border border-void-elevated rounded-lg hover:border-signal transition-colors text-center">
            <div className="text-signal font-mono text-sm mb-2">VENTURES</div>
            <p className="text-white/60 text-sm">Products we've built ourselves</p>
          </a>
          <a href="/company" onClick={() => trackEvent('MVP Internal Link Clicked', { destination: 'company' })} className="block p-6 border border-void-elevated rounded-lg hover:border-signal transition-colors text-center">
            <div className="text-signal font-mono text-sm mb-2">COMPANY</div>
            <p className="text-white/60 text-sm">Our story and credentials</p>
          </a>
        </div>
      </Section>

      <Section className="py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; FAQ</div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">COMMON QUESTIONS</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <FAQ items={mvpFAQItems} />
        </div>
      </Section>

      <CTASection />
    </>
  )
}
