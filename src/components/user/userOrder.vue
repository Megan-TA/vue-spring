/*
 * 买入订单
 * @Author: chen_huang
 * @Date: 2017-10-31 23:09:26
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-10-31 23:41:11
 */
<template>
   <div class="order-box">
       <ul class="order-tab" @click='tab'>
           <li class="active">
               <router-link to='/'>全部</router-link>
           </li>
           <li>
               <router-link to='/'>待付款</router-link>
           </li>
           <li>
               <router-link to='/'>待发货</router-link>
           </li>
           <li>
               <router-link to='/'>待收货</router-link>
           </li>
           <li>
               <router-link to='/'>已完成</router-link>
           </li>
           <li>
               <router-link to='/'>冻结中</router-link>
           </li>
           <li>
               <router-link to='/'>已关闭</router-link>
           </li>
           <li>
               <router-link to='/'>退货中</router-link>
           </li>
       </ul>
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
        tab (event) {
            event = event || window.event
            let $target = event.target
            alert($target)
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
            padding 0 30px
            height 35px 
            line-height 35px
            cursor pointer
            &.active
                box-shadow 0 1px 0 #f03231
                a
                    color #f03231

</style>