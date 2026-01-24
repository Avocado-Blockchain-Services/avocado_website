import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export interface Option {
  id: string
  label: string
  description?: string
}

export function TerminalMenu({
  options,
  onSelect,
  title,
  isActive = true,
  'aria-labelledby': ariaLabelledBy
}: {
  options: Option[],
  onSelect: (option: Option) => void,
  title?: string,
  isActive?: boolean,
  'aria-labelledby'?: string
}) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!isActive) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(prev => (prev + 1) % options.length)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(prev => (prev - 1 + options.length) % options.length)
      } else if (e.key === 'Enter') {
        e.preventDefault()
        onSelect(options[selectedIndex])
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [options, selectedIndex, onSelect, isActive])

  return (
    <div className="mb-4">
      {title && <div className="text-text-secondary mb-2">{title}</div>}
      <div
        role="listbox"
        aria-labelledby={ariaLabelledBy}
        aria-activedescendant={`option-${options[selectedIndex]?.id}`}
        className="flex flex-col gap-1"
        tabIndex={0}
      >
        {options.map((option, index) => {
          const isSelected = index === selectedIndex
          return (
            <div
              key={option.id}
              id={`option-${option.id}`}
              role="option"
              aria-selected={isSelected}
              className={cn(
                'flex items-baseline gap-2 px-2 py-1 transition-colors cursor-pointer min-h-[44px] items-center',
                isSelected ? 'text-signal bg-signal/10' : 'text-text-secondary hover:text-text-primary',
                'focus-visible:outline-2 focus-visible:outline-signal focus-visible:outline-offset-2'
              )}
              onClick={() => onSelect(option)}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <span className="w-4 text-center" aria-hidden="true">{isSelected ? '❯' : ' '}</span>
              <span className={cn('font-bold', isSelected && 'text-glow')}>{option.label}</span>
              {option.description && (
                <span className="text-text-tertiary text-xs ml-4 hidden md:inline-block">
                  – {option.description}
                </span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
