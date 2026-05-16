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

export default function FeedbackForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [step, setStep] = useState(1)

  const set = (field: keyof FormData, value: string | number) =>
    setForm((p) => ({ ...p, [field]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production: POST to /api/feedback
    console.log('Feedback submitted:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-black text-white mb-2">Thank You!</h3>
        <p className="text-slate-400 mb-6">
          Your feedback helps us build better products for your champion.
        </p>
        <div className="inline-flex items-center gap-3 bg-orange-500/20 border border-orange-500/40 rounded-2xl px-6 py-4">
          <span className="text-3xl">🎁</span>
          <div className="text-left">
            <div className="text-orange-400 font-black text-lg">₹100 OFF Coupon</div>
            <div className="text-slate-300 text-sm">Use code <span className="font-mono font-bold text-white bg-slate-800 px-2 py-0.5 rounded">CHAMP100</span> on your next order</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {step === 1 && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Your Name *</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => set('name', e.target.value)}
                placeholder="Parent / Guardian name"
                className="w-full bg-slate-800 border border-slate-700 focus:border-orange-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Phone Number *</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => set('phone', e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full bg-slate-800 border border-slate-700 focus:border-orange-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Order ID (optional)</label>
            <input
              type="text"
              value={form.orderId}
              onChange={(e) => set('orderId', e.target.value)}
              placeholder="e.g. SV-20240001"
              className="w-full bg-slate-800 border border-slate-700 focus:border-orange-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors"
            />
          </div>

          {/* Star rating */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-3">Overall Rating *</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => set('rating', star)}
                  className={`text-3xl transition-transform hover:scale-110 ${
                    star <= form.rating ? 'opacity-100' : 'opacity-30'
                  }`}
                >
                  ⭐
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => form.name && form.phone && form.rating > 0 && setStep(2)}
            className="btn-primary w-full"
          >
            Next Step →
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          {[
            { field: 'quality' as const, label: 'How is the build quality?', options: ['Excellent — premium feel', 'Good — as expected', 'Average', 'Below expectations'] },
            { field: 'comfort' as const, label: "How comfortable is it for your child?", options: ['Very comfortable — wears all day', 'Comfortable — wears for 2-3 hours', 'Slightly uncomfortable', 'Uncomfortable'] },
            { field: 'style' as const, label: 'How does your child rate the style?', options: ['Loves it — won\'t take it off', 'Likes it', 'It\'s okay', 'Doesn\'t like it'] },
            { field: 'recommend' as const, label: 'Would you recommend SPORTVIO to others?', options: ['Definitely yes', 'Probably yes', 'Not sure', 'No'] },
          ].map(({ field, label, options }) => (
            <div key={field}>
              <label className="block text-sm font-semibold text-slate-300 mb-3">{label}</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => set(field, opt)}
                    className={`text-left text-sm px-4 py-3 rounded-xl border transition-all ${
                      form[field] === opt
                        ? 'bg-orange-500/20 border-orange-500 text-orange-400 font-semibold'
                        : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">What improvements would you suggest?</label>
            <textarea
              rows={3}
              value={form.improvements}
              onChange={(e) => set('improvements', e.target.value)}
              placeholder="Tell us how we can make this product even better for your child..."
              className="w-full bg-slate-800 border border-slate-700 focus:border-orange-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors resize-none"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex-1 btn-outline"
            >
              ← Back
            </button>
            <button type="submit" className="flex-1 btn-primary">
              Submit & Get ₹100 Off 🎁
            </button>
          </div>
        </div>
      )}
    </form>
  )
}
