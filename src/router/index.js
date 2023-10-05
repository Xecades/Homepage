import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import SponsorView from "@/views/SponsorView.vue";
import SponsorshipView from "@/views/SponsorshipView.vue";
import LabView from "@/views/LabView.vue";
import FriendView from "@/views/FriendView.vue";
import TimelineView from "@/views/TimelineView.vue";
import ErrorView from "@/views/ErrorView.vue";

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
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition;
        else return { left: 0, top: 0, behavior: "smooth" };
    },
});

export default router;
