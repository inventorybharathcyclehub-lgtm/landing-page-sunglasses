'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function StickyBuyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 680)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden
        bg-warm-white/98 backdrop-blur-md border-t border-warm-border shadow-card-lg
        transition-transform duration-300 ease-out
        ${visible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="flex items-center gap-3 px-5 py-3.5">
        <div className="flex-1">
          <div className="flex items-baseline gap-2">
            <span className="text-ink-light text-xs line-through">₹1,800</span>
            <span className="text-ink font-bold text-xl font-serif">₹899</span>
          </div>
          <div className="text-forest-light text-xs font-medium">Save ₹901 · Free delivery · COD</div>
        </div>
        <Link href="#order-section" className="btn-primary text-sm py-3 px-6 flex-shrink-0">
          Buy Now →
        </Link>
      </div>
    </div>
  )
}
