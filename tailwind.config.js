/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "redwave": "#ff2d2d",
        "redwave-dark": "#990000",
        "primary-dim": "#006df8",
        "surface-container": "#191919",
        "surface-container-high": "#1f1f1f",
        "surface-container-highest": "#262626",
        "surface-container-lowest": "#000000",
        "surface-container-low": "#131313",
        "on-surface": "#ffffff",
        "on-surface-variant": "#ababab",
        "outline-variant": "#484848",
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
}
