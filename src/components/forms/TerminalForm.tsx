import { useState, useRef, useEffect } from 'react'
import type { ReactNode } from 'react'
import { TerminalWindow } from '@/components/terminal/TerminalWindow'
import { TerminalOutput } from '@/components/terminal/TerminalOutput'
import { TerminalInput } from '@/components/terminal/TerminalInput'
import { TerminalMenu, type Option } from '@/components/terminal/TerminalMenu'
import { contactFormSchema, type ContactFormData } from '@/lib/schemas'

export function TerminalForm() {
  const [step, setStep] = useState(0)
  const [history, setHistory] = useState<ReactNode[]>([])
  const [formData, setFormData] = useState<Partial<ContactFormData>>({})
  const [emailInput, setEmailInput] = useState('')
  
  // Initial greeting
  useEffect(() => {
    setHistory([
      <TerminalOutput key="init">Last login: {new Date().toLocaleString()} on ttys003</TerminalOutput>,
      <TerminalOutput key="help">Type 'help' for available commands.</TerminalOutput>,
      <div key="spacer" className="h-4" />
    ])
  }, [])

  const handleProjectSelect = (option: Option) => {
    const val = option.id as ContactFormData['projectType']
    setFormData(prev => ({ ...prev, projectType: val }))
    setHistory(prev => [
      ...prev,
      <TerminalOutput key={`cmd-proj`}>avocado@signal:~$ project --type {val}</TerminalOutput>,
      <TerminalOutput key={`res-proj`} className="text-success">✓ Selected: {option.label}</TerminalOutput>,
      <div key="spacer-1" className="h-4" />
    ])
    setStep(1)
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const result = contactFormSchema.shape.email.safeParse(emailInput)
    
    // Echo command is handled by rendering the history afterwards, 
    // but usually in terminal you see what you typed. 
    // Here we're "submitting" the line. 
    
    // We remove the input UI (step 1) and replace it with history item
    setHistory(prev => [
      ...prev,
      <TerminalOutput key={`cmd-email`}>avocado@signal:~$ identify --email {emailInput}</TerminalOutput>
    ])

    if (!result.success) {
      setHistory(prev => [
        ...prev,
        <TerminalOutput key={`err-email-${Date.now()}`} className="text-error">ERROR: {result.error.issues[0].message}</TerminalOutput>,
        <div key={`spacer-err-${Date.now()}`} className="h-4" />
      ])
      // Keep step at 1 so input reappears (with cleared value or keep it?)
      // Design choice: keep value or clear? I'll keep it.
      return
    }

    setFormData(prev => ({ ...prev, email: emailInput }))
    setHistory(prev => [
      ...prev,
      <TerminalOutput key={`res-email`} className="text-success">✓ Identity verified</TerminalOutput>,
      <div key="spacer-2" className="h-4" />
    ])
    setStep(2)
  }

  const handleTimelineSelect = (option: Option) => {
    const val = option.id as ContactFormData['timeline']
    setFormData(prev => ({ ...prev, timeline: val }))
    setHistory(prev => [
      ...prev,
      <TerminalOutput key={`cmd-time`}>avocado@signal:~$ timeline --target {val}</TerminalOutput>,
      <TerminalOutput key={`res-time`} className="text-success">✓ Timeline set: {option.label}</TerminalOutput>,
      <div key="spacer-3" className="h-4" />
    ])
    handleSubmit({ ...formData, timeline: val } as ContactFormData)
  }

  const handleSubmit = async (data: ContactFormData) => {
    setStep(3)
    setHistory(prev => [
      ...prev,
      <TerminalOutput key="cmd-deploy">avocado@signal:~$ deploy --submit</TerminalOutput>,
      <TerminalOutput key="progress" animate>████████████████████████████████████████ 100%</TerminalOutput>
    ])
    console.log('Submitting', data)

    await new Promise(r => setTimeout(r, 2000))
    
    setHistory(prev => [
      ...prev,
      <TerminalOutput key="success-1" className="text-success">✓ Signal transmitted successfully</TerminalOutput>,
      <TerminalOutput key="success-2" className="text-success">✓ Expect response within 24 hours</TerminalOutput>,
      <TerminalOutput key="success-3" className="text-success">✓ Check your inbox for confirmation</TerminalOutput>
    ])
    setStep(4) // Done
  }

  const projectOptions: Option[] = [
    { id: 'mvp', label: 'mvp', description: 'Launch a new product fast' },
    { id: 'scale', label: 'scale', description: 'Grow what you\'ve built' },
    { id: 'rescue', label: 'rescue', description: 'Fix what\'s broken' },
  ]

  const timelineOptions: Option[] = [
    { id: 'asap', label: 'asap', description: 'Yesterday was too late' },
    { id: '30d', label: '30d', description: 'Within a month' },
    { id: '90d', label: '90d', description: 'Quarter timeline' },
  ]

  // Scroll to bottom logic
  const bottomRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history, step])

  return (
    <div
      role="application"
      aria-label="Terminal-style contact form"
      aria-describedby="terminal-instructions"
    >
      {/* Screen reader instructions */}
      <div id="terminal-instructions" className="sr-only">
        This is an interactive terminal-style contact form.
        Use arrow keys to navigate menu options and Enter to select.
        For a standard form experience, use the accessible form link below.
      </div>

      <TerminalWindow className="h-[500px] overflow-y-auto">
        {history}

        {step === 0 && (
          <div className="mt-4">
            <TerminalOutput>avocado@signal:~$ project --type</TerminalOutput>
            <div className="pl-4 border-l-2 border-void-elevated ml-2 mb-4">
              <div className="text-text-secondary mb-2" id="project-type-label">? Select project type:</div>
              <TerminalMenu
                options={projectOptions}
                onSelect={handleProjectSelect}
                aria-labelledby="project-type-label"
              />
            </div>
          </div>
        )}

        {step === 1 && (
          <form onSubmit={handleEmailSubmit} className="mt-4" aria-label="Email input step">
            <TerminalInput
              prompt="avocado@signal:~$ identify --email"
              value={emailInput}
              onChange={e => setEmailInput(e.target.value)}
              placeholder="you@company.com"
              aria-label="Your email address"
              aria-required="true"
            />
            <div className="text-text-tertiary text-xs mt-2 ml-4" aria-live="polite">Press Enter to confirm</div>
          </form>
        )}

        {step === 2 && (
          <div className="mt-4">
            <TerminalOutput>avocado@signal:~$ timeline --target</TerminalOutput>
            <div className="pl-4 border-l-2 border-void-elevated ml-2 mb-4">
              <div className="text-text-secondary mb-2" id="timeline-label">? When do you need this?</div>
              <TerminalMenu
                options={timelineOptions}
                onSelect={handleTimelineSelect}
                aria-labelledby="timeline-label"
              />
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </TerminalWindow>
    </div>
  )
}
