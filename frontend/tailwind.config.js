/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-sienna": "#220C10",
        "alabaster": "#F0E9DC",
      },
      backdropBlur: {
        "xxl": "200px"
      }
    },
  },
  plugins: [],
}