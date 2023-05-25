/** @type {import('tailwindcss').Config} */
export default {
  safelist: [
    'btn-primary',
    'btn-light'
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hyperlink': '#558ff2',
        'faded-gray': '#e8e8e8',
        'btn-color-primary': '#017bff',
        'btn-color-light': '#f8f9fa',
      },
    },
  },
  plugins: [],
}

