import Vue from 'vue'
import App from './App.vue'
import ConfigRouter from '@/config/router'
import ConfigStore from '@/config/store'
import { initVueAuthenticate } from '@/config/vue-authenticate'
import { initVuelidate } from '@/config/vuelidate'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import { AgGridVue } from 'ag-grid-vue'

Vue.prototype.$log = require('consola')

window._ = require('lodash')
import AdminLTEForm from '@/plugins/adminlte-form'
import SweetAlert2 from '@/plugins/sweetalert2'
Vue.use(AdminLTEForm)
Vue.use(SweetAlert2, { vue: Vue })
Vue.component('AgGridVue', AgGridVue)

Vue.config.productionTip = false
initVueAuthenticate()
initVuelidate()

import PortalVue from 'portal-vue'
Vue.use(PortalVue)

new Vue({
  router: ConfigRouter,
  store: ConfigStore,
  render: (h) => h(App),
}).$mount('#app')
