/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#164e63',
        primaryLightColor: '#0d9488',
        primaryAshColor: '#e4e4e7',
        darkAshColor: '#0f172a',
        lightColor: '#ecfeff',
        dimLightColor: '#cffafe',
        darkColor: '#030712',
        dimDarkColor: '#083344'
      }
    },
  },
  plugins: [],
}