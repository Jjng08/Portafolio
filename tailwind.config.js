/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      keyframes: {
        pulsing: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        'pulsing': 'pulsing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [animations],
}

