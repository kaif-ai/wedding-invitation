/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dustyRose: {
          light: '#f3b6c3',
          DEFAULT: '#e5a0ae',
          dark: '#d88b9c',
          deep: '#c43360',
          wine: '#630c0c',
        },
        cream: {
          light: '#fffbf7',
          DEFAULT: '#faf2e6',
          dark: '#f2eddf',
          gold: '#fcefba',
        },
        gold: {
          DEFAULT: '#d4af37',
        }
      },
      fontFamily: {
        alex: ['"Alex Brush"', 'cursive'],
        greatVibes: ['"Great Vibes"', 'cursive'],
        amiri: ['Amiri', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        marquis: ['Marquis', 'serif'],
      }
    },
  },
  plugins: [],
}
