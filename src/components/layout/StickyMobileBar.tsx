import React from 'react'
import { Phone } from 'lucide-react'
import { buildWhatsAppUrl, SITE_INFO } from '../../data/site'
import { WhatsAppIcon } from '../ui/Icons'

export const StickyMobileBar: React.FC = () => {
  return (
    <div
      role="region"
      aria-label="Quick contact bar"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-forest/10 bg-white/95 backdrop-blur-md px-3 py-2.5 shadow-[0_-8px_24px_rgba(18,48,47,0.10)]"
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2.5">
        <a
          href={SITE_INFO.contact.phoneHref}
          aria-label={`Call Am biotech at ${SITE_INFO.contact.phoneDisplay}`}
          className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-pill border border-forest/20 bg-canvas px-4 py-2.5 text-[15px] font-semibold text-forest active:scale-[0.97] transition-transform"
        >
          <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>Call</span>
        </a>
        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message Am biotech on WhatsApp"
          className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-pill bg-leaf px-4 py-2.5 text-[15px] font-semibold text-white shadow-forest-sm active:scale-[0.97] transition-transform"
        >
          <WhatsAppIcon className="w-4 h-4 shrink-0" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  )
}
