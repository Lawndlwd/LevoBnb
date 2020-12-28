<template>
	<div class="header-index">
		<header class="container py-md-3">
			<div class="row justify-content-ce align-items-center">
				<div class="col-3 ml-3">
					<nuxt-link to="/">
						<h1 class="displat-1 header__logo">LevoBnB</h1>
					</nuxt-link>
				</div>
				<div class="col-5">
					<input
						class="header__search"
						type="text"
						ref="citySearch2"
						@changed="changed"
						placeholder="Where you want to stay2"
					/>
				</div>
				<div class="col-3 header__nav">
					<nuxt-link class="header__nav-item" to="/">Home</nuxt-link>
				</div>
			</div>
		</header>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$gMap.makeAutoComplete(this.$refs.citySearch2)
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
	},
}
</script>

<style lang="scss">
.header-index {
	position: absolute;
	width: 100%;
	top: 1.5rem;
	left: 50%;
	transform: translateX(-50%);
	background-color: rgba(253, 253, 253, 0);
    z-index: 100;

	&__logo {
		color: #3f5d7e;
	}
	&__search {
		border: none;
		border-radius: 100px;
		background-color: #f3f3f3;
		display: block;
		margin: 0 auto;
		padding: 0.5rem 1rem;
		text-align: left;
		transition: box-shadow 0.2s ease-out;
		&:placeholder-shown {
			padding: 0.5rem 1rem;
		}

		&:focus {
			border: none;
			outline: none;
			box-shadow: 0 2px 6px rgba($color: #000000, $alpha: 0.1);
		}
		&:hover {
			box-shadow: 0 2px 6px rgba($color: #000000, $alpha: 0.1);
		}
	}
	&__nav {
		&-item {
			background-color: #f3f3f3;
			padding: 0.5rem 1rem;
			border-radius: 100px;
			&:hover {
				box-shadow: 0 2px 6px rgba($color: #000000, $alpha: 0.1);
				color: inherit;
			}
		}
	}
}
</style>
