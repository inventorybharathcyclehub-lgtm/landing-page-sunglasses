import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Bulk & Wholesale Orders — SPORTVIO',
  description:
    'Become a SPORTVIO wholesale partner. Buy kids sports sunglasses in bulk at ₹250/unit. Full marketing support included. Build revenue per square foot.',
}

function HeroB2B() {
  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-slate-950 to-[#0f1629] flex items-center overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <Navbar />
      <div className="section-container pt-28 pb-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
            B2B & Wholesale
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Don't Just Stock Sunglasses.{' '}
            <span className="gradient-text">Partner With Us.</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl">
            We supply premium kids' sports sunglasses at wholesale rates — and then we help you sell
            every single pair. Marketing support, display fixtures, and sell-through guarantees. No
            other brand does this.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20become%20a%20SPORTVIO%20wholesale%20partner"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              💬 WhatsApp for Wholesale Pricing
            </a>
            <a href="tel:+919876543210" className="btn-outline">
              📞 Call Our B2B Team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyPartner() {
  const reasons = [
    {
      icon: '💰',
      title: '200–300% Retail Margin',
      desc: 'Buy at ₹250. Sell at ₹799–₹1,200. Every pair you sell puts ₹550–₹950 profit in your pocket.',
    },
    {
      icon: '📐',
      title: 'Highest Revenue Per Sq. Ft.',
      desc: 'Sunglasses take less than 1 sq. ft. of display space. Few categories match this revenue-per-foot ratio.',
    },
    {
      icon: '📣',
      title: 'We Market for You',
      desc: 'We provide marketing materials, social media content, and in-store branding so you don\'t have to.',
    },
    {
      icon: '🔄',
      title: 'Sell-Through Guarantee',
      desc: 'On 1,000-unit partner orders, we guarantee to help you sell 400–500 units with our support.',
    },
    {
      icon: '🎯',
      title: 'Premium Brand = Easy Sale',
      desc: 'Parents at sports academies, schools, and outdoor shops are already looking for exactly this product.',
    },
    {
      icon: '⚡',
      title: 'Fast Restock — 7 Days',
      desc: 'Never run out of stock. Our partners get priority restock shipped within 7 working days.',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Why Partner with <span className="text-orange-500">SPORTVIO?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon, title, desc }) => (
            <div key={title} className="p-8 rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-lg font-black text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingTable() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Wholesale <span className="text-orange-500">Pricing</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg">Transparent pricing. No hidden costs. GST invoice provided on all orders.</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="text-left px-6 py-4 font-bold">Order Tier</th>
                <th className="text-left px-6 py-4 font-bold">Units</th>
                <th className="text-left px-6 py-4 font-bold">Price / Unit</th>
                <th className="text-left px-6 py-4 font-bold">Total Investment</th>
                <th className="text-left px-6 py-4 font-bold">Marketing Support</th>
                <th className="text-left px-6 py-4 font-bold">Your Potential Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                {
                  tier: 'Starter', units: '100', price: '₹250', total: '₹25,000',
                  support: '₹10,000 in marketing assets', revenue: '₹79,900–₹1,20,000',
                  highlight: false,
                },
                {
                  tier: 'Growth', units: '500', price: '₹260', total: '₹1,30,000',
                  support: '₹35,000 + content + standees', revenue: '₹3,99,500–₹6,00,000',
                  highlight: true,
                },
                {
                  tier: 'Elite', units: '1,000', price: '₹270', total: '₹2,70,000',
                  support: 'Sell-through guarantee + fixtures + in-store branding', revenue: '₹7,99,000–₹12,00,000',
                  highlight: false,
                },
                {
                  tier: 'Custom', units: '5,000+', price: 'On request', total: 'On request',
                  support: 'Full partnership programme', revenue: 'Custom projection',
                  highlight: false,
                },
              ].map((row) => (
                <tr key={row.tier} className={row.highlight ? 'bg-orange-50' : ''}>
                  <td className={`px-6 py-5 font-bold ${row.highlight ? 'text-orange-600' : 'text-slate-900'}`}>
                    {row.tier} {row.highlight && <span className="ml-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">Most Popular</span>}
                  </td>
                  <td className="px-6 py-5 text-slate-700">{row.units}</td>
                  <td className="px-6 py-5 font-semibold text-slate-900">{row.price}</td>
                  <td className="px-6 py-5 text-slate-700">{row.total}</td>
                  <td className="px-6 py-5 text-slate-600">{row.support}</td>
                  <td className="px-6 py-5 text-green-600 font-bold">{row.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-slate-400 text-sm text-center">
          * Revenue projections based on selling at ₹799–₹1,200 retail. Actual results depend on local market and execution.
        </p>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20know%20more%20about%20wholesale%20pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Get Your Wholesale Catalogue →
          </a>
        </div>
      </div>
    </section>
  )
}

function WhoIsThisFor() {
  const segments = [
    { icon: '👓', title: 'Optical Shops', desc: 'Add a sports category. Your existing customers will love UV-certified sports options for their kids.' },
    { icon: '🏏', title: 'Sports Academies', desc: 'Offer equipment your young athletes actually need. Bulk pricing for 10+ pairs with co-branding.' },
    { icon: '🏫', title: 'Schools & PTAs', desc: 'Ideal for sports days, prizes, and canteen stocking. Minimum 20 pairs. Invoice available.' },
    { icon: '🛍️', title: 'Kids Boutiques', desc: 'A premium sports eyewear range that completes your store\'s active-kid offering.' },
    { icon: '🏪', title: 'Multi-Brand Retailers', desc: 'Stock a brand with 200%+ gross margin and dedicated marketing support from us.' },
    { icon: '📦', title: 'Online Resellers', desc: 'Sell on Amazon, Meesho, or your own D2C store. We provide catalogue images and A+ content.' },
  ]

  return (
    <section className="py-24 bg-slate-950">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-badge">Perfect For</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-4">
            Who is This <span className="gradient-text">Programme For?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map(({ icon, title, desc }) => (
            <div key={title} className="card-glass p-8 rounded-2xl hover:border-orange-500/30 transition-all">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-white font-black text-lg mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { n: '01', title: 'Contact Us', desc: 'WhatsApp or call us. Tell us about your store and which tier interests you.' },
    { n: '02', title: 'Get Your Sample Kit', desc: 'We send you 2–3 sample pairs so you can see and feel the quality yourself. (Sample cost refunded on first order.)' },
    { n: '03', title: 'Place Your Order', desc: 'Confirm your quantity. Pay 50% advance. We dispatch within 5 working days.' },
    { n: '04', title: 'We Set You Up', desc: 'We send display materials, product images, social content, and pricing cards. Your store is ready.' },
    { n: '05', title: 'Sell & Reorder', desc: 'Start selling. Call us for restocks — priority dispatch for partners. We call you monthly to check in.' },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            How It <span className="text-orange-500">Works</span>
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-100 hidden md:block" />
          <div className="space-y-8">
            {steps.map(({ n, title, desc }) => (
              <div key={n} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center relative z-10">
                  <span className="text-white font-black text-lg">{n}</span>
                </div>
                <div className="pt-3">
                  <h3 className="text-xl font-black text-slate-900 mb-1">{title}</h3>
                  <p className="text-slate-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function B2BCTA() {
  return (
    <section className="py-20 bg-orange-500">
      <div className="section-container text-center">
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
          Ready to Start?
        </h2>
        <p className="text-orange-100 text-xl mb-8 max-w-xl mx-auto">
          Our B2B team responds within 2 hours on WhatsApp. Let's talk numbers.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20partner%20with%20SPORTVIO%20for%20wholesale"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-600 font-bold py-4 px-8 rounded-full hover:bg-orange-50 transition-colors shadow-lg text-lg"
          >
            💬 WhatsApp Us Now
          </a>
          <a href="mailto:b2b@sportvio.in" className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition-colors text-lg">
            ✉️ Email Our B2B Team
          </a>
        </div>
        <p className="mt-6 text-orange-200 text-sm">
          Or call us directly: <span className="font-bold text-white">+91 98765 43210</span> (Mon–Sat, 10am–7pm IST)
        </p>
      </div>
    </section>
  )
}

function B2BFooter() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-10">
      <div className="section-container text-center">
        <Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors">
          ← Back to Main Site
        </Link>
        <p className="mt-4 text-slate-500 text-sm">© 2026 SPORTVIO. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function B2BPage() {
  return (
    <>
      <HeroB2B />
      <WhyPartner />
      <PricingTable />
      <WhoIsThisFor />
      <HowItWorks />
      <B2BCTA />
      <B2BFooter />
    </>
  )
}
