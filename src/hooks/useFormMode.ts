import { useState, useEffect } from 'react'

export type FormMode = 'terminal' | 'standard'

export function useFormMode() {
  const [mode, setMode] = useState<FormMode>('terminal')

  useEffect(() => {
    const saved = localStorage.getItem('avocado_form_mode') as FormMode
    if (saved && (saved === 'terminal' || saved === 'standard')) {
      setMode(saved)
    } else {
      // Default to terminal on desktop, standard on mobile?
      // Guidelines say: Terminal Input Mode (Desktop Default), Standard Form Mode (Mobile Default)
      const isMobile = window.matchMedia('(max-width: 768px)').matches
      setMode(isMobile ? 'standard' : 'terminal')
    }
  }, [])

  const toggleMode = () => {
    const newMode = mode === 'terminal' ? 'standard' : 'terminal'
    setMode(newMode)
    localStorage.setItem('avocado_form_mode', newMode)
  }

  return { mode, toggleMode, setMode }
}
