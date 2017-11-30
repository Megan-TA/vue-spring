/*
 * 用户中心右侧切换界面
 * @Author: chen_huang
 * @Date: 2017-10-31 23:02:14
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-30 13:13:25
 */
<template>
    <div class="user-right-box">
        <div class="ucpdata">
            <v-userOrder v-if="name == 'buyout'"></v-userOrder>
            <v-userInfo v-if="name == 'userInfo'"></v-userInfo>
            <v-auctionRelease v-if="name == 'release'"></v-auctionRelease>
            
        </div>
    </div>
</template>
<script>
import userOrder from '../userOrder'
import userInfo from '../userInfo'
import auctionRelease from 'components/user/rightBox/auction/release'
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
        'v-userInfo': userInfo,
        'v-auctionRelease': auctionRelease
    }
}
</script>
<style lang="stylus" scoped>
    .user-right-box
        width 480px
        background #fff
        padding 20px
        overflow hidden
</style>