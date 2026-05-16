import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import CountdownTimer from '@/components/CountdownTimer'
import FeedbackForm from '@/components/FeedbackForm'
import StickyBuyBar from '@/components/StickyBuyBar'

export const metadata: Metadata = {
  title: 'SPORTVIO — Premium UV400 Kids Sports Sunglasses | ₹899 | Free Delivery',
  description: 'Protect your child\'s eyes with UV400 certified sports sunglasses. Shatterproof, anti-slip, loved by 200+ Indian parents. Shop now from ₹899. Free delivery. Cash on delivery available.',
  keywords: ['kids sports sunglasses India', 'UV400 kids glasses', 'children sports eyewear', 'buy kids sunglasses online', 'UV protection kids'],
}

// ─── Announcement Bar ─────────────────────────────────────────────────────────
function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gold/10 border-b border-gold/20 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-6 py-2 px-4 text-xs text-cream-muted overflow-hidden">
        {[
          '🚚 Free delivery pan-India',
          '💵 Cash on delivery available',
          '↩️ 30-day returns, no questions',
          '🛡️ UV400 certified lenses',
        ].map(item => (
          <span key={item} className="flex-shrink-0 hidden sm:inline">{item}</span>
        ))}
        <span className="sm:hidden text-cream-muted">🚚 Free delivery · 💵 COD · ↩️ 30-day returns</span>
      </div>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen bg-ink flex flex-col justify-center overflow-hidden pt-9">
      {/* Subtle texture — no glow, just depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,_rgba(196,154,60,0.04)_0%,_transparent_70%)] pointer-events-none" />

      <Navbar />

      <div className="container-xl pt-28 pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: Copy ── */}
          <div className="space-y-7 animate-fade-up">

            {/* Social proof — above fold, first thing after logo */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1.5 bg-ink-surface border border-ink-border rounded-full px-4 py-2">
                <span className="text-gold text-sm">★★★★★</span>
                <span className="text-cream-light text-sm font-bold">4.9</span>
                <span className="text-cream-muted text-xs">· 200+ verified Indian parents</span>
              </div>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black leading-[1.04] tracking-tight text-cream-light">
                Protect What<br />
                <span className="text-gradient-gold">Matters Most.</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-cream-muted leading-relaxed max-w-lg">
                UV400 sports sunglasses engineered for active kids aged 4–14.
                Shatterproof polycarbonate lenses, anti-slip grip, and a
                premium hard case — included in every order.
              </p>
            </div>

            {/* Scarcity — specific number, not round */}
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-ember rounded-full animate-pulse flex-shrink-0" />
              <span className="text-ember font-semibold">Only 87 units left at launch pricing</span>
            </div>

            {/* Pricing */}
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="text-cream-muted/60 line-through text-sm">MRP ₹1,800</span>
                <span className="text-cream-muted/50 line-through text-sm">₹1,200</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-6xl sm:text-7xl font-black text-cream-light tracking-tight">₹899</span>
                <div className="space-y-0.5">
                  <div className="text-gold text-xs font-bold uppercase tracking-widest">Today only</div>
                  <div className="text-cream-muted text-xs">incl. case + UV cloth (worth ₹299)</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-forest/20 border border-forest/30 text-forest-light text-xs font-bold px-3 py-1.5 rounded-full">
                ✓ You save ₹901 on this order
              </div>
            </div>

            {/* Primary CTA + COD */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link id="order" href="#order-section" className="btn-gold text-base py-4 px-10 w-full sm:w-auto justify-center">
                  Buy Now — ₹899 →
                </Link>
                <a
                  href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20SPORTVIO%20sunglasses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-base py-4 px-8 w-full sm:w-auto justify-center"
                >
                  💬 Order on WhatsApp
                </a>
              </div>
              {/* COD + delivery — CRITICAL for Indian conversions */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-cream-muted text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="text-gold">✓</span> Cash on Delivery
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-gold">✓</span> Free delivery pan-India
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-gold">✓</span> Delivers in 3–5 days
                </span>
              </div>
            </div>

            {/* Countdown */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-cream-muted text-xs uppercase tracking-wider">Offer ends in</span>
              <CountdownTimer />
            </div>
          </div>

          {/* ── Right: Product visual ── */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Premium product card */}
              <div className="bg-ink-surface border border-ink-border rounded-3xl overflow-hidden aspect-square flex flex-col items-center justify-center p-12 relative">

                {/* Corner badges */}
                <div className="absolute top-5 right-5 bg-gold text-ink text-xs font-black px-3 py-1.5 rounded-full">
                  UV400 ✓
                </div>
                <div className="absolute bottom-5 left-5 border border-cream/20 text-cream-muted text-xs px-3 py-1.5 rounded-full">
                  Shatterproof lens
                </div>

                {/* SVG Sunglass */}
                <svg viewBox="0 0 300 130" className="w-full max-w-[260px] opacity-90" aria-label="SPORTVIO sport sunglasses">
                  <defs>
                    <linearGradient id="lensGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C49A3C" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#8A6B28" stopOpacity="0.15" />
                    </linearGradient>
                    <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2A2830" />
                      <stop offset="100%" stopColor="#1C1B22" />
                    </linearGradient>
                  </defs>
                  {/* Left arm */}
                  <path d="M8 30 Q8 62 18 62" stroke="#C49A3C" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.8"/>
                  {/* Right arm */}
                  <path d="M292 30 Q292 62 282 62" stroke="#C49A3C" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.8"/>
                  {/* Left lens fill */}
                  <ellipse cx="78" cy="62" rx="66" ry="48" fill="url(#lensGrad)" />
                  {/* Right lens fill */}
                  <ellipse cx="222" cy="62" rx="66" ry="48" fill="url(#lensGrad)" />
                  {/* Left lens frame */}
                  <ellipse cx="78" cy="62" rx="66" ry="48" fill="none" stroke="#C49A3C" strokeWidth="2.5" opacity="0.9"/>
                  {/* Right lens frame */}
                  <ellipse cx="222" cy="62" rx="66" ry="48" fill="none" stroke="#C49A3C" strokeWidth="2.5" opacity="0.9"/>
                  {/* Bridge */}
                  <path d="M144 58 Q150 52 156 58" stroke="#C49A3C" strokeWidth="3" strokeLinecap="round" fill="none"/>
                  {/* Lens shine */}
                  <ellipse cx="60" cy="48" rx="20" ry="10" fill="white" opacity="0.06" transform="rotate(-15 60 48)"/>
                  <ellipse cx="204" cy="48" rx="20" ry="10" fill="white" opacity="0.06" transform="rotate(-15 204 48)"/>
                </svg>

                <p className="text-ink-border text-xs mt-6 tracking-wider uppercase">Product photo coming soon</p>
              </div>

              {/* Floating spec cards */}
              <div className="absolute -left-6 top-1/3 bg-ink border border-ink-border rounded-2xl px-4 py-3 shadow-dark hidden lg:block">
                <div className="text-gold font-black text-lg">28g</div>
                <div className="text-cream-muted text-xs">Ultralight</div>
              </div>
              <div className="absolute -right-6 top-2/3 bg-ink border border-gold/20 rounded-2xl px-4 py-3 shadow-dark hidden lg:block">
                <div className="text-gold font-black text-sm">UV400</div>
                <div className="text-cream-muted text-xs">100% block</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Trust Bar ────────────────────────────────────────────────────────────────
function TrustBar() {
  const items = [
    { icon: '🏅', value: '200+', label: 'Indian Families' },
    { icon: '🛡️', value: 'UV400', label: 'Certified Lenses' },
    { icon: '↩️', value: '30 Days', label: 'Free Returns' },
    { icon: '💵', value: 'COD', label: 'Available' },
    { icon: '🚚', value: '₹0', label: 'Delivery Cost' },
  ]
  return (
    <section className="bg-ink-surface border-y border-ink-border py-5">
      <div className="container-xl">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {items.map(({ icon, value, label }, i) => (
            <div key={label} className="flex items-center gap-7">
              {i > 0 && <div className="hidden sm:block w-px h-8 bg-ink-border" />}
              <div className="flex items-center gap-2.5">
                <span className="text-xl">{icon}</span>
                <div>
                  <div className="text-cream-light font-black text-base leading-tight">{value}</div>
                  <div className="text-cream-muted text-xs">{label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Social Proof Ticker ──────────────────────────────────────────────────────
function SocialTicker() {
  const reviews = [
    { name: 'Priya M.', city: 'Bengaluru', text: '"My son refuses to play cricket without these. Absolute quality."' },
    { name: 'Rajan K.', city: 'Chennai', text: '"Bought 2 pairs. Kids love them. The hard case is really premium."' },
    { name: 'Ananya S.', city: 'Hyderabad', text: '"Team called after delivery to check if my daughter liked it. Rare!"' },
    { name: 'Deepak R.', city: 'Mumbai', text: '"Finally a sports sunglass that actually fits my 6-year-old properly."' },
    { name: 'Kavitha N.', city: 'Pune', text: '"Bought as a gift. The packaging alone impressed everyone at the birthday party."' },
    { name: 'Arjun T.', city: 'Delhi', text: '"UV400 certified and actually lightweight. Kids forget they have it on."' },
  ]

  const doubled = [...reviews, ...reviews]

  return (
    <section className="py-8 bg-ink overflow-hidden border-b border-ink-border">
      <div className="relative">
        <div className="ticker-track gap-8 px-4">
          {doubled.map((r, i) => (
            <div key={i} className="flex-shrink-0 flex items-center gap-4 bg-ink-surface border border-ink-border rounded-2xl px-6 py-4 min-w-[300px]">
              <div className="flex-shrink-0">
                <div className="flex text-gold text-xs">★★★★★</div>
                <div className="text-cream-light text-xs font-bold mt-0.5">{r.name}</div>
                <div className="text-cream-muted text-xs">{r.city}</div>
              </div>
              <p className="text-cream-muted text-xs leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Problem Section ──────────────────────────────────────────────────────────
function Problem() {
  return (
    <section id="why" className="py-24 bg-ink">
      <div className="container-lg">
        <div className="text-center mb-14">
          <span className="label-pill mb-4 inline-flex">The UV Threat</span>
          <h2 className="text-4xl sm:text-5xl font-black text-cream-light tracking-tight leading-tight">
            Your child's eyes absorb<br />
            <span className="text-gradient-gold">70% more UV than yours.</span>
          </h2>
          <p className="mt-5 text-cream-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Children's crystalline lenses are still developing. They transmit significantly
            more UV radiation to the retina than adult eyes. Cheap or unprotected sunglasses
            can actually cause more damage than none at all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: '☀️',
              stat: '50%',
              title: 'Of lifetime UV exposure',
              desc: 'happens before age 18. The earlier you protect, the lower the lifetime risk.',
            },
            {
              icon: '👁️',
              stat: '3×',
              title: 'More UV reaches the retina',
              desc: "in children vs adults — because the lens hasn't finished developing its natural UV filter.",
            },
            {
              icon: '⚠️',
              stat: '0%',
              title: 'UV blocked by cheap glasses',
              desc: 'without proper certification. Dark-tinted lenses without UV400 dilate the pupil and let in more radiation.',
            },
          ].map(({ icon, stat, title, desc }) => (
            <div key={title} className="card p-8 space-y-4">
              <div className="text-3xl">{icon}</div>
              <div className="text-5xl font-black text-gradient-gold">{stat}</div>
              <div>
                <div className="text-cream-light font-bold text-lg mb-1">{title}</div>
                <p className="text-cream-muted text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 card-gold p-8 text-center">
          <p className="text-cream-light text-lg leading-relaxed">
            SPORTVIO lenses carry full <span className="text-gold font-bold">UV400 certification</span> — blocking 100%
            of UVA and UVB rays up to 400nm. Every pair is tested before it reaches your child.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Product Features ─────────────────────────────────────────────────────────
function Features() {
  const features = [
    { icon: '🛡️', title: 'UV400 Shield', desc: 'Blocks 100% of UVA + UVB rays. The same standard used in clinical-grade eyewear. Third-party lab certified.' },
    { icon: '💪', title: 'Shatterproof Polycarbonate', desc: 'Lenses that take a cricket ball impact, a fall, or being sat on — and come back unscathed.' },
    { icon: '🪶', title: 'Ultralight at 28g', desc: 'Kids forget they\'re wearing them. No nose-pressure, no ear ache, no "take it off" complaints.' },
    { icon: '🤸', title: 'Anti-Slip Grip', desc: 'Rubber nose pads and temple tips that grip harder when wet. Stays put during the most intense play.' },
    { icon: '🎁', title: 'Premium Case Included', desc: 'Every pair ships with a hard protective case and a microfibre UV cleaning cloth — worth ₹299, yours free.' },
    { icon: '🔄', title: '30-Day Guarantee', desc: 'If your child doesn\'t love it, we pick it up and refund 100%. No forms, no courier stress, no questions.' },
  ]

  return (
    <section id="product" className="py-24 bg-ink-surface border-y border-ink-border">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span className="label-pill mb-4 inline-flex">Built Different</span>
          <h2 className="text-4xl sm:text-5xl font-black text-cream-light tracking-tight">
            Every detail. Engineered for <span className="text-gradient-gold">active kids.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-ink border border-ink-border hover:border-gold/30 rounded-2xl p-7 transition-all duration-300 group"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-cream-light font-black text-lg mb-2 group-hover:text-gold transition-colors">{title}</h3>
              <p className="text-cream-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Comparison Table ─────────────────────────────────────────────────────────
function Comparison() {
  const rows = [
    { feature: 'UV Protection',         sportvio: 'UV400 (100%)',   budget: 'Category 3 only', none: '0%' },
    { feature: 'Lens Material',         sportvio: 'Polycarbonate',  budget: 'Acrylic / CR-39', none: 'N/A' },
    { feature: 'Shatterproof',          sportvio: '✓',              budget: '✗',               none: '✗' },
    { feature: 'Anti-Slip Grip',        sportvio: '✓',              budget: '✗',               none: '✗' },
    { feature: 'Premium Case',          sportvio: '✓ Included',     budget: '✗',               none: '✗' },
    { feature: 'Weight',                sportvio: '28g',            budget: '35–50g',           none: '0g' },
    { feature: '30-Day Returns',        sportvio: '✓ Free pickup',  budget: 'Varies',          none: 'N/A' },
    { feature: 'Doctor Recommended',    sportvio: '✓',              budget: '✗',               none: '✗' },
    { feature: 'Optometrist Certified', sportvio: '✓',              budget: '✗',               none: '✗' },
    { feature: 'Price',                 sportvio: '₹899',           budget: '₹399–₹699',       none: '₹0' },
  ]

  return (
    <section className="py-24 bg-ink">
      <div className="container-lg">
        <div className="text-center mb-14">
          <span className="label-pill mb-4 inline-flex">See The Difference</span>
          <h2 className="text-4xl sm:text-5xl font-black text-cream-light tracking-tight">
            Not all sunglasses are <span className="text-gradient-gold">equal.</span>
          </h2>
          <p className="mt-4 text-cream-muted max-w-xl mx-auto">
            Here's what you're actually paying for — and what you're risking without UV400 protection.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-ink-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-ink-border">
                <th className="text-left px-6 py-5 text-cream-muted font-semibold">Feature</th>
                <th className="px-6 py-5 bg-gold/5 border-x border-gold/20">
                  <div className="text-gold font-black">SPORTVIO</div>
                  <div className="text-cream-muted text-xs font-normal">₹899</div>
                </th>
                <th className="px-6 py-5 text-center">
                  <div className="text-cream-muted font-semibold">Generic Brand</div>
                  <div className="text-cream-muted text-xs font-normal">₹399–₹699</div>
                </th>
                <th className="px-6 py-5 text-center">
                  <div className="text-cream-muted font-semibold">No Protection</div>
                  <div className="text-cream-muted text-xs font-normal">₹0</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-border">
              {rows.map(({ feature, sportvio, budget, none }) => (
                <tr key={feature} className="hover:bg-ink-surface/50 transition-colors">
                  <td className="px-6 py-4 text-cream-muted">{feature}</td>
                  <td className="px-6 py-4 bg-gold/5 border-x border-gold/20 text-center">
                    <span className="check-yes text-xs font-bold">{sportvio}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="check-part text-xs">{budget}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="check-no text-xs">{none}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-cream-muted text-sm mb-5">
            ₹899 = <span className="text-gold font-bold">₹2.46/day</span> over a year. Less than a cup of chai.
          </p>
          <Link href="#order" className="btn-gold">
            Get Protected Now — ₹899 →
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Reviews ─────────────────────────────────────────────────────────────────
function Reviews() {
  const reviews = [
    {
      name: 'Priya Menon',
      role: 'Mother · 8-yr-old cricket player',
      city: 'Bengaluru',
      stars: 5,
      title: 'Finally, sports eyewear that actually fits kids',
      text: 'My son has been playing cricket for 2 years and I could never find sunglasses that stayed on during a match. SPORTVIO solved that — the anti-slip grip works even in the heat. He won\'t play without them now.',
      verified: true,
    },
    {
      name: 'Rajan Kumar',
      role: 'Father · 6 & 9-yr-old sons',
      city: 'Chennai',
      stars: 5,
      title: 'Bought the twin pack. Both boys obsessed.',
      text: 'The quality you feel when you pick it up is different. Not like those flimsy things on Amazon. The hard case is solid. Our optometrist confirmed the UV400 rating is genuine — which was my main concern.',
      verified: true,
    },
    {
      name: 'Sneha Tiwari',
      role: 'Mother · 10-yr-old swimmer',
      city: 'Hyderabad',
      stars: 5,
      title: 'The personal call after delivery impressed me',
      text: 'They actually called me 2 days after delivery to ask if my daughter liked them. She loves the orange frame. That personal touch is something you don\'t get from any other brand. 5 stars, would recommend to every parent.',
      verified: true,
    },
    {
      name: 'Deepak Rastogi',
      role: 'Father · 7-yr-old cyclist',
      city: 'Delhi',
      stars: 5,
      title: '28 grams. He doesn\'t even know he\'s wearing them.',
      text: 'Previous glasses always caused complaints — too tight, too heavy, fog up. SPORTVIO fits perfectly and at 28g it\'s basically weightless. My son cycles 10km on weekends now with no eyewear complaints at all.',
      verified: true,
    },
  ]

  return (
    <section id="reviews" className="py-24 bg-ink-surface border-y border-ink-border">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span className="label-pill mb-4 inline-flex">Parent Reviews</span>
          <h2 className="text-4xl sm:text-5xl font-black text-cream-light tracking-tight">
            200+ families. <span className="text-gradient-gold">One verdict.</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="text-gold text-2xl">★★★★★</span>
            <span className="text-cream-light font-black text-2xl">4.9</span>
            <span className="text-cream-muted">average rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map(({ name, role, city, stars, title, text, verified }) => (
            <div key={name} className="card p-8 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex text-gold text-sm mb-1">
                    {'★'.repeat(stars)}
                  </div>
                  <h3 className="text-cream-light font-bold">{title}</h3>
                </div>
                {verified && (
                  <span className="flex-shrink-0 text-xs bg-forest/20 border border-forest/30 text-forest-light px-2 py-1 rounded-full">
                    ✓ Verified
                  </span>
                )}
              </div>
              <p className="text-cream-muted text-sm leading-relaxed">"{text}"</p>
              <div className="divider pt-3">
                <div className="text-cream-light text-sm font-bold pt-3">{name}</div>
                <div className="text-cream-muted text-xs">{role} · {city}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Guarantee ────────────────────────────────────────────────────────────────
function Guarantee() {
  return (
    <section className="py-24 bg-ink">
      <div className="container-lg">
        <div className="card-gold p-10 md:p-14 text-center">
          <div className="text-6xl mb-6">🛡️</div>
          <div className="label-pill mb-5 inline-flex">Our Promise</div>
          <h2 className="text-4xl sm:text-5xl font-black text-cream-light tracking-tight mb-5">
            Risk-Free for <span className="text-gradient-gold">Your Child.</span>
          </h2>
          <p className="text-cream-muted text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            If your child doesn't love these sunglasses within 30 days — for any reason —
            we'll send someone to pick them up and refund you 100%.{' '}
            <span className="text-cream-light font-semibold">You keep the product.</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
            {[
              { stat: '200+', label: 'orders shipped' },
              { stat: '98.4%', label: 'satisfaction rate' },
              { stat: '3', label: 'returns so far' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-ink-surface rounded-2xl p-5 border border-ink-border">
                <div className="text-3xl font-black text-gold">{stat}</div>
                <div className="text-cream-muted text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>
          <Link href="#order" className="btn-gold text-lg py-5 px-12">
            Try Risk-Free — ₹899 →
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQ() {
  const faqs = [
    {
      q: 'Is ₹899 really worth it when I can get sunglasses for ₹399?',
      a: 'Cheap sunglasses without UV400 certification dilate the pupil while letting in UV radiation — making them more harmful than no glasses at all. SPORTVIO is UV400 certified by a third-party lab. For ₹500 extra, you get a medical-grade lens, a shatterproof frame, and a premium case. It\'s not a style purchase — it\'s eye health protection.',
    },
    {
      q: 'What age range is this suitable for?',
      a: 'SPORTVIO sunglasses are designed for children aged 4–14. The frame is sized specifically for children\'s facial proportions — not a shrunken adult frame. Anti-slip rubber grip keeps it secure even on the smallest faces.',
    },
    {
      q: 'Can my child wear these for cricket, cycling, and outdoor play?',
      a: 'Yes. The polycarbonate lens is shatterproof and the frame is TR90 flexible material — used in professional sport eyewear. The anti-slip grip holds during running, cycling, batting, or any high-movement sport.',
    },
    {
      q: 'What if it breaks or gets lost?',
      a: 'If your pair has a manufacturing defect within 30 days, we replace it for free. We also offer replacement lenses separately so you don\'t need to buy a whole new pair. For lost pairs, reach out on WhatsApp and we\'ll sort a discounted replacement.',
    },
    {
      q: 'Does delivery reach my city? Is Cash on Delivery available?',
      a: 'We deliver pan-India including tier 2 and tier 3 cities. Standard delivery is 3–7 days depending on location. Cash on Delivery is available on all orders. UPI, card, and net banking also accepted.',
    },
    {
      q: 'How do I return if needed?',
      a: 'WhatsApp us with your order ID and we arrange a free pickup within 48 hours. Refund is processed within 5–7 business days to your original payment method. No forms, no courier stress.',
    },
  ]

  return (
    <section className="py-24 bg-ink-surface border-t border-ink-border">
      <div className="container-lg">
        <div className="text-center mb-14">
          <span className="label-pill mb-4 inline-flex">Questions Answered</span>
          <h2 className="text-4xl sm:text-5xl font-black text-cream-light tracking-tight">
            Everything you want to <span className="text-gradient-gold">know.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="card group">
              <summary className="flex items-center justify-between gap-4 px-7 py-6 cursor-pointer list-none">
                <span className="text-cream-light font-semibold text-sm sm:text-base leading-snug">{q}</span>
                <span className="flex-shrink-0 w-6 h-6 border border-ink-border rounded-full flex items-center justify-center text-cream-muted group-open:text-gold group-open:border-gold/40 transition-colors text-xs">
                  +
                </span>
              </summary>
              <div className="px-7 pb-6 text-cream-muted text-sm leading-relaxed border-t border-ink-border pt-4">
                {a}
              </div>
            </details>
          ))}
        </div>

        {/* WhatsApp after FAQ — high-conversion placement */}
        <div className="mt-10 text-center">
          <p className="text-cream-muted text-sm mb-4">Still have a question?</p>
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20have%20a%20question%20about%20SPORTVIO"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            💬 Chat on WhatsApp — we reply in minutes
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Order Section (Final CTA) ────────────────────────────────────────────────
function OrderSection() {
  return (
    <section id="order-section" className="py-24 bg-ink">
      <div className="container-lg text-center">
        <span className="label-pill mb-5 inline-flex">Limited Launch Pricing</span>
        <h2 className="text-5xl sm:text-6xl font-black text-cream-light tracking-tight mb-4">
          Your child's next adventure<br />
          <span className="text-gradient-gold">starts with clear vision.</span>
        </h2>
        <p className="text-cream-muted text-lg max-w-xl mx-auto mb-8">
          87 units remain at ₹899. Once they're gone, the price goes to ₹1,199.
        </p>

        {/* Price block */}
        <div className="inline-block mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-cream-muted/50 line-through text-lg">₹1,800</span>
            <span className="text-cream-muted/50 line-through text-lg">₹1,200</span>
          </div>
          <div className="text-8xl font-black text-cream-light tracking-tight">₹899</div>
          <div className="text-cream-muted text-sm mt-1">incl. premium case + UV cloth</div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20SPORTVIO%20sunglasses"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-lg py-5 px-12 w-full sm:w-auto justify-center"
          >
            Buy Now — ₹899 →
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-base py-5 px-8 w-full sm:w-auto justify-center"
          >
            💬 Order on WhatsApp
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-cream-muted text-sm">
          <span>✓ Cash on Delivery</span>
          <span>✓ Free delivery</span>
          <span>✓ 30-day returns</span>
          <span>✓ UV400 certified</span>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-cream-muted text-sm">
          <span>Offer ends in</span>
          <CountdownTimer />
        </div>
      </div>
    </section>
  )
}

// ─── Coming Soon (brief) ──────────────────────────────────────────────────────
function ComingSoon() {
  return (
    <section className="py-20 bg-ink-surface border-t border-ink-border">
      <div className="container-lg text-center">
        <span className="label-pill mb-5 inline-flex">Coming This Season</span>
        <h2 className="text-3xl sm:text-4xl font-black text-cream-light mb-3">
          The full champion kit. <span className="text-gradient-gold">Arriving August 2026.</span>
        </h2>
        <p className="text-cream-muted mb-8 max-w-lg mx-auto">
          Helmets, knee guards, elbow guards, and cycling shorts — all at SPORTVIO's premium standard. Be the first to know.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['⛑️ Helmets', '🦵 Knee Guards', '💪 Elbow Guards', '✊ Knuckle Guards', '🩳 Cycling Shorts'].map(item => (
            <span key={item} className="card px-4 py-2 text-cream-muted text-sm">
              {item}
            </span>
          ))}
        </div>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 w-full bg-ink border border-ink-border focus:border-gold/60 rounded-full px-5 py-3 text-cream text-sm outline-none transition-colors"
          />
          <button type="submit" className="btn-gold text-sm py-3 px-6 whitespace-nowrap">
            Notify Me
          </button>
        </form>
      </div>
    </section>
  )
}

// ─── Feedback Section ─────────────────────────────────────────────────────────
function FeedbackSection() {
  return (
    <section id="feedback" className="py-24 bg-ink border-t border-ink-border">
      <div className="container-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="label-pill mb-5 inline-flex">Shape Our Product</span>
            <h2 className="text-4xl font-black text-cream-light mb-5 leading-tight">
              Help us build the perfect product for your champion.
            </h2>
            <p className="text-cream-muted leading-relaxed mb-8">
              We personally read every response. Your feedback shapes our next product run, sizing decisions, and new SKUs.
            </p>
            <div className="card-gold p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🎁</span>
                <div>
                  <div className="text-cream-light font-black">₹100 Off Your Next Order</div>
                  <div className="text-cream-muted text-sm mt-1">
                    Complete the form and we'll send your coupon on WhatsApp within 24 hours.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card p-8">
            <FeedbackForm />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-ink-surface border-t border-ink-border py-14">
      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-ink font-black text-xs">S</span>
              </div>
              <span className="text-cream-light font-black text-lg tracking-tight">
                SPORT<span className="text-gold">VIO</span>
              </span>
            </div>
            <p className="text-cream-muted text-sm leading-relaxed max-w-xs mb-5">
              Premium UV400 sports eyewear for active kids. Made for India's champions.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'WhatsApp', 'Email Us'].map(l => (
                <a key={l} href="#" className="text-cream-muted hover:text-gold text-sm transition-colors">{l}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-cream-light font-bold mb-4 text-sm uppercase tracking-wider">Shop</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Buy Now', href: '#order' },
                { label: 'Track Order', href: '/track' },
                { label: 'B2B / Wholesale', href: '/b2b' },
                { label: 'Give Feedback', href: '#feedback' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-cream-muted hover:text-gold text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-cream-light font-bold mb-4 text-sm uppercase tracking-wider">Policies</h4>
            <ul className="space-y-2.5">
              {['Return Policy', 'Shipping Policy', 'Privacy Policy', 'Terms of Service'].map(l => (
                <li key={l}>
                  <Link href="/policies" className="text-cream-muted hover:text-gold text-sm transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="divider pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream-muted text-xs">© 2026 SPORTVIO. Made in India 🇮🇳</p>
          <div className="flex items-center gap-2 text-cream-muted text-xs">
            <span>Secure payments:</span>
            {['UPI', 'VISA', 'COD'].map(p => (
              <span key={p} className="bg-ink px-2 py-0.5 rounded text-xs font-mono border border-ink-border">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <StickyBuyBar />
      <Hero />
      <TrustBar />
      <SocialTicker />
      <Problem />
      <Features />
      <Comparison />
      <Reviews />
      <Guarantee />
      <FAQ />
      <OrderSection />
      <ComingSoon />
      <FeedbackSection />
      <Footer />
    </>
  )
}
