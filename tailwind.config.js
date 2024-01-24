/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"industrial-hall": "url('./public/images/industrial-hall.jpg')",
				"sveta-sofia": "url('./public/images/sveta-sofia.png')",
				provet: "url('./public/images/provet.png')",
				genika: "url('./public/images/genika.png')",
				pulmed: "url('./public/images/pulmed.png')",
				checkmark: "url('./public/images/checkmark.png')",
				contacts: "url('./public/images/contacts.png')",
				"product-image": "url('./public/images/product-image.png')",
			},
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("daisyui")],
});
