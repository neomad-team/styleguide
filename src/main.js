import Vue from 'vue'

import XButton from './atoms/x-button.vue'
import XAvatar from './atoms/x-avatar.vue'

import XForm from './components/x-form.vue'
import XArticle from './components/x-article.vue'
import XMenu from './components/x-menu.vue'

new Vue({
  el: '#body',
  components: { XButton, XForm, XArticle, XAvatar, XMenu }
})
