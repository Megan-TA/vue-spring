/*
 * @Author: chen_huang 
 * @Date: 2017-07-31 16:16:42 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-08-10 16:39:20
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../App.vue';
import register from '../components/register/register.vue';
import login from '../components/login/login.vue';
import goods from '../components/goods/goods.vue';
import auction from '../components/auction/auction.vue';

Vue.use(VueRouter);

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
        component: login
    },
    {
        path: '/logout',
        name: 'logout',
        redirect: '/goods'
    },
    {
        path: '/goods',
        name: 'goods',
        component: goods,
        meta: {
            required: true
        }
    },
    {
        path: '/auction',
        name: 'auction',
        component: auction
    }
];

const router = new VueRouter({
  // mode: 'history',
  routes
});
// 路由拦截
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.required)) {
    if (window.sessionStorage.getItem('userInfo') !== null) {
      next();
    } else {
      next({name: 'register'});
    }
  } else {
    next();
  }
});

export default router;
