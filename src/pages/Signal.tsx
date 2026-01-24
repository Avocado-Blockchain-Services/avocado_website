import { useEffect } from 'react'
import { Section } from '@/components/layout/Section'
import { TerminalForm } from '@/components/forms/TerminalForm'
import { StandardForm } from '@/components/forms/StandardForm'
import { FormToggle } from '@/components/forms/FormToggle'
import { useFormMode } from '@/hooks/useFormMode'

export function Signal() {
  const { mode, toggleMode } = useFormMode()

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Section className="pt-32 pb-20 min-h-[80vh]">
       <div className="max-w-3xl mx-auto">
         <h1 className="text-4xl md:text-5xl font-bold font-mono text-white mb-6 text-center">
           INITIALIZE PROJECT
         </h1>
         <p className="text-center text-text-secondary mb-12">
           Ready to ship? Tell us what you're building.
         </p>

         <div className="relative">
           {mode === 'terminal' ? <TerminalForm /> : <StandardForm />}
         </div>
         
         <FormToggle mode={mode} onToggle={toggleMode} />
       </div>
    </Section>
  )
}
