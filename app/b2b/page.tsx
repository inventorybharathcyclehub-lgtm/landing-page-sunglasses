import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import B2BEmailGate from '@/components/B2BEmailGate'

export const metadata: Metadata = {
  title: 'Wholesale Partner Programme — SPORTVIO',
  description: 'Exclusive wholesale pricing and marketing support for SPORTVIO partners. Apply for access.',
}

function B2BHero() {
  return (
    <section className="relative bg-warm-white pt-9 pb-20 overflow-hidden">
      <Navbar />
      <div className="wrap pt-24">
        <div className="max-w-3xl">
          <span className="pill mb-6 inline-flex">Wholesale Partner Programme</span>
          <h1 className="heading-xl text-5xl sm:text-6xl mb-6">
            Your store's most profitable<br />
            <span className="text-gold-shine">square foot.</span>
          </h1>
          <p className="body-lg mb-8 max-w-2xl">
            We supply premium kids' UV400 sunglasses at wholesale — then we help you
            sell every single pair. Marketing support, display fixtures, and sell-through
            guarantees included. No other brand does this.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20become%20a%20SPORTVIO%20wholesale%20partner"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              💬 WhatsApp for Custom Quote
            </a>
            <a href="tel:+919876543210" className="btn-outline">
              📞 Call B2B Team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function MathSection() {
  return (
    <section className="py-16 bg-warm-cream border-y border-warm-border">
      <div className="wrap-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { label: 'You buy at', value: '₹250', sub: 'per unit wholesale' },
            { label: 'You sell at', value: '₹799–₹1,200', sub: 'recommended retail' },
            { label: 'You earn', value: '₹549–₹950', sub: 'profit per unit' },
          ].map(({ label, value, sub }) => (
            <div key={label} className="space-y-1">
              <div className="text-ink-light text-sm uppercase tracking-widest">{label}</div>
              <div className="font-serif font-bold text-4xl sm:text-5xl text-gold-shine">{value}</div>
              <div className="text-ink-muted text-sm">{sub}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 bg-gold-pale border border-gold/20 rounded-2xl p-6 text-center">
          <p className="text-ink">
            One display rack (under 1 sq. ft.) holding 24 pairs at ₹799 each = up to{' '}
            <span className="text-gold font-bold">₹12,000+ profit</span> per sell-through.
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
      name: 'Starter',
      units: '100 units',
      price: '₹250',
      total: '₹25,000',
      support: '₹10,000 Marketing Support',
      highlight: false,
      features: [
        '₹10,000 in digital marketing assets',
        'Branded product posters (print-ready)',
        'WhatsApp broadcast templates',
        'Priority restock access',
        'Dedicated account manager',
        'GST invoice on all orders',
      ],
      cta: 'Start with 100 Units',
    },
    {
      name: 'Growth',
      units: '500 units',
      price: '₹260',
      total: '₹1,30,000',
      support: '₹35,000 Marketing Support',
      highlight: true,
      features: [
        '₹35,000 in marketing support',
        'Custom-branded display collateral',
        'Instagram Reel content for your store',
        'In-store standee + poster printing',
        'Sell-through consultation call',
        'Priority restock + new SKU first access',
      ],
      cta: 'Partner — 500 Units',
    },
    {
      name: 'Elite',
      units: '1,000 units',
      price: '₹270',
      total: '₹2,70,000',
      support: 'Sell-Through Guarantee',
      highlight: false,
      features: [
        'Guaranteed help selling 400–500 units',
        'Premium display fixture (free)',
        'Full in-store branding setup',
        'Co-branded Instagram campaigns',
        '₹70,000+ marketing investment from us',
        'Dedicated field support visit',
      ],
      cta: 'Become Elite Partner',
    },
  ]

  return (
    <section className="py-24 bg-warm-white">
      <div className="wrap">
        <div className="text-center mb-14">
          <span className="pill mb-4 inline-flex">Wholesale Pricing</span>
          <h2 className="heading-lg text-4xl sm:text-5xl">
            Choose your <span className="text-gold-shine">partner tier.</span>
          </h2>
          <p className="mt-4 text-ink-muted max-w-xl mx-auto">
            All prices exclusive of GST. GST invoice provided on every order. 50% advance, 50% on dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {tiers.map(t => (
            <div
              key={t.name}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                t.highlight
                  ? 'bg-gold-pale border-2 border-gold/40 shadow-gold'
                  : 'card hover:border-gold/30'
              }`}
            >
              {t.highlight && (
                <div className="bg-gold text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <div className="text-ink-light text-xs uppercase tracking-widest mb-1">{t.name}</div>
                <div className="text-ink font-bold text-2xl">{t.units}</div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-serif font-bold text-4xl text-gold">{t.price}</span>
                  <span className="text-ink-muted text-sm">/ unit</span>
                </div>
                <div className="text-ink-muted text-sm mt-1">Total: {t.total}</div>
              </div>

              <div className={`text-sm font-bold mb-5 ${t.highlight ? 'text-gold-deep' : 'text-forest'}`}>
                🎁 {t.support}
              </div>

              <ul className="space-y-2.5 mb-8">
                {t.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-muted">
                    <span className="text-gold flex-shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/919876543210?text=Hi%2C%20I%20want%20the%20${t.name}%20wholesale%20package%20(${t.units})`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center font-bold py-3.5 rounded-xl transition-all ${
                  t.highlight
                    ? 'bg-gold hover:bg-gold-light text-white shadow-gold'
                    : 'bg-warm-cream border border-warm-border hover:border-gold/30 text-ink hover:text-gold'
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
    { icon: '👓', title: 'Optical Shops', desc: 'Add a high-margin sports category to your existing walk-in customers.' },
    { icon: '🏏', title: 'Sports Academies', desc: 'Supply gear your athletes actually need. Co-branded options from 50 units.' },
    { icon: '🏫', title: 'Schools & PTAs', desc: 'Sports day prizes, annual day gifts, canteen stocking. GST invoice available.' },
    { icon: '🛍️', title: 'Kids Boutiques', desc: 'A premium eyewear range that completes your active-kids product mix.' },
    { icon: '📦', title: 'Online Resellers', desc: 'Sell on Amazon, Meesho, or your own D2C. We provide catalogue + A+ content.' },
    { icon: '🏪', title: 'Multi-Brand Stores', desc: '200%+ gross margin. Better than most FMCG categories you currently stock.' },
  ]

  return (
    <section className="py-24 bg-warm-cream border-y border-warm-border">
      <div className="wrap">
        <div className="text-center mb-14">
          <h2 className="heading-lg text-4xl sm:text-5xl">
            Who this programme is <span className="text-gold-shine">built for.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {segments.map(({ icon, title, desc }) => (
            <div key={title} className="card p-7 hover:border-gold/30 transition-all">
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-ink font-bold font-serif text-lg mb-2">{title}</h3>
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
    { n: '01', title: 'WhatsApp or Call Us', desc: "Tell us about your store and which tier you're interested in. We respond within 2 hours." },
    { n: '02', title: 'Get a Free Sample Kit', desc: 'We send 2–3 pairs so you can feel the quality. Sample cost is refunded on your first order.' },
    { n: '03', title: 'Place Your Order', desc: '50% advance, 50% on dispatch. We ship within 5 working days with full tracking.' },
    { n: '04', title: 'We Set You Up', desc: 'Display materials, product images, price cards, and social content — all delivered.' },
    { n: '05', title: 'Sell & Restock', desc: 'Priority restock for partners. Monthly check-in call from our team to help you sell.' },
  ]

  return (
    <section className="py-24 bg-warm-white">
      <div className="wrap-md">
        <div className="text-center mb-14">
          <h2 className="heading-lg text-4xl sm:text-5xl">
            How to <span className="text-gold-shine">get started.</span>
          </h2>
        </div>
        <div className="space-y-6">
          {steps.map(({ n, title, desc }) => (
            <div key={n} className="flex gap-7 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-gold-pale border border-gold/20 rounded-2xl flex items-center justify-center">
                <span className="text-gold font-bold font-serif">{n}</span>
              </div>
              <div className="pt-3">
                <h3 className="text-ink font-bold font-serif text-xl mb-1">{title}</h3>
                <p className="text-ink-muted">{desc}</p>
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
    <section className="py-20 bg-ink">
      <div className="wrap-md text-center">
        <h2 className="font-serif font-bold text-4xl sm:text-5xl text-warm-white mb-4 tracking-tight">
          Ready to <span className="text-gold-shine">partner with us?</span>
        </h2>
        <p className="text-warm-white/60 text-lg mb-8 max-w-lg mx-auto">
          Our B2B team responds within 2 hours on WhatsApp. Let's discuss your store.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20become%20a%20SPORTVIO%20partner"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-lg py-5 px-12 w-full sm:w-auto justify-center"
          >
            💬 WhatsApp Us Now
          </a>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center justify-center gap-2 border border-warm-white/25 hover:border-warm-white text-warm-white font-semibold py-5 px-8 rounded-full transition-all duration-200 w-full sm:w-auto"
          >
            📞 +91 98765 43210
          </a>
        </div>
        <p className="mt-5 text-warm-white/40 text-sm">Mon–Sat, 10am–7pm IST · Email: b2b@sportvio.in</p>
      </div>
    </section>
  )
}

function B2BFooter() {
  return (
    <footer className="bg-warm-cream border-t border-warm-border py-10">
      <div className="wrap flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="text-ink-muted hover:text-gold text-sm transition-colors">
          ← Back to Consumer Site
        </Link>
        <p className="text-ink-light text-xs">© 2026 SPORTVIO. Wholesale partner programme.</p>
      </div>
    </footer>
  )
}

export default function B2BPage() {
  return (
    <B2BEmailGate>
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
