/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'], 
  darkMode:"class",
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      colors:{
        primary:"#25A7DA",
        primary2:"#ec4899",  
        secondary:"#64748b",
        other:"#1a8599",
       },
      fontFamily:{
          primary:"Cookie",
          base:"Libre Franklin",
          other:"Podkova",
      },
      screens:{
        '2xl':'1320px', 
      }
  },
  plugins: [],
  }
};