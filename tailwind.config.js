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
      backgroundImage: {
        'person-1': "url('/src/assets/person1.webp",
        'person-1-bg': "url('/src/assets/person1-bg.webp')",
        'person-2': "url('/src/assets/person2.webp",
        'person-2-bg': "url('/src/assets/person2.webp')",
        'person-3': "url('/src/assets/person3.webp",
        'person-3-bg': "url('/src/assets/person3.webp')",
      },
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

