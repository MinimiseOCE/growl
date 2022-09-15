/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "light-green": "#e9edc9",
      green: "#ccd5ae",
      white: "#ffffff",
      brown: "#372a28",
      "dark-grey": "#545454",
    },
    fontFamily: {
      title: ["Skranji"],
      header: ["Seaweed Script"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
