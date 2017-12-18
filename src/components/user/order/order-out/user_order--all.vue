/*
 * 获取全部订单
 * @Author: chen_huang
 * @Date: 2017-12-13 10:38:53
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-18 17:52:41
*/
<template>
    <div class='userOrder--noResult' v-if='remoteData.length == 0'>
        <p>没有数据</p>
    </div>
    <div class="userOrder__order userOrder--all" v-else>
        <ul v-for='(val, index) in remoteData' :key='index'>
            <li class='userOrder__list'>
                <el-row>
                    <el-col :span='4' >
                        <img 
                            :src="`${remoteUrl}${val.imgUrl[0].url}`" 
                            alt="图片加载失败"
                            width="100">
                    </el-col>
                    <el-col :span='5' :offset="1">
                        <h4 class='userOder--title'>{{val.title}}</h4>
                    </el-col>
                    <el-col :span='4' :offset="1">
                        <p class='userOrder--price'>￥{{val.offer}}</p>
                    </el-col>
                    <el-col :span='4' :offset="1">
                        <p>---</p>
                    </el-col>
                    <el-col :span='4'>
                        <el-tag 
                            type="primary" 
                            v-if='val.state==0'>竞拍中</el-tag>
                        <el-tag v-if='val.state==1'>付款成功</el-tag>
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
            .getOutAllOrder({})
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
            remoteData: '',
            remoteUrl: process.env.LOCALNODEHOST
        }
    },

    methods: {
    }

}
</script>
<style lang="stylus" scoped>

</style>