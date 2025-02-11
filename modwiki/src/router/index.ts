import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Towiki.vue'),
    },
    {
      path: '/ab',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/kai',
      name: '人物',
      component: () => import('../components/characters/wilson.vue'),
    },
      {
      path: '/wilson',
      name: '威尔逊',
      component: () => import('../components/characters/kai.vue'),
    },
    {
      path: '/ciws',
      name: '米卡萨',
      component: () => import('../components/weapon/CIWS.vue'),
    },
    {
      path: '/rgws',
      name: '世达',
      component: () => import('../components/weapon/RGWS.vue'),
    },
  ],
})

export default router
