/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      primary: '#084892',
      black: '#000000',
      white: '#ffffff',
      blueRGB: 'rgba(8, 72, 146, 0.80)',
    },
    extend: {
      boxShadow: {
        sm: '0px 2px 8px 1px rgba(81, 81, 81, 0.16)',
        btnShadow: '0px 2px 8px 1px rgba(8, 72, 146, 0.16)',
        btnSmShadow: '0px 2.581px 10.326px 1.291px rgba(8, 72, 146, 0.16)',
        popupShadow: '0px 8px 18px 4px rgba(81, 81, 81, 0.16)',
      },
    },
  },
  plugins: [],
}
