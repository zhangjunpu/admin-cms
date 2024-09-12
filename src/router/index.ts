import { getToken } from '@/cache/login'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/main',
      name: 'main',
      component: import('../views/main/main.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: import('../views/login/login.vue'),
    },
  ],
})

// 路由守卫
router.beforeEach((to, from) => {
  console.log(to, '---', from)
  if (to.path === '/main' && !getToken()) {
    return '/login'
  }
})

export default router
