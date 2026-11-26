import React, { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { StickyMobileBar } from './components/layout/StickyMobileBar'
import { ToastProvider } from './components/ui/Toast'

const HomePage = lazy(() =>
  import('./pages/HomePage').then((m) => ({ default: m.HomePage }))
)
const ProductsPage = lazy(() =>
  import('./pages/ProductsPage').then((m) => ({ default: m.ProductsPage }))
)
const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((m) => ({ default: m.AboutPage }))
)

const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return null
}

const PageLoader: React.FC = () => (
  <div className="mx-auto max-w-container px-4 sm:px-6 py-16">
    <div className="h-64 rounded-hero bg-sage-card/60 animate-pulse" />
  </div>
)

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ToastProvider>
        <ScrollManager />
        <div className="min-h-screen flex flex-col bg-canvas text-forest">
          <Navbar />
          <main id="main-content" className="flex-1">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <FloatingWhatsApp />
          <StickyMobileBar />
        </div>
      </ToastProvider>
    </BrowserRouter>
  )
}

export default App
