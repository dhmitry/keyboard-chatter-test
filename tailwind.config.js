module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        // units * 0.25rem
        15: '3.75rem',
        18: '4.5rem',
        21: '5.25rem',
        27: '6.75rem',
        33: '8.25rem',
        75: '18.75rem',
      },
    },
  },
  plugins: [],
};
