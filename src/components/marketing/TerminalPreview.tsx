import { useState, useEffect } from 'react'
import { TerminalWindow } from '@/components/terminal/TerminalWindow'
import { TerminalOutput } from '@/components/terminal/TerminalOutput'

const SNIPPETS = [
  [
    '> git commit -m "feat: ship_mvp"',
    '> git push origin main',
    '> deploying to production...',
    '> build successful (420ms)',
    '> LIVE: https://perseasocial.com'
  ],
  [
    '> initializing ai_pipeline...',
    '> connecting to vertex_ai...',
    '> training model [████████] 100%',
    '> serving requests: 12k/sec',
    '> status: operational'
  ],
  [
    '> scale --target 10x',
    '> provisioning resources...',
    '> load_balancer: optimized',
    '> db_shards: active',
    '> ready for traffic'
  ]
]

export function TerminalPreview() {
  const [snippetIndex, setSnippetIndex] = useState(0)
  const [lines, setLines] = useState<string[]>([])
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    if (lineIndex < SNIPPETS[snippetIndex].length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, SNIPPETS[snippetIndex][lineIndex]])
        setLineIndex(prev => prev + 1)
      }, 1500) // Delay between lines
      return () => clearTimeout(timer)
    } else {
      // Finished snippet, wait and clear
      const timer = setTimeout(() => {
        setLines([])
        setLineIndex(0)
        setSnippetIndex(prev => (prev + 1) % SNIPPETS.length)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [lineIndex, snippetIndex])

  return (
    <div className="relative transform rotate-1 hover:rotate-0 transition-transform duration-500">
      <TerminalWindow className="h-[320px] w-full max-w-lg mx-auto shadow-2xl">
        {lines.map((line, i) => (
          <TerminalOutput key={`${snippetIndex}-${i}`} animate={i === lines.length - 1}>
            {line}
          </TerminalOutput>
        ))}
        {lineIndex < SNIPPETS[snippetIndex].length && (
           <div className="animate-blink bg-signal w-2 h-4 inline-block ml-1" />
        )}
      </TerminalWindow>
    </div>
  )
}
