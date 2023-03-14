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
      }
    }
  },
  plugins: []
}
