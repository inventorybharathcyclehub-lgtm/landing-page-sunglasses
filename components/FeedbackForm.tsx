'use client'

import { useState } from 'react'

type FormData = {
  name: string
  phone: string
  email: string
  orderId: string
  rating: number
  quality: string
  comfort: string
  style: string
  improvements: string
  recommend: string
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  orderId: '',
  rating: 0,
  quality: '',
  comfort: '',
  style: '',
  improvements: '',
  recommend: '',
}

const inputCls =
  'w-full bg-bg border border-bg-border focus:border-electric rounded-md px-4 py-3 text-ink placeholder-ink-light text-sm outline-none transition-colors'

export default function FeedbackForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [step, setStep] = useState(1)

  const set = (field: keyof FormData, value: string | number) =>
    setForm((p) => ({ ...p, [field]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Feedback submitted:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="card p-10 text-center">
        <div className="font-display font-bold text-electric text-4xl mb-3 font-mono tracking-tightest">✓</div>
        <h3 className="font-display font-bold text-2xl text-ink mb-2 uppercase tracking-tight">Thank you.</h3>
        <p className="text-ink-muted text-sm mb-6">
          Your feedback shapes our next product run.
        </p>
        <div className="inline-flex items-center gap-3 bg-electric-pale border border-electric/30 rounded-md px-5 py-4">
          <span className="font-display font-bold text-electric text-2xl font-mono tracking-tightest">₹100</span>
          <div className="text-left">
            <div className="text-ink font-bold text-xs uppercase tracking-[0.16em]">OFF NEXT ORDER</div>
            <div className="text-ink-muted text-xs mt-0.5">
              Code <span className="font-mono font-bold text-electric bg-bg px-2 py-0.5 rounded">CHAMP100</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-7 space-y-5">
      {step === 1 && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.16em] text-ink-muted mb-2">YOUR NAME *</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => set('name', e.target.value)}
                placeholder="Parent / guardian name"
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.16em] text-ink-muted mb-2">PHONE *</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => set('phone', e.target.value)}
                placeholder="+91 98765 43210"
                className={inputCls}
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.16em] text-ink-muted mb-2">ORDER ID (OPTIONAL)</label>
            <input
              type="text"
              value={form.orderId}
              onChange={(e) => set('orderId', e.target.value)}
              placeholder="SV-20240001"
              className={inputCls}
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.16em] text-ink-muted mb-3">OVERALL RATING *</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => set('rating', star)}
                  className={`text-3xl transition-transform hover:scale-110 ${
                    star <= form.rating ? 'text-electric' : 'text-bg-border'
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => form.name && form.phone && form.rating > 0 && setStep(2)}
            className="btn-electric w-full text-sm"
          >
            NEXT STEP →
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          {[
            { field: 'quality' as const,   label: 'BUILD QUALITY',           options: ['Excellent — premium feel', 'Good — as expected', 'Average', 'Below expectations'] },
            { field: 'comfort' as const,   label: 'COMFORT FOR YOUR CHILD',  options: ['Very comfortable — wears all day', 'Comfortable — 2-3 hours', 'Slightly uncomfortable', 'Uncomfortable'] },
            { field: 'style' as const,     label: 'CHILD\'S OPINION ON STYLE',options: ["Loves it — won't take it off", 'Likes it', "It's okay", "Doesn't like it"] },
            { field: 'recommend' as const, label: 'WOULD YOU RECOMMEND?',    options: ['Definitely yes', 'Probably yes', 'Not sure', 'No'] },
          ].map(({ field, label, options }) => (
            <div key={field}>
              <label className="block text-[10px] font-bold uppercase tracking-[0.16em] text-ink-muted mb-3">{label}</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => set(field, opt)}
                    className={`text-left text-xs px-4 py-3 rounded-md border transition-all ${
                      form[field] === opt
                        ? 'bg-electric-pale border-electric text-ink font-semibold'
                        : 'bg-bg border-bg-border text-ink-muted hover:border-ink/30'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.16em] text-ink-muted mb-2">SUGGESTIONS</label>
            <textarea
              rows={3}
              value={form.improvements}
              onChange={(e) => set('improvements', e.target.value)}
              placeholder="Tell us how we can make this product even better..."
              className={`${inputCls} resize-none`}
            />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex-1 btn-outline text-xs"
            >
              ← BACK
            </button>
            <button type="submit" className="flex-1 btn-electric text-xs">
              SUBMIT · GET ₹100 OFF
            </button>
          </div>
        </div>
      )}
    </form>
  )
}
