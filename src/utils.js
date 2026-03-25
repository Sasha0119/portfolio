export function cx(...parts) {
  return parts.filter(Boolean).join(' ')
}

export function encodeMailto({ to, subject, body }) {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const qs = params.toString()
  return `mailto:${to}${qs ? `?${qs}` : ''}`
}

export function getReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

