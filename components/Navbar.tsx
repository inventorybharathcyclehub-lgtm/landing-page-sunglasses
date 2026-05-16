'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar({ dark = false }: { dark?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'PRODUCT',   href: '/#order-section' },
    { label: 'SPECS',     href: '/#specs'         },
    { label: 'REVIEWS',   href: '/#reviews'       },
    { label: 'B2B',       href: '/b2b'            },
  ]

  const solidBg  = dark ? 'bg-ink/95'        : 'bg-bg/95'
  const textCol  = dark ? 'text-white/70 hover:text-white' : 'text-ink-muted hover:text-ink'
  const logoText = dark ? 'text-white'       : 'text-ink'
  const barColor = dark ? 'bg-white'         : 'bg-ink'

  return (
    <nav
      className={`fixed top-8 left-0 right-0 z-40 transition-all duration-200
        ${scrolled
          ? `${solidBg} backdrop-blur-xl border-b border-bg-border`
          : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="wrap">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-electric rounded flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">S</span>
            </div>
            <span className={`${logoText} font-display font-bold text-lg tracking-tightest`}>
              SPORT<span className="text-electric">VIO</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`${textCol} text-[11px] font-bold uppercase tracking-[0.16em] transition-colors`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/919876543210"
              target="_blank" rel="noopener noreferrer"
              className={`${textCol} text-[11px] font-bold uppercase tracking-[0.16em] transition-colors`}
            >
              WHATSAPP
            </a>
            <Link href="#order-section" className="btn-electric text-xs py-2.5 px-5">
              BUY · ₹899
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block w-5 h-0.5 transition-all ${barColor} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 transition-all ${barColor} ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 transition-all ${barColor} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg border-t border-bg-border">
          <div className="wrap py-5 space-y-1">
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-ink text-[11px] font-bold uppercase tracking-[0.16em] border-b border-bg-border"
              >
                {label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-outline w-full text-xs">
                WHATSAPP US
              </a>
              <Link href="#order-section" className="btn-electric w-full text-xs" onClick={() => setMenuOpen(false)}>
                BUY NOW · ₹899
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
