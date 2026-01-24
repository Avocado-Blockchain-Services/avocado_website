import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export function PhosphorGlow({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <span className={cn('text-glow', className)}>
      {children}
    </span>
  )
}
