/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  transitionTimingFunction: {
    'out-expo': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
   },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};