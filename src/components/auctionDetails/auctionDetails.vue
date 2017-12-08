/*
 * @Author: chen_huang 
 * @Date: 2017-08-11 17:37:44 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-08 17:46:04
 * 拍卖详情页
 */
<template>
    <div class="auctionDetails">
        <v-header></v-header>
        <v-auctionDetailsHead :parentData='remoteDetailData'></v-auctionDetailsHead>
        <v-auctionDetailsMain :parentData='remoteDetailData'></v-auctionDetailsMain>
    </div>
</template>
<script>
import header from '../header/header'
import auctionDetailsHead from './detailHead'
import auctionDetailsMain from './detailMain'
import auctionDetailService from 'services/auctionDetail/auctionDetail'
import convert8h from 'utils/js/convert8h'
export default {
    props: [],

    beforeCreate () {
        let coinId = location.hash.split('?coinId=')[1]
        auctionDetailService
            .getAuctionDetailInfo({
                coinId: coinId
            })
            .then((response) => {
                let result = response.result
                // 转时间+8h
                result.startTime = convert8h(result.startTime)
                result.endTime = convert8h(result.endTime)
                console.log(result.record)
                result.record.forEach((item) => {
                    item.date = convert8h(item.date)
                })

                this.remoteDetailData = result
            })
            .catch((err) => {
                this.$message({
                    message: '获取拍品信息失败',
                    type: 'error'
                })
                console.error(err)
            })
    },

    data () {
        return {
            remoteDetailData: {
                result: {}
            }
        }
    },

    components: {
        'v-header': header,
        'v-auctionDetailsHead': auctionDetailsHead,
        'v-auctionDetailsMain': auctionDetailsMain
    }

}
</script>
<style lang="stylus" scoped>
    .auctionDetails
        width 1200px
        margin 0 auto
</style>