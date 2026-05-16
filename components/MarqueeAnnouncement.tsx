'use client'

const items = [
  'FREE DELIVERY PAN-INDIA',
  'CASH ON DELIVERY AVAILABLE',
  '30-DAY HAPPY GUARANTEE',
  'UV400 LAB CERTIFIED',
  'SHIPS WITHIN 24 HOURS',
  '6-MONTH WARRANTY',
  '2,847 PAIRS SOLD THIS QUARTER',
  '★ 4.9 FROM 200+ INDIAN PARENTS',
]

export default function MarqueeAnnouncement() {
  // Duplicate so the scroll loop is seamless
  const loop = [...items, ...items]
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-ink text-white overflow-hidden h-8 flex items-center">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {loop.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.18em] opacity-80 px-8"
          >
            <span className="text-electric mr-2.5">●</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
