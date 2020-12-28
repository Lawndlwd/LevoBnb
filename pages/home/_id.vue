<template>
	<div>
		<div style="display:flex">
			<img
				v-for="image in home.images"
				:src="image"
				:alt="home.title"
				:key="image"
				width="200"
				height="150"
			/>
		</div>
		{{ home.title }} <br />
		${{ home.pricePerNight }} / night <br />
		<img src="/images/marker.svg" alt="marker" width="20" height="20" />
		{{ home.location.address }}
		{{ home.location.city }}
		{{ home.location.state }} <br />

		<img src="/images/star.svg" alt="marker" width="20" height="20" />{{
			home.reviewValue
		}}
		<br />
		{{ home.guests }} guests , {{ home.bedrooms }} rooms,
		{{ home.beds }} beds, {{ home.bathrooms }} bathrooms <br />
		{{ home.description }}
		<div style="height:800px;width:800px " ref="gMap"></div>
		<div v-for="review in reviews" :key="review.id">
			<img :src="review.reviewer.image" alt="" /><br />
			{{ review.reviewer.name }} <br />
			{{ formatDate(review.date) }} <br />
			<short-text :text="review.comment" :target="150" /> <br />
		</div>
		<img :src="user.image" alt="user.name" /> <br />
		{{ user.name }} <br />
		{{ formatDate(user.joined) }} <br />
		{{ user.reviewCount }} <br />
		{{ user.description }}
	</div>
</template>

<script>
import ShortText from '../../components/ShortText.vue'
export default {
	components: { ShortText },
	head() {
		return {
			title: this.home.title,
		}
	},

	async asyncData({ params, $dataApi, error }) {
		const responses = await Promise.all([
			$dataApi.getHome(params.id),
			$dataApi.getReviewsByHomeId(params.id),
			$dataApi.getUserByHomeId(params.id)
		])
		const badResponse = responses.find((response) => !response.ok)
		if (badResponse) {
			return error({
				statusCode: badResponse.status,
				message: badResponse.statusText,
			})
		}
		
		return {
			home: responses[0].json,
			reviews: responses[1].json.hits,
			user: responses[2].json.hits[0],
		}
	},
	mounted() {
		this.$gMap.showMap(
			this.$refs.gMap,
			this.home._geoloc.lat,
			this.home._geoloc.lng
		)
	},
	methods: {
		formatDate(dateStr) {
			const date = new Date(dateStr)
			return date.toLocaleDateString(undefined, {
				month: 'long',
				year: 'numeric',
			})
		},
	},
}
</script>

<style></style>
