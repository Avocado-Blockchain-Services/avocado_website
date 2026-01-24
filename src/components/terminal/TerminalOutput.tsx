import type { ReactNode } from 'react'
import { Typewriter } from '@/components/effects/Typewriter'
import { cn } from '@/lib/utils'

export function TerminalOutput({ 
  children, 
  animate = false, 
  onComplete,
  className 
}: { 
  children: ReactNode, 
  animate?: boolean, 
  onComplete?: () => void,
  className?: string
}) {
  if (animate && typeof children === 'string') {
    return (
      <div className={cn('text-text-primary mb-2 break-words', className)}>
        <Typewriter text={children} speed={10} onComplete={onComplete} />
      </div>
    )
  }

  return (
    <div className={cn('text-text-primary mb-2 whitespace-pre-wrap break-words', className)}>
      {children}
    </div>
  )
}