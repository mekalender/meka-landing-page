/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          container: 'var(--primary-container)',
        },
        'on-primary': {
          DEFAULT: 'var(--on-primary)',
          container: 'var(--on-primary-container)',
        },
        surface: {
          DEFAULT: 'var(--surface)',
          container: {
            DEFAULT: 'var(--surface-container)',
            low: 'var(--surface-container-low)',
            high: 'var(--surface-container-high)',
          },
        },
      },
      fontFamily: {
        sans: ['Google Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};