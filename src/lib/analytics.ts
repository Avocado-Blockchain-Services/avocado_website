import * as amplitude from '@amplitude/analytics-browser'

const API_KEY = import.meta.env.VITE_AMPLITUDE_API_KEY || ''

let initialized = false

export function initAnalytics() {
  if (initialized || !API_KEY) return
  amplitude.init(API_KEY, {
    autocapture: { elementInteractions: false },
  })
  initialized = true

  // Capture UTM params and referrer on init
  captureTrafficSource()

  // Set up scroll depth tracking
  setupScrollTracking()

  // Set up bounce / time-on-page tracking
  setupEngagementTracking()
}

export function trackPageView(path: string) {
  if (!initialized) return
  amplitude.track('Page Viewed', { path })
}

export function trackEvent(name: string, properties?: Record<string, unknown>) {
  if (!initialized) return
  amplitude.track(name, properties)
}

// --- Traffic Source ---

function captureTrafficSource() {
  const params = new URLSearchParams(window.location.search)
  const utmSource = params.get('utm_source')
  const utmMedium = params.get('utm_medium')
  const utmCampaign = params.get('utm_campaign')
  const utmTerm = params.get('utm_term')
  const utmContent = params.get('utm_content')
  const referrer = document.referrer || 'direct'

  // Parse referrer into a clean source
  let referrerSource = 'direct'
  if (referrer && referrer !== 'direct') {
    try {
      const url = new URL(referrer)
      referrerSource = url.hostname.replace('www.', '')
    } catch {
      referrerSource = referrer
    }
  }

  // Set as user properties (persist across sessions)
  const identify = new amplitude.Identify()
  if (utmSource) identify.setOnce('utm_source', utmSource)
  if (utmMedium) identify.setOnce('utm_medium', utmMedium)
  if (utmCampaign) identify.setOnce('utm_campaign', utmCampaign)
  if (utmTerm) identify.setOnce('utm_term', utmTerm)
  if (utmContent) identify.setOnce('utm_content', utmContent)
  identify.setOnce('initial_referrer', referrerSource)
  amplitude.identify(identify)

  // Also fire as event properties on first visit
  if (utmSource || referrerSource !== 'direct') {
    amplitude.track('Traffic Source', {
      utm_source: utmSource || null,
      utm_medium: utmMedium || null,
      utm_campaign: utmCampaign || null,
      utm_term: utmTerm || null,
      utm_content: utmContent || null,
      referrer: referrerSource,
    })
  }
}

// --- Scroll Depth ---

function setupScrollTracking() {
  const thresholds = [25, 50, 75, 100]
  const fired = new Set<number>()
  let currentPath = window.location.pathname

  const checkScroll = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    if (docHeight <= 0) return
    const percent = Math.round((scrollTop / docHeight) * 100)

    for (const t of thresholds) {
      if (percent >= t && !fired.has(t)) {
        fired.add(t)
        amplitude.track('Scroll Depth', {
          depth: t,
          page: currentPath,
        })
      }
    }
  }

  window.addEventListener('scroll', checkScroll, { passive: true })

  // Reset on route change (SPA)
  const observer = new MutationObserver(() => {
    if (window.location.pathname !== currentPath) {
      currentPath = window.location.pathname
      fired.clear()
    }
  })
  observer.observe(document.body, { childList: true, subtree: true })
}

// --- Engagement / Bounce Tracking ---

function setupEngagementTracking() {
  const startTime = Date.now()
  const startPath = window.location.pathname

  // Track time on page when user leaves
  const handleLeave = () => {
    const timeOnPage = Math.round((Date.now() - startTime) / 1000)
    const isBounce = timeOnPage < 5

    // Use sendBeacon for reliability on page unload
    amplitude.track('Session End', {
      time_on_page_seconds: timeOnPage,
      is_bounce: isBounce,
      exit_page: window.location.pathname,
      entry_page: startPath,
    })
    amplitude.flush()
  }

  window.addEventListener('beforeunload', handleLeave)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      handleLeave()
    }
  })
}
