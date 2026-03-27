/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#161719",
        lightText: "#d6d0c7",
        boxBg: "linear-gradient(145deg, #1a1b1f, #22242a)",
        designColor: "#b88a5a",
      },
      boxShadow: {
        shadowOne: "10px 10px 24px rgba(7, 8, 10, 0.42), -8px -8px 18px rgba(48, 49, 54, 0.16)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
