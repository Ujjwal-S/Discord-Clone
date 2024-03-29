/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'modal-backdrop': '#2f31363a',
        'modal-background': '#2e2e2e',
        'modal-text': '#f2f2f2',
        'login-register-bg': '#5865f2',
        'background-primary': '#36393f',
        'background-secondary': '#2f3136',
        'background-secondary-alt': '#292b2f',
        'background-tertiary': '#202224',
        'status-green': '#00A55D',
        'sidepanel-text-color': '#96989D',
        'interactive-hover': '#DCDDDE',
        'background-modifier-hover': '#3b3e45',
        'app-header-dark': '#202225',
        'app-icon-inactive': '#b9bbbe',
        'chat-input-bg': '#40444b',
        'chat-hover-bg': '#32353b',
        'chat-message-timestamp': '#72767d',
        'chat-username-color': '#f1f1f1',
        'chat-message-color': '#dcddde',
        'message-other': '#1e1f28',
				'message-mine': '#5765f2',
      },
      boxShadow: {
        'semi': '0 8px 15px rgba(0,0,0,.2)',
        'dark-elevation': '0 2px 10px 0 rgba(0,0,0,.2)',
        'blur-on-top': '0px -4px 3px rgba(50, 50, 50, 0.75)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(50px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        'fade-up': 'fade-in-up .6s ease-in',
        'slide-up': 'slide-up .4s ease-in-out'
      }
    },
  },
  plugins: [],
}