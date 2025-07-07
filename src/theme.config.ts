// src/theme.config.ts

// This is the main configuration object.
// Let's try a dark, forest-green color theme.
export const themeConfig = {
	colors: {
		// Light Mode Colors
		sand: '#f0f4f0', // A very light, soft green-tinted white
		'sand-shadow': '#dbe5db', // A subtle, darker green for light mode accents

		// Dark Mode Colors
		night: '#1a2a22', // A deep, dark forest green
		'night-shadow': '#243830', // A slightly lighter dark green for accents

		// Universal Accent Color
		accent: '#4caf50', // A vibrant, accessible green for links and highlights
	},
	fonts: {
		sans: ['Lato', 'sans-serif'],
		serif: ['"Playfair Display"', 'serif'],
	},
};