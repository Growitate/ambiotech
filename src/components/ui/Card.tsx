import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Product } from '../../types'
import { buildProductWhatsAppUrl } from '../../data/site'
import { useMotionSafe } from '../../hooks/useMotionSafe'
import { PlantImage } from './PlantImage'
import { RatingChip } from './RatingChip'
import { WhatsAppIcon } from './Icons'

export type BentoSurface = 'white' | 'sage' | 'blush' | 'forest'

const SURFACE_CLASSES: Record<BentoSurface, string> = {
  white: 'bg-card text-forest',
  sage: 'bg-sage-card text-forest',
  blush: 'bg-blush-card text-forest',
  forest: 'bg-forest text-white',
}

interface BentoCardProps {
  surface?: BentoSurface
  radius?: 'card' | 'hero'
  elevation?: 'sm' | 'md' | 'lg'
  watermark?: boolean
  className?: string
  children: React.ReactNode
}

export const BentoCard: React.FC<BentoCardProps> = ({
  surface = 'white',
  radius = 'card',
  elevation = 'sm',
  watermark = false,
  className = '',
  children,
}) => {
  const radiusClass = radius === 'hero' ? 'rounded-hero' : 'rounded-card'
  const shadowClass =
    elevation === 'lg'
      ? 'shadow-forest-lg'
      : elevation === 'md'
        ? 'shadow-forest-md'
        : 'shadow-forest-sm'

  return (
    <div
      className={`relative overflow-hidden ${SURFACE_CLASSES[surface]} ${radiusClass} ${shadowClass} ${className}`}
    >
      {watermark && (
        <svg
          aria-hidden="true"
          viewBox="0 0 320 320"
          fill="none"
          className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 opacity-[0.08]"
        >
          <path
            d="M280 20C140 20 30 130 20 280c55 0 110-18 155-58C230 172 275 105 280 20Z"
            fill="currentColor"
          />
        </svg>
      )}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}

interface ProductCardProps {
  product: Product
  layout?: 'grid' | 'list'
  onSelect: (product: Product) => void
  onQuickWhatsApp?: (product: Product) => void
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  layout = 'grid',
  onSelect,
  onQuickWhatsApp,
}) => {
  const { prefersReduced, ease } = useMotionSafe()
  const whatsappUrl = buildProductWhatsAppUrl(product.name)

  const handleOpen = () => onSelect(product)

  if (layout === 'list') {
    return (
      <motion.article
        layout={!prefersReduced}
        initial={prefersReduced ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={prefersReduced ? undefined : { opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.3, ease }}
        className="group relative flex flex-col sm:flex-row items-stretch gap-5 rounded-card bg-card p-5 shadow-forest-sm hover:shadow-forest-md transition-shadow duration-300"
      >
        <button
          type="button"
          onClick={handleOpen}
          aria-label={`View details for ${product.name}`}
          className="relative shrink-0 sm:w-44 rounded-[18px] bg-canvas/45 p-3 flex items-center justify-center focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          <RatingChip
            rating={product.rating.toFixed(1)}
            className="absolute top-2.5 left-2.5 z-20"
          />
          {product.isNew && (
            <span className="absolute top-2.5 right-2.5 z-20 rounded-pill bg-accent-deep px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
              New
            </span>
          )}
          <PlantImage
            image={product.image}
            className="w-36 sm:w-36"
            imgClassName="group-hover:scale-[1.06]"
          />
        </button>

        <div className="flex flex-1 flex-col justify-between gap-4 py-1">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="type-label text-[11px] text-leaf">
                {product.category}
              </span>
              <span className="text-body-text/40" aria-hidden="true">
                •
              </span>
              <span className="text-xs font-medium text-body-text">
                {product.idealFor}
              </span>
            </div>
            <button
              type="button"
              onClick={handleOpen}
              className="text-left focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent rounded-md"
            >
              <h3 className="type-h3 font-display font-semibold text-forest group-hover:text-leaf transition-colors">
                {product.name}
              </h3>
            </button>
            <p className="mt-2 text-[15px] text-body-text max-w-[60ch]">
              {product.shortDescription}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-forest/[0.08]">
            <div>
              <p className="text-[19px] font-bold text-accent-deep">
                {product.priceDisplay
                  ? `Starting at ${product.priceDisplay}`
                  : 'Starting at'}
              </p>
              <p className="text-xs text-body-text mt-0.5">
                Message us for bulk rates
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleOpen}
                className="inline-flex min-h-[48px] items-center gap-1.5 rounded-pill border border-forest/15 px-4 py-2 text-sm font-semibold text-forest hover:border-forest hover:bg-sage-card/40 transition-colors"
              >
                Details
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Enquire on WhatsApp about ${product.name}`}
                onClick={() => onQuickWhatsApp?.(product)}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-pill bg-forest px-5 py-2.5 text-sm font-semibold text-white shadow-forest-sm hover:bg-leaf active:scale-[0.97] transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </motion.article>
    )
  }

  return (
    <motion.article
      layout={!prefersReduced}
      initial={prefersReduced ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={prefersReduced ? undefined : { opacity: 0, scale: 0.96 }}
      whileHover={
        prefersReduced
          ? undefined
          : {
              y: -8,
              scale: 1.03,
              transition: { duration: 0.25, ease },
            }
      }
      transition={{ duration: 0.3, ease }}
      className="group relative flex flex-col rounded-card bg-card p-5 shadow-forest-sm hover:shadow-forest-lg hover:z-20 transition-shadow duration-300"
    >
      {/* Top row: Rating chip (top-left) + optional New badge */}
      <div className="flex items-center justify-between gap-2 mb-1">
        <RatingChip rating={product.rating.toFixed(1)} />
        {product.isNew && (
          <span className="rounded-pill bg-accent-deep px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
            New
          </span>
        )}
      </div>

      {/* Cut-out image sits directly on pure white card canvas */}
      <button
        type="button"
        onClick={handleOpen}
        aria-label={`Inspect ${product.name} details and benefits`}
        className="relative my-1 flex w-full items-center justify-center px-2 py-2 cursor-pointer focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2 rounded-2xl"
      >
        <PlantImage
          image={product.image}
          className="w-full max-w-[210px] mx-auto"
          imgClassName="group-hover:scale-[1.06]"
        />
      </button>

      {/* Bottom info & round forest WhatsApp action button */}
      <div className="mt-3 flex items-end justify-between gap-3 pt-1">
        <div className="min-w-0 flex-1">
          <button
            type="button"
            onClick={handleOpen}
            className="text-left block w-full focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent rounded-md"
          >
            <h3 className="font-display text-[17px] sm:text-[18px] font-semibold leading-snug text-forest group-hover:text-leaf transition-colors">
              {product.name}
            </h3>
          </button>
          <p className="mt-1 text-base font-bold text-accent-deep leading-snug">
            {product.priceDisplay
              ? `Starting at ${product.priceDisplay}`
              : 'Starting at'}
          </p>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Enquire on WhatsApp about ${product.name}`}
          onClick={() => onQuickWhatsApp?.(product)}
          className="inline-flex h-12 w-12 min-h-[48px] min-w-[48px] shrink-0 items-center justify-center rounded-pill bg-forest text-white shadow-forest-sm hover:bg-leaf hover:shadow-forest-md active:scale-[0.97] transition-all focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          <WhatsAppIcon className="w-5 h-5" />
        </a>
      </div>
    </motion.article>
  )
}

interface StatCardProps {
  value: React.ReactNode
  label: string
  hint?: string
  surface?: BentoSurface
  className?: string
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  hint,
  surface = 'sage',
  className = '',
}) => (
  <BentoCard surface={surface} className={`p-5 ${className}`}>
    <div className="flex flex-col gap-1">
      <div className="font-display text-2xl sm:text-3xl font-bold text-forest">
        {value}
      </div>
      <p className="text-sm font-semibold text-forest">{label}</p>
      {hint && <p className="text-xs text-body-text">{hint}</p>}
    </div>
  </BentoCard>
)
