/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        clarus: {
          // Base brand colors from document
          dark: "#272D1E", // Darkest green/almost black
          "dark-green": "#414B30", // Dark olive green
          "medium-green": "#656C51", // Medium olive green
          "light-green": "#ADB296", // Light olive green
          lightest: "#D4D7C8", // Very light olive/gray
          accent: {
            purple: "#6E5775", // Purple accent seen on banner
            green: "#7AB547", // Bright green accent
          },
        },
        text: {
          primary: "#272D1E", // Primary text color (dark green)
          secondary: "#414B30", // Secondary text color
          light: "#D4D7C8", // Light text for dark backgrounds
          muted: "#656C51", // Muted text color
        },
      },
    },
  },
  plugins: [],
};
