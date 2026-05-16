import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Track Your Order — SPORTVIO',
  description: 'Track your SPORTVIO order. Enter your order ID or phone number to see real-time shipping status.',
}

export default function TrackPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 pt-28 pb-24">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-4">
                Order Tracking
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                Track Your <span className="gradient-text">Order</span>
              </h1>
              <p className="mt-4 text-slate-400">
                Enter your Order ID or registered phone number to see your delivery status.
              </p>
            </div>

            {/* Tracking form */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Order ID or Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. SV-20240001 or +91 98765 43210"
                    className="w-full bg-slate-800 border border-slate-700 focus:border-orange-500 rounded-xl px-4 py-4 text-white placeholder-slate-500 outline-none transition-colors text-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full text-base py-4"
                >
                  Track My Order →
                </button>
              </form>
            </div>

            {/* Example status card (static UI for now) */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-8 opacity-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-bold text-sm uppercase tracking-wider">In Transit</span>
                <span className="text-slate-500 text-sm ml-auto">Order #SV-20240001</span>
              </div>
              <div className="space-y-6">
                {[
                  { status: 'Order Placed', date: 'May 15, 2026 · 10:32 AM', done: true },
                  { status: 'Payment Confirmed', date: 'May 15, 2026 · 10:35 AM', done: true },
                  { status: 'Packed & Dispatched', date: 'May 16, 2026 · 2:00 PM', done: true },
                  { status: 'Out for Delivery', date: 'Expected May 18, 2026', done: false },
                  { status: 'Delivered', date: 'Estimated May 18–19', done: false },
                ].map(({ status, date, done }, i) => (
                  <div key={status} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${done ? 'bg-orange-500 border-orange-500' : 'border-slate-600'}`}>
                        {done && <span className="text-white text-xs">✓</span>}
                      </div>
                      {i < 4 && <div className={`w-0.5 h-8 mt-1 ${done ? 'bg-orange-500/50' : 'bg-slate-700'}`} />}
                    </div>
                    <div>
                      <div className={`font-bold ${done ? 'text-white' : 'text-slate-500'}`}>{status}</div>
                      <div className={`text-sm ${done ? 'text-slate-400' : 'text-slate-600'}`}>{date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-slate-500 text-xs text-center mb-12">^ Example tracking status. Enter your order ID above to see live status.</p>

            {/* Help section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="text-white font-black mb-2">WhatsApp Support</h3>
                <p className="text-slate-400 text-sm mb-4">Can't find your order? Message us on WhatsApp and we'll track it for you instantly.</p>
                <a
                  href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20help%20tracking%20my%20order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 text-sm font-bold transition-colors"
                >
                  Chat on WhatsApp →
                </a>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="text-white font-black mb-2">Call Us</h3>
                <p className="text-slate-400 text-sm mb-4">Our team is available Mon–Sat, 10am–7pm. We'll get your order status in under 2 minutes.</p>
                <a href="tel:+919876543210" className="text-orange-400 hover:text-orange-300 text-sm font-bold transition-colors">
                  +91 98765 43210 →
                </a>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-slate-950 border-t border-white/10 py-8">
        <div className="section-container text-center">
          <p className="text-slate-500 text-sm">© 2026 SPORTVIO. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
