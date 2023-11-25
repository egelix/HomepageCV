/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "up": "0px -4px 2px -1px rgba(0, 0, 0, 0.2)"
      }
    },
  },
  plugins: [],
}

