'use client'

import { useState, useEffect } from 'react'

export default function B2BEmailGate({ children }: { children: React.ReactNode }) {
  const [granted, setGranted]   = useState<boolean | null>(null) // null = loading
  const [email, setEmail]       = useState('')
  const [company, setCompany]   = useState('')
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')

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

  // Loading state — prevents flash
  if (granted === null) {
    return (
      <div className="min-h-screen bg-ink flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
      </div>
    )
  }

  if (granted) return <>{children}</>

  return (
    <div className="min-h-screen bg-ink flex items-center justify-center px-5">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(196,154,60,0.04)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
              <span className="text-ink font-black text-sm">S</span>
            </div>
            <span className="text-cream-light font-black text-xl tracking-tight">
              SPORT<span className="text-gold">VIO</span>
            </span>
          </div>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 text-gold text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-5">
            🔒 Wholesale Partner Access
          </div>
          <h1 className="text-3xl font-black text-cream-light leading-tight mb-3">
            Unlock Wholesale Pricing
          </h1>
          <p className="text-cream-muted text-sm leading-relaxed">
            This page contains confidential wholesale rates and partner programme details.
            Enter your details to get instant access.
          </p>
        </div>

        {/* Gate form */}
        <form onSubmit={handleSubmit} className="card-gold p-8 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-cream-muted mb-2">
              Business / Store Name
            </label>
            <input
              type="text"
              required
              value={company}
              onChange={e => setCompany(e.target.value)}
              placeholder="e.g. Ram Optical, Chennai"
              className="w-full bg-ink border border-ink-border focus:border-gold/60
                         rounded-xl px-4 py-3.5 text-cream placeholder-ink-border
                         outline-none transition-colors text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-cream-muted mb-2">
              Business Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@yourbusiness.com"
              className="w-full bg-ink border border-ink-border focus:border-gold/60
                         rounded-xl px-4 py-3.5 text-cream placeholder-ink-border
                         outline-none transition-colors text-sm"
            />
          </div>

          {error && <p className="text-ember text-xs">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="btn-gold w-full justify-center text-base mt-2 disabled:opacity-60"
          >
            {loading ? 'Verifying…' : 'Get Wholesale Access →'}
          </button>

          <p className="text-cream-muted text-xs text-center pt-1">
            Our B2B team will call you within 24 hours to confirm your partnership.
          </p>
        </form>

        {/* Trust signals */}
        <div className="mt-8 flex items-center justify-center gap-6 text-cream-muted text-xs">
          {['50+ Store Partners', 'GST Invoice Provided', 'Respond in 24 hrs'].map(t => (
            <span key={t} className="flex items-center gap-1">
              <span className="text-gold">✓</span> {t}
            </span>
          ))}
        </div>

        {/* Already a partner */}
        <p className="text-center mt-6 text-cream-muted text-xs">
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
