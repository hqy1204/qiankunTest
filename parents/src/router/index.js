import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [{
        path: '/',
        redirect: '/index',
        hash: ""
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/index',
        name: "index",
        component: () =>
            import ('../views/index.vue')
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/vue',
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


export default router