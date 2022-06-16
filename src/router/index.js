import { createRouter, createWebHistory } from 'vue-router';
import About from "../components/About.vue"
import Error from "../components/Error.vue"
import Home from "../components/Home.vue"
import Product from "../components/Product.vue"

const routes=[
    {
        path:'/',component:Home
    },
    {
        path:'/product',component:Product
    },
    {
        path:'/about',component:About
    },
    {
        path:'/:pathMatch(.*)*',component:Error 
        // pathMatch đặt gì cũng được
    },
];
const router =createRouter({
    history: createWebHistory(),
    routes, 
  })
  export default router;