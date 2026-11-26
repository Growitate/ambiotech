import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { buildWhatsAppUrl, NAV_LINKS, SITE_INFO } from '../../data/site'
import { AmBiotechLogo, WhatsAppIcon } from '../ui/Icons'

export const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-6 border-t border-forest/10 bg-white/80 pt-10 pb-28 md:pb-10">
      <div className="mx-auto max-w-container px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-start">
          <div className="md:col-span-5 flex flex-col gap-3">
            <Link
              to="/"
              className="inline-flex w-fit items-center rounded-pill focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent"
            >
              <AmBiotechLogo />
            </Link>
            <p className="font-display text-lg font-semibold text-forest">
              {SITE_INFO.tagline}
            </p>
            <p className="inline-flex items-center gap-2 text-sm text-body-text">
              <MapPin className="w-4 h-4 text-leaf shrink-0" aria-hidden="true" />
              <span>{SITE_INFO.location}</span>
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="type-label text-accent-deep mb-3">Pages</h2>
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="inline-flex min-h-[40px] items-center text-sm font-medium text-forest hover:text-leaf underline-offset-4 hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="type-label text-accent-deep mb-3">Contact</h2>
            <ul className="flex flex-col gap-1.5 text-sm text-forest">
              <li>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] items-center gap-2 font-semibold text-leaf hover:underline"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>WhatsApp: {SITE_INFO.contact.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_INFO.contact.phoneHref}
                  className="inline-flex min-h-[40px] items-center gap-2 font-semibold text-forest hover:text-leaf hover:underline"
                >
                  <Phone className="w-4 h-4 text-leaf shrink-0" aria-hidden="true" />
                  <span>Call: {SITE_INFO.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_INFO.contact.email}`}
                  className="inline-flex min-h-[40px] items-center gap-2 text-body-text hover:text-forest hover:underline break-all"
                >
                  <Mail className="w-4 h-4 text-leaf shrink-0" aria-hidden="true" />
                  <span>{SITE_INFO.contact.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-forest/10 pt-5 text-xs sm:text-sm text-body-text">
          <p>© {year} {SITE_INFO.brandName}</p>
          <p>{SITE_INFO.ownerName} • {SITE_INFO.shortLocation}</p>
        </div>
      </div>
    </footer>
  )
}
