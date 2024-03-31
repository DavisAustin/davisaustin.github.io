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
				// foreground colors
				'fg-default': 'var(--color-fg-default)',
				'fg-muted': 'var(--color-fg-muted)',
				'fg-subtle': 'var(--color-fg-subtle)',
				'fg-accent': 'var(--color-fg-accent)',
				'fg-accent-hover': 'var(--color-fg-accent-hover)',
				'fg-onEmphasis': 'var(--color-fg-onEmphasis)',
				// background colors
				'bg-default': 'var(--color-bg-default)',
				'bg-default-hover': 'var(--color-bg-default-hover)',
				'bg-muted': 'var(--color-bg-muted)',
				'bg-subtle': 'var(--color-bg-subtle)',
				'bg-subtle-hover': 'var(--color-bg-subtle-hover)',
				'bg-accent': 'var(--color-bg-accent)',
				'bg-accent-hover': 'var(--color-bg-accent-hover)',
				'bg-emphasis': 'var(--color-bg-emphasis)',
				'bg-emphasis-hover': 'var(--color-bg-emphasis-hover)',
				'bg-accent-emphasis': 'var(--color-bg-accent-emphasis)',
				'bg-accent-emphasis-hover': 'var(--color-bg-accent-emphasis-hover)',

				// border colors
				'border-default': 'var(--color-border-default)',
				'border-muted': 'var(--color-border-muted)',
				'border-accent': 'var(--color-border-accent)',
				'border-emphasis': 'var(--color-border-emphasis)',
				'border-accent-emphasis': 'var(--color-border-accent-emphasis)',
			},
		},
	},
	plugins: [
		require('tailwind-scrollbar-hide')
	],
}
