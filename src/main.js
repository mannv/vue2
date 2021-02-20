import Vue from 'vue'
import App from './App.vue'
import ConfigRouter from '@/config/router'
import ConfigStore from '@/config/store'
import { initVueAuthenticate } from '@/config/vue-authenticate'

Vue.config.productionTip = false
initVueAuthenticate()

new Vue({
  router: ConfigRouter,
  store: ConfigStore,
  render: h => h(App),
}).$mount('#app')
