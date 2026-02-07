import { useParams } from 'react-router-dom'
import { TechPage } from './TechPage'
import technologies from '@/data/technologies.json'

export function TechRouter() {
  const { slug } = useParams()
  const tech = technologies.find(t => t.slug === slug)
  
  if (!tech) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white font-mono mb-4">404</h1>
          <p className="text-white/60">Technology not found</p>
          <a href="/services" className="text-signal hover:underline mt-4 inline-block">
            ← Back to Services
          </a>
        </div>
      </div>
    )
  }
  
  return <TechPage data={tech} />
}
