<template>
  <div class="app-section">
    <div class="app-wrapper">
      <div class="app-masonry">
        <div
          v-for="publicId in images"
          :key="publicId"
          :style="`background-image: url(${publicId})`"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  methods: {},
}
</script>
