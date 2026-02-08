import { useParams } from 'react-router-dom'
import { CaseStudyPage } from './CaseStudyPage'
import { CaseStudiesHub } from './CaseStudiesHub'
import caseStudiesData from '@/data/case-studies.json'

export function CaseStudyRouter() {
  const { slug } = useParams<{ slug: string }>()
  
  // No slug = show hub page
  if (!slug) {
    return <CaseStudiesHub />
  }
  
  const caseStudyData = caseStudiesData.find((caseStudy) => caseStudy.slug === slug)
  
  // Invalid slug = show hub page
  if (!caseStudyData) {
    return <CaseStudiesHub />
  }
  
  return <CaseStudyPage data={caseStudyData} />
}
