import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { TerminalWindow } from './TerminalWindow'

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const reducedMotion = useReducedMotion()
  const [step, setStep] = useState(0)
  const [logs, setLogs] = useState<string[]>([])
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Check cookie immediately
    const hasVisited = document.cookie.includes('avocado_visited=true')
    if (hasVisited) {
      onComplete()
      return
    }

    if (reducedMotion) {
      onComplete()
      return
    }

    let mounted = true
    const timeouts: ReturnType<typeof setTimeout>[] = []

    const sequence = async () => {
      // 0.0s: Start (Black) 
      
      // 0.1s: Scanline/Pixel
      timeouts.push(setTimeout(() => mounted && setStep(1), 100))

      // 0.3s: Expand scanline (handled by CSS transition in render)

      // 0.5s: Terminal Snap
      timeouts.push(setTimeout(() => mounted && setStep(2), 500))

      // Text logs
      const addLog = (text: string, time: number) => {
        timeouts.push(setTimeout(() => {
          if (mounted) setLogs(prev => [...prev, text])
        }, time))
      }

      addLog('> initializing velocity_core...                    [████░░] 67%', 800)
      addLog('> loading deployment_modules...                          [OK]', 1100)
      addLog('> establishing secure_channel...                         [OK]', 1300)
      addLog('> calibrating shipping_velocity...                       [OK]', 1500)
      
      timeouts.push(setTimeout(() => {
        if (mounted) setLogs(prev => [...prev, '\n> READY FOR DEPLOYMENT'])
      }, 1700))

      timeouts.push(setTimeout(() => {
        if (mounted) setLogs(prev => [...prev, '> Type \'help\' for commands or scroll to continue_'])
      }, 1800))

      // 2.0s: Glitch & Exit
      timeouts.push(setTimeout(() => {
        if (mounted) {
          setIsExiting(true)
          // Set cookie
          document.cookie = 'avocado_visited=true; max-age=2592000; SameSite=Lax'
          // Wait for exit animation to finish before calling onComplete
          setTimeout(onComplete, 300) 
        }
      }, 2300))
    }

    sequence()

    const handleSkip = () => {
      if (!mounted) return
      document.cookie = 'avocado_visited=true; max-age=2592000; SameSite=Lax'
      onComplete()
    }

    window.addEventListener('keydown', handleSkip)
    window.addEventListener('click', handleSkip)
    window.addEventListener('touchstart', handleSkip)
    window.addEventListener('wheel', handleSkip)

    return () => {
      mounted = false
      timeouts.forEach(clearTimeout)
      window.removeEventListener('keydown', handleSkip)
      window.removeEventListener('click', handleSkip)
      window.removeEventListener('touchstart', handleSkip)
      window.removeEventListener('wheel', handleSkip)
    }
  }, [reducedMotion, onComplete])

  if (reducedMotion) return null

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-void-pure flex items-center justify-center overflow-hidden"
      animate={isExiting ? { 
        opacity: 0, 
        scale: 1.5,
        filter: "hue-rotate(90deg) blur(4px)",
      } : { opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* CRT Scanline Effect Overlay for the whole screen during boot */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-10 opacity-20" />

      {step >= 1 && step < 2 && (
        <motion.div 
          initial={{ height: 2, width: 2, opacity: 1 }}
          animate={{ width: "100%", height: 2 }}
          className="bg-signal shadow-[0_0_20px_var(--color-signal)]"
        />
      )}

      {step >= 2 && (
        <motion.div
          initial={{ scale: 0.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.1, type: "spring", stiffness: 300, damping: 20 }}
          className="w-full max-w-2xl px-4 relative z-20"
        >
          <TerminalWindow>
            {logs.map((log, i) => (
              <div key={i} className="whitespace-pre-wrap font-mono text-sm text-signal-bright">
                {log}
              </div>
            ))}
            {!isExiting && (
              <div className="animate-blink bg-signal w-2 h-4 inline-block ml-1 align-middle" />
            )}
          </TerminalWindow>
        </motion.div>
      )}
    </motion.div>
  )
}
