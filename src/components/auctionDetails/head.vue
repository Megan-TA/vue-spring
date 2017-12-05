/*
 * @Author: chen_huang 
 * @Date: 2017-08-11 14:35:38 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-05 19:07:06
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
                        截止时间: {{parentData.endTime}}
                    </dd>
                    <dd>
                        邮费: ￥{{parentData.postage}}
                    </dd>
                    <dd>
                        当前价: ￥{{parentData.offer}}</span>
                    </dd>
                </dl>
                <el-row style='width:400px'>
                    <el-col :span='4'>
                        <span class="custom-tag" @click='reduceOffer'>-</span>
                    </el-col>
                    <el-col :span='8'>
                        <el-input v-model="newOffer" placeholder="请输入内容"></el-input>
                    </el-col>
                    <el-col :span='4'>
                        <span @click="addOffer" class="custom-tag">+</span>
                    </el-col>
                    <el-col :span='2' :offset='4'>
                        <el-button type='primary' @click='nowOffer'>立刻出价</el-button>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
        <p @click='test'>{{this.newOffer}}</p>
    </div>
</template>
<script>
import listService from 'services/list/list'
import bus from 'components/common'
import convert8h from 'utils/js/convert8h'
export default {
    props: {
        'parentData': Object
    },

    mounted () {
    },

    data () {
        return {
            tempOffer: 0,
            remoteUrl: process.env.LOCALNODEHOST
        }
    },

    computed: {
        newOffer () {
            return this.parentData.offer + this.parentData.priceStep + this.tempOffer
        }
    },

    methods: {
        test () {
            console.log(this.test)
        },
        // 递减
        reduceOffer () {
            let temp = this.tempOffer
            if (this.parentData.offer == 0) return

            temp -= this.parentData.priceStep
            // 报价不能小于当前价 + 加价幅度之和
            if (this.newOffer + temp <= this.parentData.offer) {
                return false
            } else {
                this.tempOffer = temp
            }
        },
        addOffer () {
            this.tempOffer += this.parentData.priceStep
        },
        nowOffer () {
            listService
                .nowOffer({
                    title: this.parentData.title,
                    offer: this.newOffer
                })
                .then((response) => {
                    let result = response.result
                    if (response.success) {
                        this.successCallback(result)
                    } else {
                        this.$message({
                            message: '报价失败',
                            type: 'error'
                        })
                    }
                })
                .catch((err) => {
                    this.$message({
                        message: '报价失败',
                        type: 'error'
                    })
                    console.error(err)
                })
        },
        successCallback (result) {
            result.date = convert8h(result.date)
            // 当前报价数值为提交的报价值
            this.parentData.offer = this.newOffer
            // 提交成功清空tempOffer之前记录的增减数值
            this.tempOffer = 0
            bus.$emit('nowOffer', result)
            this.$message({
                message: '报价成功',
                type: 'success'
            })
            return false
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
            margin 10px 0
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