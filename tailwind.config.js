/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['./App.{js,jsx,ts,tsx}', './<custom-folder>/**/*.{js,jsx,ts,tsx}'],
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './app/**/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './components/**/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
