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
				'fg-default': 'var(--color-fg-default)',
				'fg-muted': 'var(--color-fg-muted)',
				'fg-subtle': 'var(--color-fg-subtle)',
				'fg-onEmphasis': 'var(--color-fg-onEmphasis)',
				'fg-accent': 'var(--color-fg-accent)',
				// Background colors
				'bg-default': 'var(--color-bg-default)',
				'bg-muted': 'var(--color-bg-muted)',
				'bg-subtle': 'var(--color-bg-subtle)',
				'bg-emphasis': 'var(--color-bg-emphasis)',
				'bg-gradient': 'var(--color-bg-gradient)',
				// Border colors
				'border-default': 'var(--color-border-default)',
				'border-muted': 'var(--color-border-muted)',
				'border-emphasis': 'var(--color-border-emphasis)',
			},
		},
	},
	plugins: [
		require('tailwind-scrollbar-hide')
	],
}
