<template>
	<div>
		<the-header-index v-if="showNav" />
		<the-header v-else />
		<nuxt id="main" class="main" />
	</div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
export default {
	components: { TheHeader },
	computed: {
		showNav() {
			return this.$route.path === '/'
		},
	},
	mounted() {
		this.$gMap.makeAutoComplete(this.$refs.citySearch)
	},
	methods: {
		changed(e) {
			const place = e.detail
			if (!place.geometry) return
			this.$router.push({
				name: 'search',
				query: {
					lat: place.geometry.location.lat(),
					lng: place.geometry.location.lng(),
					label: this.$refs.citySearch.value,
				},
			})
			this.$refs.citySearch.value = ''
		},
		addStyleOnHomePage() {
			var main = document.querySelector('#main').classList
			var headerIndex = document.querySelector('#header').classList
			// if (this.$route.path === '/') {
			// 	main.remove('main')
			//     headerIndex.replace('header','header-index')
			// 	this.$gsap.runAnimation()
			// } else {
			// 	main.add('main')
			// 	headerIndex.replace('header-index', 'header')
			// }
		},
	},
}
</script>

<style lang="scss">
a {
	text-decoration: none;
	color: #3f5d7e;

	&:hover {
		text-decoration: none;
	}
}
.main {
	margin-top: 91px !important;
}
</style>
