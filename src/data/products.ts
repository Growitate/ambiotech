import { PLANT_IMAGES } from './images'
import type { Product, ProductCategory } from '../types'

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'All',
  'Banana',
  'Golden Cypress',
  'Avocado',
  'Red Banana',
]

/**
 * Editable product catalog for Am biotech.
 * TODO: Update `priceDisplay` placeholders ("₹___") and `sortOrderPrice` values
 * with confirmed per-plant rates from Jeelan before publishing.
 */
export const PRODUCTS: Product[] = [
  {
    id: 'banana-tissue-culture',
    slug: 'banana-tissue-culture-plant',
    name: 'Banana Tissue Culture Plant',
    shortName: 'Banana',
    category: 'Banana',
    // TODO: Add real per-plant starting rate (e.g. "₹16")
    priceDisplay: '',
    sortOrderPrice: 16,
    rating: 4.9,
    cardSurface: 'blush',
    shortDescription:
      'High-yielding Grand Naine tissue culture banana plantlets hardened for uniform field establishment and heavy bunches.',
    benefits: [
      'Disease-free and pest-checked starting stock',
      'Uniform height and synchronized harvest timing',
      'Strong root ball for quick field survival',
    ],
    idealFor: 'Commercial banana growers & bulk acre plantations',
    batchSizeNote: 'Message us for bulk rates on 500+ and 1,000+ plant orders.',
    image: PLANT_IMAGES.bananaTissueCulture,
  },
  {
    id: 'red-banana',
    slug: 'red-banana-plant',
    name: 'Red Banana Plant',
    shortName: 'Red Banana',
    category: 'Red Banana',
    // TODO: Add real per-plant starting rate (e.g. "₹24")
    priceDisplay: '',
    sortOrderPrice: 24,
    rating: 4.8,
    isNew: true,
    cardSurface: 'sage',
    shortDescription:
      'True-to-type Red Banana tissue culture plants prized for sweet aromatic fruit and high market demand.',
    benefits: [
      'Vigorous burgundy pseudostem and healthy foliage',
      'Consistent fruit quality with strong market value',
      'Hardened in Hosur climate for sturdy outdoor growth',
    ],
    idealFor: 'Specialty farmers & progressive orchard growers',
    batchSizeNote: 'Message us for bulk rates and seasonal tray availability.',
    image: PLANT_IMAGES.redBanana,
  },
  {
    id: 'golden-cypress',
    slug: 'golden-cypress-plant',
    name: 'Golden Cypress Plant',
    shortName: 'Golden Cypress',
    category: 'Golden Cypress',
    // TODO: Add real per-plant starting rate (e.g. "₹85")
    priceDisplay: '',
    sortOrderPrice: 85,
    rating: 4.7,
    cardSurface: 'white',
    shortDescription:
      'Bright golden-green conical cypress saplings grown for farm borders, avenues, gardens, and landscaping.',
    benefits: [
      'Dense golden foliage with natural upright shape',
      'Well-rooted in nursery bags for low transplant shock',
      'Thrives in sunny garden beds and farm boundaries',
    ],
    idealFor: 'Landscapers, farmhouse avenues & home gardeners',
    batchSizeNote: 'Message us for bulk rates on landscape and border lots.',
    image: PLANT_IMAGES.goldenCypress,
  },
  {
    id: 'avocado',
    slug: 'avocado-plant',
    name: 'Avocado Plant',
    shortName: 'Avocado',
    category: 'Avocado',
    // TODO: Add real per-plant starting rate (e.g. "₹140")
    priceDisplay: '',
    sortOrderPrice: 140,
    rating: 4.8,
    cardSurface: 'sage',
    shortDescription:
      'Healthy young Avocado saplings raised for orchard planting, intercropping, and homestead fruit gardens.',
    benefits: [
      'Sturdy woody stem and clean healthy canopy',
      'Selected for vigorous growth in South Indian climates',
      'Guidance on spacing and early irrigation included',
    ],
    idealFor: 'Fruit orchard growers & home garden enthusiasts',
    batchSizeNote: 'Message us for bulk rates and orchard spacing tips.',
    image: PLANT_IMAGES.avocado,
  },
]
