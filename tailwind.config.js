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
  },
  plugins: [],
}

