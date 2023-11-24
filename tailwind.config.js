/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      "header": "var(--font-header)",
      "main": "var(--font-main)",
    },
    lineHeight: {
      default: "1.25",
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "2",
      relaxed: "1.5",
      loose: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
    },
    screens: {
      sm: "480px",
      md: "640px",
      lg: "1220px",
      xl: "2400px",
      "sm-phone": { raw: "(max-height: 500px) and (max-width: 1920px)" },
    },
    borderRadius: {
      sm: "0.3rem",
      md: "0.6rem",
      lg: "1.2rem",
      full: "9999px",
    },
    colors: {
      primary: "#baa59a",
      primaryDark: "#36241b",
      secondary: "#e0d0bf",
      black: "#131414",
      blackSecondary: "#1b1d21",
      white: "#F8F8F8",

      transparent: "hsl(0,0%,0%,0)",
    },
    extend: {
      backgroundImage: {
      },
    },
    fontSize: {
      base: ["1.25rem", { lineHeight: "1.5" }],
      lg: ["2.5rem", { lineHeight: "1.5" }],
      xl: ["4rem", { lineHeight: "1.125" }],
      "2xl": ["6rem", { lineHeight: "1" }],
      "3xl": ["8rem", { lineHeight: "1" }],
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        fadeInLeft: "fadeInLeft 0.5s ease-in-out forwards",
        fadeInRight: "fadeInRight 0.5s ease-in-out forwards",
        fadeDown: "fadeDown 0.3s ease-in-out forwards",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },

        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-23px)" },
          "100%": { opacity: 1 },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(23px)" },
          "100%": { opacity: 1 },
        },
        fadeDown: {
          "0%": { opacity: 0, transform: "translateY(-23px)" },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};


