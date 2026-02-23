/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'tsirotech-background': '#F7F7F7', 
        'tsirotech-primary': '#009C65', 
        'tsirotech-footer': '#2C2323', 
        'tsirotech-border': '#D4D4D4', 
        'tsirotech-warning': '#F44C38', 
        'tsirotech-action': '#3496FD'
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

