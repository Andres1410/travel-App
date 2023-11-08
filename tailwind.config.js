/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx,jpg}",
    ],
    theme: {
      extend: {
        backgroundImage : {
          'sanFrancisco' : "url('../img/sanFrancisco.jpg')",
          'singapur' : "url('../img/singapur.jpg')",
          'rusia' : "url('../img/rusia.jpg')",
          'paris' : "url('../img/paris.jpg')",
          'paisaje' : "url('../img/paisaje.jpg')",
          'new_york' : "url('../img/new_York.jpg')",
          'mountain' : "url('../img/mountain.jpg')",
          'moscu' : "url('../img/moscu.jpg')",
          'golgota' : "url('../img/golgota.jpg')",
          '' : "url('../img/.jpg')",
          '' : "url('../img/.jpg')",
          '' : "url('../img/.jpg')",
          '' : "url('../img/.jpg')",
        },
        colors: {
          'Primary' : '#CC2D4A',
          'secondary' : '#8FA206',
          'terciary' : '#61AC9'
        },
        
        textColor:{
          'Primary' : '#CC2D4A',
          'secondary' : '#8FA206',
          'terciary' : '#61AC9'
        },
        fontFamily: {
          'Monserrat': ['"Monserrat", "sans-serif"']
        }
      },
    },
    plugins: [],
  }