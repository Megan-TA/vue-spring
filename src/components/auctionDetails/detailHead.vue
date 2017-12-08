/*
 * @Author: chen_huang 
 * @Date: 2017-08-11 14:35:38 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-08 17:41:02
 * 拍卖详情页上部分
 */
<template>
    <div class="app">
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
                        起始价: ￥{{parentData.price}}
                    </dd>
                    <dd>
                        保留价: 无
                    </dd>
                    <dd>
                        邮费: ￥{{parentData.postage}}
                    </dd>
                    <dd>
                        当前价: ￥{{parentData.offer}}</span>
                    </dd>
                    <dd>
                        开始: {{parentData.startTime}}
                    </dd>
                    <dd>
                        结束: {{parentData.endTime}}
                    </dd>
                    <dd>
                        距结标:{{remainingTime}}
                    </dd>
                    <dd>
                        加价幅度: ￥{{parentData.priceStep}}
                    </dd>
                    
                </dl>
                <template v-if='parentData.showOffer && remainingTime !="已结束"'>
                    <el-row style='width:400px'>
                        <div class="el-input-number detailHead--fl">
                            <span role="button" class="el-input-number__decrease" @click='reduceOffer'>
                                <i class="el-icon-minus"></i>
                            </span>
                            <span role="button" class="el-input-number__increase" @click="addOffer">
                                <i class="el-icon-plus"></i>
                            </span>
                            <div class="el-input">
                                <input autocomplete="off" 
                                    type="text" 
                                    class="el-input__inner"
                                    v-model='newOffer'>
                            </div>
                        </div>
                        <el-col :span='2' :offset='4' v-if='parentData.isLogin'>
                            <el-button type='primary' @click='nowOffer'>立刻出价</el-button>
                        </el-col>
                        <el-col :span='2' :offset='4' v-else>
                            <router-link
                                :to = "{
                                    path: 'login'
                                }">
                                <el-button type='warning'>登录出价</el-button>
                            </router-link>
                        </el-col>
                    </el-row>
                </template>
                <template v-else>
                    <p>1</p>
                </template>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import listService from 'services/list/list'
import bus from 'components/common'
import convert8h from 'utils/js/convert8h'
import Countdown from 'utils/js/countdown'
export default {
    props: {
        'parentData': Object
    },

    mounted () {
        // this.startCountDown(this.parentData.endTime)
    },

    updated () {
        // 判断是否已结标
        // 已结束的立刻报价按钮置灰
        if (new Date(this.parentData.endTime) < new Date()) {
            this.remainingTime = '已结束'
        } else {
            this.startCountDown(this.parentData.endTime)
        }
    },

    data () {
        return {
            tempOffer: 0,
            remoteUrl: process.env.LOCALNODEHOST,
            remainingTime: '--天--时--分--秒',
            onoff: true
        }
    },

    computed: {
        newOffer () {
            return this.parentData.offer + this.parentData.priceStep + this.tempOffer
        }
    },

    methods: {
        // 启动定时器
        startCountDown (endTime) {
            let that = this
            let CountdownTimer = new Countdown({
                endTime: endTime
            })
            setInterval(function () {
                that.remainingTime = CountdownTimer.date
            }, 1000)
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
        // 立刻报价
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
        // 报价成功回调
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
            margin 15px 0
    .detailHead--fl
        float left
</style>