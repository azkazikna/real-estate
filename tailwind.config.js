/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
        josefin: ['"Josefin Sans"', 'sans-serif'],
      },
      colors: {
        secondary: '#3E3D3D',
        supersecond: '#989898'
      },
    },
  },
  plugins: [],
}
