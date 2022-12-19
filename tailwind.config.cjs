/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'semi': '0 8px 15px rgba(0,0,0,.2)',
        'dark-elevation': '0 2px 10px 0 rgba(0,0,0,.2)'
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' }
        }
      },
      animation: {
        'fade-up': 'fade-in-up .6s ease-in'
      }
    },
  },
  plugins: [],
}