// tailwind.config.mjs
import typography from '@tailwindcss/typography';
import { themeConfig } from './src/theme.config';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		// By defining colors and fonts here, we replace Tailwind's defaults,
		// ensuring our theme is the single source of truth.
		colors: {
			// It's a good practice to keep these two default colors
			transparent: 'transparent',
			current: 'currentColor',
			// Define our custom colors using CSS variables
			sand: 'rgb(var(--color-sand) / <alpha-value>)',
			'sand-shadow': 'rgb(var(--color-sand-shadow) / <alpha-value>)',
			night: 'rgb(var(--color-night) / <alpha-value>)',
			'night-shadow': 'rgb(var(--color-night-shadow) / <alpha-value>)',
			accent: 'rgb(var(--color-accent) / <alpha-value>)',
		},
		fontFamily: {
			sans: themeConfig.fonts.sans,
			serif: themeConfig.fonts.serif,
		},
	},
	plugins: [typography],
};