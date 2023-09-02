/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    screens: {
      desktop: '1440px'
    },
    fontFamily: {
      'lexend-deca': 'Lexend Deca, sans-serif',
      'big-shoulders': 'Big Shoulders Display, sans-serif'
    },
    colors: {
      white: 'hsl(0, 0%, 100%)',
      'bright-orange': 'hsl(31, 77%, 52%)',
      'dark-cyan': 'hsl(184, 100%, 22%)',
      'very-dark-cyan': 'hsl(179, 100%, 13%)',
      'transparent-white': 'hsla(0, 0%, 100%, 0.75)',
      'very-light-gray': 'hsl(0, 0%, 95%)'
    },
    extend: {},
  },
  plugins: [],
}

