/*
 * 用户中心左侧交易中心
 * @Author: chen_huang
 * @Date: 2017-10-31 22:36:37
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-03 01:21:40
 */
<template>
    <div class="user-left-box">
        <dl>
            <dt>
                <i></i>交易中心
            </dt>
            <dd>
                <router-link to='/user/order?state=1'>买入订单</router-link>
            </dd>
            <dd>
                <router-link to='/'>买入订单确认</router-link>
            </dd>
            <dd>
                <router-link to='/'>我的出价</router-link>
            </dd>
        </dl>
        <dl>
            <dt>
                <i></i>商品管理
            </dt>
            <dd>
                <router-link to='/'>申请开店</router-link>
            </dd>
        </dl>
        <dl>
            <dt>
                <i></i>用户信息
            </dt>
            <dd>
                <router-link to='/user/userInfo'>个人资料</router-link>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    props: [],
    data () {
        return {

        }
    },
    methods: {
    }
}
</script>
<style lang="stylus" scoped>
    .user-left-box
        width 200px
        padding 5px 0
        background #fff
        border 1px solid #ddd
        border-radius 5px
        margin 0 20px 0 0
        dt
            height 32px
            line-height 32px
            text-indent 10px
            color #aa6a5b
            border-bottom 1px solid #e9e9e9
            font-size 18px
        dd
            height 32px
            line-height 32px
            padding-left 25px
            color #aa6a5b
            font-size 16px
            cursor pointer
            &:hover
                a
                    color #f03231
            a
                display block
                &.router-link-exact-active
                    color #f03231
</style>