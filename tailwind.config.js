/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#F4F4F0", // Light Beige / Cream
        card: "#FFFFFF",
        primary: "#FCD34D", // Yellow - Buttons/Highlights
        accent: "#FF4D4D", // Red - Errors/Stop/Alerts
        black: "#000000",
      },
      fontFamily: {
        sans: ['"IBM Plex Mono"', "monospace"], // Default body font
        heading: ["Sora", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      boxShadow: {
        neo: "6px 6px 0px 0px #000000",
      },
      dropShadow: {
        neo: "8px 8px 0px #000000",
      },
      borderWidth: {
        3: "3px",
      },
      borderRadius: {
        none: "0px",
      },
    },
  },
  plugins: [],
};
