import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import CountdownTimer from '@/components/CountdownTimer'
import FeedbackForm from '@/components/FeedbackForm'
import StickyBuyBar from '@/components/StickyBuyBar'

export const metadata: Metadata = {
  title: 'SPORTVIO — Premium UV400 Kids Sports Sunglasses | ₹899 | Free Delivery',
  description: "Protect your child's eyes with UV400 certified sports sunglasses. Shatterproof, anti-slip, loved by 200+ Indian parents. Shop now from ₹899. Free delivery. Cash on delivery available.",
  keywords: ['kids sports sunglasses India', 'UV400 kids glasses', 'children sports eyewear', 'buy kids sunglasses online', 'UV protection kids'],
}

// ─── Announcement Bar ─────────────────────────────────────────────────────────
function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gold-pale border-b border-gold/20">
      <div className="flex items-center justify-center gap-6 py-2.5 px-4 text-xs overflow-hidden">
        {[
          '🚚 Free delivery pan-India',
          '💵 Cash on delivery available',
          '↩️ 30-day returns, no questions',
          '🛡️ UV400 certified lenses',
        ].map(item => (
          <span key={item} className="flex-shrink-0 hidden sm:inline text-gold-deep font-medium">{item}</span>
        ))}
        <span className="sm:hidden text-gold-deep font-medium">🚚 Free delivery · 💵 COD · ↩️ 30-day returns</span>
      </div>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen bg-warm-white flex flex-col justify-center overflow-hidden pt-9">
      <Navbar />

      <div className="wrap pt-24 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Copy */}
          <div className="space-y-7">

            {/* Stars pill */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="pill flex items-center gap-2">
                <span className="text-gold text-sm">★★★★★</span>
                <span className="text-ink font-bold text-sm">4.9</span>
                <span className="text-ink-muted text-xs">· 200+ verified Indian parents</span>
              </div>
            </div>

            {/* Headline */}
            <div>
              <h1 className="heading-xl text-5xl sm:text-6xl lg:text-[4.5rem]">
                Protect What<br />
                <span className="text-gold-shine">Matters Most.</span>
              </h1>
              <p className="mt-5 body-lg max-w-lg">
                UV400 sports sunglasses engineered for active kids aged 4–14.
                Shatterproof polycarbonate lenses, anti-slip grip, and a
                premium hard case — included in every order.
              </p>
            </div>

            {/* Scarcity */}
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-ember rounded-full animate-pulse flex-shrink-0" />
              <span className="text-ember font-semibold">Only 87 units left at launch pricing</span>
            </div>

            {/* Pricing */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <span className="text-ink-light line-through text-sm">MRP ₹1,800</span>
                <span className="text-ink-light line-through text-sm">₹1,200</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-serif font-bold text-6xl sm:text-7xl text-ink tracking-tight">₹899</span>
                <div className="space-y-0.5">
                  <div className="text-gold text-xs font-bold uppercase tracking-widest">Today only</div>
                  <div className="text-ink-muted text-xs">incl. hard case + UV cloth (worth ₹299)</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-forest-pale border border-forest/20 text-forest text-xs font-bold px-3 py-1.5 rounded-full">
                ✓ You save ₹901 on this order
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#order-section" className="btn-primary text-base w-full sm:w-auto justify-center">
                  Buy Now — ₹899 →
                </Link>
                <a
                  href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20SPORTVIO%20sunglasses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-base w-full sm:w-auto justify-center"
                >
                  💬 Order on WhatsApp
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-ink-muted text-xs">
                <span className="flex items-center gap-1.5"><span className="text-forest">✓</span> Cash on Delivery</span>
                <span className="flex items-center gap-1.5"><span className="text-forest">✓</span> Free delivery pan-India</span>
                <span className="flex items-center gap-1.5"><span className="text-forest">✓</span> Delivers in 3–5 days</span>
              </div>
            </div>

            {/* Countdown */}
            <div className="flex items-center gap-3 pt-1">
              <span className="label-xs">Offer ends in</span>
              <CountdownTimer />
            </div>
          </div>

          {/* Right: Product visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="bg-warm-cream border border-warm-border rounded-3xl overflow-hidden aspect-square flex flex-col items-center justify-center p-12 relative">

                {/* Badges */}
                <div className="absolute top-5 right-5 bg-gold text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  UV400 ✓
                </div>
                <div className="absolute bottom-5 left-5 bg-white border border-warm-border text-ink-muted text-xs px-3 py-1.5 rounded-full">
                  Shatterproof lens
                </div>

                {/* SVG product placeholder */}
                <svg viewBox="0 0 300 130" className="w-full max-w-[260px]" aria-label="SPORTVIO sport sunglasses">
                  <defs>
                    <linearGradient id="lensGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#9A7B2C" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#D4AA52" stopOpacity="0.12" />
                    </linearGradient>
                  </defs>
                  <path d="M8 30 Q8 62 18 62" stroke="#1A1612" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.7"/>
                  <path d="M292 30 Q292 62 282 62" stroke="#1A1612" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.7"/>
                  <ellipse cx="78" cy="62" rx="66" ry="48" fill="url(#lensGrad)" />
                  <ellipse cx="222" cy="62" rx="66" ry="48" fill="url(#lensGrad)" />
                  <ellipse cx="78" cy="62" rx="66" ry="48" fill="none" stroke="#1A1612" strokeWidth="2.5" opacity="0.7"/>
                  <ellipse cx="222" cy="62" rx="66" ry="48" fill="none" stroke="#1A1612" strokeWidth="2.5" opacity="0.7"/>
                  <path d="M144 58 Q150 52 156 58" stroke="#1A1612" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7"/>
                  <ellipse cx="62" cy="50" rx="18" ry="9" fill="white" opacity="0.35" transform="rotate(-15 62 50)"/>
                  <ellipse cx="206" cy="50" rx="18" ry="9" fill="white" opacity="0.35" transform="rotate(-15 206 50)"/>
                </svg>

                <p className="text-ink-light text-xs mt-6 tracking-wider uppercase">Product photo coming soon</p>
              </div>

              {/* Floating spec cards */}
              <div className="absolute -left-6 top-1/3 card px-4 py-3 shadow-card-lg hidden lg:block">
                <div className="font-serif font-bold text-gold text-lg">28g</div>
                <div className="text-ink-muted text-xs">Ultralight</div>
              </div>
              <div className="absolute -right-6 top-2/3 card px-4 py-3 shadow-card-lg hidden lg:block">
                <div className="font-bold text-gold text-sm">UV400</div>
                <div className="text-ink-muted text-xs">100% block</div>
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
    <section className="bg-warm-cream border-y border-warm-border py-5">
      <div className="wrap">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {items.map(({ icon, value, label }, i) => (
            <div key={label} className="flex items-center gap-7">
              {i > 0 && <div className="hidden sm:block w-px h-8 bg-warm-border" />}
              <div className="flex items-center gap-2.5">
                <span className="text-xl">{icon}</span>
                <div>
                  <div className="text-ink font-bold text-base leading-tight">{value}</div>
                  <div className="text-ink-muted text-xs">{label}</div>
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
    <section className="py-7 bg-warm-cream overflow-hidden border-b border-warm-border">
      <div className="relative">
        <div className="ticker-track gap-5 px-4">
          {doubled.map((r, i) => (
            <div key={i} className="flex-shrink-0 flex items-center gap-4 bg-white border border-warm-border rounded-2xl px-6 py-4 min-w-[300px] shadow-card">
              <div className="flex-shrink-0">
                <div className="flex text-gold text-xs">★★★★★</div>
                <div className="text-ink text-xs font-bold mt-0.5">{r.name}</div>
                <div className="text-ink-muted text-xs">{r.city}</div>
              </div>
              <p className="text-ink-muted text-xs leading-relaxed">{r.text}</p>
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
    <section id="why" className="py-24 bg-warm-white">
      <div className="wrap-md">
        <div className="text-center mb-14">
          <span className="pill mb-4 inline-flex">The UV Threat</span>
          <h2 className="heading-lg text-4xl sm:text-5xl mb-5">
            Your child's eyes absorb<br />
            <span className="text-gold-shine">70% more UV than yours.</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
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
            <div key={title} className="card-soft p-8 space-y-4">
              <div className="text-3xl">{icon}</div>
              <div className="font-serif font-bold text-5xl text-gold">{stat}</div>
              <div>
                <div className="text-ink font-bold text-lg mb-1">{title}</div>
                <p className="text-ink-muted text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-gold-pale border border-gold/20 rounded-2xl p-8 text-center">
          <p className="text-ink text-lg leading-relaxed">
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
    { icon: '💪', title: 'Shatterproof Polycarbonate', desc: "Lenses that take a cricket ball impact, a fall, or being sat on — and come back unscathed." },
    { icon: '🪶', title: 'Ultralight at 28g', desc: "Kids forget they're wearing them. No nose-pressure, no ear ache, no 'take it off' complaints." },
    { icon: '🤸', title: 'Anti-Slip Grip', desc: 'Rubber nose pads and temple tips that grip harder when wet. Stays put during the most intense play.' },
    { icon: '🎁', title: 'Premium Case Included', desc: 'Every pair ships with a hard protective case and a microfibre UV cleaning cloth — worth ₹299, yours free.' },
    { icon: '🔄', title: '30-Day Guarantee', desc: "If your child doesn't love it, we pick it up and refund 100%. No forms, no courier stress, no questions." },
  ]

  return (
    <section id="products" className="py-24 bg-warm-cream border-y border-warm-border">
      <div className="wrap">
        <div className="text-center mb-14">
          <span className="pill mb-4 inline-flex">Built Different</span>
          <h2 className="heading-lg text-4xl sm:text-5xl">
            Every detail. Engineered for <span className="text-gold-shine">active kids.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="card p-7 hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-ink font-bold font-serif text-lg mb-2 group-hover:text-gold transition-colors">{title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{desc}</p>
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
    { feature: 'UV Protection',         sportvio: 'UV400 (100%)',   budget: 'Category 3 only',  none: '0%' },
    { feature: 'Lens Material',         sportvio: 'Polycarbonate',  budget: 'Acrylic / CR-39',  none: 'N/A' },
    { feature: 'Shatterproof',          sportvio: '✓',              budget: '✗',                none: '✗' },
    { feature: 'Anti-Slip Grip',        sportvio: '✓',              budget: '✗',                none: '✗' },
    { feature: 'Premium Case',          sportvio: '✓ Included',     budget: '✗',                none: '✗' },
    { feature: 'Weight',                sportvio: '28g',            budget: '35–50g',            none: '0g' },
    { feature: '30-Day Returns',        sportvio: '✓ Free pickup',  budget: 'Varies',            none: 'N/A' },
    { feature: 'Doctor Recommended',    sportvio: '✓',              budget: '✗',                none: '✗' },
    { feature: 'Optometrist Certified', sportvio: '✓',              budget: '✗',                none: '✗' },
    { feature: 'Price',                 sportvio: '₹899',           budget: '₹399–₹699',        none: '₹0' },
  ]

  return (
    <section className="py-24 bg-warm-white">
      <div className="wrap-md">
        <div className="text-center mb-14">
          <span className="pill mb-4 inline-flex">See The Difference</span>
          <h2 className="heading-lg text-4xl sm:text-5xl mb-4">
            Not all sunglasses are <span className="text-gold-shine">equal.</span>
          </h2>
          <p className="text-ink-muted max-w-xl mx-auto">
            Here's what you're actually paying for — and what you're risking without UV400 protection.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-warm-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-warm-border bg-warm-cream">
                <th className="text-left px-6 py-5 text-ink-muted font-semibold">Feature</th>
                <th className="px-6 py-5 bg-gold-pale border-x border-gold/20">
                  <div className="text-gold font-bold font-serif">SPORTVIO</div>
                  <div className="text-gold-deep text-xs font-normal">₹899</div>
                </th>
                <th className="px-6 py-5 text-center">
                  <div className="text-ink-muted font-semibold">Generic Brand</div>
                  <div className="text-ink-light text-xs font-normal">₹399–₹699</div>
                </th>
                <th className="px-6 py-5 text-center">
                  <div className="text-ink-muted font-semibold">No Protection</div>
                  <div className="text-ink-light text-xs font-normal">₹0</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-warm-border">
              {rows.map(({ feature, sportvio, budget, none }) => (
                <tr key={feature} className="hover:bg-warm-cream/60 transition-colors">
                  <td className="px-6 py-4 text-ink-muted">{feature}</td>
                  <td className="px-6 py-4 bg-gold-pale border-x border-gold/20 text-center">
                    <span className="text-forest font-bold text-xs">{sportvio}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-ink-muted text-xs">{budget}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-ember text-xs">{none}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-ink-muted text-sm mb-5">
            ₹899 = <span className="text-gold font-bold">₹2.46/day</span> over a year. Less than a cup of chai.
          </p>
          <Link href="#order-section" className="btn-primary">
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
      text: "My son has been playing cricket for 2 years and I could never find sunglasses that stayed on during a match. SPORTVIO solved that — the anti-slip grip works even in the heat. He won't play without them now.",
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
      text: "They actually called me 2 days after delivery to ask if my daughter liked them. She loves the orange frame. That personal touch is something you don't get from any other brand. 5 stars, would recommend to every parent.",
      verified: true,
    },
    {
      name: 'Deepak Rastogi',
      role: 'Father · 7-yr-old cyclist',
      city: 'Delhi',
      stars: 5,
      title: "28 grams. He doesn't even know he's wearing them.",
      text: 'Previous glasses always caused complaints — too tight, too heavy, fog up. SPORTVIO fits perfectly and at 28g it\'s basically weightless. My son cycles 10km on weekends now with no eyewear complaints at all.',
      verified: true,
    },
  ]

  return (
    <section id="reviews" className="py-24 bg-warm-cream border-y border-warm-border">
      <div className="wrap">
        <div className="text-center mb-14">
          <span className="pill mb-4 inline-flex">Parent Reviews</span>
          <h2 className="heading-lg text-4xl sm:text-5xl">
            200+ families. <span className="text-gold-shine">One verdict.</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="text-gold text-2xl">★★★★★</span>
            <span className="text-ink font-bold text-2xl">4.9</span>
            <span className="text-ink-muted">average rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map(({ name, role, city, stars, title, text, verified }) => (
            <div key={name} className="card p-8 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex text-gold text-sm mb-1">{'★'.repeat(stars)}</div>
                  <h3 className="text-ink font-bold font-serif">{title}</h3>
                </div>
                {verified && (
                  <span className="flex-shrink-0 text-xs bg-forest-pale border border-forest/20 text-forest px-2 py-1 rounded-full">
                    ✓ Verified
                  </span>
                )}
              </div>
              <p className="text-ink-muted text-sm leading-relaxed">"{text}"</p>
              <div className="hr pt-3">
                <div className="text-ink text-sm font-bold pt-3">{name}</div>
                <div className="text-ink-muted text-xs">{role} · {city}</div>
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
    <section className="py-24 bg-warm-white">
      <div className="wrap-md">
        <div className="bg-gold-pale border border-gold/20 rounded-3xl p-10 md:p-14 text-center">
          <div className="text-6xl mb-6">🛡️</div>
          <span className="pill-gold mb-5 inline-flex">Our Promise</span>
          <h2 className="heading-lg text-4xl sm:text-5xl mb-5">
            Risk-Free for <span className="text-gold-shine">Your Child.</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto mb-8">
            If your child doesn't love these sunglasses within 30 days — for any reason —
            we'll send someone to pick them up and refund you 100%.{' '}
            <span className="text-ink font-semibold">You keep the product.</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
            {[
              { stat: '200+', label: 'orders shipped' },
              { stat: '98.4%', label: 'satisfaction rate' },
              { stat: '3', label: 'returns so far' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-white rounded-2xl p-5 border border-gold/10">
                <div className="font-serif font-bold text-3xl text-gold">{stat}</div>
                <div className="text-ink-muted text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>
          <Link href="#order-section" className="btn-primary text-lg py-5 px-12">
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
      a: "Cheap sunglasses without UV400 certification dilate the pupil while letting in UV radiation — making them more harmful than no glasses at all. SPORTVIO is UV400 certified by a third-party lab. For ₹500 extra, you get a medical-grade lens, a shatterproof frame, and a premium case. It's not a style purchase — it's eye health protection.",
    },
    {
      q: 'What age range is this suitable for?',
      a: "SPORTVIO sunglasses are designed for children aged 4–14. The frame is sized specifically for children's facial proportions — not a shrunken adult frame. Anti-slip rubber grip keeps it secure even on the smallest faces.",
    },
    {
      q: 'Can my child wear these for cricket, cycling, and outdoor play?',
      a: 'Yes. The polycarbonate lens is shatterproof and the frame is TR90 flexible material — used in professional sport eyewear. The anti-slip grip holds during running, cycling, batting, or any high-movement sport.',
    },
    {
      q: 'What if it breaks or gets lost?',
      a: "If your pair has a manufacturing defect within 30 days, we replace it for free. We also offer replacement lenses separately so you don't need to buy a whole new pair. For lost pairs, reach out on WhatsApp and we'll sort a discounted replacement.",
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
    <section className="py-24 bg-warm-cream border-t border-warm-border">
      <div className="wrap-md">
        <div className="text-center mb-14">
          <span className="pill mb-4 inline-flex">Questions Answered</span>
          <h2 className="heading-lg text-4xl sm:text-5xl">
            Everything you want to <span className="text-gold-shine">know.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="card group">
              <summary className="flex items-center justify-between gap-4 px-7 py-6 cursor-pointer list-none">
                <span className="text-ink font-semibold text-sm sm:text-base leading-snug">{q}</span>
                <span className="flex-shrink-0 w-6 h-6 border border-warm-border rounded-full flex items-center justify-center text-ink-muted group-open:text-gold group-open:border-gold/40 transition-colors text-xs">
                  +
                </span>
              </summary>
              <div className="px-7 pb-6 text-ink-muted text-sm leading-relaxed border-t border-warm-border pt-4">
                {a}
              </div>
            </details>
          ))}
        </div>

        {/* WhatsApp CTA after FAQ — high-conversion placement */}
        <div className="mt-10 text-center">
          <p className="text-ink-muted text-sm mb-4">Still have a question?</p>
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

// ─── Order Section (Final CTA — dark for visual contrast) ─────────────────────
function OrderSection() {
  return (
    <section id="order-section" className="py-24 bg-ink">
      <div className="wrap-md text-center">
        <span className="pill-gold mb-5 inline-flex">Limited Launch Pricing</span>
        <h2 className="font-serif font-bold text-5xl sm:text-6xl text-warm-white leading-tight tracking-tight mb-4">
          Your child's next adventure<br />
          <span className="text-gold-shine">starts with clear vision.</span>
        </h2>
        <p className="text-warm-white/60 text-lg max-w-xl mx-auto mb-8">
          87 units remain at ₹899. Once they're gone, the price goes to ₹1,199.
        </p>

        {/* Price */}
        <div className="inline-block mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-warm-white/30 line-through text-lg">₹1,800</span>
            <span className="text-warm-white/30 line-through text-lg">₹1,200</span>
          </div>
          <div className="font-serif font-bold text-8xl text-warm-white tracking-tight">₹899</div>
          <div className="text-warm-white/50 text-sm mt-1">incl. premium case + UV cloth</div>
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
            className="inline-flex items-center justify-center gap-2 border border-warm-white/25 hover:border-warm-white text-warm-white font-semibold text-base px-8 py-5 rounded-full transition-all duration-200 w-full sm:w-auto"
          >
            💬 Order on WhatsApp
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-warm-white/50 text-sm">
          <span>✓ Cash on Delivery</span>
          <span>✓ Free delivery</span>
          <span>✓ 30-day returns</span>
          <span>✓ UV400 certified</span>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-warm-white/50 text-sm">
          <span>Offer ends in</span>
          <CountdownTimer />
        </div>
      </div>
    </section>
  )
}

// ─── Champion Kit / Coming Soon ───────────────────────────────────────────────
function ChampionKit() {
  const skus = [
    {
      icon: '🥽',
      name: 'UV400 Sports Sunglasses',
      desc: 'Shatterproof polycarbonate. Anti-slip grip. Premium case included.',
      status: 'Available Now',
      available: true,
      price: '₹899',
    },
    {
      icon: '⛑️',
      name: 'Premium Sports Helmets',
      desc: 'ABS shell + EPS foam. Dual-density. Sized for Indian kids aged 4–14.',
      status: 'Aug 2026',
      available: false,
    },
    {
      icon: '🦵',
      name: 'Pro Knee Guards',
      desc: 'Hard-shell EVA foam. Stays in place during cycling, skating & cricket.',
      status: 'Aug 2026',
      available: false,
    },
    {
      icon: '💪',
      name: 'Elbow Guard Set',
      desc: 'Breathable mesh + impact shell. Pairs with our knee guards.',
      status: 'Aug 2026',
      available: false,
    },
    {
      icon: '✊',
      name: 'Knuckle Guards',
      desc: 'Full-knuckle coverage for cycling & outdoor sports. Ventilated design.',
      status: 'Sep 2026',
      available: false,
    },
    {
      icon: '🩳',
      name: 'Padded Cycling Shorts',
      desc: 'Gel-pad seat, anti-chafe flat seams. Built for long rides.',
      status: 'Sep 2026',
      available: false,
    },
  ]

  return (
    <section className="py-24 bg-warm-white border-t border-warm-border">
      <div className="wrap">
        <div className="text-center mb-14">
          <span className="pill mb-4 inline-flex">The Champion Kit</span>
          <h2 className="heading-lg text-4xl sm:text-5xl">
            Complete protection for every<br />
            <span className="text-gold-shine">sport your child plays.</span>
          </h2>
          <p className="body-lg max-w-xl mx-auto mt-5">
            SPORTVIO is building India's first complete premium protective sports gear range for
            kids. Sunglasses are just the beginning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skus.map(({ icon, name, desc, status, available, price }) => (
            <div
              key={name}
              className={`rounded-2xl p-7 border transition-all ${
                available
                  ? 'bg-ink border-ink shadow-card-lg'
                  : 'card-soft hover:border-warm-muted'
              }`}
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className={`font-serif font-bold text-xl mb-2 ${available ? 'text-warm-white' : 'text-ink'}`}>
                {name}
              </h3>
              <p className={`text-sm leading-relaxed mb-5 ${available ? 'text-warm-white/60' : 'text-ink-muted'}`}>
                {desc}
              </p>
              <div className="flex items-center justify-between">
                {available ? (
                  <>
                    <span className="font-serif font-bold text-gold text-xl">{price}</span>
                    <Link href="#order-section" className="btn-gold text-xs py-2 px-5">
                      Buy Now →
                    </Link>
                  </>
                ) : (
                  <>
                    <span className="pill text-xs">{status}</span>
                    <span className="text-ink-light text-xs">Coming soon</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Email capture */}
        <div className="mt-14 text-center">
          <p className="text-ink-muted mb-5 text-sm">Be first to know when new SKUs launch</p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 w-full bg-warm-cream border border-warm-border focus:border-gold/50 rounded-full px-5 py-3 text-ink text-sm outline-none transition-colors"
            />
            <button type="submit" className="btn-primary text-sm py-3 px-6 whitespace-nowrap">
              Notify Me
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

// ─── Feedback Section ─────────────────────────────────────────────────────────
function FeedbackSection() {
  return (
    <section id="feedback" className="py-24 bg-warm-cream border-t border-warm-border">
      <div className="wrap-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="pill mb-5 inline-flex">Shape Our Product</span>
            <h2 className="heading-lg text-4xl mb-5 leading-tight">
              Help us build the perfect product for your champion.
            </h2>
            <p className="body-md mb-8">
              We personally read every response. Your feedback shapes our next product run,
              sizing decisions, and new SKUs.
            </p>
            <div className="bg-gold-pale border border-gold/20 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🎁</span>
                <div>
                  <div className="text-ink font-bold">₹100 Off Your Next Order</div>
                  <div className="text-ink-muted text-sm mt-1">
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
    <footer className="bg-ink py-14">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs font-serif">S</span>
              </div>
              <span className="text-warm-white font-bold text-lg tracking-tight font-serif">
                SPORT<span className="text-gold">VIO</span>
              </span>
            </div>
            <p className="text-warm-white/50 text-sm leading-relaxed max-w-xs mb-5">
              Premium UV400 sports eyewear for active kids. Made for India's champions.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'WhatsApp', 'Email Us'].map(l => (
                <a key={l} href="#" className="text-warm-white/50 hover:text-gold text-sm transition-colors">{l}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-warm-white font-bold mb-4 text-sm uppercase tracking-wider">Shop</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Buy Now', href: '#order-section' },
                { label: 'Track Order', href: '/track' },
                { label: 'B2B / Wholesale', href: '/b2b' },
                { label: 'Give Feedback', href: '#feedback' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-warm-white/50 hover:text-gold text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-warm-white font-bold mb-4 text-sm uppercase tracking-wider">Policies</h4>
            <ul className="space-y-2.5">
              {['Return Policy', 'Shipping Policy', 'Privacy Policy', 'Terms of Service'].map(l => (
                <li key={l}>
                  <Link href="/policies" className="text-warm-white/50 hover:text-gold text-sm transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-warm-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-warm-white/40 text-xs">© 2026 SPORTVIO. Made in India 🇮🇳</p>
          <div className="flex items-center gap-2 text-warm-white/40 text-xs">
            <span>Secure payments:</span>
            {['UPI', 'VISA', 'COD'].map(p => (
              <span key={p} className="bg-warm-white/10 px-2 py-0.5 rounded text-xs font-mono border border-warm-white/10">{p}</span>
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
      <ChampionKit />
      <FeedbackSection />
      <Footer />
    </>
  )
}
