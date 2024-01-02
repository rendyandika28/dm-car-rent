/** @type {import('tailwindcss').Config} */
export default {
  cssPath: "./assets/styles/scss/tailwind.css",
  content: [],
  theme: {
    extend: {
      colors: {
        "primary-gray": "#F6F7F9",
        "primary": { 500: "#3563E9" },
        "secondary": "#596780",
        "gray": {
          "border": "#C3D4E966"
        }
      }
    },
  },
  plugins: [],
}

