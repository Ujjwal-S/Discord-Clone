/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-primary': '#36393f',
        'background-secondary': '#2f3136',
        'background-tertiary': '#202224',
        'status-green': '#00A55D'
      },
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