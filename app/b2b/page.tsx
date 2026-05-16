import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import B2BEmailGate from '@/components/B2BEmailGate'
import MarqueeAnnouncement from '@/components/MarqueeAnnouncement'

export const metadata: Metadata = {
  title: 'Wholesale Partner Programme — SPORTVIO',
  description: 'Exclusive wholesale pricing and marketing support for SPORTVIO partners. Apply for access.',
}

function B2BHero() {
  return (
    <section className="relative bg-bg pt-8 pb-20 overflow-hidden">
      <Navbar />
      <div className="wrap pt-24">
        <div className="max-w-3xl">
          <div className="label-xs mb-4 text-electric">WHOLESALE PARTNER PROGRAMME</div>
          <h1 className="heading-xl text-5xl sm:text-6xl lg:text-7xl mb-6">
            Your store's most<br />profitable<br />
            <span className="text-electric">square foot.</span>
          </h1>
          <p className="body-lg mb-8 max-w-2xl">
            We supply premium kids' UV400 sunglasses at wholesale — then we help you
            sell every single pair. Marketing support, display fixtures, and sell-through
            guarantees included. No other brand does this.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20become%20a%20SPORTVIO%20wholesale%20partner"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-electric text-sm"
            >
              WHATSAPP FOR CUSTOM QUOTE
            </a>
            <a href="tel:+919876543210" className="btn-outline text-sm">
              CALL B2B TEAM
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function MathSection() {
  return (
    <section className="py-16 bg-bg-soft border-y border-bg-border">
      <div className="wrap-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'YOU BUY AT',  value: '₹250',          sub: 'per unit wholesale' },
            { label: 'YOU SELL AT', value: '₹799–₹1,200',   sub: 'recommended retail' },
            { label: 'YOU EARN',    value: '₹549–₹950',     sub: 'profit per unit' },
          ].map(({ label, value, sub }, i, arr) => (
            <div key={label} className={`text-center md:px-4 ${i < arr.length - 1 ? 'md:border-r md:border-bg-border' : ''}`}>
              <div className="label-xs mb-2">{label}</div>
              <div className="font-display font-bold text-3xl sm:text-4xl text-electric font-mono tracking-tightest">{value}</div>
              <div className="text-ink-muted text-sm mt-1">{sub}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 border border-electric/30 bg-electric-pale rounded-lg p-6 text-center">
          <p className="text-ink text-sm">
            One display rack (under 1 sq. ft.) holding 24 pairs at ₹799 each = up to{' '}
            <span className="text-electric font-display font-bold font-mono">₹12,000+ profit</span> per sell-through.
            Highest revenue per square foot of any kids' category.
          </p>
        </div>
      </div>
    </section>
  )
}

function Tiers() {
  const tiers = [
    {
      name: 'STARTER',
      units: '100 units',
      price: '₹250',
      total: '₹25,000',
      support: '₹10,000 MARKETING SUPPORT',
      highlight: false,
      features: [
        '₹10,000 in digital marketing assets',
        'Branded product posters (print-ready)',
        'WhatsApp broadcast templates',
        'Priority restock access',
        'Dedicated account manager',
        'GST invoice on all orders',
      ],
      cta: 'START WITH 100 UNITS',
    },
    {
      name: 'GROWTH',
      units: '500 units',
      price: '₹260',
      total: '₹1,30,000',
      support: '₹35,000 MARKETING SUPPORT',
      highlight: true,
      features: [
        '₹35,000 in marketing support',
        'Custom-branded display collateral',
        'Instagram Reel content for your store',
        'In-store standee + poster printing',
        'Sell-through consultation call',
        'Priority restock + new SKU first access',
      ],
      cta: 'PARTNER — 500 UNITS',
    },
    {
      name: 'ELITE',
      units: '1,000 units',
      price: '₹270',
      total: '₹2,70,000',
      support: 'SELL-THROUGH GUARANTEE',
      highlight: false,
      features: [
        'Guaranteed help selling 400–500 units',
        'Premium display fixture (free)',
        'Full in-store branding setup',
        'Co-branded Instagram campaigns',
        '₹70,000+ marketing investment from us',
        'Dedicated field support visit',
      ],
      cta: 'BECOME ELITE PARTNER',
    },
  ]

  return (
    <section className="py-20 sm:py-24 bg-bg">
      <div className="wrap">
        <div className="text-center mb-14">
          <div className="label-xs mb-3 text-electric">WHOLESALE PRICING</div>
          <h2 className="heading-lg text-4xl sm:text-5xl">
            Choose your<br />
            <span className="text-electric">partner tier.</span>
          </h2>
          <p className="mt-5 text-ink-muted text-sm max-w-xl mx-auto">
            All prices exclusive of GST. GST invoice provided on every order. 50% advance, 50% on dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map(t => (
            <div
              key={t.name}
              className={`rounded-lg p-7 transition-all border ${
                t.highlight
                  ? 'bg-ink border-ink shadow-electric'
                  : 'card hover:border-electric/30'
              }`}
            >
              {t.highlight && (
                <div className="bg-electric text-white text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 rounded inline-block mb-4">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-6">
                <div className={`text-[10px] font-bold uppercase tracking-[0.18em] mb-2 ${t.highlight ? 'text-white/50' : 'text-ink-light'}`}>{t.name}</div>
                <div className={`font-display font-bold text-2xl ${t.highlight ? 'text-white' : 'text-ink'}`}>{t.units}</div>
                <div className="flex items-baseline gap-2 mt-3">
                  <span className={`font-display font-bold text-4xl font-mono tracking-tightest ${t.highlight ? 'text-electric' : 'text-electric'}`}>{t.price}</span>
                  <span className={`text-sm ${t.highlight ? 'text-white/60' : 'text-ink-muted'}`}>/ unit</span>
                </div>
                <div className={`text-xs mt-1 font-mono ${t.highlight ? 'text-white/60' : 'text-ink-muted'}`}>TOTAL: {t.total}</div>
              </div>

              <div className={`text-[11px] font-bold uppercase tracking-[0.14em] mb-5 ${t.highlight ? 'text-electric' : 'text-forest'}`}>
                ⊕ {t.support}
              </div>

              <ul className={`space-y-2 mb-7 ${t.highlight ? '' : ''}`}>
                {t.features.map(f => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${t.highlight ? 'text-white/70' : 'text-ink-muted'}`}>
                    <span className="text-electric flex-shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/919876543210?text=Hi%2C%20I%20want%20the%20${t.name}%20wholesale%20package%20(${t.units})`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center font-bold py-3.5 rounded-md text-xs uppercase tracking-[0.16em] transition-all ${
                  t.highlight
                    ? 'bg-electric hover:bg-electric-light text-white'
                    : 'bg-bg-soft border border-bg-border hover:border-electric/40 text-ink'
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhoIsThisFor() {
  const segments = [
    { tag: '◉', title: 'OPTICAL SHOPS',      desc: 'Add a high-margin sports category to your existing walk-in customers.' },
    { tag: '◉', title: 'SPORTS ACADEMIES',   desc: 'Supply gear your athletes actually need. Co-branded options from 50 units.' },
    { tag: '◉', title: 'SCHOOLS & PTAs',     desc: 'Sports day prizes, annual day gifts, canteen stocking. GST invoice available.' },
    { tag: '◉', title: 'KIDS BOUTIQUES',     desc: 'A premium eyewear range that completes your active-kids product mix.' },
    { tag: '◉', title: 'ONLINE RESELLERS',   desc: 'Sell on Amazon, Meesho, or your own D2C. Catalogue + A+ content provided.' },
    { tag: '◉', title: 'MULTI-BRAND STORES', desc: '200%+ gross margin. Better than most FMCG categories you currently stock.' },
  ]

  return (
    <section className="py-20 sm:py-24 bg-bg-soft border-y border-bg-border">
      <div className="wrap">
        <div className="text-center mb-12">
          <div className="label-xs mb-3 text-electric">WHO THIS IS FOR</div>
          <h2 className="heading-lg text-4xl sm:text-5xl">
            Built for the<br />
            <span className="text-electric">right partners.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {segments.map(({ tag, title, desc }) => (
            <div key={title} className="card p-6 hover:border-electric/30 transition-all">
              <div className="font-display font-bold text-electric text-2xl mb-3 font-mono">{tag}</div>
              <h3 className="label-sm mb-2">{title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { n: '01', title: 'WHATSAPP OR CALL US',  desc: "Tell us about your store and which tier you're interested in. We respond within 2 hours." },
    { n: '02', title: 'GET A FREE SAMPLE KIT',desc: 'We send 2–3 pairs so you can feel the quality. Sample cost is refunded on your first order.' },
    { n: '03', title: 'PLACE YOUR ORDER',     desc: '50% advance, 50% on dispatch. We ship within 5 working days with full tracking.' },
    { n: '04', title: 'WE SET YOU UP',        desc: 'Display materials, product images, price cards, and social content — all delivered.' },
    { n: '05', title: 'SELL & RESTOCK',       desc: 'Priority restock for partners. Monthly check-in call from our team to help you sell.' },
  ]

  return (
    <section className="py-20 sm:py-24 bg-bg">
      <div className="wrap-md">
        <div className="text-center mb-12">
          <div className="label-xs mb-3 text-electric">HOW IT WORKS</div>
          <h2 className="heading-lg text-4xl sm:text-5xl">
            5 steps. <span className="text-electric">No friction.</span>
          </h2>
        </div>
        <div className="space-y-3">
          {steps.map(({ n, title, desc }) => (
            <div key={n} className="card p-6 flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-ink rounded flex items-center justify-center">
                <span className="text-electric font-display font-bold text-lg font-mono">{n}</span>
              </div>
              <div className="pt-2">
                <h3 className="label-sm mb-1">{title}</h3>
                <p className="text-ink-muted text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function B2BCTA() {
  return (
    <section className="py-20 bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 spec-stripe opacity-30 pointer-events-none" />
      <div className="wrap-md text-center relative">
        <div className="label-xs mb-3 text-electric">READY TO PARTNER</div>
        <h2 className="heading-lg text-white text-4xl sm:text-5xl mb-4">
          Let's build a profitable<br />
          <span className="text-electric">category in your store.</span>
        </h2>
        <p className="text-white/60 text-base mb-8 max-w-lg mx-auto">
          Our B2B team responds within 2 hours on WhatsApp. Let's discuss your store.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20become%20a%20SPORTVIO%20partner"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-electric text-sm w-full sm:w-auto justify-center"
          >
            WHATSAPP US NOW
          </a>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/25 hover:border-white text-white font-bold py-3 px-7 rounded-md transition-all duration-150 w-full sm:w-auto text-sm uppercase tracking-[0.16em]"
          >
            +91 98765 43210
          </a>
        </div>
        <p className="mt-6 text-white/40 text-[10px] font-bold uppercase tracking-[0.16em]">MON–SAT · 10AM–7PM IST · B2B@SPORTVIO.IN</p>
      </div>
    </section>
  )
}

function B2BFooter() {
  return (
    <footer className="bg-bg-soft border-t border-bg-border py-8">
      <div className="wrap flex flex-col sm:flex-row items-center justify-between gap-3">
        <Link href="/" className="text-ink-muted hover:text-electric text-[10px] font-bold uppercase tracking-[0.16em] transition-colors">
          ← BACK TO CONSUMER SITE
        </Link>
        <p className="text-ink-light text-[10px] font-bold uppercase tracking-[0.16em]">© 2026 SPORTVIO · WHOLESALE PARTNER PROGRAMME</p>
      </div>
    </footer>
  )
}

export default function B2BPage() {
  return (
    <B2BEmailGate>
      <MarqueeAnnouncement />
      <B2BHero />
      <MathSection />
      <Tiers />
      <WhoIsThisFor />
      <HowItWorks />
      <B2BCTA />
      <B2BFooter />
    </B2BEmailGate>
  )
}
