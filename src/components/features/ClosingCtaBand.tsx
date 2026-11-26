import React from 'react'
import { Phone } from 'lucide-react'
import { buildWhatsAppUrl, SITE_INFO } from '../../data/site'
import { BentoCard } from '../ui/Card'
import { Button } from '../ui/Button'
import { WhatsAppIcon } from '../ui/Icons'

interface ClosingCtaBandProps {
  headline?: string
  subtext?: string
}

export const ClosingCtaBand: React.FC<ClosingCtaBandProps> = ({
  headline = 'Ready to order healthy plants?',
  subtext = 'Message or call our Hosur nursery for today’s rates.',
}) => {
  return (
    <section className="px-4 sm:px-6 pb-8 pt-2">
      <div className="mx-auto max-w-container">
        <BentoCard
          surface="forest"
          radius="hero"
          elevation="lg"
          watermark
          className="px-6 py-8 sm:px-10 sm:py-10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="type-h2 font-display font-semibold text-white">
                {headline}
              </h2>
              <p className="mt-2 type-body text-sage-card/90">{subtext}</p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 shrink-0">
              <Button
                as="a"
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>WhatsApp us</span>
              </Button>
              <Button
                as="a"
                href={SITE_INFO.contact.phoneHref}
                variant="light"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Call {SITE_INFO.contact.phoneDisplay}</span>
              </Button>
            </div>
          </div>
        </BentoCard>
      </div>
    </section>
  )
}
