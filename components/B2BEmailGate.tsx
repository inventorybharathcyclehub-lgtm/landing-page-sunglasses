'use client'

import { useState, useEffect } from 'react'

export default function B2BEmailGate({ children }: { children: React.ReactNode }) {
  const [granted, setGranted] = useState<boolean | null>(null)
  const [email, setEmail]     = useState('')
  const [company, setCompany] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')

  useEffect(() => {
    const access = localStorage.getItem('sportvio_b2b_access')
    setGranted(access === 'true')
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !company) { setError('Please fill in both fields.'); return }
    setLoading(true)
    try {
      await fetch('/api/b2b-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, company }),
      })
    } catch {
      // non-blocking — grant access regardless
    }
    localStorage.setItem('sportvio_b2b_access', 'true')
    localStorage.setItem('sportvio_b2b_email', email)
    setGranted(true)
    setLoading(false)
  }

  if (granted === null) {
    return (
      <div className="min-h-screen bg-warm-white flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-gold/20 border-t-gold rounded-full animate-spin" />
      </div>
    )
  }

  if (granted) return <>{children}</>

  return (
    <div className="min-h-screen bg-warm-white flex items-center justify-center px-5 py-16">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-ink rounded-lg flex items-center justify-center">
              <span className="text-warm-white font-bold text-sm font-serif">S</span>
            </div>
            <span className="text-ink font-bold text-xl tracking-tight font-serif">
              SPORT<span className="text-gold">VIO</span>
            </span>
          </div>
          <div className="pill-gold inline-flex mb-5">
            🔒 Wholesale Partner Access
          </div>
          <h1 className="heading-lg text-3xl mb-3">
            Unlock Wholesale Pricing
          </h1>
          <p className="text-ink-muted text-sm leading-relaxed">
            This page contains confidential wholesale rates and partner programme details.
            Enter your details to get instant access.
          </p>
        </div>

        {/* Gate form */}
        <form onSubmit={handleSubmit} className="bg-gold-pale border border-gold/20 rounded-2xl p-8 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-ink-muted mb-2">
              Business / Store Name
            </label>
            <input
              type="text"
              required
              value={company}
              onChange={e => setCompany(e.target.value)}
              placeholder="e.g. Ram Optical, Chennai"
              className="w-full bg-white border border-warm-border focus:border-gold/50
                         rounded-xl px-4 py-3.5 text-ink placeholder-ink-light
                         outline-none transition-colors text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-ink-muted mb-2">
              Business Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@yourbusiness.com"
              className="w-full bg-white border border-warm-border focus:border-gold/50
                         rounded-xl px-4 py-3.5 text-ink placeholder-ink-light
                         outline-none transition-colors text-sm"
            />
          </div>

          {error && <p className="text-ember text-xs">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full justify-center text-base mt-2 disabled:opacity-60"
          >
            {loading ? 'Verifying…' : 'Get Wholesale Access →'}
          </button>

          <p className="text-ink-muted text-xs text-center pt-1">
            Our B2B team will call you within 24 hours to confirm your partnership.
          </p>
        </form>

        {/* Trust signals */}
        <div className="mt-8 flex items-center justify-center gap-6 text-ink-muted text-xs flex-wrap">
          {['50+ Store Partners', 'GST Invoice Provided', 'Respond in 24 hrs'].map(t => (
            <span key={t} className="flex items-center gap-1">
              <span className="text-gold">✓</span> {t}
            </span>
          ))}
        </div>

        <p className="text-center mt-6 text-ink-muted text-xs">
          Already a partner?{' '}
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20an%20existing%20SPORTVIO%20partner"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light underline transition-colors"
          >
            WhatsApp us directly
          </a>
        </p>
      </div>
    </div>
  )
}
