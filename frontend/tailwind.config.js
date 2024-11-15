/** @type {import('tailwindcss').Config} */ 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      utility: {
        'scrollbar-hide': {
          // Firefox
          'scrollbar-width': 'none',
          // IE and Edge
          '-ms-overflow-style': 'none',
          // Safari and Chrome
          '&::-webkit-scrollbar': {
            'display': 'none'
          }
        }
      }
    }
  },
  plugins: [],
}