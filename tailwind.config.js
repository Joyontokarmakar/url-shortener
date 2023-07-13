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
        dimLightColor: '#cffafe',
        lightColor: '#ecfeff',
        dimDarkColor: '#083344',
        darkColor: '#030712',
        ashColor: '#0f172a'
      }
    },
  },
  plugins: [],
}