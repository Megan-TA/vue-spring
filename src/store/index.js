/*
 * @Author: chen_huang
 * @Date: 2017-08-13 11:11:37
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-08-13 19:17:24
 */
import Vue from 'vue'
import Vuex from 'vuex'

import headerModule from './modules/headerModule'

Vue.use(Vuex)

const state = {
    count: 0
}

const mutations = {
    increment (state) {
        state.count = state.count + 5
    }
}

// const actions = {
//     increment ({ commit }) {
//         commit('increment');
//     }
// };

export default new Vuex.Store({
    state,
    mutations,
    modules: {
        headerModule: headerModule
    }
})

