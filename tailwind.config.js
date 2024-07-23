/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': '#282828',
      'secondary': '#495057',
      'accent': '#6283C2',
      'white': '#eeeeee',
    },
    extend: {
      keyframes: {
        fadeInAnime: {
          "0%": { opacity: 0 },
          "20%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
    animation: {
      fadeInAnime: "fadeInAnime 2s forwards",
    },
  },
  plugins: [],
}

