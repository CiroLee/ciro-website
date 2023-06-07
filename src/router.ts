import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home/index.vue'),
  },
  {
    path: '/navigation',
    name: 'navigation',
    component: () => import('@/pages/navigation/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/404/index.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
