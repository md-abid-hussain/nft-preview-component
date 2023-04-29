/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        outfit: "Outfit, sans-serif",
      },
      fontWeight: {
        olight: "300",
        onormal: "400",
        osemibold: "600",
      },
    },
  },
  plugins: [],
};
