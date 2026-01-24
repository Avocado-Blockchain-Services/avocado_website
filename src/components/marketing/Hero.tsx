import { Button } from '@/components/ui/Button'
import { TerminalPreview } from './TerminalPreview'
import { Glitch } from '@/components/effects/Glitch'
import { PhosphorGlow } from '@/components/effects/PhosphorGlow'

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-signal/10 via-void-pure to-void-pure -z-10" />

      <div className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 relative z-20">
           {/* Badge/Tag */}
           <div className="inline-flex items-center gap-2 border border-signal/30 bg-signal/5 px-3 py-1 text-xs font-mono text-signal">
             <span className="animate-pulse">●</span>
             <span>PROTOCOL v2.0 LIVE</span>
           </div>

           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
             <Glitch>SHIP IN</Glitch> <br />
             <span className="text-text-secondary">WEEKS, NOT</span> <br />
             <PhosphorGlow>QUARTERS</PhosphorGlow>
           </h1>

           <div className="font-mono text-sm md:text-base text-text-secondary space-y-2">
             <p className="text-signal">[████████████░░░░] 75% FASTER DELIVERY</p>
             <p>Launch your digital product in weeks. Trusted by BBVA, Banorte, and Chivas.</p>
           </div>

           <div className="flex flex-col sm:flex-row gap-4 pt-4">
             <Button variant="primary" size="lg" className="w-full sm:w-auto" asChild>
               <a href="/signal">[█ DEPLOY WITH AVOCADO]</a>
             </Button>
           </div>
        </div>

        <div className="hidden lg:block relative z-10 perspective-[1000px]">
          <TerminalPreview />
          {/* Decorative elements behind */}
          <div className="absolute -inset-4 bg-signal/20 blur-3xl -z-10 rounded-full opacity-20" />
        </div>
      </div>
    </div>
  )
}
