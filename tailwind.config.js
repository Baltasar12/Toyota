/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      mont:['Montserrat','sans-serif']
    },
    extend: {
      colors:{
        redT: "#EB0A1E",
        blackT: "#373737",
        whiteT: "#FFFFFF",
        grayT: "F7F7F7"
      }
    },
  },
  plugins: [],
}