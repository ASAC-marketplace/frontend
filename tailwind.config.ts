/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontSize: {
        headline1: ['2.25rem', { fontWeight: '700' }],
        headline2: ['1.75rem', { fontWeight: '700' }],
        headline3: ['1.125rem', { fontWeight: '600' }],
        headline4: ['1.125rem', { fontWeight: '500' }],
        'title-lg': ['1.125rem', { fontWeight: '700' }],
        'title-md': ['1rem', { fontWeight: '600' }],
        'title-sm': ['0.875rem', { fontWeight: '600' }],
        'body-2xl': ['1.25rem', { fontWeight: '700' }],
        'body-xl': ['1.25rem', { fontWeight: '500' }],
        'body-lg': ['1.125rem', { fontWeight: '600' }],
        'body-base': ['0.875rem', { fontWeight: '500' }],
        'body-md': ['1rem', { fontWeight: '500' }],
        'body-sm': ['0.8125rem', { fontWeight: '600' }],
        'body-xs': ['0.75rem', { fontWeight: '700' }],
        'body-mini': ['0.6875rem', { fontWeight: '600' }],
        'body-min': ['0.625rem', { fontWeight: '500' }],
        'button-lg': ['1.125rem', { fontWeight: '500' }],
        'button-base': ['1rem', { fontWeight: '500' }],
        'button-md': ['0.875rem', { fontWeight: '600' }],
        'button-sm': ['0.75rem', { fontWeight: '600' }],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        grayscale: {
          white: 'FFFFFF',
          10: '#FAFAFA',
          50: '#F6F6F6',
          100: '#E5E5E5',
          200: '#CCC',
          300: '#B2B2B2',
          400: '#999',
          500: '#7F7F7F',
          600: '#666',
          700: '#4C4C4C',
          800: '#333',
          900: '#191919',
          black: '#000',
        },
        'tier-color': {
          BRONZE: '#5B3E38',
          SILVER: '#4D5B66',
          GOLD: '#C1AE7B',
          PLATINUM: '#053336',
          DIAMOND: '#146994',
        },
        'brand-primary': {
          100: '#F2F9F7',
          200: '#EAF8F4',
          300: '#B0E3D4',
          400: '#61CEAD',
          500: '#0DBD88',
        },
        'brand-error': 'DA3A44',
        'brand-success': '1D62EC',
        'brand-warning': 'F3CB3C',
      },
      flex: {
        2: '2 2 0%',
      },
      inset: {
        '576px': '576px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
