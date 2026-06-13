/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ebony: '#111111',
        alabaster: '#f8f7f4',
        gold: '#cfa66a',
        bronze: '#b88a56'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0,0,0,0.18)'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
