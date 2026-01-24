import { useState, useEffect } from 'react'

export function Typewriter({ 
  text, 
  speed = 30, 
  onComplete,
  className 
}: { 
  text: string, 
  speed?: number, 
  onComplete?: () => void,
  className?: string
}) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    setDisplayed('')
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed((_) => text.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
        onComplete?.()
      }
    }, speed)
    return () => clearInterval(timer)
  }, [text, speed, onComplete])

  return <span className={className}>{displayed}</span>
}
