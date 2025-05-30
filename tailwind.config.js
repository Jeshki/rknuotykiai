// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Užtikrink, kad šis kelias teisingai nurodo į tavo komponentus
  ],
  theme: {
    extend: {
      fontFamily: {
        // Pridedame 'advent' kaip naują šriftų šeimą
        // Galėsi naudoti klasę: font-advent
        // Kaip atsarginį šriftą naudojame numatytuosius sans-serif šriftus
        'advent': ['"Advent Pro"', ...defaultTheme.fontFamily.sans],

        // Pridedame 'museo' kaip naują šriftų šeimą
        // Galėsi naudoti klasę: font-museo
        'museo': ['"MuseoModerno"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}