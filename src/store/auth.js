import Vue from 'vue'
const auth = {
  namespaced: true,
  state: () => ({
    data: {},
  }),
  getters: {
    name(state) {
      if (Object.keys(state.data).length === 0) {
        const authInfo = localStorage.getItem('auth-info')
        if (authInfo !== null) {
          state.data = JSON.parse(authInfo)
        }
      }
      return state.data.name
    },
  },
  mutations: {
    SET_AUTH_DATA(state, data) {
      const str = JSON.stringify(data)
      localStorage.setItem('auth-info', str)
      Vue.prototype.$auth.setItem('auth-info', str)
      state.data = data
    },
  },
  actions: {
    async loadProfile({ commit }) {
      try {
        const { data } = await Vue.axios.get('/user/v1/profile')
        commit('SET_AUTH_DATA', data.data)
      } catch (error) {
        console.log('error', error)
      }
    },
    logout({ commit }) {
      localStorage.setItem('auth-info', null)
      commit('SET_AUTH_DATA', {})
    },
  },
}
export default auth
