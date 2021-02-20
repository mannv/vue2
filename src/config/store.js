import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import auth from '@/store/auth'

const store = new Vuex.Store({
  modules: {
    auth: auth,
  },
})
export default store
