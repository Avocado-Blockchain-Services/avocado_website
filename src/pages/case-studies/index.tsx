import { useParams } from 'react-router-dom'
import { CaseStudyPage } from './CaseStudyPage'
import caseStudies from '@/data/case-studies.json'

export function CaseStudyRouter() {
  const { slug } = useParams()
  const caseStudy = caseStudies.find(cs => cs.slug === slug)
  
  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white font-mono mb-4">404</h1>
          <p className="text-white/60">Case study not found</p>
          <a href="/company" className="text-signal hover:underline mt-4 inline-block">
            ← Back to Company
          </a>
        </div>
      </div>
    )
  }
  
  return <CaseStudyPage data={caseStudy} />
}
