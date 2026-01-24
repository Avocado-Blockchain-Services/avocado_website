import { cn } from '@/lib/utils'

export function CursorBlink({ className }: { className?: string }) {
  return (
    <span 
      className={cn(
        "inline-block w-[0.6em] h-[1.2em] bg-signal animate-blink align-text-bottom", 
        className
      )} 
    />
  )
}
