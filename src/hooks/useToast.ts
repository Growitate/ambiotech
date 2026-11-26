import { createContext, useCallback, useContext, useState } from 'react'

export interface ToastItem {
  id: number
  message: string
  tone?: 'success' | 'info' | 'error'
}

interface ToastContextValue {
  toasts: ToastItem[]
  showToast: (message: string, tone?: ToastItem['tone']) => void
  dismissToast: (id: number) => void
}

export const ToastContext = createContext<ToastContextValue>({
  toasts: [],
  showToast: () => undefined,
  dismissToast: () => undefined,
})

export function useToast() {
  return useContext(ToastContext)
}

export function useToastState(): ToastContextValue {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const dismissToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const showToast = useCallback(
    (message: string, tone: ToastItem['tone'] = 'success') => {
      const id = Date.now() + Math.floor(Math.random() * 1000)
      setToasts((prev) => [...prev, { id, message, tone }])
      window.setTimeout(() => {
        dismissToast(id)
      }, 3800)
    },
    [dismissToast]
  )

  return { toasts, showToast, dismissToast }
}
