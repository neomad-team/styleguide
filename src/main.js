import Vue from 'vue'
// atoms
import button from './atoms/button.vue'
import avatar from './atoms/avatar.vue'
// molecules
import articleMeta from './molecules/articleMeta.vue'
import articlePreview from './molecules/articlePreview.vue'

// components creatation
new Vue({
  el: '.preview',
  components: {avatar, articleMeta, articlePreview}
})
