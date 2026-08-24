/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Background - Warm off-white/beige
        beige: {
          50: '#FDFCFA',
          100: '#F8F6F0',
          200: '#F3F0E8',
          300: '#EBE8DE',
          400: '#E3DFD3',
          500: '#D8D3C5',
          600: '#C4BFB0',
          700: '#A39E8F',
          800: '#7A766A',
          900: '#4F4D45',
        },
        // Luxury Gold - Highlight color
        gold: {
          50: '#FBF8F0',
          100: '#F5EDD9',
          200: '#EDD9B3',
          300: '#E4C488',
          400: '#D4AF37',
          500: '#C9A434',
          600: '#B8932D',
          700: '#9A7A26',
          800: '#7A601F',
          900: '#5A4717',
        },
        // Text Color - Greenish shade (maintained from original)
        text: {
          primary: '#2F4538',
          secondary: '#3D5A4D',
          tertiary: '#4D6A5D',
          muted: '#6B7F73',
          light: '#8A9B91',
        }
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
        accent: ['Cinzel', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'luxury': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'elegant': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'luxury': '2rem',
        'ultra': '3rem',
      }
    },
  },
  plugins: [],
};