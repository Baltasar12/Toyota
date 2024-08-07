/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        redT: "#EB0A1E",
        blackT: "#373737",
        whiteT: "#FFFFFF",
      }
    },
  },
  plugins: [],
}