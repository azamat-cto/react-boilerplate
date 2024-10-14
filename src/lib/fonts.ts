import type { CustomFontFace } from "unplugin-fonts/types";

export const families = [
	{
		name: "Roboto",
		local: "Roboto Thin",
		src: "./src/assets/fonts/Roboto/100/*.{ttf,woff,woff2}",
		transform(font: CustomFontFace) {
			if (font.basename === "Roboto-Thin") {
				font.weight = 100;
			}
			return font;
		},
	},
	{
		name: "Roboto",
		local: "Roboto Light",
		src: "./src/assets/fonts/Roboto/300/*.{ttf,woff,woff2}",
		transform(font: CustomFontFace) {
			if (font.basename === "Roboto-Light") {
				font.weight = 300;
			}
			return font;
		},
	},
	{
		name: "Roboto",
		local: "Roboto Regular",
		src: "./src/assets/fonts/Roboto/400/*.{ttf,woff,woff2}",
		transform(font: CustomFontFace) {
			if (font.basename === "Roboto-Regular") {
				font.weight = 400;
			}
			return font;
		},
	},
	{
		name: "Roboto",
		local: "Roboto Medium",
		src: "./src/assets/fonts/Roboto/500/*.{ttf,woff,woff2}",
		transform(font: CustomFontFace) {
			if (font.basename === "Roboto-Medium") {
				font.weight = 500;
			}
			return font;
		},
	},
	{
		name: "Roboto",
		local: "Roboto Bold",
		src: "./src/assets/fonts/Roboto/700/*.{ttf,woff,woff2}",
		transform(font: CustomFontFace) {
			if (font.basename === "Roboto-Bold") {
				font.weight = 700;
			}
			return font;
		},
	},
	{
		name: "Roboto",
		local: "Roboto Black",
		src: "./src/assets/fonts/Roboto/900/*.{ttf,woff,woff2}",
		transform(font: CustomFontFace) {
			if (font.basename === "Roboto-Black") {
				font.weight = 900;
			}
			return font;
		},
	},

	{
		name: "Roboto Mono",
		local: "Roboto Mono Thin",
		src: "./src/assets/fonts/Roboto_Mono/100/*.{ttf,woff,woff2}",
		transform(font: CustomFontFace) {
			if (font.basename === "RobotoMono-Thin") {
				font.weight = 100;
			}
			return font;
		},
	},
	{
		name: "Roboto Mono",
		local: "Roboto Mono ExtraLight",
		src: "./src/assets/fonts/Roboto_Mono/200/*.{ttf,woff,woff2}",
		transform(font: CustomFontFace) {
			if (font.basename === "RobotoMono-ExtraLight") {
				font.weight = 200;
			}
			return font;
		},
	},
	{
		name: "Roboto Mono",
		local: "Roboto Mono Light",
		src: "./src/assets/fonts/Roboto_Mono/300/*.{ttf,woff,woff2}",
		transform(font: CustomFontFace) {
			if (font.basename === "RobotoMono-Light") {
				font.weight = 300;
			}
			return font;
		},
	},
	{
		name: "Roboto Mono",
		local: "Roboto Mono Regular",
		src: "./src/assets/fonts/Roboto_Mono/400/*.{ttf,woff,woff2}",
		transform(font: CustomFontFace) {
			if (font.basename === "RobotoMono-Regular") {
				font.weight = 400;
			}
			return font;
		},
	},
	{
		name: "Roboto Mono",
		local: "Roboto Mono Medium",
		src: "./src/assets/fonts/Roboto_Mono/500/*.{ttf,woff,woff2}",
		transform(font: CustomFontFace) {
			if (font.basename === "RobotoMono-Medium") {
				font.weight = 500;
			}
			return font;
		},
	},
	{
		name: "Roboto Mono",
		local: "Roboto Mono SemiBold",
		src: "./src/assets/fonts/Roboto_Mono/600/*.{ttf,woff,woff2}",
		transform(font: CustomFontFace) {
			if (font.basename === "RobotoMono-SemiBold") {
				font.weight = 600;
			}
			return font;
		},
	},
	{
		name: "Roboto Mono",
		local: "Roboto Mono Bold",
		src: "./src/assets/fonts/Roboto_Mono/700/*.{ttf,woff,woff2}",
		transform(font: CustomFontFace) {
			if (font.basename === "RobotoMono-Bold") {
				font.weight = 700;
			}
			return font;
		},
	},
];
