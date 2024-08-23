import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
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

export default router
