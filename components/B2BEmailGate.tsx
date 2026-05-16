'use client'

import { useState, useEffect } from 'react'

const inputCls =
  'w-full bg-bg border border-bg-border focus:border-electric rounded-md px-4 py-3.5 text-ink placeholder-ink-light outline-none transition-colors text-sm'

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
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-electric/20 border-t-electric rounded-full animate-spin" />
      </div>
    )
  }

  if (granted) return <>{children}</>

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-5 py-16">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-electric rounded flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">S</span>
            </div>
            <span className="text-ink font-display font-bold text-xl tracking-tightest">
              SPORT<span className="text-electric">VIO</span>
            </span>
          </div>
          <div className="pill-electric inline-flex mb-5">
            <span className="live-dot" />
            WHOLESALE PARTNER ACCESS
          </div>
          <h1 className="heading-lg text-3xl sm:text-4xl mb-3">
            Unlock Wholesale<br />Pricing.
          </h1>
          <p className="text-ink-muted text-sm leading-relaxed">
            This page contains confidential wholesale rates and partner programme details.
            Enter your details to get instant access.
          </p>
        </div>

        {/* Gate form */}
        <form onSubmit={handleSubmit} className="bg-bg-soft border border-bg-border rounded-lg p-8 space-y-5">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.16em] text-ink-muted mb-2">
              BUSINESS / STORE NAME
            </label>
            <input
              type="text"
              required
              value={company}
              onChange={e => setCompany(e.target.value)}
              placeholder="e.g. Ram Optical, Chennai"
              className={inputCls}
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.16em] text-ink-muted mb-2">
              BUSINESS EMAIL
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@yourbusiness.com"
              className={inputCls}
            />
          </div>

          {error && <p className="text-ember text-xs">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="btn-electric w-full justify-center text-sm mt-2 disabled:opacity-60"
          >
            {loading ? 'VERIFYING…' : 'GET WHOLESALE ACCESS →'}
          </button>

          <p className="text-ink-muted text-xs text-center pt-1">
            Our B2B team will call you within 24 hours to confirm your partnership.
          </p>
        </form>

        {/* Trust signals */}
        <div className="mt-8 flex items-center justify-center gap-6 text-ink-muted text-[10px] font-bold uppercase tracking-[0.14em] flex-wrap">
          {['50+ STORE PARTNERS', 'GST INVOICE', 'RESPOND IN 24H'].map(t => (
            <span key={t} className="flex items-center gap-1.5">
              <span className="text-electric">✓</span> {t}
            </span>
          ))}
        </div>

        <p className="text-center mt-6 text-ink-muted text-xs">
          Already a partner?{' '}
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20an%20existing%20SPORTVIO%20partner"
            target="_blank"
            rel="noopener noreferrer"
            className="text-electric hover:text-electric-light underline transition-colors font-semibold"
          >
            WhatsApp us
          </a>
        </p>
      </div>
    </div>
  )
}
