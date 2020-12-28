<template>
	<span> 
        {{displayText}}
        <button class="link" v-if="isTooLong && !isExpanded" type="button" @click="isExpanded = true">read more</button>
        <button class="link" v-if="isTooLong && isExpanded" type="button" @click="isExpanded = false">read less</button>
    </span>
</template>

<script>
export default {
	props: {
		text: { type: String, required: true },
		target: { type: Number, required: true },
	},
	data() {
		return {
			isExpanded: false,
			chanks: [],
		}
	},
	computed: {
		isTooLong() {
			return this.chanks.length === 2
		},
		displayText() {
			if (!this.isTooLong || this.isExpanded) return this.chanks.join(' ')
			return this.chanks[0] + '...'
		},
	},
	created() {
		this.chanks = this.getChunks()
	},
	methods: {
		getChunks() {
			const position = this.text.indexOf(' ', this.target)
			if (this.text.lenght <= this.target || position === -1)
				return [this.text]
			return [
				this.text.substring(0, position),
				this.text.substring(position),
			]
		},
	},
}
</script>

<style >
.link{
    color:blue;
    background-color: white;
    border: none;
    text-decoration: underline;
    cursor: pointer;
}
.link:focus{
    border: none;
    outline: none;
}
</style>
