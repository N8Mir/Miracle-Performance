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
        // Room 216 (Pilates) palette, taken from the studio logo + wallpaper
        "pilates-bg": "#FBF9F5",
        "pilates-surface": "#F3EEE6",
        "pilates-sky": "#E6EFF4",
        "pilates-line": "#E2DACC",
        "pilates-navy": "#2E3550",
        "pilates-navy-deep": "#232840",
        "pilates-body": "#535A70",
        "pilates-gold": "#A87850",
        "pilates-gold-ink": "#8A5F3A",
        "pilates-gold-light": "#C9A06F",
        "pilates-blue": "#4D6C80",
        "pilates-cream": "#F3EAD9",
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Manrope", "sans-serif"],
        "display": ["Cormorant Garamond", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
}
