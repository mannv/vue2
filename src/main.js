import Vue from 'vue'
import App from './App.vue'
import ConfigRouter from '@/config/router'
import ConfigStore from '@/config/store'
import { initVueAuthenticate } from '@/config/vue-authenticate'
import { initVuelidate } from '@/config/vuelidate'

Vue.prototype.$log = require('consola')

window._ = require('lodash')
import AdminLTEForm from '@/plugins/adminlte-form'
Vue.use(AdminLTEForm)
Vue.component()
Vue.config.productionTip = false
initVueAuthenticate()
initVuelidate()

new Vue({
  router: ConfigRouter,
  store: ConfigStore,
  render: (h) => h(App),
}).$mount('#app')
