/*
 * 用户中心
 * @Author: chen_huang
 * @Date: 2017-10-31 22:18:28
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-03 00:24:45
 */
<template>
    <div>
        <header>
            <span>黄飞鸿</span>
            <span>|</span>
            <span>退出</span>
        </header>
        <div class="container">
            <v-userLeftList></v-userLeftList>
            <router-view>
                <v-userRightBox></v-userRightBox>
            </router-view>
        </div>
    </div>
</template>
<script>
import userLeftList from './userLeftList'
import userRightBox from './userRightBox'
export default {
    props: [],
    data () {
        return {

        }
    },
    components: {
        'v-userLeftList': userLeftList,
        'v-userRightBox': userRightBox
    }
}
</script>
<style lang="stylus" scoped>
    body 
        background-color #f1f1f1
    header
        display flex
        justify-content flex-end
        height 30px
        line-height 30px
        border 1px solid #dddddd
        background #f1f1f1
        font-size 12px
        color #666
        padding 0 20px
        span 
            margin 0 10px
            &:last-child
                cursor pointer
    .container
        display flex
        justify-content flexible-between
        margin 20px 50px
</style>