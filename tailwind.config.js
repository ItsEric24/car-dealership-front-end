/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        cream: '#F8F5F1',
        sand: '#E8E1D9',
        stone: '#A69F95',
        charcoal: '#2C2C2C',
      },
    },
  },
  plugins: [],
}