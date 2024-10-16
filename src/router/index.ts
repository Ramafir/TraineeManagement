import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'users',
            component: () => import('@/pages/users/Index.vue')
        },
        {
            path: '/user',
            name: 'user',
            component: () => import('@/pages/user/Index.vue')
        }
    ]
});

export default router;
