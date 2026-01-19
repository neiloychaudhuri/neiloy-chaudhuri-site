/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Earth-tone palette
        earth: {
          50: '#FAF7F2',   // Warm off-white (light bg)
          100: '#F5EFE6',  // Lighter cream
          200: '#E8DDD0',  // Tan/cream
          300: '#D4C4B0',  // Light brown
          400: '#C4A77D',  // Warm tan accent
          500: '#A68B5B',  // Medium brown
          600: '#8B7355',  // Brown accent
          700: '#6B5344',  // Dark brown
          800: '#4A3728',  // Deep brown
          900: '#1A1614',  // Near-black brown (dark bg)
          950: '#0F0D0C',  // Deepest brown
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-garamond)', 'Georgia', 'serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(196, 167, 125, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(196, 167, 125, 0.4)' },
        },
      },
    },
  },
  plugins: [],
};

