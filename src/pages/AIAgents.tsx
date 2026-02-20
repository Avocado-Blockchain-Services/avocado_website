import { useEffect } from 'react'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { FAQ } from '@/components/marketing/FAQ'
import { CTASection } from '@/components/marketing/CTASection'
import { SEO } from '@/components/seo/SEO'
import { Schema } from '@/components/seo/Schema'
import { trackEvent } from '@/lib/analytics'

const aiAgentsFAQItems = [
  {
    question: "What exactly is an AI agent?",
    answer: "An AI agent is software that performs tasks autonomously on behalf of your business — like answering customer questions, qualifying leads, generating reports, or updating your CRM. Think of it as a digital team member that follows your rules, learns your processes, and handles the work nobody on your team was hired to do. Unlike chatbots, agents can take actions: they read emails, update databases, navigate web apps, and coordinate with your real team when human judgment is needed."
  },
  {
    question: "How long does it take to deploy an AI agent?",
    answer: "Most agents go from kickoff to live in 2-4 weeks. Week one is understanding your workflows and designing the agent. Weeks two and three are building and connecting it to your tools. The final stretch is testing with real scenarios and going live with human oversight. Simpler agents (like an inbox responder) can be live in under a week."
  },
  {
    question: "Do I need technical knowledge to use AI agents?",
    answer: "No. We handle all the technical work — building, deploying, connecting to your systems, and monitoring. You interact with your agents the same way you'd interact with a team member: through Slack, email, or a simple dashboard. If you can describe what you want done, we can build an agent to do it."
  },
  {
    question: "What if the AI agent makes a mistake?",
    answer: "Every agent we deploy includes human-in-the-loop controls. For sensitive tasks — customer-facing responses, financial operations, anything with real consequences — agents escalate to your team before acting. You set the rules for what the agent can do independently and what needs approval. You're always in control."
  },
  {
    question: "What tools and systems do your agents integrate with?",
    answer: "We build three types of integrations: API-based (direct connections to CRMs, ERPs, databases, email platforms), browser-based (for web apps and legacy systems that don't have APIs), and human-in-the-loop (where agents coordinate with your real team via Slack, email, or SMS). If your team uses it, we can connect to it."
  },
  {
    question: "How much does an AI agent cost compared to hiring someone?",
    answer: "An AI agent typically costs a fraction of a full-time hire while handling specific tasks at much higher volume and consistency. We provide fixed-price quotes after understanding your workflows — no hourly billing, no surprises. The ROI usually becomes clear within the first month: tasks that consumed hours of human time get handled automatically."
  },
  {
    question: "Can AI agents work with my existing software?",
    answer: "Yes. We specialize in making agents work with whatever you already use — Salesforce, HubSpot, Google Workspace, Slack, custom internal tools, even legacy systems with no API. Our browser-based agents can navigate any web application the way a human would, which means there's virtually no tool we can't integrate with."
  },
  {
    question: "Is my data safe?",
    answer: "Avocado is ISO 27001 certified and a 2x Google for Startups partner (AI + Blockchain). Your agents run on Google Cloud infrastructure with enterprise-grade security. Your data stays in your environment — we don't train models on your information, and every agent has strict access controls that you define."
  },
  {
    question: "What happens if I want to change or stop using an agent?",
    answer: "You own everything. The agents, the code, the configurations — it's all yours. Want to modify an agent's behavior? We adjust it. Want to bring it in-house? We do a full knowledge transfer. Want to shut it down? One click. No lock-in, no hostage situations."
  },
  {
    question: "How is this different from tools like Zapier or Make?",
    answer: "Zapier and Make are great for simple if-this-then-that automations. AI agents go much further — they understand context, make decisions, handle exceptions, and improve over time. They don't just move data between apps; they reason about it. A Zapier workflow breaks when something unexpected happens. An AI agent figures out what to do. We build custom agents tailored to your specific business logic, not generic templates."
  }
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI Agent Automation",
  "provider": {
    "@type": "Organization",
    "name": "Avocado Dev Studio",
    "@id": "https://avocadoblock.com/#organization",
    "url": "https://avocadoblock.com"
  },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Mexico" },
    { "@type": "Country", "name": "Canada" }
  ],
  "description": "Custom AI agent automation for small and medium businesses. We build, deploy, and manage intelligent agents that handle customer support, lead qualification, operations, and reporting — integrated with your existing tools.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "offerCount": "3"
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": aiAgentsFAQItems.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
}

const agents = [
  {
    name: 'Scout',
    role: 'Lead Qualification Agent',
    desc: 'Responds to every inbound lead in minutes. Enriches contact data, scores fit, and books meetings with your sales team. No lead falls through the cracks.',
    replaces: 'Junior SDR tasks',
    type: 'API + Human-in-the-loop',
    stack: ['CRM', 'Email', 'Calendar'],
  },
  {
    name: 'Concierge',
    role: 'Customer Support Agent',
    desc: 'Handles incoming customer questions across email and chat. Knows your product, follows your tone, escalates edge cases to your real team.',
    replaces: 'Repetitive support tickets',
    type: 'API + Browser',
    stack: ['Email', 'Chat', 'Knowledge Base'],
  },
  {
    name: 'Pulse',
    role: 'Operations & Reporting Agent',
    desc: 'Generates daily summaries, updates your CRM, tracks pipeline changes, and drops reports in Slack before your morning coffee.',
    replaces: 'Manual reporting & data entry',
    type: 'API',
    stack: ['CRM', 'Slack', 'Sheets'],
  },
  {
    name: 'Onboarder',
    role: 'Client Onboarding Agent',
    desc: 'Walks new clients through setup. Sends welcome sequences, collects documents, tracks completion, and flags blockers to your team.',
    replaces: 'Repetitive onboarding steps',
    type: 'API + Human-in-the-loop',
    stack: ['Email', 'Forms', 'CRM'],
  },
]

const integrationTypes = [
  {
    title: 'API Agents',
    desc: 'Direct connections to your CRM, ERP, databases, and email. The fastest and most reliable integration — your agent talks directly to your systems.',
    examples: 'Salesforce, HubSpot, Google Workspace, Slack, databases, custom APIs',
  },
  {
    title: 'Browser Agents',
    desc: 'For tools that don\'t have APIs or legacy systems nobody wants to touch. Our agents navigate web apps like a human — clicking, filling forms, extracting data.',
    examples: 'Legacy portals, internal tools, web scraping, any web application',
  },
  {
    title: 'Human-in-the-Loop',
    desc: 'Handles 90% autonomously, escalates the 10% that needs judgment. Your team stays in control for customer-facing work, approvals, and sensitive decisions.',
    examples: 'Customer responses, financial approvals, hiring workflows',
  },
]

export function AIAgents() {
  useEffect(() => {
    trackEvent('Landing Page Viewed', {
      page: 'ai-agents',
      keyword: 'AI agent automation',
      intent: 'commercial'
    })
  }, [])

  return (
    <>
      <SEO
        title="AI Agent Automation | Custom AI Agents for Your Business | Avocado"
        description="Avocado builds custom AI agents that handle your busywork — lead qualification, customer support, reporting, onboarding. Deployed in your tools within weeks. ISO 27001 certified. 2x Google for Startups partner."
      />
      <Schema data={serviceSchema} />
      <Schema data={faqSchema} />

      {/* Hero */}
      <Section className="py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; AI AGENTS</div>
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-white mb-6">
            WE BUILT AI AGENTS FOR OURSELVES. THEN EVERYTHING CHANGED.
          </h1>
          <p className="text-white/80 text-lg mb-4">
            Avocado is a small team. We were shipping products for Fortune 500 clients but our own ops were held together with Slack messages and spreadsheets. Leads slipped. Reports were late. Nobody updated the CRM.
          </p>
          <p className="text-white/80 text-lg mb-4">
            So we built AI agents for ourselves — one that responds to every lead in minutes, another that updates our CRM after every call, another that drops a pipeline summary in Slack every morning.
          </p>
          <p className="text-white/60 text-base">
            It worked so well we started building them for other companies. Now we build them for yours.
          </p>
        </div>

        <div className="flex justify-center">
          <Button variant="primary" asChild>
            <a href="/signal" onClick={() => trackEvent('AI Agents Hero CTA', { page: 'ai-agents' })}>[█ DEPLOY YOUR FIRST AGENT]</a>
          </Button>
        </div>
      </Section>

      {/* The Problem */}
      <Section className="py-20 bg-void-surface">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; THE_PROBLEM</div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">YOUR TEAM IS DOING WORK THEY WEREN'T HIRED TO DO</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              pain: 'A lead came in Friday evening. Nobody saw it until Monday. They already signed with someone else.',
              label: 'LOST LEADS'
            },
            {
              pain: 'Your highest-paid engineer spent 3 hours this week copy-pasting data between your CRM and a spreadsheet.',
              label: 'WASTED TALENT'
            },
            {
              pain: 'A customer asked the same question for the 200th time. Someone on your team typed the same answer. Again.',
              label: 'REPETITIVE WORK'
            },
          ].map(item => (
            <Card key={item.label} className="p-6">
              <div className="text-signal text-xs font-mono mb-3">{item.label}</div>
              <p className="text-white/80 text-base italic">"{item.pain}"</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Meet Your New Team */}
      <Section className="py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; AGENT_ROSTER</div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">MEET YOUR NEW TEAM</h2>
          <p className="text-white/80 text-lg">Every agent is custom-built for your business. These are the roles we deploy most.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {agents.map(agent => (
            <Card key={agent.name} className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-signal text-xs font-mono mb-1">{agent.role.toUpperCase()}</div>
                  <h3 className="text-2xl font-bold text-white font-mono">{agent.name}</h3>
                </div>
                <Badge variant="outline">{agent.type}</Badge>
              </div>

              <p className="text-white/80 mb-4">{agent.desc}</p>

              <div className="space-y-3">
                <div>
                  <div className="text-white/50 text-xs font-mono mb-1">REPLACES</div>
                  <p className="text-white/70 text-sm">{agent.replaces}</p>
                </div>
                <div>
                  <div className="text-white/50 text-xs font-mono mb-1">CONNECTS TO</div>
                  <div className="flex flex-wrap gap-2">
                    {agent.stack.map(s => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/50 text-sm font-mono">Need a different agent? We build custom roles for your specific workflows.</p>
        </div>
      </Section>

      {/* How We Connect */}
      <Section className="py-20 bg-void-surface">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; INTEGRATION</div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">THREE WAYS IN</h2>
          <p className="text-white/80 text-lg">We connect to whatever your team already uses. No tool left behind.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {integrationTypes.map((type, i) => (
            <Card key={type.title} className="p-6 flex flex-col gap-4">
              <div className="text-signal text-xs font-mono">TYPE {i + 1}</div>
              <h3 className="text-xl font-bold text-white font-mono">{type.title}</h3>
              <p className="text-white/80 flex-1">{type.desc}</p>
              <div className="bg-void-surface border border-void-elevated rounded-lg p-3">
                <div className="text-white/50 text-xs font-mono mb-1">EXAMPLES</div>
                <p className="text-white/70 text-sm">{type.examples}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Our Story */}
      <Section className="py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; ORIGIN_STORY</div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-8">WE DIDN'T START AS AN AI AGENCY</h2>

          <div className="space-y-6 text-white/80 text-base">
            <p>
              Avocado has been building software since 2018. MVPs, blockchain platforms, AI pipelines — for clients like BBVA, Banorte, and Bitso. We're a small team that punches above its weight.
            </p>
            <p>
              But internally? We were drowning in the same manual work every small company deals with. Leads came in and sat unanswered. Reports that should take 5 minutes took an hour because someone had to pull data from three different tools. The CRM was always outdated.
            </p>
            <p>
              In 2024 we started experimenting. We gave an AI model access to our inbox. Built an agent that drafted responses to customer inquiries. Then another that synced our CRM after every call. Then a browser agent that checked competitor pricing every morning and posted a summary in Slack.
            </p>

            <div className="bg-void-surface border border-signal/20 rounded-lg p-6 my-8">
              <div className="text-signal text-xs font-mono mb-2">&gt; WHAT_CHANGED</div>
              <ul className="space-y-2 text-white font-mono text-sm">
                <li>→ Lead response time: hours → minutes</li>
                <li>→ Weekly reports: manual half-day → automatic by morning</li>
                <li>→ CRM accuracy: "we'll update it later" → always current</li>
              </ul>
            </div>

            <p>
              We're model-agnostic — we use Claude for reasoning and customer-facing work, open-source models for batch processing, and pick the right tool for each job. We've learned what works, what breaks, and where you still need a human in the loop.
            </p>
            <p>
              That's the difference between Avocado and every "AI agency" that appeared last year: <strong className="text-white">we run AI agents in our own business, every day.</strong> The agents handling your first inquiry when you contact us? Built by us, running on our infrastructure.
            </p>
          </div>
        </div>
      </Section>

      {/* The Numbers */}
      <Section className="py-20 bg-void-surface">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; MARKET_DATA</div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">THIS ISN'T EARLY ANYMORE</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { stat: '40%', desc: 'of enterprise apps will include AI agents by end of 2026', source: 'Gartner' },
            { stat: '73%', desc: 'of SMBs saw measurable gains within 90 days of adopting AI agents', source: 'Industry Research' },
            { stat: '2,300+', desc: 'person-hours saved through AI automation at a single company', source: 'Microsoft' },
            { stat: '80%', desc: 'of customer service issues solvable by AI agents by 2029', source: 'Gartner' },
          ].map(item => (
            <Card key={item.stat} className="p-6 text-center">
              <div className="text-signal text-3xl md:text-4xl font-bold font-mono mb-2">{item.stat}</div>
              <p className="text-white/70 text-sm mb-2">{item.desc}</p>
              <p className="text-white/40 text-xs font-mono">— {item.source}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section className="py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; PLAYBOOK</div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">HOW WE DEPLOY YOUR AGENTS</h2>
          <p className="text-white/80 text-lg">Same discipline we use for MVPs. Four phases, clear deliverables, no mystery.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="border-l-2 border-signal pl-8 space-y-12">
            {[
              {
                phase: 'WEEK 1',
                title: 'Discovery',
                desc: 'We map your workflows, identify the highest-impact automation targets, and design your agent architecture. You tell us what eats your time — we figure out what to build.',
                output: 'Agent blueprint, integration plan, fixed-price quote'
              },
              {
                phase: 'WEEKS 2-3',
                title: 'Build & Connect',
                desc: 'We build your agents and connect them to your tools. Daily progress updates. You see working demos as we go — no black-box development.',
                output: 'Working agents in staging, connected to your real systems'
              },
              {
                phase: 'WEEK 3-4',
                title: 'Test & Deploy',
                desc: 'We run your agents against real scenarios with human oversight. You review outputs, adjust rules, and approve behavior before anything goes live.',
                output: 'Live agents, monitoring dashboard, escalation rules configured'
              },
              {
                phase: 'ONGOING',
                title: 'Monitor & Optimize',
                desc: 'Your agents learn and improve. We monitor performance, handle edge cases, and optimize based on real usage data. 30 days of support included.',
                output: 'Performance reports, optimization recommendations, full handoff'
              },
            ].map((phase, i) => (
              <div key={phase.phase} className="relative scroll-mt-24">
                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-void-pure border-2 border-signal rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-signal rounded-full" />
                </div>
                <div className="text-signal text-lg md:text-xl font-mono mb-2">{phase.phase}</div>
                <h3 className="text-2xl font-bold font-mono text-white mb-2">{phase.title}</h3>
                <p className="text-white/80 mb-4">{phase.desc}</p>
                <div className="bg-void-surface border border-void-elevated rounded-lg p-4">
                  <div className="text-signal text-xs font-mono mb-1">&gt; OUTPUT</div>
                  <p className="text-white font-mono text-sm">{phase.output}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Trust */}
      <Section className="py-20 bg-void-surface">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; TRUST</div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">YOU'RE ALWAYS IN CONTROL</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: 'ISO 27001 Certified', desc: 'Enterprise-grade information security management. Audited and verified.' },
            { title: '2x Google for Startups', desc: 'Selected for both AI and Blockchain programs. Your agents run on Google Cloud infrastructure.' },
            { title: 'Human-in-the-Loop', desc: 'Every agent has escalation rules. Sensitive decisions always go through your team first.' },
            { title: 'Your Data, Your Rules', desc: 'We don\'t train on your data. Strict access controls. Your information stays in your environment.' },
            { title: 'Kill Switch', desc: 'Every agent can be paused or shut down instantly. One click. No questions asked.' },
            { title: 'No Lock-In', desc: 'You own the code, the agents, the configurations. Full knowledge transfer included.' },
          ].map(item => (
            <Card key={item.title} className="p-6">
              <h3 className="text-white font-mono font-bold mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Explore */}
      <Section className="py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; EXPLORE</div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">SEE WHAT ELSE WE DO</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <a href="/mvp-development" onClick={() => trackEvent('AI Agents Internal Link', { destination: 'mvp-development' })} className="block p-6 border border-void-elevated rounded-lg hover:border-signal transition-colors text-center">
            <div className="text-signal font-mono text-sm mb-2">MVP DEVELOPMENT</div>
            <p className="text-white/60 text-sm">Ship products in 3 weeks</p>
          </a>
          <a href="/playbook" onClick={() => trackEvent('AI Agents Internal Link', { destination: 'playbook' })} className="block p-6 border border-void-elevated rounded-lg hover:border-signal transition-colors text-center">
            <div className="text-signal font-mono text-sm mb-2">PLAYBOOK</div>
            <p className="text-white/60 text-sm">Our 4-phase engineering process</p>
          </a>
          <a href="/products" onClick={() => trackEvent('AI Agents Internal Link', { destination: 'products' })} className="block p-6 border border-void-elevated rounded-lg hover:border-signal transition-colors text-center">
            <div className="text-signal font-mono text-sm mb-2">PRODUCTS</div>
            <p className="text-white/60 text-sm">What we've built ourselves</p>
          </a>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-20 bg-void-surface">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-signal text-lg md:text-xl font-mono mb-3">&gt; FAQ</div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">COMMON QUESTIONS</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <FAQ items={aiAgentsFAQItems} />
        </div>
      </Section>

      <CTASection />
    </>
  )
}
