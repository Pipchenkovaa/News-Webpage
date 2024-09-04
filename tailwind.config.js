/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
	darkMode: 'class',
  theme: {
    extend: {
			colors: {
				'header-btn': '#7d9195',
				'header-btn-light': '#92a0a3',
				'header-btn-dark': '#27373e',
				'main-text': '#44403b',
				'breadcrums': '#4e4d4a',
				'dark-theme': '#1b1917',
				'light-theme': '#e7e5e4'
			},
			fontFamily: {

			}
		},
  },
  plugins: [],
}

