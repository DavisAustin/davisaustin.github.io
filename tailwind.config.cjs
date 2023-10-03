/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'ptmono': ['PT Mono', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [
		require('tailwind-scrollbar-hide')
	],
}
