import type { PartnerLogo } from '../types'

export const SITE_INFO = {
  brandName: 'Am biotech',
  ownerName: 'Jeelan',
  location: 'Hosur, Tamil Nadu, India',
  shortLocation: 'Hosur, India',
  tagline: 'Healthy plants, wealthy farmer.',
  heroEyebrow: 'Banana Plant Nursery',
  heroHeadline: 'Am biotech Plant Tissue Culture',
  heroSubcopy: 'Tissue-culture banana and nursery plants from Hosur.',
  experienceYears: 5,
  experienceSuffix: '+',
  experienceLabel: 'Years Experience',
  /** TODO: Replace placeholder average rating (4.8) with verified Google / farmer feedback score */
  placeholderRating: 4.8,
  /** TODO: Replace placeholder review count once live ratings are collected */
  placeholderReviewCount: '120+ Farmers',
  contact: {
    email: 'ambiotechhosur@gmail.com',
    phoneDisplay: '6374057626',
    phoneHref: 'tel:+916374057626',
    whatsappDisplay: '9629772225',
    whatsappNumber: '919629772225',
  },
} as const

export function buildWhatsAppUrl(message?: string): string {
  const defaultMsg =
    'Hello Am biotech, I would like to enquire about your tissue culture plants and bulk pricing.'
  const text = encodeURIComponent(message ?? defaultMsg)
  return `https://wa.me/${SITE_INFO.contact.whatsappNumber}?text=${text}`
}

export function buildProductWhatsAppUrl(productName: string): string {
  return buildWhatsAppUrl(
    `Hello Am biotech, I am interested in "${productName}". Please share starting rates, plant age, and bulk delivery details.`
  )
}

export function buildMailtoUrl(subject: string, body: string): string {
  return `mailto:${SITE_INFO.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'About & Contact', to: '/about' },
] as const

export const WHY_CHOOSE_ITEMS = [
  {
    id: 'disease-free',
    title: 'Disease-free plants',
    description: 'Clean, lab-grown starting stock.',
    icon: 'shield' as const,
    variant: 'light' as const,
  },
  {
    id: 'higher-yield',
    title: 'Higher yield',
    description: 'Strong roots for heavier bunches.',
    icon: 'trending' as const,
    variant: 'sage' as const,
  },
  {
    id: 'uniform-growth',
    title: 'Uniform healthy growth',
    description: 'Even growth across your farm.',
    icon: 'sprout' as const,
    variant: 'blush' as const,
  },
  {
    id: 'farmer-support',
    title: 'Farmer support',
    description: 'Direct planting advice from Jeelan.',
    icon: 'phone' as const,
    variant: 'forest' as const,
    showTagline: true,
  },
] as const

/**
 * TODO: Replace placeholder partner logos with actual FPOs, agri-cooperatives,
 * nursery supply partners, or institutional buyers once confirmed by Jeelan.
 */
export const PARTNER_LOGOS: PartnerLogo[] = [
  { id: 'partner-1', name: 'Hosur Growers Collective', region: 'TODO: Partner Logo 1' },
  { id: 'partner-2', name: 'Krishnagiri Banana FPO', region: 'TODO: Partner Logo 2' },
  { id: 'partner-3', name: 'Dharmapuri Agri Inputs', region: 'TODO: Partner Logo 3' },
  { id: 'partner-4', name: 'Kaveri Drip & Nurseries', region: 'TODO: Partner Logo 4' },
  { id: 'partner-5', name: 'Cauvery Farm Alliance', region: 'TODO: Partner Logo 5' },
  { id: 'partner-6', name: 'South Horti Traders', region: 'TODO: Partner Logo 6' },
]

export const ABOUT_CONTENT = {
  storyLead: 'We started about 5 years ago with one goal: best-quality plants for farmers.',
  storyDetail:
    'Led by Jeelan in Hosur, Am biotech supplies hardened banana tissue culture and orchard saplings with direct farmer guidance.',
  milestones: [
    {
      year: 'Year 1',
      title: 'Started in Hosur',
      detail: 'Supplied hardened banana plantlets to local growers.',
    },
    {
      year: 'Year 3',
      title: 'More crop varieties',
      detail: 'Added Red Banana, Golden Cypress, and Avocado saplings.',
    },
    {
      year: 'Year 5+',
      title: 'Trusted regional nursery',
      detail: 'Serving bulk farms and home gardeners across the region.',
    },
  ],
  mission: {
    eyebrow: 'Mission',
    title: 'Disease-free, high-yield plants',
    body: 'Supply healthy tissue culture plants so farmers grow with confidence.',
  },
  vision: {
    eyebrow: 'Vision',
    title: 'Trusted across India',
    body: 'Become a trusted nursery name across farming communities in India.',
  },
  processSteps: [
    {
      step: '01',
      title: 'Selection',
      summary: 'Healthy mother plants screened.',
    },
    {
      step: '02',
      title: 'Lab culture',
      summary: 'Clean sterile multiplication.',
    },
    {
      step: '03',
      title: 'Hardening',
      summary: 'Adapted in Hosur shade-nets.',
    },
    {
      step: '04',
      title: 'Delivery',
      summary: 'Field-ready trays to your farm.',
    },
  ],
} as const
