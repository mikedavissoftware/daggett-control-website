/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        none: 'none',
        spin: 'spin 5s linear infinite'
      },
      dropShadow: {
        'sm-white': '0 0 1px rgb(255 255 255 / 1)',
        'md-white': '0 0 2px rgb(255 255 255 / 1)',
        'lg-white': '0 0 4px rgb(255 255 255 / 1)',
        'xl-white': '0 0 8px rgb(255 255 255 / 1)',
        '2xl-white': '0 0 16px rgb(255 255 255 / 1)',
      },
    }
  },
  plugins: []
}
