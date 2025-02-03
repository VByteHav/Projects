/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '20px': '20px', // Custom font size
      },
      screens: {
        'below-417': {'max': '416px'}, // Custom breakpoint
      },
    },
  },
  plugins: [],
}
