import { useReducedMotion } from 'framer-motion'

export function useMotionSafe() {
  const prefersReduced = Boolean(useReducedMotion())
  return {
    prefersReduced,
    ease: [0.22, 1, 0.36, 1] as const,
    durations: {
      feedback: prefersReduced ? 0 : 0.15,
      ui: prefersReduced ? 0 : 0.3,
      reveal: prefersReduced ? 0 : 0.6,
    },
  }
}
