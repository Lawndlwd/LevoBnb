<template>
	<div class='index'>
		
		<div class="home container-fluid py-md-3">
			<div class="header__img"></div>
			<div
				v-for="home in homes"
				:key="home.objectID"
				style="float:left;margin:10px;"
			>
				<nuxt-link :to="`/home/${home.objectID}`">
					<home-card :home="home" />
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
import homes from '~/data/homes.json'
import TheHeaderIndex from '../components/TheHeaderIndex.vue'
export default {
	components: { TheHeaderIndex },
	head() {
		return {
			title: 'Home page',
			meta: [
				{
					name: 'description',
					content: 'this is home page',
					hid: 'description',
				},
			],
		}
	},
	data() {
		return {
			homes: homes.slice(0, 3),
		}
	},
	mounted() {
		this.$gsap.runAnimation()
	},
}
</script>

<style>
.index{
	margin-top: 0 !important;
}
.home {
	height: 7000px;
}
.header__img {
	width: 100%;
	height: 70vh;
	background: url('https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
	background-position: center;
	background-size: cover;
}
</style>
