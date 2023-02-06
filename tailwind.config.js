/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "me-one": "url('me/me-1-bg.jpg')",
        "me-two": "url('me/me-1.png')",
      },
      screens: {
        sm: "0px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        one: "'Caveat', cursive",
        two: "'Itim', cursive",
      },
    },
  },
  plugins: [],
};
