import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import cache from '@/utils/cache'
import store from '@/store'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('@/views/main/index.vue')
    // children:[] //根据动态路由决定
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/notFound/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    const token = cache.getCache('token')
    if (!token) {
      // return '/login'
      next('/login')
    }
  }
  next()
  // next('/login')
  //   } else {
  //     console.log((store.state as any).login.routes, 'store.state.login.routes')
  //     if ((store.state as any).login.routes.length == 0) {
  //       store.dispatch('login/loadLocalLogin')
  //       next({ ...to, replace: true })
  //     } else {
  //       next()
  //     }
  //   }
  // } else {
  //   next('/login')
  // }
})

export default router
