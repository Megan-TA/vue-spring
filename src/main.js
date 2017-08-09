import Vue from 'vue';
import VueRouter from 'vue-router';
import VeeValidate, { Validator } from 'vee-validate';
import zhCN from 'vee-validate/dist/locale/zh_CN';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

// css
import 'utils/stylus/index.styl';
// js
import routes from './routers/router';

// 开启debug模式
Vue.config.debug = true;

Validator.addLocale(zhCN);
const config = {
  locale: 'zh_CN'
};

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VeeValidate, config);


const router = new VueRouter({
  // mode: 'history',
  routes
});
// 路由拦截
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.required)) {
    if (window.localStorage.getItem('onoff') !== null) {
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
