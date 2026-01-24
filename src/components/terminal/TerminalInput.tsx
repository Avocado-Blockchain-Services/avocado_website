import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

export interface TerminalInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  prompt?: string
  isLoading?: boolean
}

export function TerminalInput({ 
  prompt = '>', 
  className, 
  autoFocus = true,
  isLoading = false,
  ...props 
}: TerminalInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (autoFocus && !isLoading) {
      // Simple auto-focus on mount
      const timer = setTimeout(() => {
        inputRef.current?.focus()
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [autoFocus, isLoading])

  return (
    <div className={cn('flex items-center gap-2 font-mono text-base md:text-sm', className)}>
      <span className="text-prompt select-none whitespace-nowrap">{prompt}</span>
      <div className="relative flex-1">
        <input
          ref={inputRef}
          className="w-full bg-transparent border-none outline-none p-0 text-text-primary placeholder-transparent caret-signal focus:ring-0"
          autoComplete="off"
          spellCheck={false}
          disabled={isLoading}
          {...props}
        />
      </div>
    </div>
  )
}
