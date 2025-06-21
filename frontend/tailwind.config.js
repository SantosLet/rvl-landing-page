/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'soft': 'rgba(27, 31, 35, 0) 1px 1px 5px 0px',
      },
      colors: {
        primary: '#156155',    
        'primary-dark': '#114B46',    
        secondary: '#9FC244',
        'secondary-accent': '#F5F9EA',
        'secondary-dark': '#7DA92E',
        gray: {
          light: '#F8F8F8',        
          medium: '#F2F2F2',       
          dark: '#939393',         
        },
        white: '#FFFFFF',          
        black: '#000000',         
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      fontSize: {
        'xxs': '0.8rem',
        'xs': '0.9rem',
        'sm': '0.95rem',
        'sm-md': '1rem',
        'md': '1.05rem',
        'md-lg': '1.1rem',
        'lg': '1.15rem',
        'lg-xl': '1.2rem',
        'xl': '1.25rem',
        'xl-2xl': '1.3rem',
        '2xl': '1.4rem',
        '2xl-3xl': '1.5rem',
        '3xl': '1.6rem',
        '3xl-xl': '1.7rem',
        '4xl': '1.75rem',
      },
      spacing: {
        '03': '0.3rem',
      }
    },
    screens: {
      'phone-sm': '320px',
      'phone': '480px',
      'phone-lg': '640px',
      'tablet': '768px',
      'tablet-md': '960px',
      'tablet-lg': '1024px',
      'note': '1280px',
      'note-md': '1366px',
      'note-lg': '1440px',
      'monitor': '1600px',
      'monitor-lg': '1920px',
    },
  },
  plugins: [],
}

