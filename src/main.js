import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

// css
import 'utils/stylus/index.styl';
// js
import routes from './routers/router';


// 开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);

Vue.use(ElementUI);
// 由于axios不能使用use 只能每个需要发送请求的组件即时引入
// 此时可以通过挂载原型链的方式引用
Vue.prototype.$ajax = axios;

const router = new VueRouter({
  routes
});


/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app');
