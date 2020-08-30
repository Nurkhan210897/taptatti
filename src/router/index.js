import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import OrderBasket from '@/views/OrderBasket.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/OrderBasket',
            name: 'OrderBasket',
            component: OrderBasket
        }
    ]
})

export default router