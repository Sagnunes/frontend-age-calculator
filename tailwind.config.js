/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        poppins:['Poppins','sans-serif']
      }
    },
    colors:{
      lightGrey:"hsl(0, 0%, 86%)",
      white:"hsl(0, 0%, 100%)",
      purple:"hsl(259, 100%, 65%)",
      smokeyGrey:"hsl(0, 1%, 44%)",
      offBack:"hsl(0, 0%, 8%)",
      offWhite:"hsl(0,0%,94%)",
      lightRed:'hsl(0, 100%, 67%)'
    }
  },
  plugins: [],
}