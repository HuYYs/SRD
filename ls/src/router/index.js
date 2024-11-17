import {createRouter, createWebHistory} from 'vue-router'
import Body from "../view/Body.vue";
import qwe from "../components/qwe.vue";

const routes = [
    {path: "/", redirect: `/index`,},
    {path: "/index", component: qwe},
    {path: "/Body/:id", component: Body},
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})