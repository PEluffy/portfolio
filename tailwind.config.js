/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ["Playwrite ES Deco", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#22d3ee",
        dark: "bg-slate-900",
        classywhite: "f2f7f5",
        classyblak: "rgb(0, 0, 0",
      },
      fontSize: {
        small: "0.875rem", // 14px
        medium: "1rem", // 16px
        large: "1.25rem", // 20px
        larger: "1.7rem", // 24px
        largest: "2.5rem",
        largerian: "3.5rem",
      },
    },
  },
  plugins: [],
};
