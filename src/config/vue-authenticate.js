import Vue from 'vue'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

function initVueAuthenticate() {
  Vue.use(VueAxios, axios)
  Vue.use(VueAuthenticate, {
    baseUrl: '/', // Your API domain
    loginUrl: '/auth/v1/login',
    tokenPath: 'data.access_token',
    tokenName: 'access_token',
    storageNamespace: 'vue2-demo-authenticate',

    providers: {},
  })
}

export { initVueAuthenticate }
