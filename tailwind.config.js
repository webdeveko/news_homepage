/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#fffdfa',
        'grayish-blue': '	#c5c6ce',
        'dark-grayish-blue': '#5d5f79',
        'very-dark-blue': '#00001a',
        'soft-red': '#f15e50',
        'soft-orange': '#e9ab53',
      },
    },
  },
  plugins: [],
}

