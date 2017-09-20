<style scoped>
  img {
    border: 1px solid #ccc;
    border-radius: 100%;
    min-width: 20px;
    min-height: 20px;
    cursor: pointer;
  }
</style>

<template><img src={this.$attrs.src}></template>

<script>
  export default {
    mounted() {
      let defaulted = false
      // this.$el.addEventListener('error', event => {
      //   if(defaulted) return
      //   event.target.src = 'avatar.png'
      //   defaulted = true
      // })
    }
  }
</script>
