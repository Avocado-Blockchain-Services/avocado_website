# App.tsx Routing Update Instructions

## Add These Imports

Add these import statements after the existing page imports (around line 9):

```tsx
import { IndustryRouter } from '@/pages/industries'
import { SolutionRouter } from '@/pages/solutions'
import { TechRouter } from '@/pages/tech'
import { CaseStudyRouter } from '@/pages/case-studies'
```

## Add These Routes

Add these route definitions inside the `<Routes>` component (after the `/mvp-development` route):

```tsx
<Route path="/industries/:slug" element={<IndustryRouter />} />
<Route path="/solutions/:slug" element={<SolutionRouter />} />
<Route path="/tech/:slug" element={<TechRouter />} />
<Route path="/case-studies/:slug" element={<CaseStudyRouter />} />
```

## Complete Updated App.tsx

Here's what the complete file should look like:

```tsx
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { Signal } from '@/pages/Signal'
import { Ventures } from '@/pages/Ventures'
import { Services } from '@/pages/Services'
import { Protocol } from '@/pages/Protocol'
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
        <Route path="/ventures" element={<Ventures />} />
        <Route path="/services" element={<Services />} />
        <Route path="/protocol" element={<Protocol />} />
        <Route path="/company" element={<Company />} />
        <Route path="/mvp-development" element={<MVPDevelopment />} />
        <Route path="/industries/:slug" element={<IndustryRouter />} />
        <Route path="/solutions/:slug" element={<SolutionRouter />} />
        <Route path="/tech/:slug" element={<TechRouter />} />
        <Route path="/case-studies/:slug" element={<CaseStudyRouter />} />
      </Routes>
    </Layout>
  )
}

export default App
```

## Testing the Routes

After updating, these URLs should work:

### Industries
- http://localhost:5173/industries/banking
- http://localhost:5173/industries/sports
- http://localhost:5173/industries/fintech

### Solutions
- http://localhost:5173/solutions/ai-chatbot
- http://localhost:5173/solutions/nft-marketplace
- http://localhost:5173/solutions/smart-contracts
- http://localhost:5173/solutions/saas-mvp
- http://localhost:5173/solutions/loyalty-platform

### Technologies
- http://localhost:5173/tech/vertex-ai
- http://localhost:5173/tech/solidity
- http://localhost:5173/tech/ethereum

### Case Studies
- http://localhost:5173/case-studies/bbva
- http://localhost:5173/case-studies/chivas
- http://localhost:5173/case-studies/bitso
