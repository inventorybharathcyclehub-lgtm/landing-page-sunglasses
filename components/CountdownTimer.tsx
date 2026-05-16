'use client'

import { useState, useEffect } from 'react'

export default function CountdownTimer() {
  const [time, setTime] = useState({ hours: 23, minutes: 59, seconds: 59 })

  useEffect(() => {
    const stored = localStorage.getItem('countdown-end')
    let end: number

    if (stored) {
      end = parseInt(stored)
      if (Date.now() > end) {
        end = Date.now() + 72 * 60 * 60 * 1000
        localStorage.setItem('countdown-end', end.toString())
      }
    } else {
      end = Date.now() + 72 * 60 * 60 * 1000
      localStorage.setItem('countdown-end', end.toString())
    }

    const tick = () => {
      const remaining = Math.max(0, end - Date.now())
      const h = Math.floor(remaining / 3600000)
      const m = Math.floor((remaining % 3600000) / 60000)
      const s = Math.floor((remaining % 60000) / 1000)
      setTime({ hours: h, minutes: m, seconds: s })
    }

    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  const pad = (n: number) => n.toString().padStart(2, '0')

  return (
    <div className="flex items-center gap-1 font-mono font-bold text-ink">
      <div className="bg-ink text-white rounded px-2 py-1 text-sm leading-none">
        {pad(time.hours)}
      </div>
      <span className="text-electric">:</span>
      <div className="bg-ink text-white rounded px-2 py-1 text-sm leading-none">
        {pad(time.minutes)}
      </div>
      <span className="text-electric">:</span>
      <div className="bg-ink text-white rounded px-2 py-1 text-sm leading-none">
        {pad(time.seconds)}
      </div>
    </div>
  )
}
