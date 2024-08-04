/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import scrollbar from 'tailwind-scrollbar'

export default {
  darkMode: 'class',
  content: [
    "index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'medium': { 'raw': '(max-height: 780px)' },
        // 'small': { 'raw': '(max-height: 780px)' },
      }
    },
  },
  plugins: [
    forms,
    scrollbar,
  ],
}
