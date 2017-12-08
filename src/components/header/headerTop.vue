/*
 * 网页头部信息
 * @Author: chen_huang
 * @Date: 2017-12-07 14:22:11
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-08 13:25:21
*/
<template>
    <!-- 标题 start -->
    <div class="headerTop">
        <div class="headerTop__box">
            <div class="headerTop__logo">
                <router-link to = '/'>网站首页</router-link>
                hi，欢迎来到聚藏天下
            </div>
            <div class="headerTop__userInfo">
                <template v-if="userPhone">
                    <span>欢迎您：{{userPhone}}</span>
                    <span class="headerTop__userInfo--line">|</span>
                    <router-link to = '/user/auction/release' class='headerTop--hover'>个人中心</router-link>
                    <span class="headerTop__userInfo--line">|</span>
                    <span @click='logout' class="headerTop--hover">登出</span>
                </template>
                <template v-else>
                    <router-link to = '/login'>登录</router-link>
                    <span class="headerTop__userInfo--line">|</span>
                    <router-link to = '/register'>注册</router-link>
                </template>
            </div>
        </div>
    </div>
    <!-- 标题 end -->
</template>
<script>
import util from 'utils/js/util'
export default {
    props: [],

    created () {

    },

    mounted () {
        util.getCookie('userPhone') == null
            ? this.userPhone = null : this.userPhone = util.getCookie('userPhone')
    },

    data () {
        return {
            userPhone: null
        }
    },

    methods: {
        logout () {
            util.delCookie('token')
            util.delCookie('userPhone')
            this.userPhone = null

        // this.$router.replace({name: 'home'})
        }
    }
}
</script>
<style lang="stylus">
    .headerTop
        background #f1f1f1
        font-size 12px
        color #666

    .headerTop__box
        width 1200px
        height  30px
        line-height 30px
        display flex
        justify-content space-between
        margin 0 auto
        padding 0 10px
    .headerTop__userInfo--line
        margin 0 10px
    .headerTop--hover
        cursor pointer
        &:hover
            color red
</style>