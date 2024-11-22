/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'fluid': 'clamp(3rem, 8vw, 9rem)' // Adjust values as needed
      }
    },
  },
  plugins: [],
}