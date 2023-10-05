import { createRouter, createWebHistory } from "vue-router";

const cap = (x) => x.charAt(0).toUpperCase() + x.slice(1);
const $ = (x) => () => import(`../views/${cap(x)}View.vue`);

const routes = [
    { path: "/", name: "home", component: $("home") },
    { path: "/about", name: "about", component: $("about") },
    { path: "/lab", name: "lab", component: $("lab") },
    { path: "/friend", name: "friend", component: $("friend") },
    { path: "/sponsor", name: "sponsor", component: $("sponsor") },
    { path: "/sponsorship", name: "sponsorship", component: $("sponsorship") },
    { path: "/timeline", name: "timeline", component: $("timeline") },
    { path: "/:pathMatch(.*)", name: "error", component: $("error") },
];

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition;
        else return { left: 0, top: 0, behavior: "smooth" };
    },
});

export default router;
