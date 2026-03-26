/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#FF2020",
        secondary: "#B2B2B2"
      },
      fontFamily: {
        Primary: ["Helve", "sans-serif"],
      }
    },
  },
  plugins: [],
};
