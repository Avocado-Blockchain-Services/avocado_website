const CAPABILITIES = [
  'AI Assistants', 'Mobile Apps', 'Loyalty Platforms', 'Customer Portals', 'NFT Campaigns', 'Data Dashboards'
]

export function StackMarquee() {
  return (
    <div className="w-full overflow-hidden bg-void-surface py-6 border-y border-void-elevated">
      <div className="max-w-7xl mx-auto px-4 mb-2 text-sm font-mono text-signal">
        $ capabilities --what-we-build
      </div>
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...CAPABILITIES, ...CAPABILITIES, ...CAPABILITIES, ...CAPABILITIES].map((item, i) => (
          <div key={i} className="flex items-center gap-4 mx-8 font-mono text-white/70 hover:text-signal transition-colors cursor-default select-none text-lg">
             <span className="text-sm text-signal">→</span>
             <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
