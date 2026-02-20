import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { Signal } from '@/pages/Signal'
import { Ventures } from '@/pages/Ventures'
import { Services } from '@/pages/Services'
import { Protocol } from '@/pages/Protocol'
import { AIAgents } from '@/pages/AIAgents'
import { Company } from '@/pages/Company'
import { MVPDevelopment } from '@/pages/MVPDevelopment'
import { IndustryRouter } from '@/pages/industries'
import { SolutionRouter } from '@/pages/solutions'
import { TechRouter } from '@/pages/tech'
import { CaseStudyRouter } from '@/pages/case-studies'
import { trackPageView } from '@/lib/analytics'

function App() {
  const location = useLocation()

  useEffect(() => {
    trackPageView(location.pathname)
  }, [location.pathname])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signal" element={<Signal />} />
        <Route path="/products" element={<Ventures />} />
        <Route path="/ventures" element={<Ventures />} />
        <Route path="/ai-agents" element={<AIAgents />} />
        <Route path="/services" element={<Services />} />
        <Route path="/playbook" element={<Protocol />} />
        <Route path="/protocol" element={<Protocol />} />
        <Route path="/company" element={<Company />} />
        <Route path="/mvp-development" element={<MVPDevelopment />} />
        <Route path="/industries" element={<IndustryRouter />} />
        <Route path="/industries/:slug" element={<IndustryRouter />} />
        <Route path="/solutions" element={<SolutionRouter />} />
        <Route path="/solutions/:slug" element={<SolutionRouter />} />
        <Route path="/tech/:slug" element={<TechRouter />} />
        <Route path="/case-studies" element={<CaseStudyRouter />} />
        <Route path="/case-studies/:slug" element={<CaseStudyRouter />} />
      </Routes>
    </Layout>
  )
}

export default App
