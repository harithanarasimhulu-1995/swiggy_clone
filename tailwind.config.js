/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [    
    function({ addUtilities }) {
    addUtilities({
      '.no-scrollbar': {
        '-ms-overflow-style': 'none', /* IE and Edge */
        'scrollbar-width': 'none', /* Firefox */
      },
      '.no-scrollbar::-webkit-scrollbar': {
        'display': 'none', /* Chrome, Safari, and Opera */
      },
    })
  }],
}

