/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.{vue,js,php}",
    "./app/Views/**/*.php",
  ],
  theme: {
    extend: {
      colors: {
        'safari-white': '#FFF8F9',
        'safari-orange': '#F59E03',
        'safari-brown': '#351E21',
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
