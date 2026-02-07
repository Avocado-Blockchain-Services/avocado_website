import { useParams } from 'react-router-dom'
import { SolutionPage } from './SolutionPage'
import solutions from '@/data/solutions.json'

export function SolutionRouter() {
  const { slug } = useParams()
  const solution = solutions.find(s => s.slug === slug)
  
  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white font-mono mb-4">404</h1>
          <p className="text-white/60">Solution not found</p>
          <a href="/services" className="text-signal hover:underline mt-4 inline-block">
            ← Back to Services
          </a>
        </div>
      </div>
    )
  }
  
  return <SolutionPage data={solution} />
}
