import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/css/reset.css";
import "./assets/css/cursor.css";

// Console
const consoleMessage = () => {
    const year = new Date().getFullYear();
    console.log(`
┌─Xecades Alpha::Homepage────────────────────────────┐
│                                                    │
│            Yet another concise homepage            │
│                                                    │
├────────────────────────────────────────────────────┤
│                                                    │
│ Github        https://github.com/Xecades/Homepage/ │
│ Website                       https://xecades.xyz/ │
│ QQ               [DNS TXT] https://qq.xecades.xyz/ │
│                                                    │
├────────────────────────────────────────────────────┤
│                                                    │
│ Built with Vue.js and... and my laptop.            │
│                                                    │
├────────────────────────────────────────────────────┤
│                                                    │
│ [GPL-3.0 License]                                  │
│ Copyright © 2019 - ${year} Xecades                    │
│                                                    │
└────────────────────────────────────────────────────┘
    `);
};

// Main
(async () => {
    consoleMessage();

    const app = createApp(App);
    app.use(router);
    app.mount("#app");
})();
