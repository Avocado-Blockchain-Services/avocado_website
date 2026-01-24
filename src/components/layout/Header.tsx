import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [sessionTime, setSessionTime] = useState(0)
  // const location = useLocation() // Commented out until router installed
  const pathname = '/' // placeholder

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = `${totalScroll / windowHeight}`
      setScrollProgress(Number(scroll))
    }
    window.addEventListener('scroll', handleScroll)

    const timer = setInterval(() => {
      setSessionTime(prev => prev + 1)
    }, 60000) // update every minute

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(timer)
    }
  }, [])

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-40 transition-all border-b border-transparent font-mono',
      scrolled && 'bg-void-pure/90 backdrop-blur-md border-signal/20'
    )}>
      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group cursor-pointer">
           <img src="/logo-white.svg" alt="Avocado" className="h-8 w-auto group-hover:brightness-125 transition-all" />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-base">
          {['Home', 'Company', 'Protocol', 'Ventures', 'Services'].map((item) => (
             <a key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-white/90 hover:text-signal transition-colors">
               {item}
             </a>
          ))}
        </nav>

        <Button variant="primary" size="sm" className="hidden md:inline-flex" asChild>
          <a href="/signal">[█ START A PROJECT]</a>
        </Button>
      </div>

      {/* Status Bar */}
      <div className="border-t border-void-elevated bg-void-surface text-sm text-white/50">
        <div className="max-w-7xl mx-auto px-4 h-7 flex items-center justify-between font-mono">
          <span><span className="text-signal">&gt;</span> current: {pathname}</span>
          <div className="flex gap-6">
            <span>scroll: <span className="text-white/70">{Math.round(scrollProgress * 100)}%</span></span>
            <span>session: <span className="text-white/70">{sessionTime}m</span></span>
          </div>
        </div>
      </div>
    </header>
  )
}
