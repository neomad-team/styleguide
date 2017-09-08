<template>
  <a href="#">{{ content }}</a>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      content: 'content'
    }
  }
}
</script>

<style>
a {
  font-size: 30px;
  color: #42b983;
}
</style>
