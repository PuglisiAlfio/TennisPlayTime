/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          300: '#A4D65E',
        },
        gray: {
          800: '#363636',
          400: '#B3B3B3',
        },
        mint: '#3EB489',
        yellow: '#D2E000',
        night: '#2A2D34',
        orange: '#FFA500',
      },
    },
  },
  plugins: [],
}

