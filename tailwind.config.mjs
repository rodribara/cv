/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {colors: {
			darkBlue: '#26273f',
			pinkish: "#fe5980",
		  },},
	},
	plugins: [],
}
