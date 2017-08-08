import Vue from 'vue';
import VueRouter from 'vue-router';
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

const router = new VueRouter({
  // mode: 'history',
  routes
});


/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app');
