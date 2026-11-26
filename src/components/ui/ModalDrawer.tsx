import React, { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useMotionSafe } from '../../hooks/useMotionSafe'

interface ModalDrawerProps {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export const ModalDrawer: React.FC<ModalDrawerProps> = ({
  open,
  onClose,
  title,
  children,
}) => {
  const panelRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const { prefersReduced, ease } = useMotionSafe()

  useEffect(() => {
    if (!open) return

    previousFocusRef.current = document.activeElement as HTMLElement | null
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusFirst = () => {
      const panel = panelRef.current
      if (!panel) return
      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      )
      if (focusable.length > 0) {
        focusable[0].focus()
      } else {
        panel.focus()
      }
    }

    const timer = window.setTimeout(focusFirst, 30)

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key === 'Tab' && panelRef.current) {
        const focusable = Array.from(
          panelRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
          )
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      window.clearTimeout(timer)
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
      previousFocusRef.current?.focus?.()
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center md:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReduced ? 0 : 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-forest/55 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Bottom sheet on mobile, centered modal on desktop */}
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            initial={
              prefersReduced
                ? { opacity: 1 }
                : { opacity: 0, y: 40, scale: 0.98 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              prefersReduced
                ? { opacity: 0 }
                : { opacity: 0, y: 32, scale: 0.98 }
            }
            transition={{ duration: prefersReduced ? 0 : 0.3, ease }}
            className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-t-[28px] md:rounded-hero bg-card p-5 sm:p-8 shadow-forest-lg outline-none"
          >
            {/* Mobile bottom sheet drag visual */}
            <div className="md:hidden mx-auto mb-4 h-1.5 w-12 rounded-pill bg-forest/20" aria-hidden="true" />

            <button
              type="button"
              onClick={onClose}
              aria-label={`Close ${title} dialog`}
              className="absolute right-4 top-4 sm:right-6 sm:top-6 inline-flex h-12 w-12 min-h-[48px] min-w-[48px] items-center justify-center rounded-full bg-canvas text-forest hover:bg-sage-card active:scale-95 transition-colors focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
