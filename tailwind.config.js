/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        // keep existing keys if anything else relies on them
      },
      // Make Montserrat the default sans for utility classes if needed
      // Tailwind's default 'sans' can be overridden globally by adding it here
      // (some projects prefer to set this in a global CSS, we import Montserrat in globals.css)
      colors: {
        'background': '#0f0f0f',
        'primary': '#ff3131', // Bright red
        'secondary': '#b91c1c', // Darker red
        'accent': '#f97316', // Orange accent for highlights
        'dark': {
          100: '#1a1a1a',
          200: '#141414',
          300: '#0f0f0f',
          400: '#0a0a0a',
          500: '#050505',
        },
        'metal': {
          100: '#e5e7eb', // Light metallic
          200: '#d1d5db', // Silver
          300: '#9ca3af', // Medium metallic
          400: '#6b7280', // Dark metallic
          500: '#4b5563', // Very dark metallic
        },
      },
      clipPath: {
        '0': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        'full': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        'diagonal': 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)',
        'diagonal-reverse': 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)',
        'trapezoid': 'polygon(10% 0, 90% 0, 100% 100%, 0% 100%)',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 10px 0 rgba(255, 49, 49, 0.4)' },
          '50%': { boxShadow: '0 0 20px 5px rgba(255, 49, 49, 0.7)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-metal': 'linear-gradient(to right, #4b5563, #9ca3af, #4b5563)',
        'gradient-red': 'linear-gradient(to right, #b91c1c, #ff3131)',
      },
    },
  },
  plugins: [],
}