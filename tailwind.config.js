/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts}"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('tailwind-scrollbar-hide'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': '#fff',
        },
        '.text-transparent-fill': {
          '-webkit-text-fill-color': 'transparent',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}