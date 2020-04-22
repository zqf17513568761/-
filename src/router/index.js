import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import Set from '../components/Set'
import Find from '../components/Find'
import Footer from '../components/Footer'


Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:"/home",
            component:Home
        },
        {
            path:"/set",
            component:Set
        },
        {
            path:"/find",
            component:Find
        },
        {
            path:"/footer",
            component:Footer
        },
    ]
})

export default router;