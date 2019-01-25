import Vue from "vue"
import Router from "vue-router"

import splashscreen from "@/components/splashscreen"
import register from "@/components/register"
import dashboard from "@/components/dashboard"
import candidate from "@/components/candidate"
import setting from "@/components/setting"
import vote from "@/components/vote"
import position from "@/components/position"

Vue.use(Router)
export const router =  new Router({
    mode: "hash",
    routes: [ { path: '/', component: splashscreen, }, 
        {
            path: '/register',
            component: register
        },
        {
            path: '/dashboard',
            component: dashboard
        },
        {
            path: '/candidate',
            component: candidate
        },
        {
            path: '/setting',
            component: setting
        },
        {
            path: '/vote',
            component: vote
        },
        {
            path: '/position',
            component: position
        }          

    ]
})
