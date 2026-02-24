/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'alabaster': '#FAFAFA',
        'slate-ash': '#27272A',
        'muted-lavender': '#A78BFA',
        'soft-sage': '#99F6E4',
        'glass-white': 'rgba(255, 255, 255, 0.7)',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
