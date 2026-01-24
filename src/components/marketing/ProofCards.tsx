import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export function ProofCards() {
  return (
    <div className="grid md:grid-cols-2 gap-8 relative mt-20 max-w-5xl mx-auto px-4">
       <Card glow className="p-8 md:translate-y-0 relative z-10 md:rotate-[-2deg] hover:rotate-0 transition-transform duration-500 hover:z-30 flex flex-col min-h-[400px]">
          <div className="flex-1">
            <div className="text-signal font-mono text-sm mb-4 border-b border-void-elevated pb-2">PERSEA SOCIAL</div>
            <h3 className="text-3xl font-bold mb-4 text-white">Social engagement platform</h3>
            <p className="text-text-secondary mb-6">
              Full-stack social graph implementation handling high-velocity user interactions.
            </p>
            <ul className="space-y-2 text-text-secondary mb-8 font-mono text-sm">
               <li className="text-signal-bright">&gt; 1M+ docs/day processed</li>
               <li>&gt; 10K users in month 1</li>
               <li>&gt; Stack: Solidity + React</li>
            </ul>
          </div>
          <Button variant="ghost" className="w-full border-t border-void-elevated mt-auto" asChild>
             <a href="/ventures#persea-social">[View Case Study -&gt;]</a>
          </Button>
       </Card>

       <Card glow className="p-8 md:translate-y-12 relative z-20 md:rotate-[2deg] hover:rotate-0 transition-transform duration-500 hover:z-30 flex flex-col min-h-[400px]">
          <div className="flex-1">
            <div className="text-signal font-mono text-sm mb-4 border-b border-void-elevated pb-2">PERSEA.AI</div>
            <h3 className="text-3xl font-bold mb-4 text-white">AI-powered pipelines</h3>
             <p className="text-text-secondary mb-6">
              Enterprise-grade RAG implementation using Google Cloud Vertex AI.
            </p>
           <ul className="space-y-2 text-text-secondary mb-8 font-mono text-sm">
               <li className="text-signal-bright">&gt; Vertex AI Integration</li>
               <li>&gt; 99.9% Uptime</li>
               <li>&gt; Cost: $4k/mo optimized</li>
            </ul>
          </div>
          <Button variant="ghost" className="w-full border-t border-void-elevated mt-auto" asChild>
             <a href="/ventures#persea-ai">[View Case Study -&gt;]</a>
          </Button>
       </Card>
    </div>
  )
}
