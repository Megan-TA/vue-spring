/*
 * @Author: chen_huang 
 * @Date: 2017-08-11 17:37:44 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-04 15:34:41
 * 拍卖详情页
 */
<template>
    <div class="detailBox">
        <v-header></v-header>
        <v-auctionDetailsHead :parentData='remoteDetailData.result'></v-auctionDetailsHead>
        <v-auctionDetailsMain></v-auctionDetailsMain>
    </div>
</template>
<script>
import header from '../header/header'
import auctionDetailsHead from './head'
import auctionDetailsMain from './main'
import auctionDetailService from 'services/auctionDetail/auctionDetail'
export default {
    props: [],

    beforeCreate () {
        let coinId = location.hash.split('?coinId=')[1]
        auctionDetailService
            .getAuctionDetailInfo({
                coinId: coinId
            })
            .then((result) => {
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
    .detailBox
        width 1200px
</style>