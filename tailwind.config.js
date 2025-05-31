/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#d6ad61',
      },
      keyframes: {
        'clip-reveal': {
          '0%': { 'clip-path': 'inset(100% 0 0 0)' },
          '100%': { 'clip-path': 'inset(0 0 0 0)' },
        },
      },
      animation: {
        'clip-reveal': 'clip-reveal 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
