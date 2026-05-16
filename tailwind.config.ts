import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          white:  '#FEFCF9',
          cream:  '#F5F1EA',
          border: '#E4DDD3',
          muted:  '#C8BEB4',
        },
        ink: {
          DEFAULT: '#1A1612',
          soft:    '#2D2720',
          muted:   '#6B5E52',
          light:   '#9B8F85',
        },
        gold: {
          DEFAULT: '#9A7B2C',
          light:   '#B89438',
          pale:    '#F8F0DC',
          deep:    '#7A611E',
        },
        forest: {
          DEFAULT: '#1E5C3A',
          light:   '#25784D',
          pale:    '#EAF4EE',
        },
        ember: '#B04020',
      },
      fontFamily: {
        sans:  ['Inter',            'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia',   'serif'],
      },
      boxShadow: {
        'card':    '0 1px 3px rgba(26,22,18,0.08), 0 4px 16px rgba(26,22,18,0.06)',
        'card-lg': '0 4px 8px rgba(26,22,18,0.07), 0 16px 40px rgba(26,22,18,0.10)',
        'gold':    '0 4px 20px rgba(154,123,44,0.25)',
      },
      animation: {
        'ticker':  'ticker 40s linear infinite',
        'fade-up': 'fadeUp 0.7s ease-out both',
      },
      keyframes: {
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
