/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#F2F5F8",
        "secondary": "#39526A",
        "tertiary": "#D7E1EA"
      },
      backgroundImage: {
        "add-product-bg": "url('/src/assets/bg.jpg')",
      },
      screens: {
        xs: '556px',
      },
    },
  },
  plugins: [],
}

