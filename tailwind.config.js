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
          dark: "#272D1E",
          "dark-green": "#414B30",
          "medium-green": "#656C51",
          "light-green": "#ADB296",
          "dark-olive": "#262B15",
          "light-grey": "#AFB4AD",
          "olive-green": "#464B37",
          "sage-green": "#848871",
          "dark-grey": "#3F3F3F",
          lightest: "#D4D7C8",
          accent: {
            purple: "#6E5775",
            green: "#7AB547",
          },
        },
        text: {
          primary: "#272D1E",
          secondary: "#414B30",
          light: "#D4D7C8",
          muted: "#656C51",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/images/bg-texture.png')",
        "gradient-accent": "linear-gradient(135deg, #6E5775 0%, #7AB547 100%)",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "card-hover":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      borderColor: {
        DEFAULT: "#D4D7C8",
      },
      borderRadius: {
        DEFAULT: "0.375rem",
      },
    },
  },
  plugins: [],
};
