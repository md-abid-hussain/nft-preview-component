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
      boxShadow: {
        "3xl": "0 25px 15px 10px #09121e",
      },
    },
  },
  plugins: [],
};
