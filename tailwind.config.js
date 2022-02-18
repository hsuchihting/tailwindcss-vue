const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
        blue: "#1fb6ff",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        grayDark: "#273444",
        gray: "#8492a6",
        grayLight: "#d3dce6",
    },
},
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    plugin(function ({ addBase, theme }) {
      addBase({
          h1: { fontSize: theme("fontSize.2xl") },
          h2: { fontSize: theme("fontSize.xl") },
          h3: { fontSize: theme("fontSize.lg") },
      });
  }),
  ],
}
