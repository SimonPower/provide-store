import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/user',
    name: 'user',
    component: () =>
      import('@/views/User.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import('@/views/Login.vue'),
  },
  {
    path: '/find',
    name: 'find',
    component: () =>
      import('@/views/Find.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
