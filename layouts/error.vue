<template>
  <div style="text-align: center">
    <img
      src="https://media0.giphy.com/media/iN1aMj0XwhsNq/giphy.gif?cid=ecf05e47tqgapyeavojn7k21dsd1yph5kxy9qayqmyzcvztn&rid=giphy.gif&ct=g"
    /><br /><br />
    <h1>Error!</h1>
    {{ error.message }} {{ error.statusCode }}
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'BIG PROBLEMS',
    }
  },
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
