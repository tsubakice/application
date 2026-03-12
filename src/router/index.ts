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
    { path: '/ecology', component: () => import('@/views/ecology/Index.vue') },
    { path: '/protection', component: () => import('@/views/protection/Index.vue') },
    { path: '/wiki', component: () => import('@/views/wiki/Index.vue') },
    { path: '/activity', component: () => import('@/views/activity/Index.vue') },
  ],
})