/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: "#FAF7FD",          // Soft warm lavender-tinted white background
          card: "#FFFFFF",        // Pristine white cards
          elevated: "#F3E8FF",    // Soft lavender mist
          border: "#E9D5FF",      // Crisp lavender border
          text: "#1E1A2B",        // Deep high-contrast obsidian purple-black
          muted: "#584E6D",       // Medium dark lavender charcoal
          gold: "#A78BFA",        // True Soft Lavender Accent
          "gold-hover": "#9333EA",// Rich Lavender Violet Hover
          ivory: "#FAF7FD",
          charcoal: "#1E1A2B",
          darkbg: "#0F0A1C"       // For dark hero banner & cinematic video modal
        }
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Manrope"', '"Outfit"', 'sans-serif'],
        accent: ['"Outfit"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em',
      },
      aspectRatio: {
        'portrait': '3/4',
        'tall': '2/3',
        'cinematic': '21/9',
      }
    },
  },
  plugins: [],
}
