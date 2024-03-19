/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["jost", "sans-serif"],
      },
      textColor: {
        primary: "#E7816B",
        secondary: "#FFAD9B",
      },
      backgroundColor: {
        primary: "#E7816B",
        secondary: "#FFAD9B",
      },
    },
  },
  plugins: [],
};
