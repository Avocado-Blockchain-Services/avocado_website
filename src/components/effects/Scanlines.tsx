import { cn } from '@/lib/utils'

export function Scanlines({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'pointer-events-none fixed inset-0 z-50 overflow-hidden',
        className
      )}
    >
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            var(--color-scanline) 2px,
            var(--color-scanline) 4px
          )`
        }}
      />
    </div>
  )
}
