/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'serif'],
        recoleta: ['"Recoleta"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
      fontSize: {
        xxs: ['0.65rem', '1rem'],
        xxxs: ['0.5rem', '0.75rem'],
      },
    },
    screens: {
      xs: '540px',
      sm: '640px',
      md: '768px',
      ml: '910px',
      lg: '1024px',
      lx: '1162px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
