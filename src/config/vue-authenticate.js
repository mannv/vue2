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

  Object.defineProperties(Vue.prototype.$auth, {
    demo: {
      value: function(msg) {
        console.log('msg: ', msg)
        this.storage.setItem('demo-msg', msg)
      },
    },
    setItem: {
      value: function(key, value) {
        this.storage.setItem(key, value)
      },
    },
    user: {
      value: function() {
        if (!this.isAuthenticated()) {
          return null
        }
        return JSON.parse(this.storage.getItem('auth-info'))
      },
    },
  })
}

export { initVueAuthenticate }
