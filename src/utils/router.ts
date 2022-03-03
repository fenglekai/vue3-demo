import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/components/Home.vue"),
    },
    {
        path: "/ServerMenu",
        name: "ServerMenu",
        component: () => import("@/components/serverMenu/index.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory('/vue3-vite-demo/'),
    routes
})

export default router;