import Vue from 'vue'
import App from './App.vue'
import ConfigRouter from '@/config/router'
import ConfigStore from '@/config/store'
import { initVueAuthenticate } from '@/config/vue-authenticate'
import { initVuelidate } from '@/config/vuelidate'
import Field from '@/components/Form/Field'
import Switch from '@/components/Form/Switch'
import ChecboxGroup from '@/components/Form/ChecboxGroup'
import RadioGroup from '@/components/Form/RadioGroup'
import ErrorMessage from '@/components/Form/ErrorMessage'

Vue.config.productionTip = false
initVueAuthenticate()
initVuelidate()

Vue.prototype.$log = require('consola')

Vue.component('el-field', Field)
Vue.component('el-switch', Switch)
Vue.component('el-checkbox-group', ChecboxGroup)
Vue.component('el-radio-group', RadioGroup)
Vue.component('el-error-message', ErrorMessage)

new Vue({
  router: ConfigRouter,
  store: ConfigStore,
  render: h => h(App),
}).$mount('#app')
