import React from 'react'
import { Check, Phone } from 'lucide-react'
import type { Product } from '../../types'
import { buildProductWhatsAppUrl, SITE_INFO } from '../../data/site'
import { ModalDrawer } from '../ui/ModalDrawer'
import { PlantImage } from '../ui/PlantImage'
import { RatingChip } from '../ui/RatingChip'
import { Button } from '../ui/Button'
import { WhatsAppIcon } from '../ui/Icons'

interface ProductDetailModalProps {
  product: Product | null
  onClose: () => void
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
}) => {
  if (!product) {
    return (
      <ModalDrawer open={false} onClose={onClose} title="Plant details">
        <div />
      </ModalDrawer>
    )
  }

  const surfaceTint =
    product.cardSurface === 'blush'
      ? 'bg-blush-card/55'
      : product.cardSurface === 'sage'
        ? 'bg-sage-card/65'
        : 'bg-canvas'

  return (
    <ModalDrawer open={Boolean(product)} onClose={onClose} title={product.name}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
        <div
          className={`md:col-span-5 rounded-card ${surfaceTint} p-5 flex items-center justify-center relative`}
        >
          <RatingChip
            rating={product.rating.toFixed(1)}
            className="absolute top-3 left-3 z-20"
          />
          {product.isNew && (
            <span className="absolute top-3 right-3 z-20 rounded-pill bg-accent-deep px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
              New
            </span>
          )}
          <PlantImage
            image={product.image}
            priority
            className="w-56 sm:w-64 mx-auto"
          />
        </div>

        <div className="md:col-span-7 flex flex-col gap-4 pr-2">
          <div>
            <span className="type-label text-leaf">{product.category}</span>
            <h2 className="mt-1 font-display text-2xl sm:text-3xl font-semibold text-forest">
              {product.name}
            </h2>
            <p className="mt-2 type-body text-[15px] sm:text-base text-body-text">
              {product.shortDescription}
            </p>
          </div>

          <ul className="flex flex-col gap-2.5" aria-label="Key plant benefits">
            {product.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-2.5 text-[15px] text-forest"
              >
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-card text-leaf">
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-[16px] bg-canvas px-4 py-3.5 border border-forest/[0.08]">
            <p className="text-xl font-bold text-accent-deep">
              {product.priceDisplay
                ? `Starting at ${product.priceDisplay}`
                : 'Starting at'}
            </p>
            <p className="text-sm text-body-text mt-0.5">
              {product.batchSizeNote}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <Button
              as="a"
              href={buildProductWhatsAppUrl(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              className="flex-1"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Enquire on WhatsApp</span>
            </Button>

            <Button
              as="a"
              href={SITE_INFO.contact.phoneHref}
              variant="outline"
              className="sm:w-auto"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Call now</span>
            </Button>
          </div>
        </div>
      </div>
    </ModalDrawer>
  )
}
