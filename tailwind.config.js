/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "me-one": "url('/public/me/me-1-bg.jpg')",
        "me-one-left": "url('/public/me/me-1-bg-left.jpg')",
        "me-two": "url('/public/me/me-3.jpg')",
        "projects": "url('/public/me/Project.jpg')",
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
