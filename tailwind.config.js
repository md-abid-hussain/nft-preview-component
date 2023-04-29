/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.html"],
  theme: {
    extend: {
      maxWidth: {
        mobile: "350px",
      },
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
      colors: {
        "custom-blue": "#8bacda",
        "custom-cyan": "#00fff7",
        "custom-body-blue": "#0d192b",
        "custom-card-blue": "#14253d",
        "hr-color": "#2f415b",
        "fr-link": "#3e52a3",
      },
    },
  },
  plugins: [],
};
