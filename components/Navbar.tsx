'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar({ announcementOffset = true }: { announcementOffset?: boolean }) {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Why Us',      href: '/#why'      },
    { label: 'Product',     href: '/#product'  },
    { label: 'Reviews',     href: '/#reviews'  },
    { label: 'B2B Orders',  href: '/b2b'       },
  ]

  return (
    <nav
      className={`fixed left-0 right-0 z-40 transition-all duration-300
        ${announcementOffset ? 'top-9' : 'top-0'}
        ${scrolled
          ? 'bg-ink/95 backdrop-blur-xl border-b border-ink-border shadow-dark'
          : 'bg-transparent'
        }`}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center shadow-gold-sm">
              <span className="text-ink font-black text-sm">S</span>
            </div>
            <span className="text-cream-light font-black text-lg tracking-tight">
              SPORT<span className="text-gold">VIO</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-cream-muted hover:text-cream-light text-sm font-medium transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.524 5.849L.057 23.535a.5.5 0 00.601.601l5.782-1.523A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6a9.576 9.576 0 01-4.861-1.323l-.349-.207-3.614.952.952-3.516-.228-.362A9.576 9.576 0 012.4 12C2.4 6.699 6.699 2.4 12 2.4S21.6 6.699 21.6 12 17.301 21.6 12 21.6z"/>
              </svg>
              WhatsApp
            </a>
            <Link href="#order" className="btn-gold text-sm py-2.5 px-6">
              Buy Now — ₹899
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block w-5 h-0.5 bg-cream transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-cream transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-cream transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-ink-surface border-t border-ink-border">
          <div className="container-xl py-5 space-y-1">
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-cream-muted hover:text-gold font-medium border-b border-ink-border/60 transition-colors"
              >
                {label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full justify-center"
              >
                💬 WhatsApp Us
              </a>
              <Link href="#order" className="btn-gold w-full justify-center" onClick={() => setMenuOpen(false)}>
                Buy Now — ₹899
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
