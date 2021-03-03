module.exports = {
  theme: {
    extend: {
      colors: {
        bgColor: '#232323',
        bgColorAlt: '#424242',
        danger: '#F65261',
        textAlt: '#555555'
      },
      fontFamily: {
        logo: ['Lalezar'],
        logoAlt: ['Mada']
      },
      spacing: {
        cover: '56.25%',
        half: '35.5rem',
        bigger: '110%',
        tiny: '5%'
      }
    }
  },
  variants: {
    filter: ['responsive'],
    backdropFilter: ['responsive']
  },
  plugins: [require('tailwind-filter-utilities')]
};
