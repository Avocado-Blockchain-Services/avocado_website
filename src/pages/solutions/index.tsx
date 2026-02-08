import { useParams } from 'react-router-dom'
import { SolutionPage } from './SolutionPage'
import { SolutionsHub } from './SolutionsHub'
import solutionsData from '@/data/solutions.json'

export function SolutionRouter() {
  const { slug } = useParams<{ slug: string }>()
  
  // No slug = show hub page
  if (!slug) {
    return <SolutionsHub />
  }
  
  const solutionData = solutionsData.find((solution) => solution.slug === slug)
  
  // Invalid slug = show hub page
  if (!solutionData) {
    return <SolutionsHub />
  }
  
  return <SolutionPage data={solutionData} />
}
