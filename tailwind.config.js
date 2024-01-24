/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"industrial-hall": "url('./src/assets/images/industrial-hall.jpg')",
				"sveta-sofia": "url('./src/assets/images/sveta-sofia.png')",
				provet: "url('./src/assets/images/provet.png')",
				genika: "url('./src/assets/images/genika.png')",
				pulmed: "url('./src/assets/images/pulmed.png')",
				checkmark: "url('./src/assets/images/checkmark.png')",
				contacts: "url('./src/assets/images/contacts.png')",
				"product-image": "url('./src/assets/images/product-image.png')",
			},
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("daisyui")],
});
