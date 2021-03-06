module.exports = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
	darkMode: 'class', // false or "class" or "media"
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}