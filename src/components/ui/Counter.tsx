import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { useMotionSafe } from '../../hooks/useMotionSafe'

interface CounterProps {
  target: number
  suffix?: string
  prefix?: string
  durationMs?: number
  className?: string
}

export const Counter: React.FC<CounterProps> = ({
  target,
  suffix = '',
  prefix = '',
  durationMs = 900,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const { prefersReduced } = useMotionSafe()
  const [value, setValue] = useState(prefersReduced ? target : 0)

  useEffect(() => {
    if (prefersReduced) {
      setValue(target)
      return
    }
    if (!isInView) return

    let frameId = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1)
      // cubic-bezier-like easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4)
      setValue(Math.round(eased * target))
      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [isInView, prefersReduced, target, durationMs])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  )
}
