/*
 * @Author: chen_huang 
 * @Date: 2017-07-30 16:16:27 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-08-10 16:22:38
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Validator from './validate/validate';
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

Vue.prototype.$Validator = Validator;

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

/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app');
