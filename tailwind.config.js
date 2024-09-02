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
        '100vh': '100vh',
        '77vh': '76.5vh',
        '10vh': '10vh',
        '14vh': '13.5vh',
        '7.5rm': '7.5rem',
        '3.8rm': '3.8rem',
        '23rm' : '23.5rem',
        '25rm' : '26.5rem',
        '24p' : '24%',
        '76p' : '76%',
        '88p' : '88%',
        '10p' : '12%',
        '9p' : '9%',
      },
      width: {
        '23rm': '23.4rem',
        '28rm': '29.5rem',
        '37rm': '37rem',
        '5rm': '4.5rem',
        '95p': '95%',
        '96p': '96%',
        '48p': '49%',
        '24p': '24%',
      },
      fontSize: {
        'l': 'font-size:10px'
      }
    },
  },
  plugins: [],
}

