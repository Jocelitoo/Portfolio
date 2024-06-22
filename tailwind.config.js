/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      padding: {
        section: '0 8vw 0 8vw',
      },
      backgroundColor: {
        dark: '#0D0D0D',
        dark2: '#262626',
        dark3: '#3d3d3d',
        light: '#F2F2F2',
        light2: '#D9D9D9',
        light3: '#BFBFBF',
        mainColorDark: '#29D3FF',
        mainColorLight: '#013AFF',
      },
      fill: {
        mainColorDark: '#29D3FF',
        mainColorLight: '#013AFF',
      },
      textColor: {
        mainColorDark: '#29D3FF',
        mainColorLight: '#013AFF',
      },
    },
    animation: { ring: 'ring 2s linear infinite' },
    keyframes: {
      ring: {
        '0%': {
          transform: 'rotate(0deg)',
          boxShadow: '1px 3px 2px #29D3FF',
        },
        '100%': {
          transform: 'rotate(360deg)',
          boxShadow: '1px 3px 2px #29D3FF',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
