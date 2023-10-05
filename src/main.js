import "./assets/css/global.css";
import "./assets/css/font.css";
import "./assets/css/cursor.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import cur from "./assets/js/cursor";

const app = createApp(App);

app.use(router);

app.mount("#app");

// I know this is an awful decision, but it actually works pretty well.
setTimeout(() => {
    cur.refresh();
}, 300);

window.onload = () => {
    let year = new Date().getFullYear();

    // console.clear();
    console.log(`
    ┌─Xecades Homepage───────────────────────────────────────┐
    │                                                        │
    │              Yet another concise homepage              │
    │                                                        │
    ├────────────────────────────────────────────────────────┤
    │                                                        │
    │ Github            https://github.com/Xecades/Homepage/ │
    │ Website                           https://xecades.xyz/ │
    │                                                        │
    ├────────────────────────────────────────────────────────┤
    │                                                        │
    │ Built with vite and...and my laptop.                   │
    │                                                        │
    ├────────────────────────────────────────────────────────┤
    │                                                        │
    │ MIT LICENSE                                            │
    │ Copyright © 2019 - ${year} Xecades                        │
    │                                                        │
    └────────────────────────────────────────────────────────┘
    `);
}