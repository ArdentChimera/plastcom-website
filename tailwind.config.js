/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"industrial-hall": "url('/images/industrial-hall.jpg')",
				"sveta-sofia": "url('/images/sveta-sofia.png')",
				provet: "url('/images/provet.png')",
				genika: "url('/images/genika.png')",
				pulmed: "url('/images/pulmed.png')",
				checkmark: "url('/images/checkmark.png')",
				contacts: "url('/images/contacts.png')",
				"product-image": "url('/images/product-image.png')",
			},
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("daisyui")],
});
