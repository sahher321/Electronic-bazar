/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orangeMain: "#FF7020",
        grayText: "#8D8D8D",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
