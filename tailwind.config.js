/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        fontFamily: {
            lato: ['Lato', 'sans-serif']
        },
        textShadow: {
          sm: '1px 1px 2px rgba(0,0,0,0.25)',
          DEFAULT: '2px 2px 4px rgba(0,0,0,0.45)',
          lg: '4px 4px 10px rgba(0,0,0,0.45)',
        },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.45)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 10px rgba(0, 0, 0, 0.45)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
