import { Header } from './Header'
import { Footer } from './Footer'
import { SkipLink } from './SkipLink'
import { Scanlines } from '@/components/effects/Scanlines'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
       <SkipLink />
       <Scanlines />
       <Header />
       <main id="main" className="min-h-screen bg-void-pure text-text-primary pt-16">
         {children}
       </main>
       <Footer />
    </>
  )
}
