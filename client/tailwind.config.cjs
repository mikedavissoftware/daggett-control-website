/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        none: 'none',
        spin: 'spin 5s linear infinite'
      },
      dropShadow: {
        'sm-white': '0 0 1px rgb(255 255 255 / 1)',
        'md-white': '0 0 2px rgb(255 255 255 / 1)',
        'lg-white': '0 0 4px rgb(255 255 255 / 1)',
        'xl-white': '0 0 8px rgb(255 255 255 / 1)',
        '2xl-white': '0 0 16px rgb(255 255 255 / 1)',
        'sm-dark': '2px 2px 1px rgb(0 0 0 / .8)',
        'md-dark': '4px 4px 3px rgb(0 0 0 / .8)',
        'lg-dark': '10px 10px 8px rgb(0 0 0 / .8)',
        'xl-dark': '20px 20px 13px rgb(0 0 0 / .8)',
        '2xl-dark': '25px 25px 25px rgb(0 0 0 / .8)',
        none: '0 0 #0000',
      },
      maxWidth: ({ theme, breakpoints }) => ({
        xxs: '16rem',
        ...breakpoints(theme('screens')),
      })
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#283891",    
          "secondary": "#2255A2",    
          "accent": "#55BA52",    
          "neutral": "#191D24",      
          "base-100": "#2A303C",      
          "info": "#2396D3",      
          "success": "#36D399", 
          "warning": "#FBBD23",   
          "error": "#F87272",
        }
      }
    ]
  },
  plugins: [require("daisyui")]
}
