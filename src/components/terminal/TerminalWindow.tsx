import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export function TerminalWindow({ children, className, title = 'avocado@signal:~' }: { children: ReactNode, className?: string, title?: string }) {
  return (
    <div className={cn(
      'rounded-lg overflow-hidden bg-void-surface border border-void-elevated font-mono text-sm relative',
      'shadow-[0_0_20px_var(--color-signal-glow)]',
      className
    )}>
      {/* Title Bar */}
      <div className="bg-void-elevated px-4 py-2 flex items-center justify-between border-b border-void-pure">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50 hover:bg-red-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50 hover:bg-yellow-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-green-500/50 hover:bg-green-500 transition-colors" />
        </div>
        <div className="text-text-tertiary text-xs select-none">{title}</div>
        <div className="w-10" /> {/* Spacer for centering */}
      </div>
      
      {/* Content */}
      <div className="p-4 relative min-h-[300px] bg-black/50">
        {/* Subtle inner shadow/gradient */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-signal/5 z-0" />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  )
}
