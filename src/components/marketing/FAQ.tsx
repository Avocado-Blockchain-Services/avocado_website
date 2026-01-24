import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Schema } from '@/components/seo/Schema'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  className?: string
}

export function FAQ({ items, className = '' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  return (
    <>
      <Schema data={faqSchema} />
      <div className={`space-y-4 ${className}`}>
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-void-elevated rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-void-surface transition-colors"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-mono text-white pr-4">{item.question}</span>
              <span className="text-signal font-mono text-xl flex-shrink-0">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-text-secondary">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </>
  )
}

// Default FAQ items for the services page
export const servicesFAQItems: FAQItem[] = [
  {
    question: "Does Avocado build blockchain and Web3 applications?",
    answer: "Yes. We're a Google for Startups company with extensive blockchain experience. We've delivered NFT projects for Chivas and Club América, fan engagement platforms with Bitso, and enterprise blockchain PoCs for Banorte. Our team builds with Solidity (Ethereum/Polygon), Rust (Solana), and integrates Web3 into existing enterprise systems. Our own product Persea.social is a Web3 gamified rewards platform."
  },
  {
    question: "How fast can Avocado build an MVP?",
    answer: "With AI-driven development, we ship PoCs in 3 days and full MVPs in 1-3 weeks. Our fastest deployment was 72 hours for a functional AI chatbot with custom training data. We're 10x faster than traditional agencies because we leverage AI-augmented pipelines while maintaining rigorous testing and code quality."
  },
  {
    question: "What technologies does Avocado specialize in?",
    answer: "We specialize in blockchain (Solidity), AI/ML infrastructure (Vertex AI, GCP), and modern web (React, JavaScript, Python). We choose technologies based on your specific needs, not what's trendy."
  },
  {
    question: "How is Avocado different from a traditional dev agency?",
    answer: "We've been building AI and blockchain systems since 2018. Enterprise clients like BBVA, Banorte, and Chivas trust us because we combine deep technical expertise with startup velocity. Google for Startups company. ISO 27001 certified. We don't bill by the hour; we bill by the outcome."
  },
  {
    question: "Does Avocado offer ongoing maintenance after launch?",
    answer: "Yes. Our Scale & Infrastructure tier includes ongoing maintenance, monitoring, and optimization. We can handle everything from bug fixes to 10x scaling challenges. Many clients keep us on retainer for continuous shipping velocity."
  },
  {
    question: "How do engagements work?",
    answer: "Fixed-scope, fixed-price. We scope your project in a 30-minute call and deliver a clear proposal. No hourly billing. No surprises. You pay for outcomes, not hours."
  }
]

// Homepage FAQ (shorter version)
export const homeFAQItems: FAQItem[] = [
  {
    question: "How fast can you ship an MVP?",
    answer: "PoC in 3 days. MVP in 1-3 weeks. AI-driven development with human-verified correctness."
  },
  {
    question: "What makes Avocado different?",
    answer: "AI and blockchain experts since 2018. Enterprise clients like BBVA, Banorte, Chivas. Google for Startups. ISO 27001 certified."
  },
  {
    question: "How do engagements work?",
    answer: "Fixed-scope, fixed-price. 30-minute scoping call, clear proposal, no hourly billing."
  }
]
