/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "costum-gray": "#c4c4c4",
        "costum-darkBlue": "#070625",
        "costum-purple": "#6D2ED5",
      },
      fontFamily: {
        antonio: ["Antonio", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
