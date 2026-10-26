export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        blush: '#f7dce4',
        rose: '#bd7188',
        ink: '#34252b',
        cream: '#fff8fa'
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif']
      }
    }
  },
  corePlugins: {
    preflight: false
  },
  plugins: []
}