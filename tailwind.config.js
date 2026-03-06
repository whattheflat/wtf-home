/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette based on #781e70 — use as `brand-500`, etc.
        brand: {
          50: '#f8eef9',
          100: '#f3d9f2',
          200: '#e7b3e6',
          300: '#d78aca',
          400: '#b95fb0',
          500: '#781e70', // primary
          600: '#5b154e',
          700: '#420f38',
          800: '#2d0a25',
          900: '#190512'
        }
      }
    }
  },
  plugins: []
}
