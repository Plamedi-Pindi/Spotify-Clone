/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flexBasis:{
        '23p': '30.9%',
        '22p': '20.7%',
        '54p': '47.3%',
        '20p': '20.5%',
        '70p': '78%',
        '72p': '72%'
      },
      height: {
        '86vh': '78vh',
        '14vh': '13vh',
        '9vh': '7vh',
        '7.5rm': '7.5rem',
        '3.8rm': '3.8rem',
        '23rm' : '23.5rem',
        '25rm' : '26.5rem',
      },
      width: {
        '23rm': '23.4rem',
        '28rm': '29.5rem',
        '95p': '95%',
        '96p': '96%',
      }
    },
  },
  plugins: [],
}

