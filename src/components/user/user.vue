/*
 * 用户中心
 * @Author: chen_huang
 * @Date: 2017-10-31 22:18:28
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-07 18:47:39
 */
<template>
    <div class="user">
        <v-headerTop></v-headerTop>
        <div class="user__container">
            <v-userLeftBox></v-userLeftBox>
            <router-view>
                <v-userRightBox></v-userRightBox>
            </router-view>
        </div>
    </div>
</template>
<script>
import headerTop from 'components/header/headerTop'
import userLeftBox from './user_leftBox'
import userRightBox from './user_rightBox'
export default {
    props: [],
    data () {
        return {

        }
    },
    components: {
        'v-userLeftBox': userLeftBox,
        'v-userRightBox': userRightBox,
        'v-headerTop': headerTop
    }
}
</script>
<style lang="stylus" scoped>
    .user
        width 1200px
        margin 0 auto
    .user__container
        display flex
        min-width 1100px
        justify-content flexible-between
        margin 20px 50px
    
    .topbox
        background #f1f1f1
        font-size 12px
        color #666
        .container
            display flex
            justify-content space-between
            margin 0 auto
            width 1200px
            height  30px
            line-height 30px
            .userInfoBox
                a
                    margin: 0 10px
                    color #666
                span:not(.line)
                    cursor pointer
</style>