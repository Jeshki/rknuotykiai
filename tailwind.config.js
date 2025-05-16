/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'very-dark-gray': '#1a1a1a', // Esama spalva
        'darkBlueGray': '#131a23',  // Nauja fono ir teksto spalva
        'accentYellow': '#f6ef31',  // Akcento spalva
        
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Cinzel"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}