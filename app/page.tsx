import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import CountdownTimer from '@/components/CountdownTimer'
import FeedbackForm from '@/components/FeedbackForm'

export const metadata: Metadata = {
  title: 'SPORTVIO — Premium Kids Sports Sunglasses | UV400 | ₹899 Only',
  description:
    'Buy premium UV400 sports sunglasses for kids. Shatterproof, lightweight, and built for active champions. Shop now from ₹899 — bulk & wholesale orders welcome.',
}

// ─── Section 1: Hero ──────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-[#0f1629] to-slate-900 flex flex-col justify-center overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-600/8 rounded-full blur-3xl pointer-events-none" />

      <Navbar />

      <div className="section-container pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            {/* Urgency badge */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="section-badge">
                🔥 Limited Time Offer
              </span>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                Ends in: <CountdownTimer />
              </div>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                <span className="text-white">Built for </span>
                <span className="gradient-text">Champions.</span>
                <br />
                <span className="text-white">Made to </span>
                <span className="text-orange-400">Last.</span>
              </h1>
              <p className="mt-5 text-lg text-slate-400 leading-relaxed max-w-lg">
                Premium UV400 sports sunglasses engineered for active kids aged 4–14.
                Shatterproof lenses, anti-slip grip, and a premium hard case — all included.
              </p>
            </div>

            {/* Pricing */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="price-original">MRP ₹1,800</span>
                <span className="bg-slate-700 text-slate-400 text-xs px-2 py-0.5 rounded">was</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="price-sale">₹1,200</span>
                <span className="bg-orange-900/50 text-orange-400 text-xs px-2 py-0.5 rounded font-semibold">sale</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-6xl sm:text-7xl font-black text-white">₹899</span>
                <div>
                  <div className="text-orange-400 font-bold text-sm uppercase tracking-wider">Special Price</div>
                  <div className="text-slate-500 text-xs">Incl. premium hard case + UV cloth</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 bg-green-500/15 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full">
                ✓ You save ₹901 today
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#products" className="btn-primary text-base py-4 px-8">
                Shop Now — ₹899 →
              </Link>
              <Link href="#bulk-orders" className="btn-outline text-base py-4 px-8">
                Bulk / Wholesale Orders
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              {[
                { icon: '🛡️', text: 'UV400 Certified' },
                { icon: '📦', text: 'Free Delivery' },
                { icon: '↩️', text: '30-Day Returns' },
                { icon: '💎', text: 'Premium Case Included' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-slate-400 text-sm">
                  <span>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/5 blur-2xl" />

              {/* Product showcase card */}
              <div className="relative w-full h-full flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm p-8">
                {/* Sunglass SVG illustration */}
                <svg viewBox="0 0 280 120" className="w-full max-w-xs drop-shadow-2xl" aria-label="Sports sunglasses">
                  {/* Bridge */}
                  <rect x="125" y="52" width="30" height="6" rx="3" fill="#1e293b" stroke="#f97316" strokeWidth="1" />
                  {/* Left lens */}
                  <ellipse cx="72" cy="58" rx="62" ry="44" fill="#f97316" opacity="0.25" />
                  <ellipse cx="72" cy="58" rx="60" ry="42" fill="none" stroke="#f97316" strokeWidth="3" />
                  {/* Left lens inner */}
                  <ellipse cx="72" cy="58" rx="50" ry="34" fill="#ea580c" opacity="0.15" />
                  {/* Left lens shine */}
                  <ellipse cx="55" cy="44" rx="18" ry="10" fill="white" opacity="0.08" transform="rotate(-15 55 44)" />
                  {/* Right lens */}
                  <ellipse cx="208" cy="58" rx="62" ry="44" fill="#f97316" opacity="0.25" />
                  <ellipse cx="208" cy="58" rx="60" ry="42" fill="none" stroke="#f97316" strokeWidth="3" />
                  {/* Right lens inner */}
                  <ellipse cx="208" cy="58" rx="50" ry="34" fill="#ea580c" opacity="0.15" />
                  {/* Right lens shine */}
                  <ellipse cx="191" cy="44" rx="18" ry="10" fill="white" opacity="0.08" transform="rotate(-15 191 44)" />
                  {/* Left arm */}
                  <line x1="12" y1="35" x2="12" y2="58" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
                  <line x1="12" y1="58" x2="20" y2="58" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
                  {/* Right arm */}
                  <line x1="268" y1="35" x2="268" y2="58" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
                  <line x1="268" y1="58" x2="260" y2="58" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
                </svg>

                {/* Image placeholder note */}
                <p className="text-slate-500 text-xs mt-4 text-center">Product photo coming soon</p>

                {/* Feature pills floating */}
                <div className="absolute -top-4 -right-4 bg-orange-500 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg shadow-orange-500/30">
                  UV400 ✓
                </div>
                <div className="absolute -bottom-4 -left-4 bg-slate-800 border border-orange-500/40 text-orange-400 text-xs font-bold px-3 py-1.5 rounded-full">
                  Shatterproof
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  )
}

// ─── Section 2: Trust Bar ─────────────────────────────────────────────────────
function TrustBar() {
  const stats = [
    { value: '1,000+', label: 'Happy Kids' },
    { value: 'UV400', label: 'Certified Lenses' },
    { value: '4–14', label: 'Age Range' },
    { value: '30 Days', label: 'Free Returns' },
    { value: '₹0', label: 'Delivery Cost' },
  ]

  return (
    <section className="bg-orange-500 py-5">
      <div className="section-container">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {stats.map(({ value, label }, i) => (
            <div key={label} className="flex items-center gap-3">
              {i > 0 && <div className="hidden sm:block w-px h-8 bg-orange-400" />}
              <div className="text-center">
                <div className="text-white font-black text-lg leading-tight">{value}</div>
                <div className="text-orange-100 text-xs uppercase tracking-wider">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section 3: Benefits (Why) ────────────────────────────────────────────────
function Benefits() {
  const benefits = [
    {
      icon: '🛡️',
      title: 'UV400 Eye Shield',
      desc: 'Blocks 100% of harmful UVA and UVB rays — critical for developing eyes that are 70% more sensitive than adults.',
    },
    {
      icon: '💪',
      title: 'Shatterproof Lenses',
      desc: 'Military-grade polycarbonate that takes a beating on the field, court, or track without cracking.',
    },
    {
      icon: '🪶',
      title: 'Ultralight at 28g',
      desc: 'So light your kid forgets they\'re wearing it. No more "my glasses hurt" complaints.',
    },
    {
      icon: '🤸',
      title: 'Anti-Slip Grip',
      desc: 'Rubber temple tips and nose pads that stay put even during the most intense activities.',
    },
    {
      icon: '🎁',
      title: 'Premium Case Included',
      desc: 'Every pair comes with a hard protective case and microfibre cleaning cloth worth ₹299.',
    },
    {
      icon: '⭐',
      title: '30-Day Happy Guarantee',
      desc: 'If your child doesn\'t love it in 30 days, we pick it up and refund you — no questions asked.',
    },
  ]

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-sm font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-4">
            Why SPORTVIO
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Why Every Active Kid Needs{' '}
            <span className="text-orange-500">Sports Sunglasses</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Their eyes are still developing. Cheap sunglasses without UV protection can cause more
            damage than no sunglasses at all.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="group p-8 rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 bg-white"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-lg font-black text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Parent reassurance */}
        <div className="mt-16 bg-slate-50 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">
                A message to every parent:
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We know you want the best for your child. That's why every pair of SPORTVIO sunglasses
                goes through a 12-point quality check before it reaches you. We personally call each
                customer after purchase to make sure your champion is happy.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: '12', label: 'Quality Checks' },
                { n: '100%', label: 'UV Blocked' },
                { n: '0', label: 'Harmful Materials' },
                { n: '4.9★', label: 'Parent Rating' },
              ].map(({ n, label }) => (
                <div key={label} className="bg-white rounded-2xl p-5 text-center border border-slate-100">
                  <div className="text-3xl font-black text-orange-500">{n}</div>
                  <div className="text-slate-500 text-sm mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Section 4: Products / Shop ───────────────────────────────────────────────
function Products() {
  const products = [
    {
      badge: 'Best Seller',
      badgeColor: 'bg-orange-500',
      name: 'Champion Pack',
      desc: '1 pair of premium UV400 sport sunglasses + hard case + UV cloth',
      originalPrice: '₹1,800',
      salePrice: '₹1,200',
      finalPrice: '₹899',
      savings: 'Save ₹901',
      features: ['UV400 polycarbonate lenses', 'Anti-slip rubber grip', 'Premium hard case', '30-day returns'],
      cta: 'Buy Now — ₹899',
      ctaLink: '#order',
      highlight: true,
    },
    {
      badge: 'Best Value',
      badgeColor: 'bg-amber-500',
      name: 'Twin Champion Pack',
      desc: '2 pairs for siblings or as a gift — each with case & cloth',
      originalPrice: '₹3,600',
      salePrice: '₹2,400',
      finalPrice: '₹1,699',
      savings: 'Save ₹1,901',
      features: ['2× UV400 sunglasses', '2× premium hard cases', 'Mix colours available', 'Free gift wrapping'],
      cta: 'Buy Twin Pack — ₹1,699',
      ctaLink: '#order',
      highlight: false,
    },
    {
      badge: 'Gift Ready',
      badgeColor: 'bg-purple-500',
      name: 'Champion Gift Set',
      desc: '1 pair + premium box + UV cloth + personalised card',
      originalPrice: '₹2,200',
      salePrice: '',
      finalPrice: '₹1,199',
      savings: 'Save ₹1,001',
      features: ['Premium gift packaging', 'Personalised message card', 'UV400 lenses', 'Perfect for birthdays'],
      cta: 'Buy Gift Set — ₹1,199',
      ctaLink: '#order',
      highlight: false,
    },
  ]

  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-sm font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-4">
            Shop Now
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Choose Your Champion's{' '}
            <span className="text-orange-500">Shield</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Every order ships free within India. Cash on delivery available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                p.highlight
                  ? 'bg-slate-900 border-2 border-orange-500 shadow-xl shadow-orange-500/20'
                  : 'bg-white border border-slate-200 shadow-md'
              }`}
            >
              {/* Badge */}
              <div className={`${p.badgeColor} text-white text-xs font-black px-4 py-1.5 inline-block`}>
                {p.badge}
              </div>

              {/* Product image placeholder */}
              <div className={`h-48 flex items-center justify-center ${p.highlight ? 'bg-slate-800' : 'bg-slate-50'}`}>
                <div className="text-center">
                  <div className="text-6xl mb-2">🕶️</div>
                  <div className={`text-xs ${p.highlight ? 'text-slate-500' : 'text-slate-400'}`}>Product image coming soon</div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className={`text-xl font-black ${p.highlight ? 'text-white' : 'text-slate-900'}`}>{p.name}</h3>
                  <p className={`text-sm mt-1 ${p.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{p.desc}</p>
                </div>

                {/* Pricing */}
                <div>
                  <div className="flex items-center gap-2">
                    {p.originalPrice && (
                      <span className={`line-through text-sm ${p.highlight ? 'text-slate-500' : 'text-slate-400'}`}>
                        {p.originalPrice}
                      </span>
                    )}
                    {p.salePrice && (
                      <span className={`line-through text-sm ${p.highlight ? 'text-slate-500' : 'text-slate-400'}`}>
                        {p.salePrice}
                      </span>
                    )}
                  </div>
                  <div className={`text-4xl font-black ${p.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {p.finalPrice}
                  </div>
                  <div className="text-green-500 text-sm font-semibold">{p.savings}</div>
                </div>

                {/* Features */}
                <ul className="space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className={`text-sm flex items-center gap-2 ${p.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                      <span className="text-orange-500 font-bold">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={p.ctaLink}
                  className={`block w-full text-center font-bold py-3.5 px-6 rounded-2xl transition-all duration-200 ${
                    p.highlight
                      ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5'
                      : 'bg-slate-900 hover:bg-slate-800 text-white hover:-translate-y-0.5'
                  }`}
                >
                  {p.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm">
          {[
            '🚚 Free delivery pan-India',
            '💳 UPI / Card / COD accepted',
            '📞 Support: WhatsApp us anytime',
            '🔒 100% secure checkout',
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section 5: Testimonials ─────────────────────────────────────────────────
function Testimonials() {
  const reviews = [
    {
      name: 'Priya M.',
      role: 'Mother of 8-yr-old',
      city: 'Bengaluru',
      rating: 5,
      text: 'My son refuses to play cricket without his SPORTVIO glasses now. The quality is genuinely premium — you can feel the difference the moment you hold it.',
    },
    {
      name: 'Rajan K.',
      role: 'Father of 6-yr-old',
      city: 'Chennai',
      rating: 5,
      text: 'Bought the twin pack for my kids. Both love the bright orange colour. Hard case is solid. Would buy again without hesitation.',
    },
    {
      name: 'Sneha T.',
      role: 'Mother of 10-yr-old',
      city: 'Hyderabad',
      rating: 5,
      text: 'The team actually called me after delivery to check if my daughter liked it. That personal touch is rare. 5 stars easily.',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-sm font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-4">
            Parent Reviews
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            What Parents Are <span className="text-orange-500">Saying</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map(({ name, role, city, rating, text }) => (
            <div key={name} className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <div className="flex mb-4">
                {Array.from({ length: rating }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 italic">"{text}"</p>
              <div>
                <div className="font-bold text-slate-900">{name}</div>
                <div className="text-slate-500 text-sm">{role} · {city}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-orange-50 border border-orange-200 rounded-2xl px-8 py-5">
            <div className="text-4xl font-black text-orange-500">4.9</div>
            <div>
              <div className="flex text-amber-400 text-xl">★★★★★</div>
              <div className="text-slate-500 text-sm">Based on 200+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Section 6: B2B Wholesale ─────────────────────────────────────────────────
function B2BSection() {
  const tiers = [
    {
      name: 'Starter',
      units: '100 units',
      pricePerUnit: '₹250',
      total: '₹25,000',
      support: '₹10,000 Marketing Support',
      features: [
        '₹10,000 in digital marketing support',
        'Brand posters & product images',
        'WhatsApp broadcast templates',
        'Priority restock access',
        'Dedicated account manager',
      ],
      cta: 'Start with 100 Units',
      highlight: false,
    },
    {
      name: 'Growth',
      units: '500 units',
      pricePerUnit: '₹260',
      total: '₹1,30,000',
      support: '₹35,000 Marketing Support',
      features: [
        '₹35,000 in marketing support',
        'Custom-branded display collateral',
        'Instagram reel content for your store',
        'In-store standee & poster printing',
        'Sell-through consultation call',
        'Priority restock + new SKU access',
      ],
      cta: 'Partner with 500 Units',
      highlight: true,
    },
    {
      name: 'Elite Partner',
      units: '1,000 units',
      pricePerUnit: '₹270',
      total: '₹2,70,000',
      support: 'Full Sell-Through Guarantee',
      features: [
        'Guaranteed help selling 400–500 units',
        'Premium display fixture (free)',
        'Full in-store branding setup',
        'Dedicated field support visit',
        'Co-branded Instagram campaigns',
        '₹70,000+ marketing investment from us',
      ],
      cta: 'Become Elite Partner',
      highlight: false,
    },
  ]

  return (
    <section id="bulk-orders" className="py-24 bg-slate-950">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-4">
            B2B & Wholesale
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Grow Your Store's{' '}
            <span className="gradient-text">Revenue Per Sq. Foot</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            We don't just sell you sunglasses. We make sure you sell them too.
            Our partners earn 200–300% margin while we handle the marketing.
          </p>
        </div>

        {/* Revenue per sqft callout */}
        <div className="mb-12 bg-slate-800/50 border border-slate-700 rounded-2xl p-6 max-w-2xl mx-auto text-center">
          <p className="text-slate-300">
            Buy at <span className="text-orange-400 font-black">₹250</span>. Sell at{' '}
            <span className="text-orange-400 font-black">₹799–₹1,200</span>.{' '}
            Earn <span className="text-green-400 font-black">₹549–₹950 per unit</span> — on a product
            that takes less than 1 sq. ft. of shelf space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                t.highlight
                  ? 'bg-gradient-to-br from-orange-500 to-orange-600 shadow-2xl shadow-orange-500/30'
                  : 'card-glass hover:border-orange-500/30'
              }`}
            >
              <div className="mb-6">
                <div className={`text-sm font-bold uppercase tracking-widest mb-1 ${t.highlight ? 'text-orange-100' : 'text-orange-400'}`}>
                  {t.name}
                </div>
                <div className={`text-3xl font-black ${t.highlight ? 'text-white' : 'text-white'}`}>{t.units}</div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className={`text-4xl font-black ${t.highlight ? 'text-white' : 'text-orange-400'}`}>{t.pricePerUnit}</span>
                  <span className={t.highlight ? 'text-orange-200' : 'text-slate-400'}>/ unit</span>
                </div>
                <div className={`text-sm mt-1 ${t.highlight ? 'text-orange-100' : 'text-slate-400'}`}>Total: {t.total}</div>
              </div>

              <div className={`text-sm font-bold mb-4 ${t.highlight ? 'text-white' : 'text-green-400'}`}>
                🎁 {t.support}
              </div>

              <ul className="space-y-2.5 mb-8">
                {t.features.map((f) => (
                  <li key={f} className={`text-sm flex items-start gap-2 ${t.highlight ? 'text-orange-50' : 'text-slate-300'}`}>
                    <span className={`font-bold mt-0.5 flex-shrink-0 ${t.highlight ? 'text-white' : 'text-orange-400'}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20place%20a%20bulk%20order"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center font-bold py-3.5 px-6 rounded-2xl transition-all ${
                  t.highlight
                    ? 'bg-white text-orange-600 hover:bg-orange-50'
                    : 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20'
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        {/* B2B CTA bar */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-slate-400">Not sure which tier is right for you?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20discuss%20bulk%20orders"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              💬 WhatsApp for Custom Quote
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

// ─── Section 7: Coming Soon ───────────────────────────────────────────────────
function ComingSoon() {
  const upcoming = [
    { icon: '⛑️', name: 'Premium Cycling Helmet', eta: 'Aug 2026', desc: 'Bike-grade safety meets kids\' comfort' },
    { icon: '🦵', name: 'Knee Guards', eta: 'Aug 2026', desc: 'CE-certified hard-shell protection' },
    { icon: '💪', name: 'Elbow Guards', eta: 'Aug 2026', desc: 'Impact-absorbing EVA foam lining' },
    { icon: '✊', name: 'Knuckle Guards', eta: 'Aug 2026', desc: 'Premium heavy-duty cycle protection' },
    { icon: '🩳', name: 'Cycling Shorts Kit', eta: 'Sep 2026', desc: 'Padded performance shorts for young riders' },
    { icon: '🤜', name: 'Wristband Set', eta: 'Sep 2026', desc: 'Breathable elastic with ergonomic fit' },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-4">
            Coming This Season
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            The Full Champion Kit
          </h2>
          <p className="mt-4 text-orange-100 text-lg">
            We're building the ultimate kids' sports protection brand. Starting with sunglasses —
            expanding to full head-to-toe gear for every young champion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcoming.map(({ icon, name, eta, desc }) => (
            <div key={name} className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-4xl mb-3">{icon}</div>
              <div className="text-white font-black text-lg mb-1">{name}</div>
              <div className="text-orange-200 text-sm mb-2">{desc}</div>
              <div className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                🕐 Coming {eta}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-orange-100 mb-4">Be the first to know when new products launch</p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/20 border border-white/30 text-white placeholder-orange-200 rounded-full px-5 py-3 outline-none focus:border-white/60 text-sm w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-white text-orange-600 font-bold px-6 py-3 rounded-full hover:bg-orange-50 transition-colors text-sm whitespace-nowrap"
            >
              Notify Me
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

// ─── Section 8: Feedback Form ─────────────────────────────────────────────────
function FeedbackSection() {
  return (
    <section id="feedback" className="py-24 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-sm font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
              Shape Our Product
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-6">
              Help Us Build the{' '}
              <span className="text-orange-500">Perfect Product</span>{' '}
              for Your Champion
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              We personally read every piece of feedback. Your input directly shapes our product
              improvements, new SKUs, and quality standards. As a thank-you:
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white text-xl flex-shrink-0">🎁</div>
                <div>
                  <div className="font-black text-slate-900">₹100 Off Your Next Order</div>
                  <div className="text-slate-500 text-sm">Complete the form and we'll WhatsApp your coupon code instantly</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white text-xl flex-shrink-0">📞</div>
                <div>
                  <div className="font-black text-slate-900">Personal Call From Our Team</div>
                  <div className="text-slate-500 text-sm">We'll call within 24 hours to say thank you personally</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-slate-950 rounded-3xl p-8">
            <FeedbackForm />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Section 9: Footer ────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">S</span>
              </div>
              <span className="text-white font-black text-xl tracking-tight">
                SPORT<span className="text-orange-500">VIO</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Premium kids' sports protective gear. Starting with UV400 sunglasses — building
              the full champion kit. Made with love for every young athlete.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">Instagram</a>
              <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">WhatsApp</a>
              <a
                href="mailto:hi@sportvio.in"
                className="text-slate-400 hover:text-orange-400 text-sm transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Shop', href: '#products' },
                { label: 'Bulk Orders', href: '#bulk-orders' },
                { label: 'Track Order', href: '/track' },
                { label: 'Give Feedback', href: '#feedback' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-slate-400 hover:text-orange-400 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-white font-bold mb-4">Policies</h4>
            <ul className="space-y-2">
              {[
                { label: 'Return Policy', href: '/policies#returns' },
                { label: 'Shipping Policy', href: '/policies#shipping' },
                { label: 'Privacy Policy', href: '/policies#privacy' },
                { label: 'Terms of Service', href: '/policies#terms' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-slate-400 hover:text-orange-400 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 SPORTVIO. All rights reserved. Made in India 🇮🇳
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>Secure payments:</span>
            <span className="bg-slate-800 px-2 py-0.5 rounded text-xs font-mono text-slate-400">UPI</span>
            <span className="bg-slate-800 px-2 py-0.5 rounded text-xs font-mono text-slate-400">VISA</span>
            <span className="bg-slate-800 px-2 py-0.5 rounded text-xs font-mono text-slate-400">COD</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Benefits />
      <Products />
      <Testimonials />
      <B2BSection />
      <ComingSoon />
      <FeedbackSection />
      <Footer />
    </>
  )
}
