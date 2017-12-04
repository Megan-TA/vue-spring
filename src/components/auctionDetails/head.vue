/*
 * @Author: chen_huang 
 * @Date: 2017-08-11 14:35:38 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-04 19:47:29
 * 拍卖详情页上部分
 */
<template>
    <div>
        <el-container>
            <el-aside width="500px">
                <el-carousel type="card" height="200px">
                    <el-carousel-item v-for='(val, index) in parentData.imgUrl' :key='index'>
                        <img :src="remoteUrl + val.url" alt="" width="100%">
                    </el-carousel-item>
                </el-carousel>
            </el-aside>
            <el-main>
                <dl class="auctionDetaills-item-info">
                    <dt>{{parentData.title}}</dt>
                    <dd>
                        参考价: ￥{{parentData.price}}
                    </dd>
                    <dd>
                        截止时间: {{parentData.startTime}} - {{parentData.endTime}}
                    </dd>
                    <dd>
                        邮费: ￥{{parentData.postage}}
                    </dd>
                    <dd>
                        <el-row>
                            <el-col :span='4'>
                                <span class="custom-tag" @click='reduceOffer'>-</span>
                            </el-col>
                            <el-col :span='16'>
                                <el-input v-model="parentData.offer" placeholder="请输入内容"></el-input>
                            </el-col>
                            <el-col :span='4'>
                                <span @click="addOffer" class="custom-tag">+</span>
                            </el-col>
                        </el-row>

                    </dd>
                    <dd>
                        当前价<span class="auctionDetaills-item-price">￥350</span>
                    </dd>
                </dl>
            </el-main>
        </el-container>
        <p @click='test'>111</p>
    </div>
</template>
<script>
export default {
    props: {
        'parentData': Object
    },

    mounted () {

    },

    data () {
        return {
            remoteUrl: process.env.LOCALNODEHOST
        }
    },

    methods: {
        test () {
            console.log(this.parentData)
        },
        reduceOffer () {
            let temp = 0
            if (this.parentData.offer == 0) return
            temp = this.parentData.offer - this.parentData.priceStep
            if (temp < 0) {
                this.parentData.offer = 0
            } else {
                this.parentData.offer = temp
            }
        },
        addOffer () {
            this.parentData.offer = this.parentData.offer + this.parentData.priceStep
        }
    }
}
</script>
<style lang="stylus" scoped>
    .auctionDetaills-item-info
        dt
            margin-top: -5px
            font-size: 16px
            line-height: 1.6
            font-weight: bold
        dd
            width 49%
            display inline-block    
            text-align left 
            margin 10px 0 0
    .custom-tag
        cursor pointer
        display block
        width 100%
        height 38px
        font-size 12px
        color #409EFF
        line-height 38px
        border-radius 4px
        text-align center
        border 1px solid rgba(64, 158, 255, 0.3)
        background-color rgba(64, 158, 255, 0.3)

    
</style>