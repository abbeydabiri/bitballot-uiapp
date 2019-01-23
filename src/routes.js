import Vue from "vue"
import Router from "vue-router"

import home from "@/components/home"
import about from "@/components/about"
import faq from "@/components/faq"
import contact from "@/components/contact"
import login from "@/components/login"
import register from "@/components/register"
import services from "@/components/services"

Vue.use(Router)
export const router =  new Router({
    mode: "hash",
    routes: [ { path: '/', component: home, }, 
        {
            path: '/about',
            component: about,
        },
        { 
            path: '/faq', 
            component: faq, 
        },
        { 
            path: '/contact', 
            component: contact, 
        },
        { 
            path: '/login', 
            component: login, 
        },
        { 
            path: '/register', 
            component: register, 
        },
        { 
            path: '/services', 
            component: services, 
        },


]
    })
