/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     boxShadow:{
      '3xl': '0 2px 40px hsl(150, 100%, 66%)'
     }
    },
    colors:{
      "lightCyan": "hsl(193, 38%, 86%)",
      "neonGreen": "hsl(150, 100%, 66%)",
 "grayishBlue":"hsl(217, 19%, 38%)",
 "darkGrayishBlue": "hsl(217, 19%, 24%)",
 "darkBlue": "hsl(218, 23%, 16%)",
    }
  },
  plugins: [],
}
