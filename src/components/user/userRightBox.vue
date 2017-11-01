/*
 * 用户中心右侧切换界面
 * @Author: chen_huang
 * @Date: 2017-10-31 23:02:14
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-10-31 23:15:11
 */
<template>
    <div class="user-right-box">
        <div class="ucpdata">
            <v-userOrder></v-userOrder>
        </div>
    </div>
</template>
<script>
import userOrder from './userOrder'
export default {
    props: [],
    data () {
        return {

        }
    },
    components: {
        'v-userOrder': userOrder
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