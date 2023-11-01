/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts}"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': '#000',
        },
        '.text-transparent-fill': {
          '-webkit-text-fill-color': 'transparent',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}