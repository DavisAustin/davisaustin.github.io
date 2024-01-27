/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['"Inter"', 'sans-serif'],
			'mono': ['"PT Mono"', 'monospace'],
		},
		extend: {
			colors: {
				'fg-default': colors.white,
				'fg-muted': colors.gray[300],
				'fg-subtle': colors.gray[600],
				'fg-onEmphasis': colors.white,
				// Background colors
				'bg-default': colors.gray[950],
				'bg-muted': colors.gray[700],
				'bg-subtle': colors.gray[800],
				'bg-emphasis': colors.gray[500],
				// Border colors
				'border-default': colors.gray[700],
				'border-muted': colors.gray[800],
				'border-emphasis': colors.gray[500],
			},
		},
	},
	plugins: [
		require('tailwind-scrollbar-hide')
	],
}
