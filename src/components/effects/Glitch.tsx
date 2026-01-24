import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export function Glitch({ children, className, hover = true }: { children: ReactNode, className?: string, hover?: boolean }) {
  return (
    <div className={cn(
      'inline-block',
      hover && 'glitch-hover',
      className
    )}>
      {children}
    </div>
  )
}
