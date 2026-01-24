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
    question: "What kind of products can Avocado build?",
    answer: "Customer apps, AI assistants, loyalty platforms, NFT campaigns, internal tools, and data dashboards. We build for web, mobile, and emerging platforms. Our clients include BBVA, Banorte, Chivas, and Bitso."
  },
  {
    question: "How fast can you deliver?",
    answer: "Working prototype in 3 days. Full product in 1-3 weeks. Our fastest launch was 72 hours for a working AI assistant. We move 10x faster than traditional agencies while maintaining enterprise-grade quality."
  },
  {
    question: "Is Avocado enterprise-ready?",
    answer: "Yes. ISO 27001 certified. Google for Startups company. Trusted by Fortune 500 clients like BBVA and Banorte. Enterprise security with startup speed."
  },
  {
    question: "How is Avocado different from a traditional agency?",
    answer: "We build since 2018, not consult. No 6-month discovery phases, no 20-person teams, no PowerPoint deliverables. You pay for working software, not hours billed. Fixed scope, fixed price."
  },
  {
    question: "Do you build AI products?",
    answer: "AI is core to what we do. We build custom AI assistants, recommendation engines, document processing systems, and intelligent automation. Used by enterprises handling millions of requests daily."
  },
  {
    question: "What about loyalty programs and fan engagement?",
    answer: "We've delivered NFT campaigns for Chivas and Club América, fan platforms with Bitso (Clio Sports Silver 2022 winner), and rewards systems for major brands. We help you connect with customers in new ways."
  }
]

// Homepage FAQ (shorter version)
export const homeFAQItems: FAQItem[] = [
  {
    question: "How fast can you launch my product?",
    answer: "Working prototype in 3 days. Full product in 1-3 weeks. You see daily progress, not monthly reports."
  },
  {
    question: "What makes Avocado different?",
    answer: "Building since 2018. Trusted by BBVA, Banorte, and Chivas. Google for Startups company. ISO 27001 certified. Enterprise security, startup speed."
  },
  {
    question: "How does pricing work?",
    answer: "Fixed scope, fixed price. No surprises. 30-minute call, clear proposal, you know exactly what you're getting."
  }
]
