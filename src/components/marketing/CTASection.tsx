import { Button } from '@/components/ui/Button'
import { Section } from '@/components/layout/Section'
import { trackEvent } from '@/lib/analytics'

export function CTASection() {
  return (
    <Section className="text-center py-32">
       <div className="max-w-2xl mx-auto space-y-8">
         <h2 className="text-4xl md:text-5xl font-bold font-mono text-white">
           READY TO SHIP?
         </h2>
         <p className="text-text-secondary text-lg">
           Stop waiting for "discovery phases." Start deploying.
         </p>
         <Button variant="primary" size="lg" className="w-full sm:w-auto" asChild>
           <a href="/signal" onClick={() => trackEvent('CTA Click', { label: 'Initialize Project', section: 'cta-bottom' })}>[█ INITIALIZE PROJECT]</a>
         </Button>
       </div>
    </Section>
  )
}
