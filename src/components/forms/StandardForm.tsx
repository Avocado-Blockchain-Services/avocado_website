import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

// Get your access key from https://web3forms.com
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || ''

export function StandardForm({ onSuccess: _onSuccess }: { onSuccess?: () => void }) {
  // Check for success redirect
  const isSuccess = typeof window !== 'undefined' && window.location.search.includes('success=true')

  if (isSuccess) {
    return (
      <div className="text-center p-8 bg-void-surface border border-signal/30">
        <div className="text-signal text-4xl mb-4">✓</div>
        <h3 className="text-white text-xl font-mono mb-2">Signal Transmitted</h3>
        <p className="text-white/70">We'll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="space-y-6 max-w-md mx-auto p-6 bg-void-surface border border-void-elevated"
    >
      {/* Web3Forms config */}
      <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
      <input type="hidden" name="subject" value="New Project Inquiry from Avocado Website" />
      <input type="hidden" name="from_name" value="Avocado Website" />
      <input type="hidden" name="redirect" value="https://avocadoblock.com/signal?success=true" />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      <div className="space-y-2">
        <label className="text-base font-mono text-white/80">Project Type</label>
        <select
          name="projectType"
          required
          className="flex h-11 w-full rounded-none border border-void-elevated bg-void-pure px-3 py-2 text-base text-text-primary font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
        >
          <option value="">Select project type</option>
          <option value="Digital Product">Digital Product</option>
          <option value="AI Experience">AI Experience</option>
          <option value="Fan Engagement">Fan Engagement & Loyalty</option>
          <option value="Technical Rescue">Technical Rescue</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-base font-mono text-white/80">Email</label>
        <Input
          name="email"
          type="email"
          required
          placeholder="you@company.com"
        />
      </div>

      <div className="space-y-2">
        <label className="text-base font-mono text-white/80">Timeline</label>
        <select
          name="timeline"
          required
          className="flex h-11 w-full rounded-none border border-void-elevated bg-void-pure px-3 py-2 text-base text-text-primary font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
        >
          <option value="">Select timeline</option>
          <option value="ASAP">ASAP (Yesterday was too late)</option>
          <option value="30 days">Within 30 days</option>
          <option value="90 days">Quarter timeline</option>
        </select>
      </div>

      <Button type="submit" variant="primary" className="w-full">
        DEPLOY WITH AVOCADO
      </Button>
    </form>
  )
}
