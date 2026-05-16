'use client'

import { useEffect, useState } from 'react'

type Purchase = { name: string; city: string; product: string; mins: number }

const purchases: Purchase[] = [
  { name: 'Priya M.',    city: 'Bengaluru', product: 'XPLR Red',         mins: 2 },
  { name: 'Rajan K.',    city: 'Mumbai',    product: '2 pairs · Ryker',  mins: 5 },
  { name: 'Ananya S.',   city: 'Chennai',   product: 'Night Vision',     mins: 8 },
  { name: 'Deepak R.',   city: 'Pune',      product: 'Ryker Green',      mins: 11 },
  { name: 'Kavitha N.',  city: 'Delhi',     product: '3 pairs',          mins: 14 },
  { name: 'Arjun T.',    city: 'Hyderabad', product: 'XPLR Red',         mins: 19 },
  { name: 'Reena P.',    city: 'Kochi',     product: 'Ryker + case',     mins: 23 },
  { name: 'Vikram J.',   city: 'Ahmedabad', product: 'Night Vision',     mins: 28 },
  { name: 'Meera S.',    city: 'Jaipur',    product: 'XPLR Red',         mins: 31 },
  { name: 'Karan P.',    city: 'Surat',     product: '2 pairs',          mins: 36 },
]

export default function RecentPurchaseToast() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Initial delay before first toast
    const initial = setTimeout(() => setVisible(true), 4500)
    return () => clearTimeout(initial)
  }, [])

  useEffect(() => {
    if (!visible) {
      // After 4.5s of "hidden", show next purchase
      const t = setTimeout(() => {
        setIdx(i => (i + 1) % purchases.length)
        setVisible(true)
      }, 4500)
      return () => clearTimeout(t)
    } else {
      // Show for 5.5s, then hide
      const t = setTimeout(() => setVisible(false), 5500)
      return () => clearTimeout(t)
    }
  }, [visible])

  const p = purchases[idx]

  return (
    <div
      className={`fixed bottom-20 sm:bottom-6 left-4 sm:left-6 z-30 max-w-[300px]
        ${visible ? 'animate-slide-up' : 'animate-slide-down pointer-events-none'}`}
    >
      <div className="bg-white border border-bg-border rounded-lg shadow-card-lg p-3.5 flex items-center gap-3">
        <div className="w-9 h-9 bg-electric-pale border border-electric/30 rounded flex items-center justify-center flex-shrink-0">
          <span className="live-dot" />
        </div>
        <div className="min-w-0">
          <div className="text-ink text-xs font-bold leading-tight truncate">
            {p.name} from {p.city}
          </div>
          <div className="text-ink-muted text-[11px] mt-0.5 truncate">
            bought {p.product}
          </div>
        </div>
        <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink-light font-mono flex-shrink-0">
          {p.mins}M
        </div>
      </div>
    </div>
  )
}
