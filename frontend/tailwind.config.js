/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'soft': '0 0 16px rgba(17, 17, 26, 0.158)',
      },
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

