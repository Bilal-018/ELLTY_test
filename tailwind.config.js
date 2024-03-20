/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]
      },
      boxShadow: {
        'custom': '0px 8px 15px 0px rgba(20, 20, 20, 0.12), 0px 0px 4px 0px rgba(20, 20, 20, 0.10)',
      }
    },
  },
  plugins: [],
}

