import { sleep } from "@/assets/ts/utils";
import type { NavigationGuard, NavigationHookAfter, Router } from "vue-router";

const beforeEach: NavigationGuard = async (to, from) => {
    /** Initial load */
    if (from.path === "/" && from.name === undefined) return true;

    /** Fade out */
    const main = document.querySelector("#main") as Element;
    main.classList.add("fade-out");
    await sleep(100);
};

const afterEach: NavigationHookAfter = async (to, from) => {
    /** Setup title */
    // Xecades  [or]  Xecades | ${page title}
    const prefix = "Xecades";
    const title: string = to.meta.title as string;

    if (title === "") {
        document.title = prefix;
    } else {
        document.title = `${prefix} | ${title}`;
    }
};

export default (router: Router) => {
    router.beforeEach(beforeEach);
    router.afterEach(afterEach);
};
