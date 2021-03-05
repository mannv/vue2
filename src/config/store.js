import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import auth from '@/store/auth'
import header from '@/store/header'

const store = new Vuex.Store({
  modules: {
    auth,
    header,
  },
})
export default store
