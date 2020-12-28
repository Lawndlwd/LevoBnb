<template>
	<div class="container-fluid">
		<div class="row no-gutters">
			<div class="col-12 col-md-6 search__list">
				2
			</div>
			<div class="col-12 col-md-6 position-fixed search__map">
				<div class="search__map--map" ref="gMap"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	watch: {
		$route(to, from) {
			this.showMap()
		},
	},
	mounted() {
		this.showMap()
	},
	methods: {
		showMap() {
			this.$gMap.showMap(
				this.$refs.gMap,
				this.$route.query.lat,
				this.$route.query.lng
			)
		},
	},
}
</script>

<style lang="scss">
.search {
	position: relative;
	&__map {
		top: 91px;
		right: 2px;
		&--map {
			height: 90vh;
			width: 100%;
		}
		// &:hover{
		// 	position: absolute;
		// }
	}
	&__list {
		height: 7000px;
		background-color: #f3f3f3;
	}
}
</style>
