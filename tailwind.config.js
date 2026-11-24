/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.{vue,js,php}",
    "./app/Views/**/*.php",
  ],
  theme: {
    extend: {
      colors: {
        // Palette: https://coolors.co/palette/a3bb6d-1f2a36-a1b160-efefeb-535b37
        'safari-light': '#EFEFEB',  // backgrounds
        // Brand green sampled from the Walters Tours safari jeep paint
        'safari-dark': '#1A3115',   // jeep green – text, navbar, footer, dark sections
        'safari-green': '#488D35',  // brighter jeep green – buttons, highlights (readable on light AND dark)
        'safari-moss': '#A1B160',   // secondary accent
        'safari-olive': '#535B37',  // deep green accent
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
