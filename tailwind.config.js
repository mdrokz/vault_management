module.exports = {
    content: [], // Add your purge configuration here
    darkMode: 'media', // or 'media' or 'class'
    theme: {
      extend: {
        backgroundColor: {
          'lime-light': '#CDDC39',
          'lime-dark': '#AFB42B',
          'white': '#FFFFFF',
          'grey-light': '#F3F4F6',
        },
        textColor: {
          'lime-light': '#CDDC39',
          'lime-dark': '#AFB42B',
          'white': '#FFFFFF',
          'dark-grey': '#333333',
          'black': '#000000',
        },
        borderColor: {
          'lime-light': '#CDDC39',
          'lime-dark': '#AFB42B',
        },
        boxShadow: {
          'lime': '0 4px 6px -1px rgba(205, 220, 57, 0.1), 0 2px 4px -1px rgba(205, 220, 57, 0.06)',
        },
        gradientColorStops: {
          'lime-light': '#CDDC39',
          'lime-dark': '#AFB42B',
        },
        zIndex: {
          '-10': '-10',
        },
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }