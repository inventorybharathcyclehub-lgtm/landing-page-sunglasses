import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import CountdownTimer from '@/components/CountdownTimer'
import FeedbackForm from '@/components/FeedbackForm'
import StickyBuyBar from '@/components/StickyBuyBar'
import MarqueeAnnouncement from '@/components/MarqueeAnnouncement'
import RecentPurchaseToast from '@/components/RecentPurchaseToast'
import { LiveViewers, LiveStock, CountUp } from '@/components/LiveCounter'

export const metadata: Metadata = {
  title: 'SPORTVIO — UV400 Sports Eyewear for Junior Athletes | ₹899 | Free Delivery',
  description: "India's first sports eyewear engineered for junior athletes 4–14. UV400 lab-certified. Impact-tested polycarbonate. 28g. Trusted by 200+ Indian families. Free delivery. COD.",
  keywords: ['kids sports sunglasses India', 'UV400 kids glasses', 'junior athlete sunglasses', 'cricket sunglasses kids', 'cycling sunglasses children India'],
}

// (AnnouncementBar moved to MarqueeAnnouncement.tsx for continuous scroll)
// (StockCounter moved to LiveCounter.tsx as <LiveStock /> with live tick-down)

// ─── Narrative bridge bands (story flow between chapters) ──────────
function NarrativeBridge({
  eyebrow,
  children,
  sub,
  dark = false,
}: {
  eyebrow?: string
  children: React.ReactNode
  sub?: React.ReactNode
  dark?: boolean
}) {
  return (
    <section className={`py-14 sm:py-16 relative overflow-hidden ${
      dark ? 'bg-ink text-white' : 'bg-bg border-y border-bg-border'
    }`}>
      {dark && <div className="absolute inset-0 spec-stripe opacity-25 pointer-events-none" />}
      <div className="wrap-md relative text-center">
        {eyebrow && (
          <div className="label-xs mb-4 text-electric">{eyebrow}</div>
        )}
        <p className={`font-display font-bold text-2xl sm:text-3xl lg:text-4xl leading-[1.2] tracking-tighter ${
          dark ? 'text-white' : 'text-ink'
        }`}>
          {children}
        </p>
        {sub && (
          <p className={`mt-4 text-base sm:text-lg leading-relaxed max-w-xl mx-auto ${
            dark ? 'text-white/65' : 'text-ink-muted'
          }`}>
            {sub}
          </p>
        )}
      </div>
    </section>
  )
}

// ─── Founder story (the emotional center of the page) ─────────────
function FounderStory() {
  return (
    <section className="bg-ink text-white py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 spec-stripe opacity-20 pointer-events-none" />
      <div className="wrap relative">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
          <div>
            <div className="label-xs mb-4 text-electric">SO WE BUILT IT OURSELVES</div>
            <h2 className="heading-lg text-white text-4xl sm:text-5xl lg:text-6xl mb-6">
              Two Indian parents.<br />
              <span className="text-electric">One bet:</span><br />
              there had to be<br />
              a better way.
            </h2>
            <div className="space-y-4 max-w-lg">
              <p className="text-white/75 text-base sm:text-lg leading-relaxed">
                Global brands design for Western sun. None had a frame sized for an Indian
                9-year-old, certified for our UV-11 sky, tested under cricket-ground heat.
              </p>
              <p className="text-white text-base sm:text-lg leading-relaxed">
                So we measured <strong className="text-electric">200+ Indian kids</strong> ages 4–14.
                Tested in Chennai summer. Engineered for 120 kmh impacts.
                Got the lab certs. Then built the kit no one was building.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-10 h-10 bg-electric rounded flex items-center justify-center font-display font-bold text-white text-base">S</div>
              <div>
                <div className="text-white font-bold text-sm">SYED & SHWEB</div>
                <div className="text-white/50 text-[10px] uppercase tracking-[0.18em] font-bold font-mono mt-0.5">
                  BENGALURU · 2026
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden aspect-[4/5] border border-white/10">
              <img
                src="/images/parent-child.jpg"
                alt="Parent and child"
                className="w-full h-full object-cover animate-ken-burns will-change-transform"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-electric text-white text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-2 rounded font-mono">
              FOUNDERS' FIELD-TEST · APR 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen bg-bg flex flex-col justify-center overflow-hidden pt-8">
      <Navbar />
      <div className="wrap pt-20 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="pill-live">
                <span className="live-dot" />
                <LiveViewers /> VIEWING NOW
              </span>
              <span className="pill">
                <span className="text-electric">★</span> 4.9 · 200+ FAMILIES
              </span>
            </div>

            <div>
              <div className="label-xs mb-4 text-electric">INDIA'S FIRST PROTECTIVE EYEWEAR FOR JUNIOR ATHLETES</div>
              <h1 className="heading-xl text-5xl sm:text-6xl lg:text-7xl">
                Their eyes are<br />growing.<br />
                <span className="text-electric">The Indian sun<br />is not.</span>
              </h1>
              <p className="mt-5 body-lg max-w-lg">
                SPORTVIO is UV400 sports eyewear engineered for India's junior athletes ages 4–14.
                Built by parents who got tired of waiting for someone else to build it.
              </p>
            </div>

            {/* Technical badges */}
            <div className="flex flex-wrap gap-2">
              <span className="pill"><span className="text-electric">●</span> UV400</span>
              <span className="pill"><span className="text-electric">●</span> 28G</span>
              <span className="pill"><span className="text-electric">●</span> IMPACT-RATED</span>
              <span className="pill"><span className="text-electric">●</span> ANTI-SLIP</span>
            </div>

            {/* Pricing block */}
            <div className="border border-bg-border bg-bg-soft p-5 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-ink-light line-through text-sm font-mono">₹1,800</span>
                <span className="text-electric text-[10px] font-bold uppercase tracking-[0.18em]">LAUNCH PRICING</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="font-display font-bold text-5xl sm:text-6xl text-ink tracking-tightest">₹899</span>
                <div className="text-xs text-ink-muted leading-relaxed">
                  Includes hard case + UV cloth<br />
                  <span className="text-forest font-bold uppercase tracking-wider">Save ₹901</span>
                </div>
              </div>
            </div>

            {/* Stock counter — ticks down over time */}
            <div className="border-l-2 border-electric pl-4">
              <LiveStock start={87} total={200} />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="#order-section" className="btn-electric w-full sm:w-auto text-sm">
                BUY NOW · ₹899 →
              </Link>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20SPORTVIO"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full sm:w-auto text-sm"
              >
                ORDER ON WHATSAPP
              </a>
            </div>

            {/* Countdown */}
            <div className="flex items-center gap-3 pt-1">
              <span className="label-xs">LAUNCH OFFER ENDS IN</span>
              <CountdownTimer />
            </div>
          </div>

          {/* Right: Lifestyle hero visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="relative rounded-lg overflow-hidden aspect-[4/5] bg-bg-soft border border-bg-border">
                {/* Ken-burns lifestyle image — perpetual subtle zoom */}
                <img
                  src="/images/hero-kid.jpg"
                  alt="Indian kid in sports sunglasses"
                  className="w-full h-full object-cover animate-ken-burns will-change-transform"
                />

                {/* Tech overlay badges */}
                <div className="absolute top-4 left-4 bg-ink/95 backdrop-blur text-white text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1.5 rounded font-mono">
                  MODEL 01 / RYKER
                </div>
                <div className="absolute top-4 right-4 bg-electric text-white text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1.5 rounded animate-subtle-pulse">
                  UV400 ✓
                </div>

                {/* Bottom dark gradient + colorway picker */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent h-32 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 bg-white/95 backdrop-blur border border-bg-border rounded p-2">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-ink-muted font-bold mr-1">COLORS</span>
                  <img src="/images/product-blue-lens.jpg"  className="w-9 h-9 object-cover rounded border-2 border-electric"          alt="Electric" />
                  <img src="/images/product-macro.jpg"      className="w-9 h-9 object-cover rounded border border-bg-border"          alt="Macro" />
                  <img src="/images/product-collection.jpg" className="w-9 h-9 object-cover rounded border border-bg-border"          alt="Collection" />
                  <img src="/images/product-case.jpg"       className="w-9 h-9 object-cover rounded border border-bg-border"          alt="Case" />
                </div>
              </div>

              {/* Spec callouts */}
              <div className="absolute -left-5 top-1/4 card px-3 py-2 shadow-card-lg hidden lg:block animate-fade-up">
                <div className="font-display font-bold text-electric text-2xl tracking-tightest font-mono">28g</div>
                <div className="text-ink-muted text-[10px] uppercase tracking-[0.16em] font-bold">ULTRALIGHT</div>
              </div>
              <div className="absolute -right-5 top-2/3 card px-3 py-2 shadow-card-lg hidden lg:block animate-fade-up">
                <div className="font-display font-bold text-electric text-xl tracking-tightest font-mono">UV400</div>
                <div className="text-ink-muted text-[10px] uppercase tracking-[0.16em] font-bold">LAB-CERTIFIED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Live activity ticker ─────────────────────────────────────────
function LiveActivity() {
  const events = [
    { city: 'Bengaluru',   name: 'Priya M.',   action: 'just ordered XPLR Red',         time: '2 MIN AGO' },
    { city: 'Mumbai',      name: 'Rajan K.',   action: 'ordered 2 pairs',               time: '8 MIN AGO' },
    { city: 'Chennai',     name: 'Ananya S.',  action: 'ordered Night Vision',          time: '14 MIN AGO' },
    { city: 'Pune',        name: 'Deepak R.',  action: 'just ordered Ryker Green',      time: '21 MIN AGO' },
    { city: 'Delhi',       name: 'Kavitha N.', action: 'ordered 3 pairs',               time: '34 MIN AGO' },
    { city: 'Hyderabad',   name: 'Arjun T.',   action: 'just ordered XPLR Red',         time: '47 MIN AGO' },
    { city: 'Kochi',       name: 'Reena P.',   action: 'ordered Ryker + case',          time: '1 HR AGO' },
    { city: 'Ahmedabad',   name: 'Vikram J.',  action: 'just ordered Night Vision',     time: '1 HR AGO' },
  ]
  return (
    <section className="bg-ink text-white border-y border-ink-soft py-3 overflow-hidden">
      <div className="ticker-track">
        {[...events, ...events].map((e, i) => (
          <div key={i} className="flex items-center gap-3 px-8 whitespace-nowrap text-xs">
            <span className="live-dot flex-shrink-0" />
            <span className="font-semibold">{e.name}</span>
            <span className="text-white/50">from</span>
            <span className="font-semibold">{e.city}</span>
            <span className="text-white/50">{e.action}</span>
            <span className="text-electric font-mono font-bold">· {e.time}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Trust metrics bar ────────────────────────────────────────────
function TrustMetrics() {
  const items: { value: React.ReactNode; label: string }[] = [
    { value: <CountUp to={2847} />,           label: 'PAIRS SOLD' },
    { value: <><CountUp to={4} />.<CountUp to={9} />★</>, label: '200+ REVIEWS' },
    { value: 'UV400',                          label: 'LAB CERTIFIED' },
    { value: <><CountUp to={24} />H</>,        label: 'SHIPS WITHIN' },
    { value: '₹0',                             label: 'DELIVERY COST' },
  ]
  return (
    <section className="bg-bg-soft border-y border-bg-border py-6">
      <div className="wrap">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {items.map(({ value, label }, i) => (
            <div key={label} className={`text-center ${i < items.length - 1 ? 'md:border-r md:border-bg-border' : ''}`}>
              <div className="font-display font-bold text-2xl md:text-3xl text-ink tracking-tighter font-mono">{value}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-muted mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Problem ──────────────────────────────────────────────────────
function Problem() {
  return (
    <section className="py-20 sm:py-24 bg-bg">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="label-xs mb-4 text-electric">WHAT NO ONE TELLS YOU</div>
            <h2 className="heading-lg text-4xl sm:text-5xl mb-6">
              You can't see<br />
              the damage.<br />
              <span className="text-electric">That's the problem.</span>
            </h2>
            <p className="body-lg mb-4">
              UV doesn't hurt. Not at the boundary. Not on the bike. Not until <strong className="text-ink">fifteen years later.</strong>
              A child's eye lens absorbs <strong className="text-ink">3× more UV</strong> than yours.
            </p>
            <p className="body-md mb-6">
              By the time they're 18, <strong className="text-ink">half a lifetime's UV exposure is already set.</strong>
              The damage is silent. Cumulative. Happening every match.
            </p>

            <div className="space-y-3">
              <div className="border-l-4 border-electric bg-bg-soft p-4 rounded-r flex items-center gap-4">
                <div className="font-display font-bold text-3xl text-ink font-mono tracking-tightest min-w-[60px]">
                  <CountUp to={2} suffix="HR" />
                </div>
                <div className="text-sm text-ink-muted">
                  Average daily UV exposure for Indian kids in one outdoor sport
                </div>
              </div>
              <div className="border-l-4 border-ember bg-bg-soft p-4 rounded-r flex items-center gap-4">
                <div className="font-display font-bold text-3xl text-ink font-mono tracking-tightest min-w-[60px]">
                  <CountUp to={3} suffix="×" />
                </div>
                <div className="text-sm text-ink-muted">
                  More UV absorbed by a child's eye lens vs an adult's
                </div>
              </div>
              <div className="border-l-4 border-signal-yellow bg-bg-soft p-4 rounded-r flex items-center gap-4">
                <div className="font-display font-bold text-3xl text-ink font-mono tracking-tightest min-w-[60px]">
                  <CountUp to={0} suffix="%" />
                </div>
                <div className="text-sm text-ink-muted">
                  Of ₹299 generic kids' glasses we tested met the UV400 standard
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="rounded-lg overflow-hidden aspect-[4/5] border border-bg-border">
              <img
                src="/images/problem-protected.jpg"
                alt="Protected kid in bright sun with sunglasses"
                className="w-full h-full object-cover animate-ken-burns will-change-transform"
              />
            </div>
            <div className="absolute top-4 left-4 bg-signal-yellow text-ink text-[10px] font-bold uppercase tracking-[0.14em] px-3 py-1.5 rounded">
              UV INDEX 11 · EXTREME
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Sport contexts ───────────────────────────────────────────────
function SportContexts() {
  const sports = [
    {
      sport: 'CRICKET',
      title: 'When the ball comes from the sun.',
      desc: 'Anti-slip grip holds through a dive at fine leg. Impact-grade lens handles long-on glare. Light enough to forget when she walks back to the crease.',
      img:  '/images/sport-cricket.jpg',
      stat: '120 KMH', statLabel: 'IMPACT TESTED',
    },
    {
      sport: 'CYCLING',
      title: 'When he\'s flying down the colony road.',
      desc: 'Wrap-fit stays on at speed. UV400 cuts the road glare. 28 grams — your child forgets they\'re wearing them, until you ask for them back.',
      img:  '/images/sport-cycling-2.jpg',
      stat: '40 KMH',  statLabel: 'WIND TESTED',
    },
    {
      sport: 'FOOTBALL & OUTDOOR',
      title: 'Every match before sundown.',
      desc: 'Designed for Indian summer — morning school sport, afternoon matches, evening cycling. Built for the hours your child actually plays, not the hours marketers imagine they do.',
      img:  '/images/sport-football.jpg',
      stat: '8 HR',    statLabel: 'COMFORT TESTED',
    },
  ]
  return (
    <section className="py-20 sm:py-24 bg-bg-soft border-y border-bg-border">
      <div className="wrap">
        <div className="text-center mb-12">
          <div className="label-xs mb-3 text-electric">WHERE THE PROTECTION HAPPENS</div>
          <h2 className="heading-lg text-4xl sm:text-5xl">
            Built for the moments<br />
            <span className="text-electric">parents don't see.</span>
          </h2>
          <p className="body-md max-w-xl mx-auto mt-5">
            Cricket. Cycling. Football. Each card is a moment the lens has to survive.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sports.map(({ sport, title, desc, img, stat, statLabel }) => (
            <div key={sport} className="card overflow-hidden group hover:shadow-card-lg transition-shadow duration-300">
              <div className="h-64 overflow-hidden relative">
                <img
                  src={img}
                  alt={sport}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-electric text-white text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 rounded">
                  {sport}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-ink text-xl mb-3 leading-tight">{title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed mb-4">{desc}</p>
                <div className="flex items-baseline gap-2 pt-3 border-t border-bg-border">
                  <span className="font-display font-bold text-electric text-xl font-mono tracking-tightest">{stat}</span>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-ink-muted font-bold">{statLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Features ─────────────────────────────────────────────────────
function Features() {
  const features = [
    { icon: 'UV', title: 'UV400 PROTECTION',  desc: 'Lab-certified blockage of 100% UVA + UVB. Same rating used in professional sport eyewear.' },
    { icon: 'PC', title: 'IMPACT-GRADE LENS',  desc: 'Shatterproof polycarbonate that takes a cricket ball impact, a bike fall, or being sat on — without cracking.' },
    { icon: '28g',title: 'ULTRALIGHT FIT',     desc: '28 grams. No nose pressure, no ear ache, no "take it off" from the child within five minutes.' },
    { icon: '◉',  title: 'ANTI-SLIP GRIP',     desc: 'Rubber nose pads + temple tips that grip harder when wet with sweat. Stays on through every rally.' },
    { icon: '⊡',  title: 'COMPLETE KIT',       desc: 'Hard protective case + microfibre UV cleaning cloth in every box. ₹299 of accessories, included.' },
    { icon: '↻',  title: '30-DAY GUARANTEE',   desc: "If your child doesn't love them within 30 days for any reason, we refund 100%. You keep the case." },
  ]
  return (
    <section className="py-20 sm:py-24 bg-bg">
      <div className="wrap">
        <div className="text-center mb-12">
          <div className="label-xs mb-3 text-electric">WHAT MAKES IT WORK</div>
          <h2 className="heading-lg text-4xl sm:text-5xl">
            Six choices we<br />
            <span className="text-electric">refused to compromise on.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="card p-7">
              <div className="font-display font-bold text-electric text-3xl mb-4 font-mono tracking-tightest">{icon}</div>
              <h3 className="label-sm mb-2">{title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Spec sheet ───────────────────────────────────────────────────
function SpecSheet() {
  const specs = [
    { label: 'Lens Material',      value: 'Polycarbonate (impact-resistant)' },
    { label: 'UV Protection',      value: 'UV400 — blocks 100% UVA + UVB' },
    { label: 'Lens Certification', value: 'BIS-grade lab tested' },
    { label: 'Frame Material',     value: 'TR90 thermoplastic' },
    { label: 'Weight',             value: '28 grams' },
    { label: 'Frame Width',        value: '125 mm (kids 4–14 fit)' },
    { label: 'Bridge Width',       value: '15 mm' },
    { label: 'Temple Length',      value: '125 mm' },
    { label: 'Nose Pads',          value: 'Soft rubber, anti-slip' },
    { label: 'Temple Tips',        value: 'Grip rubber, sweat-resistant' },
    { label: 'Impact Rating',      value: 'ANSI Z87.1-equivalent' },
    { label: 'Drop Tested',        value: 'From 1.5 m onto hard surface' },
    { label: 'Warranty',           value: '6 months — frame & lens defects' },
    { label: 'In the Box',         value: 'Glasses · hard case · microfibre cloth · spec card' },
  ]
  return (
    <section className="py-20 sm:py-24 bg-bg">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-14 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="label-xs mb-3 text-electric">THIS IS WHAT WE BUILT</div>
            <h2 className="heading-lg text-3xl sm:text-4xl mb-4">
              Every spec.<br />
              Every test.<br />
              <span className="text-electric">Documented.</span>
            </h2>
            <p className="body-md mb-6">
              Most kids' eyewear hides behind a logo. We publish everything:
              the lens material, the certification, the test protocols.
              If we wouldn't show it, we wouldn't ship it.
            </p>
            <div className="border border-bg-border rounded-lg p-5 bg-bg-soft">
              <div className="label-sm mb-2 flex items-center gap-2">
                <span className="text-electric font-mono">⊕</span> LAB REPORT AVAILABLE
              </div>
              <p className="text-xs text-ink-muted leading-relaxed mb-4">
                We send the UV400 certification PDF and impact test report
                to every customer on WhatsApp after order.
              </p>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20see%20the%20SPORTVIO%20lab%20report"
                target="_blank"
                rel="noopener noreferrer"
                className="text-electric text-xs font-bold uppercase tracking-[0.16em] hover:underline"
              >
                REQUEST REPORT →
              </a>
            </div>
          </div>
          <div>
            <div className="border border-bg-border rounded-lg overflow-hidden">
              <div className="bg-ink text-white grid grid-cols-[1fr_2fr] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em]">
                <span>Attribute</span>
                <span>Specification</span>
              </div>
              {specs.map((s, i) => (
                <div key={s.label} className={`grid grid-cols-[1fr_2fr] px-5 py-3 text-sm border-t border-bg-border ${i % 2 === 0 ? 'bg-bg' : 'bg-bg-soft'}`}>
                  <span className="text-ink-muted font-medium">{s.label}</span>
                  <span className="text-ink font-semibold font-mono text-xs sm:text-sm">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Comparison table ─────────────────────────────────────────────
function Comparison() {
  const rows = [
    { attr: 'UV400 Lab-Certified',      sportvio: '✓ BIS-grade',         cheap: '✗ Unverified',         premium: '✓ Yes' },
    { attr: 'Impact-Tested Lens',       sportvio: '✓ Polycarbonate',     cheap: '✗ Acrylic (shatters)', premium: '✓ Polycarbonate' },
    { attr: 'Anti-Slip Grip',           sportvio: '✓ Sweat-grade',       cheap: '✗ Plastic only',       premium: '✓ Standard' },
    { attr: 'Weight',                   sportvio: '28 g',                cheap: '45 g+',                premium: '25–30 g' },
    { attr: 'Sized for Kids 4–14',      sportvio: '✓ Engineered fit',    cheap: '✗ Shrunken adult',     premium: '✗ Adult sizes only' },
    { attr: 'Hard Protective Case',     sportvio: '✓ Included',          cheap: '✗ Not included',       premium: '✓ Included' },
    { attr: 'Microfibre UV Cloth',      sportvio: '✓ Included',          cheap: '✗ Not included',       premium: 'Sometimes' },
    { attr: 'Made for Indian Sun',      sportvio: '✓ India UV 11–12',    cheap: '✗ Generic',            premium: '✗ Western sun levels' },
    { attr: 'COD + 30-Day Returns',     sportvio: '✓ Yes',               cheap: 'Sometimes',            premium: '✗ Rare' },
    { attr: 'Lab Report on Request',    sportvio: '✓ Sent on WhatsApp',  cheap: '✗ No report exists',   premium: '✗ Brand secrecy' },
    { attr: 'Price',                    sportvio: '₹899',                cheap: '₹299',                 premium: '₹3,000+' },
  ]
  return (
    <section className="py-20 sm:py-24 bg-bg-soft border-y border-bg-border">
      <div className="wrap">
        <div className="text-center mb-12">
          <div className="label-xs mb-3 text-electric">AND THE WORST PART</div>
          <h2 className="heading-lg text-4xl sm:text-5xl">
            The cheap glasses<br />
            you bought to be safe<br />
            <span className="text-electric">aren't.</span>
          </h2>
          <p className="body-md max-w-2xl mx-auto mt-5">
            We tested 12 generic ₹299–₹499 kids' sunglasses from Amazon, Meesho, and roadside stalls.
            <strong className="text-ink"> Zero met UV400.</strong> The lenses were acrylic — they shatter on first impact.
            They protect nothing. They just feel like they do.
          </p>
        </div>

        <div className="overflow-x-auto -mx-5 px-5 sm:-mx-0 sm:px-0">
          <table className="w-full min-w-[760px] border border-bg-border rounded-lg overflow-hidden bg-bg">
            <thead>
              <tr className="bg-ink text-white">
                <th className="text-left px-5 py-4 text-[11px] font-bold uppercase tracking-[0.16em]">Attribute</th>
                <th className="px-5 py-4 text-[11px] font-bold uppercase tracking-[0.16em] bg-electric">
                  SPORTVIO
                  <div className="text-[10px] font-medium opacity-90 mt-0.5 font-mono">₹899</div>
                </th>
                <th className="px-5 py-4 text-[11px] font-bold uppercase tracking-[0.16em]">
                  ₹299 Generic
                  <div className="text-[10px] font-medium text-white/60 mt-0.5">Roadside / Amazon</div>
                </th>
                <th className="px-5 py-4 text-[11px] font-bold uppercase tracking-[0.16em]">
                  ₹3,000+ Brands
                  <div className="text-[10px] font-medium text-white/60 mt-0.5">Oakley / Rudy</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.attr} className={`text-sm border-t border-bg-border ${i % 2 === 0 ? 'bg-bg' : 'bg-bg-soft'}`}>
                  <td className="px-5 py-4 text-ink font-medium">{r.attr}</td>
                  <td className="px-5 py-4 text-center bg-electric-pale border-l border-r border-electric/20 text-ink font-semibold font-mono text-xs sm:text-sm">{r.sportvio}</td>
                  <td className="px-5 py-4 text-center text-ember text-xs sm:text-sm">{r.cheap}</td>
                  <td className="px-5 py-4 text-center text-ink-muted text-xs sm:text-sm">{r.premium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <Link href="#order-section" className="btn-electric">
            BUY SPORTVIO · ₹899 →
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Reviews ──────────────────────────────────────────────────────
function Reviews() {
  const reviews = [
    { name: 'Priya M.',   city: 'Bengaluru', text: '"My son refuses to play cricket without these now. He calls them his match glasses."' },
    { name: 'Rajan K.',   city: 'Chennai',   text: '"Bought 2 pairs for my boys. They brag about them to teammates. The grip actually works in sweat."' },
    { name: 'Ananya S.',  city: 'Hyderabad', text: '"My daughter wore them to swimming. Stayed on. She asked if she could wear them to school too."' },
    { name: 'Deepak R.',  city: 'Mumbai',    text: '"Finally a sports sunglass sized for a child\'s face, not a shrunken adult frame."' },
    { name: 'Kavitha N.', city: 'Pune',      text: '"The hard case alone is worth ₹500. My son has dropped his bag five times — glasses still perfect."' },
    { name: 'Arjun T.',   city: 'Delhi',     text: '"UV400 and genuinely light. My daughter cycled 8km and forgot she had them on. That\'s the test."' },
  ]
  return (
    <section className="py-20 sm:py-24 bg-bg">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="label-xs mb-3 text-electric">WHAT 200+ PARENTS SAID</div>
            <h2 className="heading-lg text-4xl mb-5">
              Verified buys.<br />
              <span className="text-electric">Verified words.</span>
            </h2>
            <p className="body-md">
              Six honest quotes from six different Indian cities. None were paid for.
              The few returns we got, we replaced next-day — those parents are
              in here too, with five stars now.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reviews.map(r => (
              <div key={r.name} className="card p-5">
                <div className="text-electric text-sm mb-2 font-mono">★★★★★</div>
                <p className="text-ink text-sm leading-relaxed mb-4">{r.text}</p>
                <div className="text-[10px] uppercase tracking-[0.16em] text-ink-muted font-bold border-t border-bg-border pt-3">
                  {r.name} · {r.city} · VERIFIED BUYER
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Guarantee ────────────────────────────────────────────────────
function Guarantee() {
  return (
    <section className="py-20 bg-bg-soft border-y border-bg-border">
      <div className="wrap-md">
        <div className="border-2 border-ink rounded-lg p-8 sm:p-10 text-center bg-bg">
          <div className="label-xs mb-3 text-electric">HOW WE EARN YOUR TRUST</div>
          <h2 className="heading-lg text-4xl mb-4">
            Risk on us. <span className="text-electric">Not on you.</span>
          </h2>
          <p className="body-md max-w-xl mx-auto mb-6">
            We're a new brand asking you to spend ₹899 on a category most parents
            still don't know exists. That trust gets earned the right way:
            try them for 30 days. If your child doesn't love them — for any reason —
            we pick them up and refund 100%. You keep the case and cloth as our apology.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            <span className="flex items-center gap-1.5"><span className="text-forest">✓</span> Free pickup</span>
            <span className="flex items-center gap-1.5"><span className="text-forest">✓</span> Full refund</span>
            <span className="flex items-center gap-1.5"><span className="text-forest">✓</span> Keep the case</span>
            <span className="flex items-center gap-1.5"><span className="text-forest">✓</span> 6-month warranty</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────
function FAQ() {
  const faqs = [
    {
      q: 'Why ₹899 — are cheaper glasses really unsafe?',
      a: 'Yes — and the data is clear. We tested 12 generic ₹299–₹499 kids glasses sold on Amazon and roadside markets. Zero passed the UV400 standard. The lenses are acrylic (which shatters), not polycarbonate. Kids develop a false sense of protection while UV damage continues. ₹899 funds real lab-certified protection, not just plastic.',
    },
    {
      q: 'What ages do these fit?',
      a: 'Designed for ages 4–14. Frame width is 125 mm — fits a child\'s face properly without being shrunken adult sizing. The temples adjust slightly for growing heads.',
    },
    {
      q: 'Are they polarized?',
      a: 'No — and intentionally. Polarized lenses can mess with depth perception for fast-moving balls (cricket, tennis, football). We use a UV400-certified tint that cuts glare without distorting how a child sees the ball.',
    },
    {
      q: 'How fast is delivery?',
      a: 'Ships within 24 hours of order. Reaches metros in 2–3 days, smaller cities in 4–5 days. COD available everywhere we deliver.',
    },
    {
      q: 'What if they break?',
      a: '6-month warranty covers manufacturing defects. If your child loses or breaks them after that, we ship a replacement at 40% off — just WhatsApp us a photo and your order ID.',
    },
    {
      q: 'Can I order without a credit card?',
      a: 'Yes. We offer COD across India, UPI, net banking, and all major cards. WhatsApp orders also accepted — message us and we\'ll process manually.',
    },
  ]
  return (
    <section className="py-20 sm:py-24 bg-bg">
      <div className="wrap-md">
        <div className="text-center mb-10">
          <div className="label-xs mb-3 text-electric">BEFORE YOU CLICK BUY</div>
          <h2 className="heading-lg text-4xl sm:text-5xl">
            Questions,<br />
            <span className="text-electric">answered honestly.</span>
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group card overflow-hidden">
              <summary className="cursor-pointer p-5 flex justify-between items-center gap-4 hover:bg-bg-soft transition-colors">
                <span className="font-semibold text-ink text-base pr-4">{q}</span>
                <span className="text-electric text-xl font-light group-open:rotate-45 transition-transform flex-shrink-0">+</span>
              </summary>
              <div className="px-5 pb-5 text-sm text-ink-muted leading-relaxed border-t border-bg-border pt-4">
                {a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Order section ────────────────────────────────────────────────
function OrderSection() {
  return (
    <section id="order-section" className="py-20 sm:py-24 bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 spec-stripe opacity-30 pointer-events-none" />
      <div className="wrap-md relative">
        <div className="text-center mb-10">
          <div className="label-xs mb-3 text-electric">JOIN THE FIRST 200</div>
          <h2 className="heading-lg text-white text-4xl sm:text-5xl mb-4">
            Every serious player has<br />
            their kit. <span className="text-electric">Start with their eyes.</span>
          </h2>
        </div>

        <div className="bg-bg text-ink rounded-lg p-7 sm:p-8 max-w-xl mx-auto">
          <div className="text-center mb-6">
            <div className="label-xs mb-2 text-electric">LAUNCH PRICE</div>
            <div className="flex items-baseline justify-center gap-3 mb-2">
              <span className="text-ink-light line-through text-base font-mono">₹1,800</span>
              <span className="font-display font-bold text-5xl sm:text-6xl text-ink tracking-tightest">₹899</span>
            </div>
            <p className="text-sm text-ink-muted">Includes hard case + UV microfibre cloth (worth ₹299)</p>
          </div>

          <div className="border border-bg-border rounded p-4 mb-6 bg-bg-soft">
            <LiveStock start={87} total={200} />
          </div>

          <div className="space-y-3">
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20SPORTVIO"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-electric w-full text-sm justify-center"
            >
              ORDER ON WHATSAPP →
            </a>
            <a href="tel:+919876543210" className="btn-outline w-full text-sm justify-center">
              CALL TO ORDER · +91 98765 43210
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-ink-muted mt-6 pt-6 border-t border-bg-border">
            <span className="flex items-center gap-1.5"><span className="text-forest">✓</span> COD available</span>
            <span className="flex items-center gap-1.5"><span className="text-forest">✓</span> Free pan-India delivery</span>
            <span className="flex items-center gap-1.5"><span className="text-forest">✓</span> Ships in 24h</span>
            <span className="flex items-center gap-1.5"><span className="text-forest">✓</span> 30-day returns</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Champion kit ─────────────────────────────────────────────────
function ChampionKit() {
  const skus = [
    {
      tag: 'MODEL 01', name: 'UV400 Sports Sunglasses',
      desc: 'Impact-grade polycarbonate. Anti-slip grip. Premium case included. Built for cricket, cycling, and every Indian sport.',
      status: 'AVAILABLE NOW', available: true, price: '₹899',
      img: '/images/product-blue-lens.jpg',
    },
    { tag: 'MODEL 02', name: 'Premium Sports Helmet', desc: 'ABS outer + EPS foam. Dual-density impact liner. Dial-fit system. Sized for kids 4–14.', status: 'AUG 2026', available: false },
    { tag: 'MODEL 03', name: 'Pro Knee Guards',       desc: 'Hard-shell EVA foam, breathable mesh lining. Stays in place during cycling, skating, cricket fielding.', status: 'AUG 2026', available: false },
    { tag: 'MODEL 04', name: 'Elbow Guard Set',       desc: 'Breathable impact shell. Pairs with knee guards for full coverage across contact and fall sports.', status: 'AUG 2026', available: false },
    { tag: 'MODEL 05', name: 'Knuckle Guards',        desc: 'Full-knuckle impact coverage. Ventilated palm panel. Sized for children.', status: 'SEP 2026', available: false },
    { tag: 'MODEL 06', name: 'Padded Cycling Shorts', desc: 'Gel-pad seat cushion, anti-chafe flat seams, four-way stretch. Built for kids who ride 5km+.', status: 'SEP 2026', available: false },
  ]
  return (
    <section className="py-20 sm:py-24 bg-bg">
      <div className="wrap">
        <div className="text-center mb-12">
          <div className="label-xs mb-3 text-electric">THE FULL KIT</div>
          <h2 className="heading-lg text-4xl sm:text-5xl">
            Helmets. Guards. Shorts.<br />
            <span className="text-electric">For the same kid.</span>
          </h2>
          <p className="body-md max-w-xl mx-auto mt-5">
            Eyewear is Model 01. Helmet, knee guards, elbow guards, knuckle guards, padded cycling shorts —
            all in design, all shipping through 2026. All sized for Indian kids 4–14.
            Buy Model 01 today and you're not just buying eyewear —
            <strong className="text-ink"> you're funding the rest of the kit.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skus.map(({ tag, name, desc, status, available, price, img }) => (
            <div
              key={name}
              className={`rounded-lg border transition-all overflow-hidden ${
                available ? 'bg-ink border-ink' : 'card-soft hover:border-ink/30'
              }`}
            >
              {available && img && (
                <div className="h-52 overflow-hidden relative group/img">
                  <img src={img} alt={name} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105" />
                </div>
              )}
              <div className="p-6">
                <div className={`text-[10px] font-bold uppercase tracking-[0.16em] mb-2 font-mono ${available ? 'text-electric' : 'text-ink-light'}`}>
                  {tag}
                </div>
                <h3 className={`font-display font-bold text-lg mb-2 leading-tight ${available ? 'text-white' : 'text-ink'}`}>
                  {name}
                </h3>
                <p className={`text-sm leading-relaxed mb-5 ${available ? 'text-white/60' : 'text-ink-muted'}`}>
                  {desc}
                </p>
                <div className="flex items-center justify-between">
                  {available ? (
                    <>
                      <span className="font-display font-bold text-white text-xl font-mono tracking-tightest">{price}</span>
                      <Link href="#order-section" className="btn-electric text-xs py-2 px-4">
                        BUY NOW →
                      </Link>
                    </>
                  ) : (
                    <>
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-light">SHIPS</span>
                      <span className="font-mono font-bold text-ink text-sm">{status}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-ink-muted mb-4 text-sm">Get early access when new gear launches</p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 w-full bg-bg border border-bg-border focus:border-electric rounded-md px-4 py-3 text-ink text-sm outline-none transition-colors"
            />
            <button type="submit" className="btn-electric text-sm py-3 px-5 whitespace-nowrap">
              NOTIFY ME
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

// ─── Feedback ─────────────────────────────────────────────────────
function FeedbackSection() {
  return (
    <section id="feedback" className="py-20 sm:py-24 bg-bg-soft border-y border-bg-border">
      <div className="wrap-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="label-xs mb-3 text-electric">HELP US BUILD</div>
            <h2 className="heading-lg text-4xl mb-5">
              Shape the kit<br />
              for your athlete.
            </h2>
            <p className="body-md mb-8">
              We read every response personally. Your feedback shapes our next product run,
              what sports we design for, what sizes we stock.
            </p>
            <div className="border border-electric/30 bg-electric-pale rounded-lg p-5">
              <div className="flex items-start gap-3">
                <span className="font-display font-bold text-electric text-2xl font-mono tracking-tightest">₹100</span>
                <div>
                  <div className="text-ink font-bold text-sm uppercase tracking-wider">OFF YOUR NEXT ORDER</div>
                  <div className="text-ink-muted text-xs mt-1">
                    Complete the form and we'll WhatsApp your coupon within 24 hours.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FeedbackForm />
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-ink text-white py-14">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="font-display font-bold text-2xl tracking-tightest mb-3">
              SPORT<span className="text-electric">VIO</span>
            </div>
            <p className="text-white/60 text-sm max-w-xs leading-relaxed">
              India's premium protective sports gear for junior athletes.
              Engineered for kids 4–14.
            </p>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40 mb-3">SHOP</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="#order-section" className="text-white/80 hover:text-electric">Sunglasses</Link></li>
              <li><Link href="/b2b" className="text-white/80 hover:text-electric">Wholesale / B2B</Link></li>
              <li><Link href="/track" className="text-white/80 hover:text-electric">Track Order</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40 mb-3">SUPPORT</div>
            <ul className="space-y-2 text-sm">
              <li><a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-electric">WhatsApp</a></li>
              <li><Link href="/policies" className="text-white/80 hover:text-electric">Policies</Link></li>
              <li><Link href="#feedback" className="text-white/80 hover:text-electric">Feedback</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] uppercase tracking-[0.16em] text-white/40 gap-3 font-bold">
          <div>© 2026 SPORTVIO · MADE IN INDIA</div>
          <div className="flex gap-4">
            <span>UV400 LAB CERTIFIED</span>
            <span>·</span>
            <span>ISO QUALITY</span>
            <span>·</span>
            <span>BIS COMPLIANT</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <>
      <MarqueeAnnouncement />
      <StickyBuyBar />
      <RecentPurchaseToast />

      {/* ── CHAPTER 1: THE SCENE ── */}
      <Hero />
      <LiveActivity />

      {/* Bridge: parent → empathy */}
      <NarrativeBridge eyebrow="YOU'VE SEEN IT 100 TIMES">
        You've watched them squint into the sun.<br />
        Toss the ₹299 glasses in the kit bag.<br />
        <span className="text-electric">Play on anyway.</span>
      </NarrativeBridge>

      {/* ── CHAPTER 2: THE STAKES ── */}
      <Problem />

      {/* ── CHAPTER 3: THE VILLAIN ── */}
      <Comparison />

      {/* ── CHAPTER 4: THE FOUNDER MOMENT (heart of the page) ── */}
      <FounderStory />

      {/* ── CHAPTER 5: THE REVEAL ── */}
      <SpecSheet />
      <Features />

      {/* Bridge: spec → on-field reality */}
      <NarrativeBridge eyebrow="BUT SPECS DON'T MATTER" sub="Until they survive the moments your child actually plays.">
        Tests in a lab.<br />
        <span className="text-electric">Then we tested on real fields.</span>
      </NarrativeBridge>

      <SportContexts />

      {/* ── CHAPTER 6: THE PROOF ── */}
      <NarrativeBridge dark eyebrow="SINCE WE LAUNCHED">
        200+ Indian families<br />
        have said <span className="text-electric">yes.</span>
      </NarrativeBridge>
      <TrustMetrics />
      <Reviews />

      {/* ── CHAPTER 7: THE GUARANTEE ── */}
      <Guarantee />
      <FAQ />

      {/* ── CHAPTER 8: THE INVITATION ── */}
      <OrderSection />

      {/* Bridge: order → vision */}
      <NarrativeBridge dark eyebrow="AND WE'RE NOT STOPPING HERE">
        The eyewear is just<br />
        <span className="text-electric font-mono tracking-tightest">Model 01.</span>
      </NarrativeBridge>

      <ChampionKit />
      <FeedbackSection />
      <Footer />
    </>
  )
}
