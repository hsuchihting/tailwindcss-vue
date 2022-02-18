const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
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
