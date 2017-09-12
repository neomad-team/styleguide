import Vue from 'vue'
// atoms
import Button from './atoms/buttons.vue'
import Avatar from './atoms/avatar.vue'

new Vue({
  el: '#body',
  components: {
    NButton: Button, Avatar
  }
})
