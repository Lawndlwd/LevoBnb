export default {
	components: true,
	head: {
		titleTemplate: 'Mastring Nuxt: %s',
		htmlAttrs: {
			lang: 'en',
		},
		bodyAttrs: {
			class: ['myStle'],
		},
		meta: [
			{
				charset: 'utf-8',
			},
		],
	},
	router: {
		prefetchLinks: false,
	},
	plugins: [
		'~/plugins/maps.client',
		'~/plugins/dataApi',
		'~/plugins/gsapAnimation.client',
	],
	css: ['@/assets/css/bootstrap.min'],
}
