/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          300: '#eca173',
          400: '#e3854a',
          500: '#db6b27',
          600: '#b85419',
        },
      },
    },
  },
  plugins: [],
};
