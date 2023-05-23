/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-pink": "#ED78A2",
        pink: "#CD2460",
        blue: "#6ABFBC",
        "soft-black": "#1e1e1e",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
};
