/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#080B12',
          900: '#05070B',
          800: '#080B12',
          700: '#0E1420',
        },
        slateNavy: {
          DEFAULT: '#171F2D',
          light: '#222E42',
          dark: '#111722',
        },
        electricBlue: {
          DEFAULT: '#287BFF',
          hover: '#1A6BEE',
          glow: 'rgba(40, 123, 255, 0.45)',
          muted: 'rgba(40, 123, 255, 0.15)',
        },
        iceWhite: {
          DEFAULT: '#DCE6F2',
          dim: '#C4D3E5',
        },
        steelBlue: {
          DEFAULT: '#8FA9C9',
          light: '#A6BEDB',
        },
        mutedGrey: {
          DEFAULT: '#8993A3',
          dark: '#586273',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', '"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'electric-glow': '0 0 25px -5px rgba(40, 123, 255, 0.4)',
        'electric-card': '0 8px 30px -10px rgba(8, 11, 18, 0.8), 0 0 1px 1px rgba(40, 123, 255, 0.2)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
