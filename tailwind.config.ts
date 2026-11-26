import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--canvas)',
        backdrop: 'var(--backdrop)',
        card: 'var(--card)',
        'sage-card': 'var(--sage-card)',
        'blush-card': 'var(--blush-card)',
        forest: 'var(--forest)',
        accent: 'var(--accent)',
        'accent-deep': 'var(--accent-deep)',
        leaf: 'var(--leaf)',
        'body-text': 'var(--body-text)',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        input: '12px',
        card: '24px',
        hero: '32px',
        pill: '999px',
      },
      boxShadow: {
        'forest-sm': 'var(--shadow-sm)',
        'forest-md': 'var(--shadow-md)',
        'forest-lg': 'var(--shadow-lg)',
      },
      maxWidth: {
        container: '1240px',
      },
    },
  },
  plugins: [],
}

export default config
