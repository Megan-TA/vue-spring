/*
 * 买入订单
 * @Author: chen_huang
 * @Date: 2017-10-31 23:09:26
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-03 01:20:38
 */
<template>
   <div class="order-box">
       <ul class="order-tab">
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
       </ul>
       <p v-if='state == 1'>1111</p>
       <p v-if='state == 2'>2222</p>
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
        }
    }
}
</script>
<style lang="stylus">
    .order-tab
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