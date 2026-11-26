import React, { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, LayoutGrid, List, Sprout } from 'lucide-react'
import { PLANT_IMAGES } from '../data/images'
import { PRODUCT_CATEGORIES, PRODUCTS } from '../data/products'
import { buildWhatsAppUrl } from '../data/site'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useMotionSafe } from '../hooks/useMotionSafe'
import { useToast } from '../hooks/useToast'
import type { Product, ProductCategory } from '../types'
import { Button } from '../components/ui/Button'
import { BentoCard, ProductCard } from '../components/ui/Card'
import { Chip } from '../components/ui/Chip'
import { ClosingCtaBand } from '../components/features/ClosingCtaBand'
import { ProductDetailModal } from '../components/features/ProductDetailModal'
import { WhatsAppIcon } from '../components/ui/Icons'

type SortKey = 'featured' | 'price-asc' | 'price-desc' | 'rating-desc' | 'name-asc'

const CATEGORY_THUMBS: Partial<Record<ProductCategory, string>> = {
  Banana: PLANT_IMAGES.bananaTissueCulture.thumbSrc,
  'Golden Cypress': PLANT_IMAGES.goldenCypress.thumbSrc,
  Avocado: PLANT_IMAGES.avocado.thumbSrc,
  'Red Banana': PLANT_IMAGES.redBanana.thumbSrc,
}

export const ProductsPage: React.FC = () => {
  useDocumentMeta({
    title: 'Plants & Nursery Catalog | Am biotech Hosur',
    description:
      'Browse Banana Tissue Culture, Red Banana, Golden Cypress, and Avocado plants from Am biotech in Hosur. Filter by variety and enquire directly on WhatsApp.',
  })

  const [searchParams, setSearchParams] = useSearchParams()
  const initialCat = searchParams.get('category') as ProductCategory | null
  const validInitialCat: ProductCategory =
    initialCat && PRODUCT_CATEGORIES.includes(initialCat) ? initialCat : 'All'

  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategory>(validInitialCat)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState<SortKey>('featured')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const { prefersReduced } = useMotionSafe()
  const { showToast } = useToast()

  const handleSelectCategory = (cat: ProductCategory) => {
    setSelectedCategory(cat)
    if (cat === 'All') {
      searchParams.delete('category')
      setSearchParams(searchParams, { replace: true })
    } else {
      setSearchParams({ category: cat }, { replace: true })
    }
  }

  const displayedProducts = useMemo(() => {
    const base =
      selectedCategory === 'All'
        ? [...PRODUCTS]
        : PRODUCTS.filter((p) => p.category === selectedCategory)

    switch (sortBy) {
      case 'price-asc':
        return base.sort((a, b) => a.sortOrderPrice - b.sortOrderPrice)
      case 'price-desc':
        return base.sort((a, b) => b.sortOrderPrice - a.sortOrderPrice)
      case 'rating-desc':
        return base.sort((a, b) => b.rating - a.rating)
      case 'name-asc':
        return base.sort((a, b) => a.name.localeCompare(b.name))
      case 'featured':
      default:
        return base
    }
  }, [selectedCategory, sortBy])

  return (
    <>
      {/* Header with breadcrumb + one-line intro */}
      <section className="px-4 sm:px-6 pt-6 sm:pt-10 pb-6">
        <div className="mx-auto max-w-container">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-sm font-medium text-body-text">
              <li>
                <Link
                  to="/"
                  className="inline-flex min-h-[44px] items-center hover:text-forest underline-offset-4 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-4 h-4 text-body-text/60" />
              </li>
              <li aria-current="page" className="font-semibold text-forest">
                Products
              </li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div>
              <h1 className="type-h2 font-display font-semibold text-forest">
                Our Nursery Plants
              </h1>
              <p className="mt-1.5 type-body text-body-text">
                Tap a plant for details or message on WhatsApp for bulk rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Toolbar: category pills, grid/list toggle, sort select */}
      <div className="sticky top-[74px] sm:top-[82px] z-30 px-4 sm:px-6 py-2">
        <div className="mx-auto max-w-container">
          <div className="rounded-card bg-white/90 backdrop-blur-md p-3 sm:p-4 shadow-forest-sm flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            {/* Category Pills */}
            <div
              role="group"
              aria-label="Filter plants by category"
              className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pt-3.5 pb-1.5 -mt-1.5"
            >
              {PRODUCT_CATEGORIES.map((category) => (
                <Chip
                  key={category}
                  label={category}
                  active={selectedCategory === category}
                  thumbSrc={CATEGORY_THUMBS[category]}
                  isNew={category === 'Red Banana'}
                  onClick={() => handleSelectCategory(category)}
                />
              ))}
            </div>

            {/* View Toggle + Sort Select */}
            <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
              <div className="flex items-center gap-2">
                <label htmlFor="products-sort" className="sr-only">
                  Sort plants
                </label>
                <select
                  id="products-sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortKey)}
                  className="min-h-[48px] rounded-input border border-forest/15 bg-canvas/70 px-3.5 py-2 text-sm font-semibold text-forest hover:border-forest/40 focus:border-forest focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent"
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating-desc">Top Rated</option>
                  <option value="name-asc">Name: A to Z</option>
                </select>
              </div>

              <div
                role="group"
                aria-label="Layout view"
                className="inline-flex items-center rounded-pill bg-canvas p-1 border border-forest/[0.08]"
              >
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid view"
                  aria-pressed={viewMode === 'grid'}
                  className={`inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-pill transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-forest text-white shadow-sm'
                      : 'text-forest hover:bg-white'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  aria-label="List view"
                  aria-pressed={viewMode === 'list'}
                  className={`inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-pill transition-colors ${
                    viewMode === 'list'
                      ? 'bg-forest text-white shadow-sm'
                      : 'text-forest hover:bg-white'
                  }`}
                >
                  <List className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Results */}
      <section aria-label="Plant catalog list" className="px-4 sm:px-6 pt-5 pb-12">
        <div className="mx-auto max-w-container">

          {displayedProducts.length === 0 ? (
            <BentoCard
              surface="white"
              className="p-8 sm:p-12 text-center border border-forest/[0.08]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage-card text-leaf">
                <Sprout className="w-7 h-7" aria-hidden="true" />
              </div>
              <h2 className="mt-4 type-h3 font-display font-semibold text-forest">
                Looking for another plant variety?
              </h2>
              <p className="mt-2 type-body text-body-text mx-auto">
                No matching plants in this selection right now. Message us
                directly and our nursery team will check stock for you.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Button
                  as="a"
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="whatsapp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Ask us on WhatsApp</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleSelectCategory('All')}
                >
                  Show all plants
                </Button>
              </div>
            </BentoCard>
          ) : (
            <motion.div
              layout={!prefersReduced}
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6'
                  : 'flex flex-col gap-4'
              }
            >
              <AnimatePresence mode="popLayout">
                {displayedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    layout={viewMode}
                    onSelect={setSelectedProduct}
                    onQuickWhatsApp={(p) =>
                      showToast(`Opening WhatsApp enquiry for ${p.name}`)
                    }
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      <ClosingCtaBand
        headline="Need bulk trays for your farm?"
        subtext="Message Jeelan on WhatsApp or call for delivery rates."
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  )
}
