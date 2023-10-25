const plugin = require(`tailwindcss/plugin`);
const {tailwindConfigTheme} = require("./src/utils/tailwindConfi");

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: tailwindConfigTheme.colors,
    backgroundImage: tailwindConfigTheme.backgroundImage,
    backgroundColor: tailwindConfigTheme.backgroundColor,
    fontFamily: tailwindConfigTheme.fontFamily,
    fontSize: tailwindConfigTheme.fontSize,
    screens: tailwindConfigTheme.screens,
    extend: tailwindConfigTheme.extend,
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
    },
  },
  plugins: [
    plugin(
        ({addVariant}) =>
        {
          addVariant('hocus', ['&:hover', '&:focus']);
          addVariant('child-list', '& ol', '& ul');
          addVariant('child-code', '& pre');
        }),
  ],
};
