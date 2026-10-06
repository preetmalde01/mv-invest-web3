/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: 'var(--bg-primary)',
          surface: 'var(--bg-surface)',
          card: 'var(--bg-card)',
          invert: 'var(--bg-invert)',
          text: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          orange: '#F36F43',
          deepOrange: '#EA580C',
        }
      },
      fontFamily: {
        heading: ['Syne', 'Plus Jakarta Sans', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
