/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  prefix: 'tw-',
  theme: {
    extend: {
      fontFamily: {
        'century': ['Century Gothic', 'CenturyGothic', 'AppleGothic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

