/** @type {import('tailwindcss').Config} */
export default {
  // Specify which files Tailwind should scan for class names
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom font stack configuration
      fontFamily: {
        // Standard Inter font from Google Fonts
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // Monospace font for numerical values (like years)
        // JetBrains Mono is optimized for readability
        mono: ['JetBrains Mono', 'monospace'],
      },
      // Custom colors
      colors: {
        // Slightly lighter than pure black (#000000)
        // Helps prevent the design from feeling too harsh
        black: '#0A0A0A',
      },
    },
  },
  plugins: [],
}

