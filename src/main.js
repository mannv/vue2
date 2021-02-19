import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HomeIndex from '@/pages/home/index.vue'
import AboutIndex from '@/pages/about/index.vue'
import ProductIndex from '@/pages/product/index.vue'
import LoginPage from '@/pages/login'
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    name: 'index',
    component: HomeIndex,
    meta: {
      layout: 'HomeLayout',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutIndex,
    meta: {
      layout: 'AboutLayout',
    },
  },
  {
    path: '/product',
    name: 'product',
    component: ProductIndex,
    meta: {
      layout: 'ProductLayout',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {
      layout: 'LoginLayout',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
