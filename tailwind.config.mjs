/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
          serif: ['Noto Serif', 'serif'],
        },
      },
    },
    plugins: [require('@tailwindcss/typography')],
  }