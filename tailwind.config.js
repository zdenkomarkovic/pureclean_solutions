/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        colorChange: {
          "0%": { color: "#ffffff" },
          "100%": { color: "#ff7000" },
        },
      },
      animation: {
        "fade-in": "fade-in 1.7s ease-in forwards 1.7s",
        "fade-in2": "fade-in 2s ease-in forwards 2s",
        colorChange: "colorChange 2s ease-in-out",
      },
      transitionDuration: {
        1500: "1500ms",
      },
      colors: {
        primary: "#ff7000",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
