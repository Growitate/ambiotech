import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { CERTIFICATIONS } from '../data/certifications'
import { PLANT_IMAGES } from '../data/images'
import { PRODUCT_CATEGORIES, PRODUCTS } from '../data/products'
import {
  ABOUT_CONTENT,
  PARTNER_LOGOS,
  SITE_INFO,
  WHY_CHOOSE_ITEMS,
} from '../data/site'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useMotionSafe } from '../hooks/useMotionSafe'
import { useToast } from '../hooks/useToast'
import type { Product, ProductCategory } from '../types'
import {
  heroSpringItemVariants,
  heroStaggerVariants,
  revealContainerVariants,
  revealItemVariants,
} from '../utils/motion'
import { Button } from '../components/ui/Button'
import { BentoCard, ProductCard } from '../components/ui/Card'
import { Chip } from '../components/ui/Chip'
import { Counter } from '../components/ui/Counter'
import { Marquee } from '../components/ui/Marquee'
import { PlantImage } from '../components/ui/PlantImage'
import { RatingChip } from '../components/ui/RatingChip'
import { SectionHeader } from '../components/ui/SectionHeader'
import {
  VisualBananaBunch,
  VisualFarmerCare,
  VisualLeafShield,
  VisualPlantCluster,
  VisualUniformSprouts,
} from '../components/ui/BotanicalVisuals'
import { ClosingCtaBand } from '../components/features/ClosingCtaBand'
import { ProductDetailModal } from '../components/features/ProductDetailModal'

const CATEGORY_THUMBS: Partial<Record<ProductCategory, string>> = {
  Banana: PLANT_IMAGES.bananaTissueCulture.thumbSrc,
  'Golden Cypress': PLANT_IMAGES.goldenCypress.thumbSrc,
  Avocado: PLANT_IMAGES.avocado.thumbSrc,
  'Red Banana': PLANT_IMAGES.redBanana.thumbSrc,
}

export const HomePage: React.FC = () => {
  useDocumentMeta({
    title: 'Am biotech | Banana Plant Tissue Culture Nursery, Hosur',
    description:
      'Am biotech in Hosur supplies disease-free banana tissue culture, Red Banana, Golden Cypress, and Avocado plants. Healthy plants, wealthy farmer.',
  })

  const [activeCategory, setActiveCategory] = useState<ProductCategory>('All')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const { prefersReduced, ease } = useMotionSafe()
  const { showToast } = useToast()

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return PRODUCTS
    return PRODUCTS.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  const redBananaProduct = PRODUCTS.find((p) => p.category === 'Red Banana')
  const bananaProduct = PRODUCTS.find((p) => p.category === 'Banana')

  return (
    <>
      {/* 1. CLEAN EDITORIAL HERO */}
      <section className="px-4 sm:px-6 pt-5 sm:pt-8 pb-8 lg:pb-12">
        <div className="mx-auto max-w-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <motion.div
              variants={prefersReduced ? undefined : heroStaggerVariants}
              initial={prefersReduced ? false : 'hidden'}
              animate="visible"
              className="lg:col-span-6 flex flex-col items-start"
            >
              <motion.span
                variants={prefersReduced ? undefined : heroSpringItemVariants}
                className="type-label text-leaf"
              >
                {SITE_INFO.heroEyebrow}
              </motion.span>

              <motion.h1
                variants={prefersReduced ? undefined : heroSpringItemVariants}
                className="mt-3 type-h1 font-display font-semibold text-forest"
              >
                {SITE_INFO.heroHeadline}
              </motion.h1>

              <motion.p
                variants={prefersReduced ? undefined : heroSpringItemVariants}
                className="mt-3 font-display text-lg sm:text-xl font-medium text-accent-deep"
              >
                {SITE_INFO.tagline}
              </motion.p>

              <motion.div
                variants={prefersReduced ? undefined : heroSpringItemVariants}
                className="mt-6 flex flex-wrap items-center gap-5"
              >
                <Button as="link" to="/products" variant="primary">
                  <span>Explore Plants</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>

                <Button as="link" to="/about#enquiry" variant="secondary">
                  Get a quote
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Bento Composition */}
            <motion.div
              variants={prefersReduced ? undefined : heroStaggerVariants}
              initial={prefersReduced ? false : 'hidden'}
              animate="visible"
              className="lg:col-span-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
                <motion.div
                  variants={prefersReduced ? undefined : heroSpringItemVariants}
                  className="lg:col-span-7"
                >
                  <BentoCard
                    surface="blush"
                    radius="hero"
                    elevation="md"
                    watermark
                    className="h-full p-5 sm:p-6 flex flex-col justify-between min-h-[300px] sm:min-h-[340px]"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-display text-lg sm:text-xl font-semibold text-forest">
                        Banana Tissue Culture
                      </p>
                      <span className="rounded-pill bg-white/90 px-3 py-1 text-xs font-bold text-accent-deep shadow-sm whitespace-nowrap">
                        {bananaProduct?.priceDisplay
                          ? `Starting at ${bananaProduct.priceDisplay}`
                          : 'Starting at'}
                      </span>
                    </div>

                    <div className="my-2 flex items-center justify-center">
                      <PlantImage
                        image={PLANT_IMAGES.heroBanana}
                        priority
                        sizes="(max-width: 1024px) 70vw, 280px"
                        className="w-48 sm:w-56 lg:w-full max-w-[230px]"
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => bananaProduct && setSelectedProduct(bananaProduct)}
                        className="min-h-[44px] inline-flex items-center text-sm font-semibold text-forest underline underline-offset-4 hover:text-accent-deep"
                      >
                        Quick view
                      </button>
                    </div>
                  </BentoCard>
                </motion.div>

                <div className="lg:col-span-5 flex lg:flex-col gap-3.5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0 py-1 lg:py-0">
                  <motion.div
                    variants={prefersReduced ? undefined : heroSpringItemVariants}
                    animate={
                      prefersReduced
                        ? undefined
                        : {
                          y: [-5, 5, -5],
                          transition: {
                            duration: 6.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          },
                        }
                    }
                    className="snap-start shrink-0 w-[76%] sm:w-[58%] lg:w-auto lg:-ml-5 lg:mt-2 z-20"
                  >
                    <BentoCard
                      surface="sage"
                      radius="card"
                      elevation="md"
                      watermark
                      className="p-4 h-full"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex flex-col gap-1 min-w-0">
                          <span className="w-fit rounded-pill bg-accent-deep px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                            New
                          </span>
                          <h2 className="font-display text-base sm:text-lg font-semibold text-forest leading-tight">
                            New: Red Banana
                          </h2>
                          <button
                            type="button"
                            onClick={() =>
                              redBananaProduct && setSelectedProduct(redBananaProduct)
                            }
                            className="inline-flex min-h-[40px] w-fit items-center text-xs sm:text-sm font-semibold text-forest underline underline-offset-4 hover:text-accent-deep"
                          >
                            View plant
                          </button>
                        </div>
                        <PlantImage
                          image={PLANT_IMAGES.redBanana}
                          priority
                          sizes="110px"
                          className="w-20 sm:w-24 shrink-0"
                        />
                      </div>
                    </BentoCard>
                  </motion.div>

                  <motion.div
                    variants={prefersReduced ? undefined : heroSpringItemVariants}
                    animate={
                      prefersReduced
                        ? undefined
                        : {
                          y: [5, -5, 5],
                          transition: {
                            duration: 7.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          },
                        }
                    }
                    className="snap-start shrink-0 w-[76%] sm:w-[58%] lg:w-auto flex-1"
                  >
                    <BentoCard
                      surface="forest"
                      radius="card"
                      elevation="md"
                      watermark
                      className="p-4 h-full flex items-center"
                    >
                      <div className="flex items-center justify-between gap-2 w-full">
                        <div className="flex flex-col gap-1 min-w-0">
                          <h2 className="font-display text-base sm:text-lg font-semibold text-white leading-tight">
                            Premium Banana Plants
                          </h2>
                          <Button
                            as="link"
                            to="/products?category=Banana"
                            variant="secondary"
                            className="!text-white !decoration-white/70 hover:!text-sage-card !px-0 !min-h-[40px] text-xs sm:text-sm"
                          >
                            Explore
                          </Button>
                        </div>
                        <PlantImage
                          image={PLANT_IMAGES.bananaTissueCulture}
                          priority
                          sizes="110px"
                          className="w-20 sm:w-24 shrink-0"
                        />
                      </div>
                    </BentoCard>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. UNIFIED CLEAN TRUST BAR */}
      <section
        aria-label="Trust and credentials"
        className="px-4 sm:px-6 pb-8 lg:pb-12"
      >
        <div className="mx-auto max-w-container flex flex-col gap-5">
          {/* Single cohesive floating bar instead of fragmented bordered boxes */}
          <BentoCard surface="white" elevation="sm" className="p-5 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Experience */}
              <div className="md:col-span-3 flex items-center gap-3.5">
                <VisualPlantCluster className="w-12 h-12 shrink-0" />
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-forest leading-none">
                    <Counter
                      target={SITE_INFO.experienceYears}
                      suffix={SITE_INFO.experienceSuffix}
                    />{' '}
                    <span className="text-lg font-semibold">Years</span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-body-text">
                    {SITE_INFO.experienceLabel}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="md:col-span-3 flex flex-col items-start gap-1.5 md:border-l md:border-forest/10 md:pl-6">
                <RatingChip
                  rating={SITE_INFO.placeholderRating.toFixed(1)}
                  label={`• ${SITE_INFO.placeholderReviewCount}`}
                />
                <p className="text-xs sm:text-sm text-body-text">
                  Trusted in Hosur
                </p>
              </div>

              {/* Certifications */}
              <div className="md:col-span-6 flex flex-wrap gap-2 md:border-l md:border-forest/10 md:pl-6">
                {CERTIFICATIONS.map((cert) => (
                  <span
                    key={cert.id}
                    className="inline-flex items-center gap-1.5 rounded-pill bg-sage-card/65 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-forest"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-leaf shrink-0" aria-hidden="true" />
                    <span>{cert.title}</span>
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Open lightweight marquee */}
          <div className="py-1">
            <Marquee items={PARTNER_LOGOS} />
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS */}
      <section aria-labelledby="featured-plants-heading" className="section-pad px-4 sm:px-6">
        <div className="mx-auto max-w-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeader
              titleId="featured-plants-heading"
              eyebrow="Our Plants"
              title="Available varieties"
              subtitle="Bulk rates available on WhatsApp."
            />
            <Button as="link" to="/products" variant="secondary">
              View all plants
            </Button>
          </div>

          <div
            role="group"
            aria-label="Filter featured plants by variety"
            className="mt-6 flex flex-wrap items-center gap-2.5 pt-2"
          >
            {PRODUCT_CATEGORIES.map((category) => (
              <Chip
                key={category}
                label={category}
                active={activeCategory === category}
                thumbSrc={CATEGORY_THUMBS[category]}
                isNew={category === 'Red Banana'}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>

          <motion.div
            layout={!prefersReduced}
            className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={setSelectedProduct}
                  onQuickWhatsApp={(p) =>
                    showToast(`Opening WhatsApp enquiry for ${p.name}`)
                  }
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 4. WHY AM BIOTECH WITH BOTANICAL SPOT VISUALS */}
      <section aria-labelledby="why-ambiotech-heading" className="section-pad px-4 sm:px-6 pt-0">
        <div className="mx-auto max-w-container">
          <SectionHeader
            titleId="why-ambiotech-heading"
            eyebrow="Why Am biotech"
            title="Healthy roots, dependable harvest"
          />

          <motion.div
            variants={prefersReduced ? undefined : revealContainerVariants}
            initial={prefersReduced ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {WHY_CHOOSE_ITEMS.map((item) => {
              const Visual =
                item.icon === 'shield'
                  ? VisualLeafShield
                  : item.icon === 'trending'
                    ? VisualBananaBunch
                    : item.icon === 'sprout'
                      ? VisualUniformSprouts
                      : VisualFarmerCare

              const surface =
                item.variant === 'forest'
                  ? 'forest'
                  : item.variant === 'sage'
                    ? 'sage'
                    : item.variant === 'blush'
                      ? 'blush'
                      : 'white'

              return (
                <motion.div
                  key={item.id}
                  variants={prefersReduced ? undefined : revealItemVariants}
                >
                  <BentoCard
                    surface={surface}
                    watermark={item.variant === 'forest'}
                    className="h-full p-5 sm:p-6 flex flex-col justify-between gap-4"
                  >
                    <div className="flex flex-col gap-3.5">
                      <Visual className="w-12 h-12 shrink-0" />
                      <div>
                        <h3
                          className={`type-h3 font-display font-semibold ${item.variant === 'forest'
                            ? 'text-white'
                            : 'text-forest'
                            }`}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={`mt-1 text-sm ${item.variant === 'forest'
                            ? 'text-sage-card/90'
                            : 'text-body-text'
                            }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {'showTagline' in item && item.showTagline && (
                      <p className="pt-3 border-t border-white/15 font-display text-sm font-semibold text-white">
                        “{SITE_INFO.tagline}”
                      </p>
                    )}
                  </BentoCard>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* 5. VISUAL STORY TEASER */}
      <section aria-labelledby="story-teaser-heading" className="pb-10 lg:pb-14 px-4 sm:px-6">
        <div className="mx-auto max-w-container">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease }}
          >
            <BentoCard
              surface="sage"
              radius="hero"
              elevation="sm"
              className="p-5 sm:p-7"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-5">
                  <PlantImage
                    image={PLANT_IMAGES.nurseryTrays}
                    mode="photo"
                    sizes="(max-width: 768px) 92vw, 420px"
                    className="w-full rounded-[20px] shadow-forest-sm"
                  />
                </div>
                <div className="md:col-span-7 flex flex-col items-start gap-4 md:pl-2">
                  <span className="type-label text-leaf">Hosur Nursery</span>
                  <h2
                    id="story-teaser-heading"
                    className="type-h2 font-display font-semibold text-forest"
                  >
                    {ABOUT_CONTENT.storyLead}
                  </h2>
                  <Button as="link" to="/about" variant="primary">
                    <span>Our story &amp; process</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </BentoCard>
          </motion.div>
        </div>
      </section>

      {/* 6. CLOSING CTA BAND */}
      <ClosingCtaBand />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  )
}
