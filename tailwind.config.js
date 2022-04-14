module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    extend: {
      letterSpacing: {
        wide: '0.08em',
      },
      lineHeight: {
        '44pix': '44px',
      },
      fontSize: {
        '40pix': '40px',
        '2r': '2rem',
        '2sm': '1.4rem',
      },
      textColor: {
        'abu': '#646464',
      },
      borderRadius: {
        radius5: '5px',
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        '2lg': '15px',
        'full': '9999px',
        'large': '12px',
      },
      maxWidth: {
        800: '800px',
      },
      backgroundColor: {
        'abu': '#E5E5E5',
        'biru': '#41B3F9',
        'body': '#F5F7FA',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
