import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6F0",
        sand: "#F2EBE1",
        ink: "#2C332B",
        sage: {
          50: "#F2F5F1",
          100: "#E1E9E0",
          200: "#C6D4C3",
          300: "#A3B9A0",
          400: "#7E9B7C",
          500: "#62805F",
          600: "#4E6A4D",
          700: "#41563F",
          800: "#374834",
          900: "#2F3C2D",
          950: "#1A211A",
        },
        terracotta: {
          50: "#FBF4EF",
          100: "#F6E5DA",
          200: "#EDCBB6",
          300: "#E1AC8F",
          400: "#D48E6D",
          500: "#C07A5E",
          600: "#A96449",
          700: "#8C5340",
          800: "#714435",
          900: "#5C392D",
        },
      },
      fontFamily: {
        serif: [
          '"Cormorant Garamond"',
          '"Iowan Old Style"',
          '"Palatino Linotype"',
          "Georgia",
          "serif",
        ],
        sans: [
          '"Nunito Sans"',
          "system-ui",
          "-apple-system",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 20px 40px -20px rgba(47, 60, 45, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
