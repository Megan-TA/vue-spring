/*
 * 未发货
 * @Author: chen_huang
 * @Date: 2017-12-12 17:11:57
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-12 18:29:03
*/
<template>
    <div class="userOrder__order userOrder--nopay">
        <ul v-for='(val, index) in remoteData' :key='index'>
            <li class='userOrder__list'>
                <el-row>
                    <el-col :span='4' >
                        <img 
                            :src="`${remoteUrl}${val._auctionId.imgUrl[0].url}`" 
                            alt="图片加载失败"
                            width="100">
                    </el-col>
                    <el-col :span='5' :offset="1">
                        <h4 class='userOder--title'>{{val._auctionId.title}}</h4>
                    </el-col>
                    <el-col :span='4' :offset="1">
                        <p class='userOrder--price'>￥{{val._auctionId.offer}}</p>
                    </el-col>
                    <el-col :span='4' :offset="1">
                        <p>---</p>
                    </el-col>
                    <el-col :span='4'>
                        <el-button 
                            type="primary" 
                            plain 
                            v-if='val.state==0'>立即付款</el-button>
                         
                    </el-col>
                </el-row>
            </li>
        </ul>
    </div>
</template>
<script>
import orderService from 'services/orderService/order'
export default {
    props: [],

    created () {
        orderService
            .getOrder({
                transportState: 0
            })
            .then((res) => {
                console.log(res)
                this.remoteData = res.result
            })
            .catch((err) => {
                this.$message({
                    message: '获取订单失败',
                    type: 'error'
                })
                console.log(err)
            })
    },

    data () {
        return {
            remoteData: null,
            remoteUrl: process.env.LOCALNODEHOST
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>