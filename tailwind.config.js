/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js,css}'],
  theme: {
    extend: {},
    colors: {
      'soft-green': '#659ba8',
      'soft-beige': '#F1E9E2',
      'soft-blue': '#93C2DB',
      'soft-black': '#282828',
      'soft-red': '#E37D7C',
      'dark-blue': '#0C4584',
      'dark-beige': '#B79132',
      white: '#FFF',
    },
    fontFamily: {
      sans: ['Poppins'],
    },
  },
  plugins: [],
};
