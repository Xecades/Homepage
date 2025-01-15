import index from "@/views/index.vue";
import about from "@/views/about.vue";
import lab from "@/views/lab.vue";
import friend from "@/views/friend.vue";
import timeline from "@/views/timeline.vue";
import sponsor from "@/views/sponsor.vue";
import sponsorship from "@/views/sponsorship.vue";
import error from "@/views/404.vue";

import type { RouteRecordRaw } from "vue-router";

const r = (
    path: string,
    name: string,
    component: typeof index,
    title: string
) => ({ path, name, component, meta: { title } });

const routes: RouteRecordRaw[] = [
    r("/", "home", index, ""),
    r("/lab", "lab", lab, "实验室"),
    r("/about", "about", about, "关于"),
    r("/friend", "friend", friend, "友人帐"),
    r("/timeline", "timeline", timeline, "时光"),
    r("/sponsor", "sponsor", sponsor, "赞助"),
    r("/sponsorship", "sponsorship", sponsorship, "赞助者"),
    r("/:pathMatch(.*)", "error", error, "404 Not Found"),
];

export default routes;
