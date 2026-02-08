import { useParams, Navigate } from 'react-router-dom'
import { TechPage } from './TechPage'
import technologiesData from '@/data/technologies.json'

export function TechRouter() {
  const { slug } = useParams<{ slug: string }>()
  
  const techData = technologiesData.find((tech) => tech.slug === slug)
  
  if (!techData) {
    return <Navigate to="/" replace />
  }
  
  return <TechPage data={techData} />
}
