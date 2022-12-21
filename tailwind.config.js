/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      fontWeight: {
        hairline: 400,
        'extra-light': 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        'extra-bold': 800,
        black: 900
      },
      width: {
        128: '670px',
        128: '100%'
      },
      colors: {
        grey: '#E8E8E8',
        yellow: '#FAB826',
        black: {
          50: '#606060'
        }
      },
      backgroundImage: {
        'auth-background': "url('../public/images/loginbg.png')"
      }
    }
  },
  plugins: [require('tw-elements/dist/plugin'), require('flowbite/plugin')]
};
