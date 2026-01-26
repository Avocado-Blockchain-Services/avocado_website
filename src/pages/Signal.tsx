import { useEffect } from 'react'
import { Section } from '@/components/layout/Section'
import { StandardForm } from '@/components/forms/StandardForm'

export function Signal() {
  // Scroll to top on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }, 10)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Section className="pt-32 pb-20 min-h-[80vh]">
       <div className="max-w-3xl mx-auto">
         <h1 className="text-4xl md:text-5xl font-bold font-mono text-white mb-6 text-center">
           INITIALIZE PROJECT
         </h1>
         <p className="text-center text-white/70 mb-12">
           Ready to ship? Tell us what you're building.
         </p>

         <StandardForm />
       </div>
    </Section>
  )
}
