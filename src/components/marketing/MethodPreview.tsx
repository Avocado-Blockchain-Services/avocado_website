import { PhosphorGlow } from '@/components/effects/PhosphorGlow'

const phases = [
  {
    name: 'RECON',
    duration: '24-48h',
    icon: '01',
    desc: 'Domain decomposition. Figma prototypes. First commits day one.'
  },
  {
    name: 'PROTOTYPE',
    duration: '3 days',
    icon: '02',
    desc: 'Working PoC. AI-generated scaffolding. Validated architecture.'
  },
  {
    name: 'SPRINT',
    duration: '1-2 weeks',
    icon: '03',
    desc: 'AI-accelerated velocity. Daily deploys. Human-verified correctness.'
  },
  {
    name: 'DEPLOY',
    duration: '2-3 days',
    icon: '04',
    desc: 'Staged rollout. Telemetry validation. Production handoff.'
  },
]

export function MethodPreview() {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Desktop: horizontal timeline */}
      <div className="hidden md:grid md:grid-cols-4 gap-6 relative">
        {/* Connection line */}
        <div className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-signal/30" />
        <div className="absolute top-8 left-[12.5%] w-1/4 h-0.5 bg-signal animate-pulse" />

        {phases.map((phase) => (
          <div key={phase.name} className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-void-pure border-2 border-signal flex items-center justify-center text-lg font-mono text-signal font-bold mb-4">
              {phase.icon}
            </div>
            <PhosphorGlow>
              <span className="font-mono font-bold text-white text-lg">{phase.name}</span>
            </PhosphorGlow>
            <span className="text-signal text-sm font-mono mt-1 mb-3">[{phase.duration}]</span>
            <p className="text-white/70 text-sm leading-relaxed">{phase.desc}</p>
          </div>
        ))}
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden space-y-6 relative pl-12 border-l-2 border-signal/50">
        {phases.map((phase) => (
          <div key={phase.name} className="relative">
            <div className="absolute -left-[49px] top-0 w-10 h-10 bg-void-pure border-2 border-signal rounded-full flex items-center justify-center font-mono text-signal font-bold">
              {phase.icon}
            </div>
            <div className="pt-1">
              <div className="flex items-center gap-3 mb-2">
                <PhosphorGlow>
                  <span className="font-mono font-bold text-white text-lg">{phase.name}</span>
                </PhosphorGlow>
                <span className="text-signal text-sm font-mono">[{phase.duration}]</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{phase.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Terminal command hint */}
      <div className="mt-12 text-center">
        <code className="text-white/50 text-sm font-mono">
          $ ./methodology --poc <span className="text-signal">3 days</span> --mvp <span className="text-signal">1-3 weeks</span> to production
        </code>
      </div>
    </div>
  )
}
