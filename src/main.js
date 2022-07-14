import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import router from './router/index'
import words from './words'
import { wxStoreOpenid } from '@/utils/wxsdk'
import { createPinia, PiniaVuePlugin } from 'pinia'

import './assets/main.scss'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

Vue.use(pinia)

Vue.use(Router)

wxStoreOpenid(process.env.VUE_APP_WXSDK_API + '/auth/get-user-info/')

words.install = function(){
  Object.defineProperty(Vue.prototype, '$words', {
    get () { return words }
  })
}
Vue.use(words);

Vue.config.productionTip = false

new Vue({
  pinia,
  el: '#app',
  router,
  render: h => h(App),
})
