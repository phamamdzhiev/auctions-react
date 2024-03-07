import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  safelist: [
    'bg-orange-400',
    'bg-green-400'
  ],
  theme: {
    container: {
      center: true,
      padding: '0.7rem',
      screens: {
        // sm: '576px',
        // md: '768px',
        // lg: '992px',
        xl: '1680px',
      },
    },
    extend: {
      fontSize: {
        xxs: "11px",
      },
      colors: {
        'main': '#333',
        'main-accent': '#4a4a4a',
        'gold': '#cdb67e'
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [forms],
};
