/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0a0e27',
        'secondary-dark': '#121530',
        'accent-purple': '#a855f7',
        'accent-blue': '#3b82f6',
        'accent-cyan': '#06b6d4',
        'text-gray': '#94a3b8',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'pulse-ring': 'pulse-ring 2s infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        'pulse-ring': {
          '0%': {
            transform: 'scale(0.8)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1.4)',
            opacity: '0',
          },
        }
      }
    },
  },
  plugins: [],
}