import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';

import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);



/* eslint-disable no-new */
new Vue({
  el: '#app',

  render: h => h(App)
});
