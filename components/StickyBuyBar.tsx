'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function StickyBuyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Show after user scrolls past the hero CTA (~700px)
      setVisible(window.scrollY > 700)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden
        bg-ink-surface/95 backdrop-blur-md border-t border-ink-border
        transition-transform duration-300 ease-out
        ${visible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="flex-1">
          <div className="flex items-baseline gap-2">
            <span className="text-cream-muted text-xs line-through">₹1,800</span>
            <span className="text-cream font-black text-xl">₹899</span>
          </div>
          <div className="text-gold text-xs font-semibold">You save ₹901 · Free delivery</div>
        </div>
        <Link
          href="#order"
          className="btn-gold text-sm py-3 px-6 flex-shrink-0"
        >
          Buy Now →
        </Link>
      </div>
    </div>
  )
}
