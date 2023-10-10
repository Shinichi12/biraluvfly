/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        bgblue: "#3AA6B9",
        basepink: "#FFD0D0",
        secpink: "#FF9EAA",
        secblue: "#C1ECE4",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serief"],
      },
    },
  },
  plugins: [],
};
