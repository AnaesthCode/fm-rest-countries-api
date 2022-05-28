module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  boxShadow: {
    "custom-light": "0px 0px 5px 1px hsl(209, 23%, 22%)",
  },
  darkMode: "class",
  theme: {
    colors: {
      "dark-mode-elements": "hsl(209, 23%, 22%)",
      "dark-mode-bg": "hsl(207, 26%, 17%)",
      "light-mode-text": "hsl(200, 15%, 8%)",
      "light-mode-input": "hsl(0, 0%, 52%)",
      "light-mode-bg": "hsl(0, 0%, 98%)",
      "dark-mode-text-light-elements": " hsl(0, 0%, 100%)",
    },
    fontFamily: {
      nunito: ["Nunito Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
