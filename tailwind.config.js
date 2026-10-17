/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent, #ccff00)',
        'bg-dark': '#08080a',
        'bg-card': '#111115',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
};
