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
        // Pilates studio palette, sampled from the room's wallpaper
        "pilates-ink": "#12142A",
        "pilates-ink-2": "#191C36",
        "pilates-line": "#2C3052",
        "pilates-gold": "#D6A24E",
        "pilates-gold-light": "#E8C27A",
        "pilates-teal": "#4F8496",
        "pilates-teal-light": "#86AEBB",
        "pilates-mist": "#C5D3D6",
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
