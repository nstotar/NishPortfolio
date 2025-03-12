/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "640px",  // Small devices (phones)
      md: "768px",  // Medium devices (tablets)
      lg: "1024px", // Large devices (laptops)
      xl: "1280px", // Extra large devices (desktops)
      "2xl": "1536px", // Bigger screens
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
  },
  plugins: [],
}

