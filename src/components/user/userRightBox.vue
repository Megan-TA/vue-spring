/*
 * 用户中心右侧切换界面
 * @Author: chen_huang
 * @Date: 2017-10-31 23:02:14
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-03 01:21:06
 */
<template>
    <div class="user-right-box">
        <div class="ucpdata">
            <v-userOrder v-if="name == 'order'"></v-userOrder>
            <v-userInfo v-if="name == 'userInfo'"></v-userInfo>
        </div>
    </div>
</template>
<script>
import userOrder from './userOrder'
import userInfo from './userInfo'
export default {
    // 为了降低路由组件与用户组件耦合度使用props传值name展示不同组件
    props: ['name'],
    created () {
    },
    data () {
        return {

        }
    },
    components: {
        'v-userOrder': userOrder,
        'v-userInfo': userInfo
    }
}
</script>
<style lang="stylus">
    .user-right-box
        width 100%
        background #fff
        padding 20px
        overflow hidden
</style>