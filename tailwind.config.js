/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // During the Bootstrap->Tailwind transition we disable preflight (so Tailwind's
  // base reset doesn't fight Bootstrap's reboot) and container (Bootstrap owns .container).
  // Both are re-enabled in the teardown step once Bootstrap is removed.
  corePlugins: {
    preflight: false,
    container: false,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#006CD0',
          50: '#eaf3fc',
          100: '#cfe3f8',
          200: '#9fc7f1',
          300: '#6fabe9',
          400: '#3f8fe2',
          500: '#006CD0',
          600: '#005bb0',
          700: '#00498c',
          800: '#003768',
          900: '#002544',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Jost', 'system-ui', 'sans-serif'],
        jost: ['"Plus Jakarta Sans"', 'Jost', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
      keyframes: {
        blink: {
          'from, to': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        slideInDown: {
          'from': { transform: 'translateY(-100%)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.65)', opacity: '1' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        radarPulse: {
          '0%': { width: '10px', height: '10px', opacity: '1' },
          '100%': { width: '48px', height: '48px', opacity: '0' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        slideInDown: 'slideInDown 0.4s ease',
        'pulse-ring': 'pulseRing 2.5s infinite',
        'radar-pulse': 'radarPulse 1.6s infinite ease-out',
        'fade-in': 'fadeIn 0.3s cubic-bezier(0.2,0.8,0.2,1)',
      },
    },
  },
  plugins: [],
}
