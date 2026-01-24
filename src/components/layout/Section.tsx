import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export function Section({ children, className, id }: { children: ReactNode, className?: string, id?: string }) {
  return (
    <section id={id} className={cn('py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto', className)}>
      {children}
    </section>
  )
}
