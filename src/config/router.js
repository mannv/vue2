import HomeIndex from '@/pages/home'
import AboutIndex from '@/pages/about'
import ProductIndex from '@/pages/product'
import LoginPage from '@/pages/login'
import RegisterPage from '@/pages/register'
import ProfilePageIndex from '@/pages/profile/index'
import VueRouter from 'vue-router'
import Vue from 'vue'
import auth from '@/middleware/auth'

Vue.use(VueRouter)
const routes = [
  {
    path: '/ag-gird',
    name: 'ag-gird-index',
    component: () => import('@/pages/ag-gird/index'),
    meta: {
      layout: 'HomeLayout',
    },
  },
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
      middleware: [auth],
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
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
    meta: {
      layout: 'AdminLTELayout',
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePageIndex,
    meta: {
      layout: 'AdminLTELayout',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.
function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index]
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters)
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1)
    subsequentMiddleware({ ...context, next: nextMiddleware })
  }
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware]

    const context = {
      from,
      next,
      router,
      to,
    }
    const nextMiddleware = nextFactory(context, middleware, 1)

    return middleware[0]({ ...context, next: nextMiddleware })
  }

  return next()
})

export default router
