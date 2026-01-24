import { z } from 'zod'

export const contactFormSchema = z.object({
  projectType: z.enum(['mvp', 'scale', 'rescue'] as const, {
    message: 'Please select a valid project type',
  }),
  email: z.string().email({ message: 'Invalid email address' }),
  timeline: z.enum(['asap', '30d', '90d'] as const, {
    message: 'Please select a timeline',
  }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>