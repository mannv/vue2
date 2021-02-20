import HomeIndex from '@/pages/home'
import AboutIndex from '@/pages/about'
import ProductIndex from '@/pages/product'
import LoginPage from '@/pages/login'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
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

export default router
