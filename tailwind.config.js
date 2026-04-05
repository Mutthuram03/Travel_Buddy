/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#effaf5',
          100: '#d7f2e4',
          200: '#b2e7cd',
          300: '#7fd7b0',
          400: '#4bbf90',
          500: '#2ea878',
          600: '#20835f',
          700: '#1b684d',
          800: '#19533f',
          900: '#164537'
        }
      },
      boxShadow: {
        card: '0 10px 30px rgba(22, 69, 55, 0.15)'
      }
    }
  },
  plugins: []
}
