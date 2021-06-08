module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
      DEFAULT: '1px',
    },
// 1st #5CE669
    // 2nd #55e5eb
    // 3rd #55EBA6
    extend: {
      colors: {
        'custom-crimson':'#FF3A4C',
        'dark-crimson': '#47ccd1',
        'custom-coolgrey': '#303030',
        'custom-grey': '#F3F4F6',
        'background_grey': '#F9FAFB',
        'ftr-bg': "#091B27"
      },
      
      width: {
        '2px': "2px",
        '23p': '23%',
        '30p': '30%',
        '50p': '50%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

  
}
