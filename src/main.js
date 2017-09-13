import Vue from 'vue'
// atoms
import XButton from './atoms/x-button.vue'
import XInput from './atoms/x-input.vue'
import XForm from './components/x-form.vue'


new Vue({
  el: '#body',
  components: {
    'x-button': XButton,
    'x-input': XInput,
    'x-form': XForm
  }
})
