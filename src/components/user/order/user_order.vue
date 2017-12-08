/*
 * 买入订单
 * @Author: chen_huang
 * @Date: 2017-10-31 23:09:26
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-08 18:10:25
 */
<template>
   <div class="userOrder">
        <el-tabs type="border-card" :tab-click='toggle'>
            <el-tab-pane label="全部">全部</el-tab-pane>
            <el-tab-pane label="待付款">待付款</el-tab-pane>
            <el-tab-pane label="待发货">待发货</el-tab-pane>
            <el-tab-pane label="待收货">待收货</el-tab-pane>
            <el-tab-pane label="已完成">已完成</el-tab-pane>
            <el-tab-pane label="冻结中">冻结中</el-tab-pane>
            <el-tab-pane label="已关闭">已关闭</el-tab-pane>
            <el-tab-pane label="退货中">退货中</el-tab-pane>
        </el-tabs>
       <!-- <ul class="userOrder__tab">
           <li class="active">
               <router-link to='?state=1'>全部</router-link>
           </li>
           <li>
               <router-link to='?state=2'>待付款</router-link>
           </li>
           <li>
               <router-link to='?state=3'>待发货</router-link>
           </li>
           <li>
               <router-link to='?state=4'>待收货</router-link>
           </li>
           <li>
               <router-link to='?state=5'>已完成</router-link>
           </li>
           <li>
               <router-link to='?state=6'>冻结中</router-link>
           </li>
           <li>
                <router-link to='?state=7'>已关闭</router-link>
           </li>
           <li>
               <router-link to='?state=8'>退货中</router-link>
           </li>
       </ul> -->
   </div>
</template>
<script>
export default {
    props: [],
    data () {
        return {
            state: 1
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

        }
    }
}
</script>
<style lang="stylus">
    .userOrder

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