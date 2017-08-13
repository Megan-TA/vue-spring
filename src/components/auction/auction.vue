/*
 * @Author: chen_huang 
 * @Date: 2017-08-08 13:16:31 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-08-12 17:27:06
 * 拍卖物品列表页
 */
<template>
    <div>
        <v-header></v-header>
        <div class="auction">
            <!-- 面包屑导航 start -->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>竞拍列表</el-breadcrumb-item>
            </el-breadcrumb> 
            <!-- 面包屑导航 end -->

            <el-row>
                <el-col :span="4" v-for="(value, index) in dataList" :key="index">
                    <el-card :body-style="{ padding: '0px' }">
                    <router-link class="auction-item-imageBox" 
                                :to="{ 
                                    name: 'auctionDetailsBids', 
                                    query: {
                                        auctionID: value.auctionID 
                                    }
                                }">
                        <img :src="value.img" class="auction-item-image" width="100%">
                    </router-link>
                    <div style="padding: 10px;">
                        <h4 class="auction-item-h4">{{ value.title }}</h4>
                        <p class="auction-item-p">起拍价：<em>{{ value.startingPrice }}</em></p>
                        <p class="auction-item-p">当前价：<em>{{ value.currentPrice }}</em></p>
                        <p class="auction-item-p">结束：{{ value.endTime }}</p>
                    </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>

</template>
<script>
import header from '../header/header';
export default {
  data () {
    return {
         currentDate: new Date(),
         dataList: [
             {
                 'auctionID': '110',
                 'title': '和田白玉飞黄腾达',
                 'img': 'static/images/test.jpg',
                 'startingPrice': '￥10',
                 'currentPrice': '￥12',
                 'endTime': '1小时20分'
             },
             {
                 'auctionID': '111',
                 'title': '和田仔料观音',
                 'img': 'static/images/test.jpg',
                 'startingPrice': '￥1666',
                 'currentPrice': '￥1999',
                 'endTime': '1小时20分'
             },
             {
                 'auctionID': '112',
                 'title': '和田白玉挂件佛',
                 'img': 'static/images/test.jpg',
                 'startingPrice': '￥50',
                 'currentPrice': '￥60',
                 'endTime': '1小时10分'
             },
             {
                 'auctionID': '114',
                 'title': '和田白玉挂件佛',
                 'img': 'static/images/test.jpg',
                 'startingPrice': '￥50',
                 'currentPrice': '￥60',
                 'endTime': '1小时10分'
             }
         ]
    };
  },

  components: {
      'v-header': header
  }

};
</script>
<style lang="stylus" scoped>
    .auction
        width 1200px
        margin 0 auto

    .el-breadcrumb
        height 36px
        line-height 36px

    .el-col
        margin-right 5px

    .auction-item-h4
        margin 0
        height 20px
        line-height 20px

    .auction-item-p
        font-size 12px 
        margin 0
        height 18px
        line-height 18px
        em
            color #f03231
            font-style normal

    .auction-item-imageBox
        display block
        overflow hidden
        margin 0 auto
        
    .auction-item-image
        cursor pointer
        &:hover
            transform scale(1.1, 1.1)
            transition all 0.3s ease-in-out
</style>