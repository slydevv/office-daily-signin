/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pry': '#A084CA',
        'sec': '#EBC7E8',
        'aux': '#645CAA',
      },
    },
  },
  plugins: [],
}
