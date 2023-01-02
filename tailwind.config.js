/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
     container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '1.5rem',
        md: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '4rem',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#5f6d5c',
      seconndary: '#71695a',
      light: '#F6EDD9',
      gray_dark: "#3F4A3C",
      black: '#201e1e',
      white:'#fff'
    },
     fontFamily: {
        sans: ['var(--font-nunito)'],
      },
    extend: {
     spacing: {},
      borderRadius: {},
      zIndex: {},
      backgroundImage: {},
      ringWidth: {
        0: '10px',
      },
    },
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
};
