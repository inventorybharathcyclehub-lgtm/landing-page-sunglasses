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
      <main className="min-h-screen bg-bg pt-28 pb-20">
        <div className="wrap-sm">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="label-xs mb-3 text-electric">ORDER TRACKING</div>
            <h1 className="heading-xl text-4xl sm:text-5xl mb-4">
              Track your<br />
              <span className="text-electric">order.</span>
            </h1>
            <p className="body-md max-w-md mx-auto">
              Enter your Order ID or registered phone number to see your delivery status.
            </p>
          </div>

          {/* Tracking form */}
          <div className="card p-7 mb-8">
            <form className="space-y-5">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.16em] text-ink-muted mb-2">
                  ORDER ID OR PHONE NUMBER
                </label>
                <input
                  type="text"
                  placeholder="e.g. SV-20240001 or +91 98765 43210"
                  className="w-full bg-bg border border-bg-border focus:border-electric rounded-md px-4 py-3.5 text-ink placeholder-ink-light outline-none transition-colors text-sm"
                />
              </div>
              <button
                type="submit"
                className="btn-electric w-full text-sm justify-center"
              >
                TRACK MY ORDER →
              </button>
            </form>
          </div>

          {/* Example status card */}
          <div className="card p-7 mb-3 opacity-70">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-bg-border">
              <span className="live-dot" />
              <span className="text-forest text-[10px] font-bold uppercase tracking-[0.16em]">IN TRANSIT</span>
              <span className="text-ink-light text-[10px] font-bold uppercase tracking-[0.16em] ml-auto font-mono">ORDER #SV-20240001</span>
            </div>
            <div className="space-y-5">
              {[
                { status: 'Order Placed',        date: 'May 15, 2026 · 10:32 AM', done: true },
                { status: 'Payment Confirmed',   date: 'May 15, 2026 · 10:35 AM', done: true },
                { status: 'Packed & Dispatched', date: 'May 16, 2026 · 2:00 PM',  done: true },
                { status: 'Out for Delivery',    date: 'Expected May 18, 2026',   done: false },
                { status: 'Delivered',           date: 'Estimated May 18–19',     done: false },
              ].map(({ status, date, done }, i, arr) => (
                <div key={status} className="flex gap-4 items-start">
                  <div className="flex flex-col items-center">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${done ? 'bg-electric border-electric' : 'border-bg-border bg-bg'}`}>
                      {done && <span className="text-white text-[10px] font-bold">✓</span>}
                    </div>
                    {i < arr.length - 1 && <div className={`w-0.5 h-8 mt-1 ${done ? 'bg-electric/40' : 'bg-bg-border'}`} />}
                  </div>
                  <div>
                    <div className={`text-sm font-semibold ${done ? 'text-ink' : 'text-ink-light'}`}>{status}</div>
                    <div className={`text-xs font-mono ${done ? 'text-ink-muted' : 'text-ink-light'}`}>{date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-ink-light text-[10px] uppercase tracking-[0.14em] text-center mb-10 font-bold">^ EXAMPLE STATUS · ENTER ORDER ID ABOVE FOR LIVE</p>

          {/* Help section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="card p-6">
              <div className="font-display font-bold text-electric text-2xl mb-3 font-mono">⊕</div>
              <h3 className="label-sm mb-2">WHATSAPP SUPPORT</h3>
              <p className="text-ink-muted text-sm mb-4">Can't find your order? Message us on WhatsApp and we'll track it instantly.</p>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20help%20tracking%20my%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="text-electric hover:text-electric-light text-[11px] font-bold uppercase tracking-[0.16em] transition-colors"
              >
                CHAT ON WHATSAPP →
              </a>
            </div>
            <div className="card p-6">
              <div className="font-display font-bold text-electric text-2xl mb-3 font-mono">◉</div>
              <h3 className="label-sm mb-2">CALL US</h3>
              <p className="text-ink-muted text-sm mb-4">Mon–Sat, 10am–7pm. We'll get your order status in under 2 minutes.</p>
              <a href="tel:+919876543210" className="text-electric hover:text-electric-light text-[11px] font-bold uppercase tracking-[0.16em] transition-colors font-mono">
                +91 98765 43210 →
              </a>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/" className="text-ink-muted hover:text-electric text-[10px] font-bold uppercase tracking-[0.16em] transition-colors">
              ← BACK TO HOME
            </Link>
          </div>
        </div>
      </main>
      <footer className="bg-bg-soft border-t border-bg-border py-8">
        <div className="wrap text-center">
          <p className="text-ink-light text-[10px] font-bold uppercase tracking-[0.16em]">© 2026 SPORTVIO · ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </>
  )
}
