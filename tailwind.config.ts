/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,vue}'],
  darkMode: 'class',
  theme: {
    colors: {
      'text-color': '#00204a',
      'primary-color': '#1d83d4',
      'secondary-color': '#2196f3',
      'highlight-color': '#ff9800',
      'light-gray': '#d9e0e0',
      light: '#f7f8f8',
      'light-blue': '#165793',
      red: '#ff0000',
      green: '#13ce66'
    }
  },
  fontFamily: {
    montserrat: ['Montserrat Regular'],
    'montserrat-bold': ['Monserrat Bold']
  },
  plugins: []
}
