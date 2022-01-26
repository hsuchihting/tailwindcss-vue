import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue'
import CardDemo from '../views/CardDemo.vue'



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
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;
