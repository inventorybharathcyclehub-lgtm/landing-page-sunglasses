'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar({ dark = false }: { dark?: boolean }) {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Why Us',    href: '/#why'     },
    { label: 'Products',  href: '/#products' },
    { label: 'Reviews',   href: '/#reviews'  },
    { label: 'B2B',       href: '/b2b'       },
  ]

  const baseBg   = dark ? 'bg-ink'        : 'bg-warm-white'
  const solidBg  = dark ? 'bg-ink/98'     : 'bg-warm-white/98'
  const textCol  = dark ? 'text-warm-white/70 hover:text-warm-white' : 'text-ink-muted hover:text-ink'
  const logoText = dark ? 'text-warm-white' : 'text-ink'

  return (
    <nav
      className={`fixed top-9 left-0 right-0 z-40 transition-all duration-300
        ${scrolled
          ? `${solidBg} backdrop-blur-xl border-b border-warm-border shadow-card`
          : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="wrap">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 bg-ink rounded-lg flex items-center justify-center">
              <span className="text-warm-white font-bold text-sm font-serif">S</span>
            </div>
            <span className={`${logoText} font-serif font-bold text-lg tracking-tight`}>
              SPORT<span className="text-gold">VIO</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <Link key={label} href={href} className={`${textCol} text-sm font-medium transition-colors`}>
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/919876543210"
              target="_blank" rel="noopener noreferrer"
              className={`${textCol} text-sm font-medium transition-colors flex items-center gap-1.5`}
            >
              💬 WhatsApp
            </a>
            <Link href="#order-section" className="btn-primary text-sm py-2.5 px-6">
              Buy Now — ₹899
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block w-5 h-0.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2 bg-ink' : 'bg-ink'}`} />
            <span className={`block w-5 h-0.5 transition-all ${menuOpen ? 'opacity-0 bg-ink' : 'bg-ink'}`} />
            <span className={`block w-5 h-0.5 transition-all ${menuOpen ? '-rotate-45 -translate-y-2 bg-ink' : 'bg-ink'}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-warm-white border-t border-warm-border">
          <div className="wrap py-5 space-y-1">
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-ink-muted hover:text-ink font-medium border-b border-warm-border transition-colors"
              >
                {label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-outline w-full">
                💬 WhatsApp Us
              </a>
              <Link href="#order-section" className="btn-primary w-full" onClick={() => setMenuOpen(false)}>
                Buy Now — ₹899
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
