/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mint: {
          300: '#6ff7d9',
          400: '#3defc7',
          500: '#26eac1',
          600: '#15c9a4',
          900: '#0a332d',
          950: '#041918',
        },
        abyss: {
          900: '#07161c',
          950: '#040e16',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll-dot': 'scrollDot 1.8s ease-in-out infinite',
        'float-subtle': 'floatSubtle 5s ease-in-out infinite',
      },
      keyframes: {
        scrollDot: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(6px)', opacity: '0.4' },
        },
        floatSubtle: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-1.8deg)' },
          '50%': { transform: 'translateY(-3px) rotate(-1.8deg)' },
        }
      }
    },
  },
  plugins: [],
}
