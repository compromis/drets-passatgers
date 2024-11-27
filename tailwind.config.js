/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'storyblok/**/**.vue'
  ],
  theme: {
    colors: {
      'red': '#F2430E',
      'blue': '#1968A9',
      'yellow': '#F8AC20',
      'green': '#148E6C',
      'brown': '#6C4116',
      'black': '#02111B',
      'white': '#fff',
      'gray': '#979AA4',
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      headline: ['mono45-headline', 'sans-serif'],
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
