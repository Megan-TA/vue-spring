/*
 * 用户中心左侧交易中心
 * @Author: chen_huang
 * @Date: 2017-10-31 22:36:37
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-18 16:52:32
 */
<template>
    <div class='user__leftBox'>
        <el-tabs 
            :tab-position='tabPosition' 
            @tab-click='toggle'
            v-model='tabIndex'>
            <el-tab-pane label="买入订单" name='/user/order/inOrder?state=1'>
            </el-tab-pane>
            <el-tab-pane label="卖出订单" name='/user/order/outOrder?state=1' v-if='parentData == "B"'>
            </el-tab-pane>
            <el-tab-pane label="发布管理" name='/user/auction/release' v-if='parentData == "B"'>
            </el-tab-pane>
            <el-tab-pane label="信息管理" name='/user/userInfo/userInfo'></el-tab-pane>
            <el-tab-pane label="申请成为卖家" name='/user/userInfo/userInfo' v-if='parentData == "C"'></el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    props: {
        parentData: String
    },

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