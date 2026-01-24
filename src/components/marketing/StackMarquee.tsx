const STACK = [
  'Solidity', 'Python', 'React', 'JavaScript', 'Vertex AI', 'GCP'
]

export function StackMarquee() {
  return (
    <div className="w-full overflow-hidden bg-void-surface py-6 border-y border-void-elevated">
      <div className="max-w-7xl mx-auto px-4 mb-2 text-xs font-mono text-signal">
        $ pipeline --stack
      </div>
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...STACK, ...STACK, ...STACK, ...STACK].map((tech, i) => (
          <div key={i} className="flex items-center gap-4 mx-8 font-mono text-text-secondary hover:text-signal transition-colors cursor-default select-none text-lg">
             <span className="text-xs text-text-tertiary">--&gt;</span>
             <span>[{tech}]</span>
          </div>
        ))}
      </div>
    </div>
  )
}
