import { cn } from '@/lib/utils'

export function SkipLink() {
  return (
    <a
      href="#main"
      className={cn(
        'sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-50',
        'focus:px-4 focus:py-2 focus:bg-signal focus:text-white focus:font-mono'
      )}
    >
      Skip to main content
    </a>
  )
}
