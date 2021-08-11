module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      animation: ["group-hover"],
      screens: {
        "3xl": "2000px",
      }
    },
    transitionProperty:['responsive','motion-safe','motion-reduce'],
    scrollbar: ['dark']

  },
  plugins: [require('tailwind-scrollbar-hide')],
}
