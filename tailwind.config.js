/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    colors: {
      'text-color': '#00204a',
      'primary-color': '#1d83d4',
      'secondary-color': '#2196f3',
      'highlight-color': '#ff9800',
      'light-gray': '#f7f8f8',
      light: '#ffffff',
      'light-blue': 'rgb(33 150 243 / 15%)'
    }
  },
  fontFamily: {
    montserrat: ['Montserrat Regular'],
    'montserrat-bold': ['Monserrat Bold']
  },
  plugins: []
}
