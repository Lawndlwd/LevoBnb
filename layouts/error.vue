<template>
  <div>
      {{error.message}} {{error.statusCode}}
  </div>

</template>

<script>
export default {
props:{
    error:{
        type: Object,
        required:true
    }
}
}
</script>

<style>

</style>