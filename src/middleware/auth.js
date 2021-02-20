import Vue from 'vue'
export default function auth({ next, router }) {
  if (!Vue.prototype.$auth.isAuthenticated()) {
    return router.push({ name: 'login' })
  }

  return next()
}
