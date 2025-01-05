/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '75%': { transform: 'translateY(0.5rem)', opacity: '0' },
          '76%': { transform: 'translateY(-0.5rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        'scroll': 'scroll 1.5s infinite',
      }
    },
  },
  plugins: [],
}