import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/schemas'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

// Get your access key from https://web3forms.com
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || ''

export function StandardForm({ onSuccess }: { onSuccess?: () => void }) {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Project Inquiry: ${data.projectType}`,
          from_name: 'Avocado Website',
          ...data
        })
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        reset()
        onSuccess?.()
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="text-center p-8 bg-void-surface border border-signal/30">
        <div className="text-signal text-4xl mb-4">✓</div>
        <h3 className="text-white text-xl font-mono mb-2">Signal Transmitted</h3>
        <p className="text-white/70">We'll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto p-6 bg-void-surface border border-void-elevated">
      <div className="space-y-2">
        <label className="text-base font-mono text-white/80">Project Type</label>
        <select 
          {...register('projectType')}
          className={cn(
            "flex h-11 w-full rounded-none border border-void-elevated bg-void-pure px-3 py-2 text-sm text-text-primary font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal",
            errors.projectType && "border-error focus-visible:ring-error"
          )}
        >
          <option value="">Select project type</option>
          <option value="mvp">New MVP Build</option>
          <option value="scale">Scale Existing Product</option>
          <option value="rescue">Rescue Failing Project</option>
        </select>
        {errors.projectType && <p className="text-error text-xs font-mono">{errors.projectType.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-base font-mono text-white/80">Email</label>
        <Input 
          {...register('email')} 
          placeholder="you@company.com" 
          className={errors.email ? "border-error focus-visible:ring-error" : ""}
        />
        {errors.email && <p className="text-error text-xs font-mono">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-base font-mono text-white/80">Timeline</label>
        <select 
          {...register('timeline')}
          className={cn(
            "flex h-11 w-full rounded-none border border-void-elevated bg-void-pure px-3 py-2 text-sm text-text-primary font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal",
            errors.timeline && "border-error focus-visible:ring-error"
          )}
        >
          <option value="">Select timeline</option>
          <option value="asap">ASAP (Yesterday was too late)</option>
          <option value="30d">Within 30 days</option>
          <option value="90d">Quarter timeline</option>
        </select>
        {errors.timeline && <p className="text-error text-xs font-mono">{errors.timeline.message}</p>}
      </div>

      <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'TRANSMITTING...' : 'DEPLOY WITH AVOCADO'}
      </Button>
    </form>
  )
}
