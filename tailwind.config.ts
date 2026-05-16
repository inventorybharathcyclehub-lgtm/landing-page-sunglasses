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
        // Premium brand palette — champagne gold on rich near-black
        gold: {
          DEFAULT: '#C49A3C',
          light:   '#D4AA52',
          pale:    '#E8D5A0',
          dim:     '#8A6B28',
        },
        cream: {
          DEFAULT: '#F0EAE0',
          light:   '#FAF7F2',
          muted:   '#C4BAB0',
        },
        ink: {
          DEFAULT: '#0C0B10',   // base background
          surface: '#141318',   // card / section bg
          raised:  '#1C1B22',   // elevated element
          border:  '#2A2830',   // divider / border
        },
        forest: {
          DEFAULT: '#1A5C3E',
          light:   '#22784F',
        },
        ember: '#B04020',       // urgent / scarcity
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 4px 20px rgba(196,154,60,0.18)',
        'gold':    '0 8px 40px rgba(196,154,60,0.22)',
        'gold-lg': '0 16px 60px rgba(196,154,60,0.18)',
        'dark':    '0 8px 40px rgba(0,0,0,0.6)',
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out both',
      },
      keyframes: {
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
