import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Info, X } from 'lucide-react'
import { ToastContext, useToast, useToastState } from '../../hooks/useToast'

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const state = useToastState()
  return (
    <ToastContext.Provider value={state}>
      {children}
      <ToastViewport />
    </ToastContext.Provider>
  )
}

const ToastViewport: React.FC = () => {
  const { toasts, dismissToast } = useToast()

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="pointer-events-none fixed bottom-24 md:bottom-24 right-4 left-4 md:left-auto z-50 flex flex-col items-end gap-2"
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            className="pointer-events-auto flex w-full max-w-sm items-center justify-between gap-3 rounded-card bg-forest px-4 py-3.5 text-sm font-medium text-white shadow-forest-lg"
          >
            <div className="flex items-center gap-2.5">
              {toast.tone === 'info' ? (
                <Info className="h-4 w-4 text-sage-card shrink-0" aria-hidden="true" />
              ) : (
                <CheckCircle2 className="h-4 w-4 text-sage-card shrink-0" aria-hidden="true" />
              )}
              <span>{toast.message}</span>
            </div>
            <button
              type="button"
              onClick={() => dismissToast(toast.id)}
              aria-label="Dismiss notification"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/80 hover:bg-white/10 hover:text-white"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
