import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from '@/pages/home/index.vue'
import About from '@/pages/about/index.vue'
import Product from '@/pages/product/index.vue'
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    name: 'index',
    component: Home,
    meta: {
      layout: 'HomeLayout',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      layout: 'AboutLayout',
    },
  },
  {
    path: '/product',
    name: 'product',
    component: Product,
    meta: {
      layout: 'ProductLayout',
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
