/*
 * @Author: chen_huang
 * @Date: 2017-07-31 16:16:42
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-05 19:12:24
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../App.vue'
import register from 'components/register/register'
import login from 'components/login/login'
import goods from 'components/goods/goods'
// 拍卖列表页
import list from 'components/list/list'
// 拍品详情页
import auctionDetails from 'components/auctionDetails/auctionDetails'
// import bids from 'components/auctionDetails/bids'
// import describe from 'components/auctionDetails/describe'
// 用户中心
import user from 'components/user/user'
import userRightBox from 'components/user/rightBox/userRightBox'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: App,
        alias: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: App
    },
    {
        path: '/register',
        name: 'register',
        component: register
    },
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
            required: true
        }
    },
    {
        path: '/logout',
        name: 'logout',
        redirect: '/goods'
    },
    {
        path: '/goods',
        name: 'goods',
        component: goods
        // meta: {
        //     required: true
        // }
    },
    // 用户中心
    {
        path: '/user',
        name: 'user',
        component: user,
        children: [
            {
                path: 'auction/:name',
                name: 'userRightBox',
                component: userRightBox,
                props: true
            },
            {
                path: 'order/:name',
                name: 'userRightBox',
                component: userRightBox,
                props: true
            }
        ]
    },
    {
        path: '/auctionDetails',
        name: 'auctionDetails',
        component: auctionDetails,
        children: [
            // {
            //     path: 'bids',
            //     name: 'auctionDetailsBids',
            //     component: bids
            // }
            // {
            //     path: 'describe',
            //     name: 'auctionDetailsDescribe',
            //     component: describe
            // }
        ]
    },
    {
        path: '/list',
        name: 'list',
        component: list
    }
]

const router = new VueRouter({
  // mode: 'history',
    routes
})
// 路由拦截
router.beforeEach((to, from, next) => {
    if (to.matched.some(res => res.meta.required)) {
        if (localStorage.getItem('userPhone') != null) {
            next({
                name: 'home'
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
