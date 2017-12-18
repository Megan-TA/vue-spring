/*
 * 买入订单
 * @Author: chen_huang
 * @Date: 2017-10-31 23:09:26
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-18 16:49:25
 */
<template>
   <div class="userOrder">
        <el-tabs type="border-card" @tab-click='toggle' v-model='activeName'>
            <el-tab-pane label="全部" name='?state=1'>
                <v-orderAll></v-orderAll>
            </el-tab-pane>
            <el-tab-pane label="待付款" name='?state=2'>
                <v-noPay v-if='state == 2'></v-noPay>
            </el-tab-pane>
            <el-tab-pane label="待发货" name='?state=3'>
                <v-noPay v-if='state == 3'></v-noPay>
            </el-tab-pane>
            <el-tab-pane label="待收货" name='?state=4'>待收货</el-tab-pane>
            <el-tab-pane label="退货中" name='?state=5'>已收货</el-tab-pane>
            <el-tab-pane label="已完成" name='?state=6'>已完成</el-tab-pane>
            <el-tab-pane label="退货中" name='?state=7'>退货中</el-tab-pane>
            <el-tab-pane label="已关闭" name='?state=8'>已关闭</el-tab-pane>
            
        </el-tabs>
   </div>
</template>
<script>
import noPay from './user_order--noPay'
import noSend from './user_order--noSend'
import orderAll from './user_order--all'
export default {
    props: [],

    data () {
        return {
            activeName: '?state=1',
            state: 0,
            remoteData: null,
            remoteUrl: process.env.LOCALNODEHOST
        }
    },
    watch: {
        '$route': 'fetchDate'
    },
    methods: {
        fetchDate () {
            this.state = location.hash.split('=')[1]
        },
        toggle (tab) {
            if (location.href.indexOf(tab.name) > -1) {
                return
            }
            this.state = tab.name.split('=')[1]
            this.$router.push({
                path: tab.name
            })
        }
    },
    components: {
        'v-noPay': noPay,
        'v-noSend': noSend,
        'v-orderAll': orderAll
    }
}
</script>
<style lang="stylus">
    .userOrder__list
        border 1px solid #daf3ff
        padding 10px
    
    .userOder--title
        line-height 1.5
    
    .userOrder--price
        font-size 14px
        color #999
        line-height 1.5
    
    .userOrder--noResult
        height 100px
        line-height 100px
        text-align center


</style>