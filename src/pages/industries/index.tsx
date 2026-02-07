import { useParams } from 'react-router-dom'
import { IndustryPage } from './IndustryPage'
import industries from '@/data/industries.json'

export function IndustryRouter() {
  const { slug } = useParams()
  const industry = industries.find(i => i.slug === slug)
  
  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white font-mono mb-4">404</h1>
          <p className="text-white/60">Industry not found</p>
          <a href="/services" className="text-signal hover:underline mt-4 inline-block">
            ← Back to Services
          </a>
        </div>
      </div>
    )
  }
  
  return <IndustryPage data={industry} />
}
