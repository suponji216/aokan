/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Doto'],
        'body': ['Zen Kaku Gothic New'],
      }, colors: {
        deepCove: '#03093B',
        java: '#09C5CB'
      }
    },
    plugins: [],
  }
}