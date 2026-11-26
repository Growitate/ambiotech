export type ProductCategory =
  | 'All'
  | 'Banana'
  | 'Golden Cypress'
  | 'Avocado'
  | 'Red Banana'

export interface ProductImageAsset {
  src: string
  thumbSrc: string
  width: number
  height: number
  alt: string
  blurColor: string
}

export interface Product {
  id: string
  slug: string
  name: string
  shortName: string
  category: Exclude<ProductCategory, 'All'>
  /** TODO: Update priceDisplay placeholder ("₹___") with real per-plant starting rate */
  priceDisplay: string
  /** Numeric estimate used only for client-side price sorting until real rates are added */
  sortOrderPrice: number
  rating: number
  isNew?: boolean
  cardSurface: 'sage' | 'blush' | 'white'
  shortDescription: string
  benefits: [string, string, string]
  idealFor: string
  batchSizeNote: string
  image: ProductImageAsset
}

export interface ReviewItem {
  id: string
  quote: string
  authorLabel: string
  plantPurchased: string
  rating: number
  isPlaceholder: boolean
}

export interface CertificationBadge {
  id: string
  title: string
  subtitle: string
  codePlaceholder: string
  iconName: 'shield' | 'microscope' | 'sprout' | 'award'
}

export interface PartnerLogo {
  id: string
  name: string
  region: string
}
