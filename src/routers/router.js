import App from '../App.vue';
import register from '../components/register/register.vue';
import login from '../components/login/login.vue';

export default [
    {
        path: '/',
        component: App
    },
    {
        path: '/register',
        component: register
    },
    {
        path: '/login',
        component: login
    }
];

