/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      darkblue :'hsl(209, 23%, 22%)',
      darkbluezero :'hsl(207, 26%, 17%)',
      darkbluetext : 'hsl(200, 15%, 8%)',
      darkgray : 'hsl(0, 0%, 52%)',
      lightgray: 'hsl(0, 0%, 98%)',
      white : 'hsl(0, 0%, 100%)',
      transparent:'transparent',
    },
    extend: {},
  },
  plugins: [],
  darkMode:'selector'
}

