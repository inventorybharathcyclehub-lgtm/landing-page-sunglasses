'use client'

import { useEffect, useState } from 'react'

/* Live viewing counter — fluctuates between 38–58 every 4–7s */
export function LiveViewers() {
  const [n, setN] = useState(47)
  useEffect(() => {
    const tick = () => {
      setN(prev => {
        const delta = Math.floor(Math.random() * 5) - 2  // -2 .. +2
        const next = prev + delta
        return Math.max(38, Math.min(58, next))
      })
    }
    const id = setInterval(tick, 4000 + Math.random() * 3000)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="font-mono font-bold">{n}</span>
  )
}

/* Stock counter — ticks down every 35–75s */
export function LiveStock({ start = 87, total = 200 }: { start?: number; total?: number }) {
  const [left, setLeft] = useState(start)
  useEffect(() => {
    const tick = () => {
      setLeft(prev => Math.max(prev - 1, 12))
    }
    const id = setInterval(tick, 35000 + Math.random() * 40000)
    return () => clearInterval(id)
  }, [])
  const pct = (left / total) * 100
  return (
    <>
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink">
          UNITS LEFT AT LAUNCH PRICE
        </span>
        <span className="font-mono font-bold text-sm text-ink">
          <span className="text-electric">{left}</span> / {total}
        </span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden bg-bg-border">
        <div
          className="h-full bg-electric transition-all duration-1000 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="text-xs mt-2 text-ink-muted">
        <span className="text-ember font-bold animate-pulse-dot">●</span>{' '}
        SELLING FAST — <SoldCounter /> SOLD IN LAST 24 HOURS
      </div>
    </>
  )
}

/* Sold counter — slowly increments */
export function SoldCounter() {
  const [n, setN] = useState(23)
  useEffect(() => {
    const id = setInterval(() => setN(p => p + 1), 60000 + Math.random() * 40000)
    return () => clearInterval(id)
  }, [])
  return <span className="font-mono font-bold text-ink">{n}</span>
}

/* Animated number that counts up when in view */
export function CountUp({
  to,
  duration = 1500,
  prefix = '',
  suffix = '',
}: { to: number; duration?: number; prefix?: string; suffix?: string }) {
  const [n, setN] = useState(0)
  const [started, setStarted] = useState(false)
  const [ref, setRef] = useState<HTMLSpanElement | null>(null)

  useEffect(() => {
    if (!ref) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started) setStarted(true)
      },
      { threshold: 0.4 }
    )
    io.observe(ref)
    return () => io.disconnect()
  }, [ref, started])

  useEffect(() => {
    if (!started) return
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setN(Math.round(eased * to))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, to, duration])

  return (
    <span ref={setRef}>
      {prefix}{n.toLocaleString('en-IN')}{suffix}
    </span>
  )
}
