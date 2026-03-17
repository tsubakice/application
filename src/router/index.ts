import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: () => import('@/views/Home.vue') },
    { path: '/organization', component: () => import('@/views/organization/Index.vue') },
    { path: '/new', component: () => import('@/views/new/Index.vue') },
    { path: '/activity', component: () => import('@/views/activity/Index.vue') },
    { path: '/visual', component: () => import('@/views/visual/Index.vue') },
  ],
})