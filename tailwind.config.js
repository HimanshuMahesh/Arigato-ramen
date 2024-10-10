/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C0392B",
        secondary: "#F1C40F",
        background: "#F5E6CC",
        text: "#2C3E50",
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        sawarabi: ['Sawarabi Mincho', 'serif'],
      },
    },
  },
  plugins: [],
}