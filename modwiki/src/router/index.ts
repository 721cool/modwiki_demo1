import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(),
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
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/Towiki.vue'),
    },
  ],
})

export default router

