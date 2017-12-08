/*
 * 用户中心右侧切换界面
 * @Author: chen_huang
 * @Date: 2017-10-31 23:02:14
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-08 18:09:00
 */
<template>
    <div class="userRightBox">
        <v-userOrder v-if="name == 'order'"></v-userOrder>
        <v-userInfo v-if="name == 'userInfo'"></v-userInfo>
        <v-release v-if="name == 'release'"></v-release>
    </div>
</template>
<script>
import userOrder from './order/user_order'
import userInfo from './userInfo/user_info'
import release from 'components/user/auction/user_release'
export default {
    // 为了降低路由组件与用户组件耦合度使用props传值name展示不同组件
    props: ['name'],

    mounted () {
    },
    update () {
        alert(1)
    },
    data () {
        return {

        }
    },
    components: {
        'v-userOrder': userOrder,
        'v-userInfo': userInfo,
        'v-release': release
    }
}
</script>
<style lang="stylus" scoped>
    .userRightBox
        background #fff
        padding 20px
        overflow hidden
        border 1px solid #e3e3e3
</style>