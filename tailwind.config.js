/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    // in theme we add new logics with old logics and override old logics
    screens: {
      'xs': '300px',
      // => @media (min-width: 300px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
       // in extend we add new logics and no override old logics
      colors: {
        'primary': '#3238f2',
      },
      fontFamily: {
        'display':['Poppins', 'sans-serif'],
        'body':['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}