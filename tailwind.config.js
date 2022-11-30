const {plugin} = require('twrnc');

const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    plugin(({addUtilities}) => {
      addUtilities({
        'text-primary': {
          color: '#494949',
        },
        'text-color-primary': {
          color: '#4c1192',
        },
        'bg-color-primary': {
          backgroundColor: '#4c1192',
        },
        'bf-secondary': {
          backgroundColor: '#f8f8f8',
        },
      });
    }),
  ],
};
