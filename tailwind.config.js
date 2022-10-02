/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'phoneBackground': "url('https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png')",
     
      },
padding:{
  "pl-26" : "6.9rem",
},
margin:{
  "ml-26" :"6.9rem"
},
colors:{
  blueColor:"#0095f6",
  disabledBlue:"#C5E0FC",
  link:'#00376b'
}
    },
  
  },
  plugins: [],
}
