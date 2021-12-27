const theme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...theme.fontFamily.sans],
      },
      colors: {
        "primary-light": "#f8f8f8",
        "primary-dark": "#191919",
        greenish: {
          100: "#7CFFD4",
          200: "#B6FFE7",
          300: "#00FFAB",
        },
        blueish: {
          100: "#e6f8f9",
          200: "#b1e8ed",
        },
      },
    },
  },
  plugins: [],
};
