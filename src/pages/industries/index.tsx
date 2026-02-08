import { useParams } from 'react-router-dom'
import { IndustryPage } from './IndustryPage'
import { IndustriesHub } from './IndustriesHub'
import industriesData from '@/data/industries.json'

export function IndustryRouter() {
  const { slug } = useParams<{ slug: string }>()
  
  // No slug = show hub page
  if (!slug) {
    return <IndustriesHub />
  }
  
  const industryData = industriesData.find((industry) => industry.slug === slug)
  
  // Invalid slug = show hub page
  if (!industryData) {
    return <IndustriesHub />
  }
  
  return <IndustryPage data={industryData} />
}
