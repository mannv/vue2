import Vue from 'vue'
import App from './App.vue'
import ConfigRouter from '@/config/router'
import ConfigStore from '@/config/store'
import { initVueAuthenticate } from '@/config/vue-authenticate'
import { initVuelidate } from '@/config/vuelidate'

Vue.config.productionTip = false
initVueAuthenticate()
initVuelidate()

Vue.prototype.$log = require('consola')

new Vue({
  router: ConfigRouter,
  store: ConfigStore,
  render: h => h(App),
}).$mount('#app')
