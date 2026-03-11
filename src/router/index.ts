import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: () => import('@/views/Home.vue') },
    { path: '/organization', component: () => import('@/views/organization/Index.vue') },
    { path: '/regulation', component: () => import('@/views/regulation/Index.vue') },
    { path: '/project', component: () => import('@/views/project/Index.vue') },
    { path: '/inheritor', component: () => import('@/views/inheritor/Index.vue') },
  ],
})