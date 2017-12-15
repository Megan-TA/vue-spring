/*
 * 用户中心左侧交易中心
 * @Author: chen_huang
 * @Date: 2017-10-31 22:36:37
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-13 12:13:55
 */
<template>
    <div class='user__leftBox'>
        <el-tabs 
            :tab-position='tabPosition' 
            @tab-click='toggle'
            v-model='tabIndex'>
            <el-tab-pane label="买入订单" name='/user/order/order?state=1'>
            </el-tab-pane>
            <el-tab-pane label="订单管理" name='/user/order/order'>
            </el-tab-pane>
            <el-tab-pane label="发布管理" name='/user/auction/release'>
            </el-tab-pane>
            <el-tab-pane label="信息管理" name='/user/userInfo/userInfo'></el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    props: [],

    mounted () {
        this.tabIndex = location.hash.substring(1)
    },

    data () {
        return {
            tabPosition: 'left',
            tabIndex: '/user/order/order'
        }
    },
    methods: {
        toggle (tab, event) {
            if (location.href.indexOf(tab.name) > -1) {
                return
            }
            this.$router.push({
                path: tab.name
            })
        }
    }
}
</script>
<style lang="stylus">
    
                   
</style>