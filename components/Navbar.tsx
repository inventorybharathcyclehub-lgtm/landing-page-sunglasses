'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-white/10 shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm">S</span>
            </div>
            <span className="text-white font-black text-xl tracking-tight">
              SPORT<span className="text-orange-500">VIO</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#benefits" className="text-slate-300 hover:text-orange-400 text-sm font-medium transition-colors">
              Why Us
            </Link>
            <Link href="/#products" className="text-slate-300 hover:text-orange-400 text-sm font-medium transition-colors">
              Shop
            </Link>
            <Link href="/#bulk-orders" className="text-slate-300 hover:text-orange-400 text-sm font-medium transition-colors">
              Bulk Orders
            </Link>
            <Link href="/track" className="text-slate-300 hover:text-orange-400 text-sm font-medium transition-colors">
              Track Order
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              📞 Call Us
            </a>
            <Link href="/#products" className="btn-primary text-sm py-2.5 px-6">
              Shop ₹899 →
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-0.5 bg-white mt-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-white mt-1.5 transition-all ${menuOpen ? '-rotate-45 -translate-y-3' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 py-4 space-y-4 bg-slate-950/98 backdrop-blur-md">
            <Link href="/#benefits" className="block px-4 py-2 text-slate-300 hover:text-orange-400" onClick={() => setMenuOpen(false)}>
              Why Us
            </Link>
            <Link href="/#products" className="block px-4 py-2 text-slate-300 hover:text-orange-400" onClick={() => setMenuOpen(false)}>
              Shop
            </Link>
            <Link href="/#bulk-orders" className="block px-4 py-2 text-slate-300 hover:text-orange-400" onClick={() => setMenuOpen(false)}>
              Bulk Orders
            </Link>
            <Link href="/track" className="block px-4 py-2 text-slate-300 hover:text-orange-400" onClick={() => setMenuOpen(false)}>
              Track Order
            </Link>
            <div className="px-4 pt-2">
              <Link href="/#products" className="btn-primary w-full text-center text-sm py-3" onClick={() => setMenuOpen(false)}>
                Shop Now — ₹899
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
