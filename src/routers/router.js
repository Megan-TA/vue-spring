/*
 * @Author: chen_huang 
 * @Date: 2017-07-31 16:16:42 
 * @Last Modified by:   chen_huang 
 * @Last Modified time: 2017-08-10 16:16:42 
 */
import App from '../App.vue';
import register from '../components/register/register.vue';
import login from '../components/login/login.vue';
import goods from '../components/goods/goods.vue';
import auction from '../components/auction/auction.vue';

export default [
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

