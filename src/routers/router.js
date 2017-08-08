import App from '../App.vue';
import register from '../components/register/register.vue';
import login from '../components/login/login.vue';

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
    }
];

