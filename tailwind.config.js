/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'storyblok/**/**.vue'
  ],
  theme: {
    colors: {
      'red': '#e0602e',
      'blue': '#3f85c1',
      'yellow': '#fad414',
      'green': '#099e76',
      'pink': '#e3aaca',
      'black': '#1e1e1e',
      'white': '#f7eee8',
      'gray': '#71717a',
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      headline: ['Headlne45', 'sans-serif'],
    },
    fontSize: {
      'xs': 'var(--text-xs)',
      'sm': 'var(--text-sm)',
      'base': 'var(--text-base)',
      'md': 'var(--text-md)',
      'lg': 'var(--text-lg)',
      'xl': 'var(--text-xl)',
      '2xl': 'var(--text-2xl)',
      '3xl': 'var(--text-3xl)',
      '4xl': 'var(--text-4xl)',
      '5xl': 'var(--text-5xl)',
    },
    extend: {
      spacing: {
        'safe-area': 'var(--navbar-safe-area)',
        site: 'var(--site-padding)'
      },
    }
  },
  plugins: [],
}

