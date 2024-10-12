import type { Config } from "tailwindcss";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
