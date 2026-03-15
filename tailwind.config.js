/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          DEFAULT: '#0c4a6e',
          dark: '#082f49',
          light: '#0e7490',
        },
        sand: {
          DEFAULT: '#d4a574',
          light: '#e8d5c4',
          dark: '#b8956a',
        },
        accent: {
          DEFAULT: '#ea580c',
          light: '#f97316',
          dark: '#c2410c',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
}
