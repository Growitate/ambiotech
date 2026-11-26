import React from 'react'
import { buildWhatsAppUrl } from '../../data/site'
import { WhatsAppIcon } from '../ui/Icons'

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Am biotech on WhatsApp"
      className="hidden md:inline-flex fixed bottom-6 right-6 z-40 min-h-[54px] items-center gap-2.5 rounded-pill bg-leaf px-5 py-3 text-[15px] font-semibold text-white animate-wa-pulse hover:bg-forest active:scale-[0.97] transition-colors focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
    >
      <WhatsAppIcon className="w-5 h-5 shrink-0" />
      <span>WhatsApp us</span>
    </a>
  )
}
