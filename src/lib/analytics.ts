import * as amplitude from '@amplitude/analytics-browser'

const API_KEY = import.meta.env.VITE_AMPLITUDE_API_KEY || ''

let initialized = false

export function initAnalytics() {
  if (initialized || !API_KEY) return
  amplitude.init(API_KEY, {
    autocapture: { elementInteractions: false },
  })
  initialized = true
}

export function trackPageView(path: string) {
  if (!initialized) return
  amplitude.track('Page View', { path })
}

export function trackEvent(name: string, properties?: Record<string, unknown>) {
  if (!initialized) return
  amplitude.track(name, properties)
}
