/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '4rem',
      },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #F64D4D, #4D5EF6)',
      },
      
    },
  },
  plugins: [],
}