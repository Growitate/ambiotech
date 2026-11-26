import type { ProductImageAsset } from '../types'

/**
 * Single source of truth for all plant and nursery image URLs, dimensions, and blur-up base colors.
 * Keep every image path centralized here to ensure consistent framing and zero CLS.
 */
export const PLANT_IMAGES = {
  heroBanana: {
    src: '/images/banana-hero.webp',
    thumbSrc: '/images/banana-hero-thumb.webp',
    width: 800,
    height: 1000,
    alt: 'Healthy young Grand Naine tissue culture banana plant in a matte stoneware pot',
    blurColor: '#DDE4DA',
  },
  bananaTissueCulture: {
    src: '/images/banana-tc.webp',
    thumbSrc: '/images/banana-tc-thumb.webp',
    width: 800,
    height: 1000,
    alt: 'Banana Tissue Culture Plant with lush green leaves ready for farm planting',
    blurColor: '#DCE5DA',
  },
  redBanana: {
    src: '/images/red-banana.webp',
    thumbSrc: '/images/red-banana-thumb.webp',
    width: 800,
    height: 1000,
    alt: 'Red Banana tissue culture plant showing burgundy stem and healthy leaves',
    blurColor: '#EADCD5',
  },
  goldenCypress: {
    src: '/images/golden-cypress.webp',
    thumbSrc: '/images/golden-cypress-thumb.webp',
    width: 800,
    height: 1000,
    alt: 'Vibrant Golden Cypress ornamental nursery plant in a clean beige pot',
    blurColor: '#E5E7D7',
  },
  avocado: {
    src: '/images/avocado.webp',
    thumbSrc: '/images/avocado-thumb.webp',
    width: 800,
    height: 1000,
    alt: 'Healthy young grafted Avocado nursery plant with glossy green leaves',
    blurColor: '#DCE4D8',
  },
  tissueCultureJar: {
    src: '/images/tissue-culture-jar.webp',
    thumbSrc: '/images/tissue-culture-jar.webp',
    width: 954,
    height: 640,
    alt: 'Banana tissue culture plantlet growing cleanly inside a clear lab jar',
    blurColor: '#E6E4DE',
  },
  nurseryTrays: {
    src: '/images/nursery-trays.webp',
    thumbSrc: '/images/nursery-trays.webp',
    width: 954,
    height: 640,
    alt: 'Rows of healthy uniform banana saplings growing under shade-netting at the nursery',
    blurColor: '#DAE4D5',
  },
} as const satisfies Record<string, ProductImageAsset>
