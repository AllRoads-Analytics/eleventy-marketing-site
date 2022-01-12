module.exports = {
	theme: {
		fontFamily: {
			'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			'allroads': ['Fugaz One', 'cursive']
		},
		extend: {
			colors: {
				'ws-blue': {
					100: '#E6F0FF',
					200: '#BFDAFF',
					300: '#99C3FF',
					400: '#4D97FE',
					500: '#006AFE',
					600: '#005FE5',
					700: '#004098',
					800: '#003072',
					900: '#00204C',
				},

				'ar-grey': '#f3f3f3',
				'ar-lightblue': '#c3cbff',
				'ar-darkblue': '#16226B',
				'ar-yellow-1': '#FAC000',
				'ar-yellow-2': '#FFD13B',
				'ar-yellow-3': '#AD8500',
				'ar-darkgrey': '#292929',
			}
		},
	},
	variants: {},
	plugins: [],
	purge: process.env.NODE_ENV === 'production' ? {
		enabled: true,
		content: ['src/**/*.njk', 'src/**/*.js'],
	} : {}
}
