/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'front-image': "url('/src/assets/images/front.image.jpg')",
        'promo-svg': "url('/src/assets/svg/svg.minus.svg')",
      }
    },
  },
  plugins: [],
}

