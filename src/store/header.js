const state = () => ({
  title: '',
  breadcrumb: [],
})

const getters = {
  title(state) {
    return state.title
  },
  breadcrumb(state) {
    return state.breadcrumb
  },
}

const mutations = {
  SET_BREADCRUMB(state, breadcrumb) {
    state.breadcrumb = breadcrumb
  },
  SET_TITLE(state, title) {
    state.title = title
  },
}

const actions = {
  setTitle({ commit }, title) {
    commit('SET_TITLE', title)
  },
  setBreadcrumb({ commit }, breadcrumb) {
    commit('SET_BREADCRUMB', breadcrumb)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
