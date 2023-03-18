module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/utils/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				slate: '#161616',
				primary: '#00FFAA',
				primarytext: '#005B3D',
				accent: 'var(--accent)',
				customBlue: '#5865F2',
				customRed: '#FF0055'
			}
		}
	},
	plugins: []
};
