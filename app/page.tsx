import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import CountdownTimer from '@/components/CountdownTimer'
import FeedbackForm from '@/components/FeedbackForm'
import StickyBuyBar from '@/components/StickyBuyBar'

export const metadata: Metadata = {
  title: 'SPORTVIO — UV400 Sports Sunglasses for Junior Athletes | ₹899 | Free Delivery',
  description: "India's first sports sunglasses built for junior athletes aged 4–14. UV400 certified, shatterproof polycarbonate, anti-slip grip. Trusted by 200+ Indian families. ₹899. Free delivery. COD available.",
  keywords: ['kids sports sunglasses India', 'UV400 kids glasses', 'junior athlete sunglasses', 'cricket sunglasses kids', 'cycling sunglasses children India'],
}

// ─── Announcement Bar ─────────────────────────────────────────────────────────
function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gold-pale border-b border-gold/20">
      <div className="flex items-center justify-center gap-6 py-2.5 px-4 text-xs overflow-hidden">
        {[
          '🚚 Free delivery pan-India',
          '💵 Cash on delivery available',
          '↩️ 30-day no-questions guarantee',
          '🛡️ UV400 — same standard as professional sport eyewear',
        ].map(item => (
          <span key={item} className="flex-shrink-0 hidden sm:inline text-gold-deep font-medium">{item}</span>
        ))}
        <span className="sm:hidden text-gold-deep font-medium">🚚 Free delivery · 💵 COD · 🛡️ UV400 certified</span>
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

            {/* Social proof pill */}
            <div className="pill flex items-center gap-2 w-fit">
              <span className="text-gold text-sm">★★★★★</span>
              <span className="text-ink font-bold text-sm">4.9</span>
              <span className="text-ink-muted text-xs">· 200+ Indian families</span>
            </div>

            {/* Dual-register headline: parent hears "protection", child hears "athlete" */}
            <div>
              <h1 className="heading-xl text-5xl sm:text-6xl lg:text-[4.5rem]">
                Your eyes are<br />
                your first<br />
                <span className="text-gold-shine">equipment.</span>
              </h1>
              <p className="mt-5 body-lg max-w-lg">
                UV400 sports sunglasses built for Indian junior athletes aged 4–14.
                The same lens protection professional players train in —
                engineered for how your child actually plays.
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
                  <div className="text-gold text-xs font-bold uppercase tracking-widest">Launch price</div>
                  <div className="text-ink-muted text-xs">incl. hard case + UV cloth (worth ₹299)</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-forest-pale border border-forest/20 text-forest text-xs font-bold px-3 py-1.5 rounded-full">
                ✓ You save ₹901 today
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#order-section" className="btn-primary text-base w-full sm:w-auto justify-center">
                  Buy Now — ₹899 →
                </Link>
                <a
                  href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20SPORTVIO%20sunglasses%20for%20my%20child"
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
              <span className="label-xs">Launch offer ends in</span>
              <CountdownTimer />
            </div>
          </div>

          {/* Right: Product visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="relative rounded-3xl overflow-hidden aspect-square bg-warm-cream border border-warm-border">

                {/* Primary product image */}
                <img
                  src="https://www.eyewearlabs.com/cdn/shop/files/RYKER_GHOSTLY_GREEN_Carousel_ad.png?crop=center&height=900&v=1767342109&width=900"
                  alt="UV400 sports sunglasses for junior athletes"
                  className="w-full h-full object-cover"
                />

                {/* Floating colorway thumbnails */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <img
                    src="https://www.eyewearlabs.com/cdn/shop/files/1_49c55e0d-b5b5-4533-be89-452ec4fecb8b.png?crop=center&height=80&v=1759923659&width=80"
                    alt="XPLR Red colorway"
                    className="w-14 h-14 object-contain rounded-xl bg-white/90 border border-warm-border p-1 shadow-card"
                  />
                  <img
                    src="https://www.eyewearlabs.com/cdn/shop/files/Ryker_Night_Vision_Amazon.png?crop=center&height=80&v=1767342334&width=80"
                    alt="Night Vision colorway"
                    className="w-14 h-14 object-contain rounded-xl bg-white/90 border border-warm-border p-1 shadow-card"
                  />
                </div>

                {/* Sport badges */}
                <div className="absolute top-5 right-5 bg-gold text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  UV400 ✓
                </div>
                <div className="absolute top-5 left-5 pill text-xs">
                  For junior athletes
                </div>
                <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm border border-warm-border text-ink-muted text-xs px-3 py-1.5 rounded-full">
                  Impact-grade lens
                </div>
              </div>

              {/* Spec cards */}
              <div className="absolute -left-6 top-1/3 card px-4 py-3 shadow-card-lg hidden lg:block">
                <div className="font-serif font-bold text-gold text-lg">28g</div>
                <div className="text-ink-muted text-xs">Ultralight</div>
              </div>
              <div className="absolute -right-6 top-2/3 card px-4 py-3 shadow-card-lg hidden lg:block">
                <div className="font-bold text-gold text-sm">UV400</div>
                <div className="text-ink-muted text-xs">Pro standard</div>
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
    { icon: '🏅', value: '200+', label: 'Families Trust Us' },
    { icon: '🛡️', value: 'UV400', label: 'Pro-Standard Lens' },
    { icon: '🏏', value: '3 Sports', label: 'Cricket · Cycling · Football' },
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
    { name: 'Priya M.', city: 'Bengaluru', text: '"My son refuses to play cricket without these now. He calls them his match glasses."' },
    { name: 'Rajan K.', city: 'Chennai', text: '"Bought 2 pairs for my boys. They brag about them to teammates. The grip actually works in sweat."' },
    { name: 'Ananya S.', city: 'Hyderabad', text: '"My daughter wore them to swimming. Stayed on. She asked if she could wear them to school too."' },
    { name: 'Deepak R.', city: 'Mumbai', text: '"Finally a sports sunglass sized for a child\'s face, not a shrunken adult frame."' },
    { name: 'Kavitha N.', city: 'Pune', text: '"The hard case alone is worth ₹500. My son has dropped his bag five times — glasses still perfect."' },
    { name: 'Arjun T.', city: 'Delhi', text: '"UV400 and genuinely light. My daughter cycled 8km and forgot she had them on. That\'s the test."' },
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
          <span className="pill mb-4 inline-flex">The Indian Sun Problem</span>
          <h2 className="heading-lg text-4xl sm:text-5xl mb-5">
            India's UV index peaks at 11–12.<br />
            <span className="text-gold-shine">Among the highest on earth.</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            A child playing cricket or cycling outdoors in Indian summer absorbs more UV
            in one afternoon than most children in Europe absorb in a week.
            And their eyes are three times more vulnerable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: '☀️',
              stat: '3×',
              title: 'More UV reaches their retina',
              desc: "Children's crystalline lenses are still developing. They transmit far more UV radiation to the retina than adult eyes — making every hour outdoors a higher-stakes exposure.",
            },
            {
              icon: '👁️',
              stat: '50%',
              title: 'Of lifetime UV damage',
              desc: 'happens before age 18. The window you protect now determines their eye health for life. Damage is cumulative and irreversible.',
            },
            {
              icon: '⚠️',
              stat: '0%',
              title: 'UV blocked by uncertified glasses',
              desc: 'Dark lenses without UV400 certification actually dilate the pupil — letting in more UV radiation than wearing nothing. Cheaper is not neutral; it is harmful.',
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
            SPORTVIO lenses carry full <span className="text-gold font-bold">UV400 certification</span> —
            the same protection standard used in professional sport eyewear.
            Blocking 100% of UVA and UVB up to 400nm. Every pair is verified before it ships.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Sport Contexts ───────────────────────────────────────────────────────────
function SportContexts() {
  const sports = [
    {
      icon: '🏏',
      sport: 'Cricket',
      title: 'For the fielder, batter, and keeper.',
      desc: 'Anti-slip grip holds through dives. Impact-grade lens handles the sun at the boundary. Light enough to forget at long-on.',
      img: 'https://www.eyewearlabs.com/cdn/shop/files/1_49c55e0d-b5b5-4533-be89-452ec4fecb8b.png?crop=center&height=400&v=1759923659&width=400',
      imgAlt: 'XPLR sports sunglasses for cricket',
    },
    {
      icon: '🚴',
      sport: 'Cycling',
      title: 'For the rider who goes further.',
      desc: 'Wrap-fit stays on at speed. UV400 cuts the road glare. At 28g, your child will forget these are on — until they take them off.',
      img: 'https://www.eyewearlabs.com/cdn/shop/files/RYKER_GHOSTLY_GREEN_Carousel_ad.png?crop=center&height=400&v=1767342109&width=400',
      imgAlt: 'Ryker Ghostly Green sports sunglasses for cycling',
    },
    {
      icon: '⚽',
      sport: 'Football & Outdoor Play',
      title: 'For every match under the Indian sun.',
      desc: 'Designed for Indian summer conditions — morning school sport, afternoon matches, evening cycling. Built for the hours Indian kids actually play.',
      img: 'https://www.eyewearlabs.com/cdn/shop/files/Ryker_Night_Vision_Amazon.png?crop=center&height=400&v=1767342334&width=400',
      imgAlt: 'Ryker Night Vision sports sunglasses for outdoor play',
    },
  ]

  return (
    <section className="py-24 bg-warm-white border-t border-warm-border">
      <div className="wrap">
        <div className="text-center mb-14">
          <span className="pill mb-4 inline-flex">Built for Indian Sport</span>
          <h2 className="heading-lg text-4xl sm:text-5xl">
            Whatever the game.<br />
            <span className="text-gold-shine">They're game-ready.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sports.map(({ icon, sport, title, desc, img, imgAlt }) => (
            <div key={sport} className="card overflow-hidden">
              <div className="h-44 bg-warm-cream flex items-center justify-center p-4">
                <img src={img} alt={imgAlt} className="h-full w-full object-contain" />
              </div>
              <div className="p-8">
                <div className="label-xs mb-2">{sport}</div>
                <h3 className="font-serif font-bold text-ink text-xl mb-3 leading-tight">{title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Product Features ─────────────────────────────────────────────────────────
function Features() {
  const features = [
    {
      icon: '🛡️',
      title: 'Match-Day Vision',
      desc: 'UV400 — the highest certification standard. Blocks 100% of UVA + UVB. The same rating used in professional sport eyewear, third-party lab verified.',
    },
    {
      icon: '💪',
      title: 'Impact-Grade Lenses',
      desc: 'Shatterproof polycarbonate that takes a cricket ball impact, a fall from a bike, or being sat on — and comes back unchanged.',
    },
    {
      icon: '🪶',
      title: 'Forget They\'re Wearing Them',
      desc: 'At 28g, these are ultralight. No nose pressure, no ear ache, no "take it off" from the child within five minutes of the match starting.',
    },
    {
      icon: '🤸',
      title: 'Stays Put. Every Rally.',
      desc: 'Rubber nose pads and temple tips that grip harder when wet with sweat. Built to stay on through cricket, cycling, football — not fall off.',
    },
    {
      icon: '🎁',
      title: 'Game-Ready Kit. Every Box.',
      desc: 'Every pair ships with a hard protective case and a microfibre UV cleaning cloth — worth ₹299, included at no extra cost.',
    },
    {
      icon: '🔄',
      title: 'Play With Confidence',
      desc: 'If your child doesn\'t love these within 30 days for any reason, we pick them up and refund you 100%. You keep the product.',
    },
  ]

  return (
    <section id="products" className="py-24 bg-warm-cream border-y border-warm-border">
      <div className="wrap">
        <div className="text-center mb-14">
          <span className="pill mb-4 inline-flex">Built Different</span>
          <h2 className="heading-lg text-4xl sm:text-5xl">
            Junior athletes deserve<br />
            <span className="text-gold-shine">pro-level gear.</span>
          </h2>
          <p className="body-lg max-w-xl mx-auto mt-4">
            Every feature exists because it makes a difference during play —
            not just in the box.
          </p>
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
    { feature: 'UV Protection',            sportvio: 'UV400 (100%)',      budget: 'Category 3 only',  none: '0% — worse than nothing' },
    { feature: 'Lens Material',            sportvio: 'Polycarbonate',     budget: 'Acrylic / CR-39',  none: 'N/A' },
    { feature: 'Impact Resistant',         sportvio: '✓',                 budget: '✗',                none: '✗' },
    { feature: 'Anti-Slip Sport Grip',     sportvio: '✓',                 budget: '✗',                none: '✗' },
    { feature: 'Hard Case Included',       sportvio: '✓ Included',        budget: '✗',                none: '✗' },
    { feature: 'Weight',                   sportvio: '28g',               budget: '35–50g',            none: '0g' },
    { feature: 'Sized for Children',       sportvio: '✓ Age 4–14',        budget: 'Adult-sized',       none: '✗' },
    { feature: '30-Day Returns',           sportvio: '✓ Free pickup',     budget: 'Varies',            none: 'N/A' },
    { feature: 'Doctor Recommended',       sportvio: '✓',                 budget: '✗',                none: '✗' },
    { feature: 'Price',                    sportvio: '₹899',              budget: '₹399–₹699',        none: '₹0' },
  ]

  return (
    <section className="py-24 bg-warm-white">
      <div className="wrap-md">
        <div className="text-center mb-14">
          <span className="pill mb-4 inline-flex">See the Difference</span>
          <h2 className="heading-lg text-4xl sm:text-5xl mb-4">
            ₹299 glasses aren't neutral.<br />
            <span className="text-gold-shine">They're a risk.</span>
          </h2>
          <p className="text-ink-muted max-w-xl mx-auto">
            Dark lenses without UV400 dilate the pupil while letting in UV — making uncertified glasses
            worse than wearing nothing at all. Here's exactly what the difference looks like.
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
                  <div className="text-ink-muted font-semibold">No Certification</div>
                  <div className="text-ink-light text-xs font-normal">₹0–₹299</div>
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
            ₹899 over a year = <span className="text-gold font-bold">₹2.46 per day.</span> Less than a cup of chai. Less than the cost of one bad UV day.
          </p>
          <Link href="#order-section" className="btn-primary">
            Get Game-Ready — ₹899 →
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
      title: '"He calls them his match glasses. Won\'t play without them."',
      text: "My son has played cricket for 2 years. Never wore sunglasses — always said they fell off or felt heavy. SPORTVIO has the anti-slip grip that actually works in sweat and heat. He now insists on wearing them to every match. That's the real test.",
      verified: true,
    },
    {
      name: 'Rajan Kumar',
      role: 'Father · 6 & 9-yr-old sons',
      city: 'Chennai',
      stars: 5,
      title: '"Our optometrist confirmed the UV400 rating. That\'s what closed it for me."',
      text: "I didn't buy immediately — I checked. Our family optometrist looked at the specs and confirmed the UV400 certification is genuine. The hard case is solid. Both boys have had theirs for 3 months, used daily. Zero issues.",
      verified: true,
    },
    {
      name: 'Sneha Tiwari',
      role: 'Mother · 10-yr-old swimmer & cyclist',
      city: 'Hyderabad',
      stars: 5,
      title: '"She asked if she could wear them to school. That\'s how much she likes them."',
      text: "My daughter wears them cycling every morning. They stayed on during a 12km ride on a bumpy road — that alone was remarkable. The team called 2 days after delivery to check she liked them. That kind of service from an Indian brand is rare.",
      verified: true,
    },
    {
      name: 'Deepak Rastogi',
      role: 'Father · 7-yr-old cyclist',
      city: 'Delhi',
      stars: 5,
      title: '"28 grams. He didn\'t even mention them once during a 10km ride."',
      text: "Previous sunglasses always caused problems — complaints within 20 minutes, too tight, too heavy, fog up. At 28g SPORTVIO is basically weightless. My son did 10km without a single mention of the glasses. That is how good gear should work.",
      verified: true,
    },
  ]

  return (
    <section id="reviews" className="py-24 bg-warm-cream border-y border-warm-border">
      <div className="wrap">
        <div className="text-center mb-14">
          <span className="pill mb-4 inline-flex">From Indian Parents</span>
          <h2 className="heading-lg text-4xl sm:text-5xl">
            200+ families. <span className="text-gold-shine">One verdict.</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="text-gold text-2xl">★★★★★</span>
            <span className="text-ink font-bold text-2xl">4.9</span>
            <span className="text-ink-muted">average rating across 200+ orders</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map(({ name, role, city, stars, title, text, verified }) => (
            <div key={name} className="card p-8 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex text-gold text-sm mb-2">{'★'.repeat(stars)}</div>
                  <h3 className="text-ink font-bold font-serif leading-snug">{title}</h3>
                </div>
                {verified && (
                  <span className="flex-shrink-0 text-xs bg-forest-pale border border-forest/20 text-forest px-2 py-1 rounded-full ml-3">
                    ✓ Verified
                  </span>
                )}
              </div>
              <p className="text-ink-muted text-sm leading-relaxed">{text}</p>
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
          <span className="pill-gold mb-5 inline-flex">The SPORTVIO Promise</span>
          <h2 className="heading-lg text-4xl sm:text-5xl mb-5">
            Play hard. We've got<br />
            <span className="text-gold-shine">your child covered.</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto mb-4">
            If your child doesn't love these within 30 days — for any reason —
            we'll send someone to pick them up and refund you 100%.
          </p>
          <p className="text-ink font-semibold text-lg mb-8">
            You keep the product. No courier stress. No questions asked.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
            {[
              { stat: '200+', label: 'orders shipped across India' },
              { stat: '98.4%', label: 'satisfaction rate' },
              { stat: '3', label: 'returns in total — ever' },
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
      q: 'Why pay ₹899 when I can get sunglasses for ₹299?',
      a: "This is the most important question. Dark lenses without UV400 certification dilate the pupil while letting in UV radiation — making uncertified glasses more harmful than wearing nothing. Your child squints less, so they feel protected, but their eyes are actually receiving more UV damage than without glasses at all. SPORTVIO is UV400 certified by a third-party lab. The ₹600 difference buys medical-grade lenses, a shatterproof frame, and the only protection that actually works.",
    },
    {
      q: 'What age range fits?',
      a: "SPORTVIO is designed for children aged 4–14. The frame is sized for children's facial proportions — specifically not a shrunken adult frame, which is the most common failure point in cheap kids eyewear. Anti-slip rubber grip holds on smaller faces too.",
    },
    {
      q: 'Will my child actually wear these? Kids hate wearing things.',
      a: "This was our design brief. At 28g they'll forget they're on. The anti-slip grip means no constant readjusting mid-play, which is what makes kids take glasses off. Our reviews consistently mention children who refused to wear sunglasses before now asking to wear these. A product your child refuses to wear provides exactly ₹0 of UV protection — comfort and fit aren't optional.",
    },
    {
      q: 'Are these suitable for cricket, cycling, and swimming?',
      a: "Yes for cricket and cycling — the shatterproof polycarbonate and anti-slip grip are both built for high-movement sport. For swimming, we'd recommend purpose-made swim goggles for in-water activity. These are designed for outdoor sport: cricket, football, cycling, badminton, and general outdoor play.",
    },
    {
      q: 'What if they break or get lost?',
      a: "Manufacturing defects within 30 days are replaced free. We also offer replacement lenses separately so you don't need to buy a whole new pair if only the lens is damaged. For lost pairs, WhatsApp us and we'll sort a discounted replacement — we want your child protected, not penalised for being a kid.",
    },
    {
      q: 'Does delivery reach my city? Is Cash on Delivery available?',
      a: "We deliver pan-India including tier 2 and tier 3 cities. 3–7 business days depending on location. Cash on Delivery is available on all orders. UPI, card, and net banking also accepted. You pay when the parcel arrives — not before.",
    },
  ]

  return (
    <section className="py-24 bg-warm-cream border-t border-warm-border">
      <div className="wrap-md">
        <div className="text-center mb-14">
          <span className="pill mb-4 inline-flex">Questions Answered</span>
          <h2 className="heading-lg text-4xl sm:text-5xl">
            Everything you want<br />
            <span className="text-gold-shine">to know.</span>
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

        <div className="mt-10 text-center">
          <p className="text-ink-muted text-sm mb-4">Still have a question?</p>
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20have%20a%20question%20about%20SPORTVIO"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            💬 Chat on WhatsApp — we reply within the hour
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Order Section ─────────────────────────────────────────────────────────────
function OrderSection() {
  return (
    <section id="order-section" className="py-24 bg-ink">
      <div className="wrap-md text-center">
        <span className="pill-gold mb-5 inline-flex">Limited Launch Pricing</span>
        <h2 className="font-serif font-bold text-5xl sm:text-6xl text-warm-white leading-tight tracking-tight mb-4">
          Every serious player<br />
          <span className="text-gold-shine">has their kit.</span>
        </h2>
        <p className="text-warm-white/60 text-lg max-w-xl mx-auto mb-3">
          Start with their eyes.
        </p>
        <p className="text-warm-white/50 text-base max-w-lg mx-auto mb-10">
          87 units remain at ₹899. Once they're gone, the price goes to ₹1,199.
          We removed the import premium — not the quality.
        </p>

        <div className="inline-block mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-warm-white/30 line-through text-lg">₹1,800</span>
            <span className="text-warm-white/30 line-through text-lg">₹1,200</span>
          </div>
          <div className="font-serif font-bold text-8xl text-warm-white tracking-tight">₹899</div>
          <div className="text-warm-white/50 text-sm mt-1">incl. hard case + UV cleaning cloth</div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20SPORTVIO%20sunglasses%20for%20my%20child"
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
          <span>✓ Free delivery pan-India</span>
          <span>✓ 30-day returns</span>
          <span>✓ UV400 pro-standard certified</span>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-warm-white/50 text-sm">
          <span>Launch offer ends in</span>
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
      desc: 'Impact-grade polycarbonate. Anti-slip grip. Premium case included. Built for cricket, cycling, and every Indian sport.',
      status: 'Available Now',
      available: true,
      price: '₹899',
    },
    {
      icon: '⛑️',
      name: 'Premium Sports Helmets',
      desc: 'ABS outer shell + EPS foam. Dual-density impact liner. Dial-fit system. Sized for Indian junior athletes aged 4–14.',
      status: 'Aug 2026',
      available: false,
    },
    {
      icon: '🦵',
      name: 'Pro Knee Guards',
      desc: 'Hard-shell EVA foam with breathable mesh lining. Stays in place during cycling, skating, and cricket fielding.',
      status: 'Aug 2026',
      available: false,
    },
    {
      icon: '💪',
      name: 'Elbow Guard Set',
      desc: 'Breathable impact shell. Pairs with our knee guards for full arm protection across contact and fall sports.',
      status: 'Aug 2026',
      available: false,
    },
    {
      icon: '✊',
      name: 'Knuckle Guards',
      desc: 'Full-knuckle impact coverage for cycling and outdoor sports. Ventilated palm panel. Sized for children.',
      status: 'Sep 2026',
      available: false,
    },
    {
      icon: '🩳',
      name: 'Padded Cycling Shorts',
      desc: 'Gel-pad seat cushion, anti-chafe flat seams, four-way stretch. Built for children who ride more than 5km at a stretch.',
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
            SPORTVIO is building India's first complete premium protective sports gear range
            for junior athletes. Sunglasses are just the beginning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skus.map(({ icon, name, desc, status, available, price }) => (
            <div
              key={name}
              className={`rounded-2xl border transition-all overflow-hidden ${
                available
                  ? 'bg-ink border-ink shadow-card-lg'
                  : 'card-soft hover:border-warm-muted'
              }`}
            >
              {available && (
                <div className="h-52 bg-warm-cream flex items-center justify-center p-6">
                  <img
                    src="https://www.eyewearlabs.com/cdn/shop/files/8_a9c80efa-b559-4f9b-b62b-2d7b38a83b5b.png?crop=center&height=400&v=1767342109&width=400"
                    alt="UV400 Sports Sunglasses"
                    className="h-full w-full object-contain"
                  />
                </div>
              )}
              <div className="p-7">
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
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-ink-muted mb-5 text-sm">Get early access when new gear launches</p>
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
              Help us build the perfect kit for your junior athlete.
            </h2>
            <p className="body-md mb-8">
              We read every response personally. Your feedback shapes our next product run,
              what sports we design for next, and what sizes we stock.
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
              India's first premium protective sports gear brand for junior athletes.
              UV400 sunglasses now. Full champion kit — August 2026.
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
          <p className="text-warm-white/40 text-xs">© 2026 SPORTVIO. Built for India's junior athletes. 🇮🇳</p>
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
      <SportContexts />
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
