/*
 * @Author: chen_huang 
 * @Date: 2017-08-11 14:35:38 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-08-29 22:33:52
 * 拍卖详情页上半部分
 */
<template>
    <div>
        <div clas="auctionDetaills">
            <!-- 面包屑导航 start -->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>竞拍列表</el-breadcrumb-item>
            </el-breadcrumb> 
            <!-- 面包屑导航 end -->
            
            <div clas="auctionDetaills">
                <div class="auctionDetaills-item-topBox clearfix">
                    <div class="auctionDetaills-item-banner">
                        <el-carousel indicator-position="outside" type="card" arrow="never" :autoplay="false">
                            <el-carousel-item v-for="item in 4" :key="item">
                            <img src="https://pic.jucangtianxia.com/T4/201708/45/4598d06030abaa11dc0481a5d13fb5b0.jpg" alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div class="auctionDetaills-item-infoBox">
                        <dl class="auctionDetaills-item-info">
                            <dt>民国细路粉彩柳树黄莺粉盒三件套</dt>
                            <dd>
                                起始价: ￥0.00
                            </dd>
                            <dd>
                                截止时间: 2017/8/10 13:20:00
                            </dd>
                            <dd>
                                邮费: ￥0.00
                            </dd>
                            <dd>
                                买家佣金: 3%
                            </dd>
                            <dd>
                                当前价<span class="auctionDetaills-item-price">￥350</span>
                            </dd>
                        </dl>
                        <div class="auctionDetaills-item-slogin" v-if="userInfo">
                            拥有出价资格且登录后才可以出价或设置代理价
                            <router-link 
                                :to="{
                                    name: 'login',
                                    query: {
                                        from: 'auctionDetails'
                                    }
                                }" class="l``ogin">点击登录</router-link>
                        </div>
                        <div class="auctionDetaills-item-payment">
                            <i class="icon-wx"></i><span>微信支付</span>
                            <i class="icon-ali"></i><span>支付宝支付</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: [],
    data () {
        return {
            userInfo: window.sessionStorage.getItem('userInfo') == null
        }
    }
}
</script>
<style lang="stylus" scoped>
    .auctionDetaills 
        width 1200px
        margin 0 auto
    
    .auctionDetaills-item-banner
        width 420px
        height 420px
        float left
    
    .el-breadcrumb
        height 36px
        line-height 36px
    
    .auctionDetaills-item-infoBox
        float left
        margin-left 20px

    .auctionDetaills-item-info
        dt
            margin-top: -5px;
            font-size: 16px;
            line-height: 1.6;
            font-weight: bold;
        dd
            width 49%
            display inline-block    
            text-align left 
            margin 10px 0 0;
    
    .auctionDetaills-item-slogin
        height: 62px;
        width: 450px;
        border: 1px solid #ff7f00;
        line-height: 62px;
        text-align: center;
        margin-bottom: 20px;

    .login
        color: #ff7f00;
        font-size: 18px;
        font-weight: bold;
    
    .auctionDetaills-item-price
        color: #ff4200;
        font-family: Arial;
        font-size: 24px;
        font-weight: bolder;
        vertical-align: middle;
        padding-right: 50px;
    
    .auctionDetaills-item-payment
        i,span
            vertical-align top
            margin-right 8px
    
</style>