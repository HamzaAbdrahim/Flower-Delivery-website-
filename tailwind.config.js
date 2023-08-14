import assets from './src/assets/imges';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#F5F5F7",
        scondary:"#D2D2D7",
        Gray:"#808080",
        DarkTextColor:"#424245",
        blacky:"#121212",
      },
      fontFamily:{
        Gilroy: ['Gilroy', "sans-serif"],
        BIZ: ['BIZ UDGothic', 'sans-serif']
      },
      content:{
        'imgicon': 'url("../src/assest/R.svg")',
      }
    },
  },
  plugins: [],
}

