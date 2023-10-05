import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import SponsorView from "@/views/SponsorView.vue";
import SponsorshipView from "@/views/SponsorshipView.vue";
import LabView from "@/views/LabView.vue";
import FriendView from "@/views/FriendView.vue";
import TimelineView from "@/views/TimelineView.vue";
import ErrorView from "@/views/ErrorView.vue";

import reveal from "../assets/js/reveal.js";
import cur from "../assets/js/cursor";

const routes = [
    { path: "/", name: "HomeView", component: HomeView },
    { path: "/about", name: "AboutView", component: AboutView },
    { path: "/sponsor", name: "SponsorView", component: SponsorView },
    { path: "/sponsorship", name: "SponsorshipView", component: SponsorshipView },
    { path: "/lab", name: "LabView", component: LabView },
    { path: "/friend", name: "FriendView", component: FriendView },
    { path: "/timeline", name: "TimelineView", component: TimelineView },
    { path: "/:pathMatch(.*)", name: "ErrorView", component: ErrorView },
];

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(_, __, savedPosition) {
        if (savedPosition) return savedPosition;
        else return { left: 0, top: 0, behavior: "smooth" };
    },
});

router.beforeEach((_, from, next) => {
    if (from.name === undefined) next();
    else {
        document.querySelector(".main").classList.add("opacity-0");
        setTimeout(next, 200);
    }
})

router.afterEach((_, from) => {
    if (from.name !== undefined) {
        setTimeout(cur.refresh, 0);
        setTimeout(reveal, 0);
    }
})

export default router;
