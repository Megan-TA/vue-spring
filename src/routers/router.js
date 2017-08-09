import App from '../App.vue';
import register from '../components/register/register.vue';
import login from '../components/login/login.vue';
import goods from '../components/goods/goods.vue';
import auction from '../components/auction/auction.vue';

export default [
    {
        path: '/',
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

