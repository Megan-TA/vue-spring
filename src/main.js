/*
 * @Author: chen_huang
 * @Date: 2017-07-30 16:16:27
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-04 14:53:29
 */
import Vue from 'vue'
import Validator from './validate/validate'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'

// css
import 'utils/stylus/index.styl'
// js
import router from 'routers/router'

// 开启debug模式
Vue.config.debug = true

Vue.use(ElementUI)

Vue.prototype.$Validator = Validator

/* eslint-disable no-new */
new Vue({
    router,
    store
}).$mount('#app')
