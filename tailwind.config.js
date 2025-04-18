export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      colors: {
        brandturkos: "#13505B",
        brandlightturkos: "#119DA4",
        lightgrey: "#F7F7F7",
        brandgold: "#FFBB00",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
