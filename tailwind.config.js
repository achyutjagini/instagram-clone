/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors:{'white':'#ffffff',
    blue:{
      medium:"#005c98"
    },
    black:{
      light:"005c98",
      faded:"00000098"
    },
      gray: {
        base: '#616161',
        background: '#fafafa',
        primary: '#dbdbdb'
      },
      red: {
        primary: '#ed4956'
      }
    }
  },
  variants: {
    extend: {
      display: ['group-hover']
    }
  },
  plugins: []
}
