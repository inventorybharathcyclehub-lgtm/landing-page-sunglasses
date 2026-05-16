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
        // Background system — crisp, clean, technical
        bg: {
          DEFAULT: '#FFFFFF',
          soft:    '#FAFAFA',
          muted:   '#F4F4F5',
          border:  '#E4E4E7',
        },
        // Text — charcoal/black (performance, premium)
        ink: {
          DEFAULT: '#0A0A0A',
          soft:    '#171717',
          muted:   '#525252',
          light:   '#A3A3A3',
        },
        // Electric blue — performance accent (replaces gold)
        electric: {
          DEFAULT: '#0052FF',
          light:   '#3D75FF',
          pale:    '#EFF4FF',
          deep:    '#0040CC',
        },
        // Performance signals
        forest: {
          DEFAULT: '#059669',
          light:   '#10B981',
          pale:    '#ECFDF5',
        },
        ember:  '#DC2626',
        signal: {
          yellow: '#FACC15',
          pale:   '#FEFCE8',
        },
        // Legacy aliases (keep working while transitioning)
        warm: {
          white:  '#FFFFFF',
          cream:  '#FAFAFA',
          border: '#E4E4E7',
          muted:  '#A3A3A3',
        },
        gold: {
          DEFAULT: '#0052FF',
          light:   '#3D75FF',
          pale:    '#EFF4FF',
          deep:    '#0040CC',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        serif:   ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'], // legacy alias
        mono:    ['"JetBrains Mono"', '"SF Mono"', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter':  '-0.025em',
      },
      boxShadow: {
        'card':    '0 1px 2px rgba(10,10,10,0.04), 0 2px 8px rgba(10,10,10,0.05)',
        'card-lg': '0 2px 4px rgba(10,10,10,0.06), 0 12px 32px rgba(10,10,10,0.08)',
        'electric':'0 0 0 1px rgba(0,82,255,0.15), 0 8px 24px rgba(0,82,255,0.2)',
        'gold':    '0 0 0 1px rgba(0,82,255,0.15), 0 8px 24px rgba(0,82,255,0.2)', // legacy alias
      },
      animation: {
        'ticker':  'ticker 40s linear infinite',
        'fade-up': 'fadeUp 0.7s ease-out both',
        'pulse-dot':'pulseDot 2s ease-in-out infinite',
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
        pulseDot: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
}

export default config
