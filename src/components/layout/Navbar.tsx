import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { buildWhatsAppUrl, NAV_LINKS, SITE_INFO } from '../../data/site'
import { useScrollThreshold } from '../../hooks/useScrollThreshold'
import { useMotionSafe } from '../../hooks/useMotionSafe'
import { AmBiotechLogo, WhatsAppIcon } from '../ui/Icons'

export const Navbar: React.FC = () => {
  const scrolled = useScrollThreshold(40)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const { prefersReduced, ease } = useMotionSafe()

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileOpen])

  const waUrl = buildWhatsAppUrl()

  return (
    <header className="sticky top-0 z-40 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-pill focus:bg-forest focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:shadow-forest-md"
      >
        Skip to main content
      </a>

      <div className="mx-auto max-w-container pointer-events-auto">
        <nav
          aria-label="Main navigation"
          className={`flex items-center justify-between gap-3 rounded-pill px-4 sm:px-5 py-2 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled
              ? 'bg-white/90 backdrop-blur-md shadow-forest-md'
              : 'bg-white/75 backdrop-blur-sm shadow-forest-sm'
          }`}
        >
          <NavLink
            to="/"
            aria-label="Am biotech home"
            className="inline-flex min-h-[48px] items-center rounded-pill pr-2 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent"
          >
            <AmBiotechLogo />
          </NavLink>

          {/* Desktop Navigation Pills */}
          <ul className="hidden md:flex items-center gap-1.5">
            {NAV_LINKS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `inline-flex min-h-[44px] items-center rounded-pill px-5 py-2 text-[15px] font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-forest text-white shadow-forest-sm'
                        : 'text-forest hover:bg-canvas/70'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Persistent WhatsApp CTA + Mobile Hamburger */}
          <div className="flex items-center gap-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-pill bg-forest px-4 sm:px-5 py-2.5 text-sm sm:text-[15px] font-semibold text-white shadow-forest-sm hover:bg-leaf active:scale-[0.97] transition-all focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">WhatsApp us</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-sheet"
              className="md:hidden inline-flex h-12 w-12 min-h-[48px] min-w-[48px] items-center justify-center rounded-pill border border-forest/15 bg-white text-forest hover:bg-sage-card active:scale-95 transition-colors"
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>

      {/* Full-screen mobile animated navigation sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav-sheet"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: prefersReduced ? 0 : 0.3, ease }}
            className="pointer-events-auto fixed inset-0 z-50 flex flex-col justify-between bg-forest p-6 text-white md:hidden"
          >
            <div className="flex items-center justify-between">
              <AmBiotechLogo inverted />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
                className="inline-flex h-12 w-12 min-h-[48px] min-w-[48px] items-center justify-center rounded-pill bg-white/15 text-white hover:bg-white/25 active:scale-95"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="my-auto py-8">
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `flex min-h-[56px] items-center justify-between rounded-card px-5 py-4 font-display text-2xl font-semibold transition-colors ${
                          isActive
                            ? 'bg-sage-card text-forest'
                            : 'bg-white/10 text-white hover:bg-white/15'
                        }`
                      }
                    >
                      <span>{item.label}</span>
                      <span aria-hidden="true" className="text-lg">
                        →
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col gap-3 pt-4 border-t border-white/15">
              <p className="text-sm text-sage-card/90">
                {SITE_INFO.tagline} • {SITE_INFO.shortLocation}
              </p>
              <div className="grid grid-cols-1 gap-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-pill bg-leaf px-6 py-3.5 text-base font-semibold text-white shadow-forest-md"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>WhatsApp {SITE_INFO.contact.whatsappDisplay}</span>
                </a>
                <a
                  href={SITE_INFO.contact.phoneHref}
                  className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-pill bg-white px-6 py-3.5 text-base font-semibold text-forest"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  <span>Call {SITE_INFO.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
