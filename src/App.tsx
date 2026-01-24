import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { Signal } from '@/pages/Signal'
import { Ventures } from '@/pages/Ventures'
import { Services } from '@/pages/Services'
import { Protocol } from '@/pages/Protocol'
import { Company } from '@/pages/Company'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signal" element={<Signal />} />
        <Route path="/ventures" element={<Ventures />} />
        <Route path="/services" element={<Services />} />
        <Route path="/protocol" element={<Protocol />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </Layout>
  )
}

export default App