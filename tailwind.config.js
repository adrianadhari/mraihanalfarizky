/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fakodi: ['Fakodi', 'sans-serif'],
      }
    },
  },
  plugins: [],
}