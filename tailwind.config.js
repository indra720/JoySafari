/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FBF5EA',
          50: '#FDFBF7',
          100: '#FBF5EA',
          200: '#F5E8D0',
          300: '#EEDBB5',
        },
        surface: '#FFFFFF',
        maroon: {
          light: '#9E1B2B',
          DEFAULT: '#7A0F1B',
          dark: '#4A0910',
          deep: '#36060B',
        },
        gold: {
          soft: '#F5D26B',
          DEFAULT: '#D4AF37',
          deep: '#B8901F',
          dark: '#8C6C0F',
        },
        sage: {
          DEFAULT: '#6F8F72',
          light: '#8EAE91',
          dark: '#516E54',
        },
        ink: {
          DEFAULT: '#2B1511',
          light: '#42241E',
        },
        muted: '#7A6A62',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Poppins"', 'system-ui', 'sans-serif'],
        script: ['"Caveat"', '"Dancing Script"', 'cursive'],
        cinzel: ['"Cinzel"', '"Playfair Display"', 'serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(43, 21, 17, 0.06)',
        'soft-hover': '0 16px 40px rgba(43, 21, 17, 0.12)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.35)',
        'maroon-glow': '0 10px 30px rgba(122, 15, 27, 0.4)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F5D26B 0%, #D4AF37 50%, #B8901F 100%)',
        'gold-shine': 'linear-gradient(90deg, #D4AF37 0%, #F5D26B 50%, #D4AF37 100%)',
        'maroon-gradient': 'linear-gradient(145deg, #7A0F1B 0%, #4A0910 100%)',
      }
    },
  },
  plugins: [],
}