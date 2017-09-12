import Vue from 'vue'
// import Avatar from './atoms/Avatar.vue'
// import Meta from './atoms/Meta.vue'
import Header from './molecules/Meta.vue'
import Content from './molecules/Content.vue'

new Vue({
  el: '.meta',
  components: { Header, Content}
})
