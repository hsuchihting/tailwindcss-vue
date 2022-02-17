import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import CardDemo from "../views/CardDemo.vue";
import CardDemo2 from "../views/CardDemo2.vue";
import box from "../views/box.vue";
import button from "../views/button.vue";
import groupHover from "../views/groupHover.vue";
import customVariants from "../views/customVariants.vue";
import plugins from "../views/plugins.vue";



const routes = [
    {
        // 須先設定根路徑
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/card-demo",
        name: "CardDemo",
        component: CardDemo,
    },
    {
        path: "/card-demo2",
        name: "CardDemo2",
        component: CardDemo2,
    },
    {
        path: "/box",
        name: "box",
        component: box,
    },
    {
        path: "/button",
        name: "button",
        component: button,
    },
    {
        path: "/groupHover",
        name: "groupHover",
        component: groupHover,
    },
    {
        path: "/customVariants",
        name: "customVariants",
        component: customVariants,
    },
    {
        path: "/plugins",
        name: "plugins",
        component: plugins,
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;
