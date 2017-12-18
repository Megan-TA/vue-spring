/*
 * 买入订单
 * @Author: chen_huang
 * @Date: 2017-10-31 23:09:26
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-18 16:09:12
 */
<template>
   <div class="userOrder">
        <el-tabs type="border-card" @tab-click='toggle' v-model='activeName'>
            <el-tab-pane label="全部" name='?state=1'>
                <v-inOrderAll></v-inOrderAll>
            </el-tab-pane>
            <el-tab-pane label="待付款" name='?state=2'>
                <v-inNoPay v-if='state == 2'></v-inNoPay>
            </el-tab-pane>
            <el-tab-pane label="待发货" name='?state=3'>
                <v-inNoPay v-if='state == 3'></v-inNoPay>
            </el-tab-pane>
            <el-tab-pane label="待收货" name='?state=4'>待收货</el-tab-pane>
            <el-tab-pane label="退货中" name='?state=5'>已收货</el-tab-pane>
            <el-tab-pane label="已完成" name='?state=6'>已完成</el-tab-pane>
            <el-tab-pane label="退货中" name='?state=7'>退货中</el-tab-pane>
            <el-tab-pane label="已关闭" name='?state=8'>已关闭</el-tab-pane>
            
        </el-tabs>
        <v-test></v-test>
   </div>
</template>
<script>
import inNoPay from './user_order--noPay'
import inNoSend from './user_order--noSend'
import inOrderAll from './user_order--all'
import test from './test'
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
        'v-inNoPay': inNoPay,
        'v-inNoSend': inNoSend,
        'v-inOrderAll': inOrderAll,
        'v-test': test
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

    .userOrder__tab
        display flex
        border-bottom  1px solid #ddd
        li
            text-align center
            height 35px 
            line-height 35px
            cursor pointer
            a 
                display block
                padding 0 30px
                &.router-link-exact-active
                    box-shadow 0 1px 0 #f03231
                    color #f03231


</style>