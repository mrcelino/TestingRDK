import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '1xl': '1440px', // Menambahkan viewport 1440px
      },
      fontFamily: {
        heading: ['Titania', 'serif'],
        title: ['Trirong', 'serif'],
        body: ['Work Sans', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.2)",
        md: "2px 2px 4px rgba(0, 0, 0, 0.4)",
        lg: "0px 0px 6px rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        'pattern': "url('/svg/pattern.svg')", 
      },
      backgroundSize: {
        'pattern-size': "100px 100px",
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        slideInLeft: 'slideInLeft 1s ease-out',
        slideInTop: 'slideInTop 1s ease-out',
        fadeInScale: 'fadeInScale 1.5s ease-out',
        zoomIn: 'zoomIn 1.5s ease-out',
        animateSpin: 'spin 1s linear infinite',
        spinn: 'spin 2s ease-in-out forwards, spinBack 2s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInTop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        spinBack: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(90deg)' },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
  ],
} satisfies Config;
