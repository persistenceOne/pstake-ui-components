const tailwindConf = require("@persistenceone/pstake-ui-components");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: tailwindConf.tailwindConfigTheme.colors,
    backgroundImage: tailwindConf.tailwindConfigTheme.backgroundImage,
    backgroundColor: tailwindConf.tailwindConfigTheme.backgroundColor,
    fontFamily: tailwindConf.tailwindConfigTheme.fontFamily,
    fontSize: tailwindConf.tailwindConfigTheme.fontSize,
    screens: tailwindConf.tailwindConfigTheme.screens,
    extend: tailwindConf.tailwindConfigTheme.extend,
  },
  plugins: [],
};
