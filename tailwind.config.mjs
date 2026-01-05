import { themeConfig } from './src/theme.config';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--color-primary) / <alpha-value>)',
				secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
				accent: 'rgb(var(--color-accent) / <alpha-value>)',
				sand: 'rgb(var(--color-sand) / <alpha-value>)',
				'sand-shadow': 'rgb(var(--color-sand-shadow) / <alpha-value>)',
				night: 'rgb(var(--color-night) / <alpha-value>)',
				'night-shadow': 'rgb(var(--color-night-shadow) / <alpha-value>)',
			},
			fontFamily: {
				// Ensure fonts are correctly pulled from your theme config
				sans: themeConfig.fonts.sans.split(','),
				serif: themeConfig.fonts.serif.split(','),
			},
		},
	},
	plugins: [typography],
};