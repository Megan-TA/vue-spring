/*
 * @Author: chen_huang 
 * @Date: 2017-07-30 16:11:05 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-10-31 22:29:22
 */
<template>
  
  <header>
    <!-- 标题 start -->
    <div class="topbox">
        <div class="container">
            <div class="title">
                <router-link to = '/'>网站首页</router-link>
                hi，欢迎来到聚藏天下
            </div>
            <div class="userInfoBox">
                <template v-if="!isLogin">
                    <router-link to = '/login'>登录</router-link>
                    <span class="line">|</span>
                    <router-link to = '/register'>注册</router-link>
                </template>
                <template v-else>
                    <span>欢迎您：</span>
                    <span class="line">|</span>
                    <router-link to = '/user'>个人中心</router-link>
                    <span class="line">|</span>
                    <span @click = 'logut'>登出</span>
                </template>
            </div>
        </div>
    </div>
    <!-- 标题 end -->
    <!-- 搜索 start -->
    <div class="searchBox">
        <div class="logobox">
            <router-link to = '/'></router-link>
        </div>
        <div class="schbox">
            <form action="/search" method="post" target="_blank">
                <div class="schbar">
                    <dl class="schtype">
                        <dt>搜藏品<i class="icon-arrowdown"></i></dt>
                        <!-- <dd><a href="#shop">搜店铺</a></dd> -->
                    </dl>
                    <input type="text" name="wd" value="" placeholder="请输入搜索关键词" class="sch-input">
                    <button type="submit" class="sch-submit">搜索</button>
                </div>
                <!-- <p class="schwords">热门搜索：<a href="/search?wd=%E9%9B%8D%E6%AD%A3" target="_blank">雍正</a><a href="/search?wd=%E8%8B%8F%E7%82%89%E8%8A%B1%E9%92%B1" target="_blank">苏炉花钱</a><a href="/search?wd=%E5%92%B8%E4%B8%B0" target="_blank">咸丰</a><a href="/search?wd=%E9%A1%BA%E6%B2%BB" target="_blank">顺治</a><a href="/search?wd=%E7%BD%97%E6%B1%89" target="_blank">罗汉</a></p> -->
            </form>
        </div>
        <div class="srvbox">
            <dl>
                <dt><img src="//www.jucangtianxia.com/static/images/jctx_qrcode.jpg" width="70"></dt>
                <dd>
                    <p>微信扫一扫</p>
                    <p>关注网站公众号</p>
                    <p><i class="icon-tel"></i>400-103-5055</p>
                </dd>
            </dl>
        </div>
    </div>
    <!-- 搜索 end --> 
    <!-- tab start -->
    <div class="menubox">
        <div class="container">
            <ul class="menu">
                <li>
                    <router-link to = '/'>首页</router-link>
                </li>
                <li>
                    <router-link to = '/auction'>商品列表</router-link>
                </li>
                <!-- <li>
                    <router-link to = '/auction'>个人拍卖</router-link>
                </li> -->
            </ul>
        </div>
    </div>
    <!-- tab end -->
  </header>
  
</template>

<script>
// import bus from '../common';
// import util from '../../utils/js/util'
// import axios from 'axios'
export default {

    created () {
          // 接收register传递的数据
          // bus.$on('userSignIn', userInfo => {
          //     window.localStorage.setItem('userInfo', userInfo);
          //     this.$store.state.headerModule.userInfo = userInfo;
          // });
    },

    data () {
        return {
            userInfo: null,
            // // 对话框控制开关
            // dialogVisible: false,
            // 导航index
            activeIndex: 0,
            isLogin: true

        }
    },

    methods: {
        tip (key) {
            this.navItemIndex = key
        },
        logout () {
            window.localStorage.removeItem('userInfo')
            this.userInfo = null
            this.$router.replace({name: 'home'})
        },
        logut () {
            // util.delCookie('Spring')
            this.isLogin = false
        }
    },
        // computed: {
        //   onoff: function() {
        //     return !!window.localStorage.getItem('userInfo');
        //   }
        // },
    watch: {
        '$route' (to, from) {
              // window.alert(to);
        }
    }
}
</script>

<style lang="stylus"> 
    // top
    .topbox
        background #f1f1f1
        font-size 12px
        color #666
        .container
            display flex
            justify-content space-between
            margin 0 auto
            width 1200px
            height  30px
            line-height 30px
            .userInfoBox
                a
                    margin: 0 10px
                    color #666
                span:not(.line)
                    cursor pointer
    // 搜索
    .searchBox
        width 1200px
        height 70px
        margin 15px auto
        display flex
        .logobox
            margin-right 50px
            a
                display block
                width 250px
                height 100%
                background url('//www.jucangtianxia.com/static/images/logo.png') left center no-repeat
        .schbox
            flex 2
            display flex
            align-items center
            .schbar
                display flex
                .schtype
                    color #666
                    dt
                        width 80px
                        height 37px
                        line-height 37px
                        border 1px solid #f03231
                        border-right 0
                        cursor pointer
                        padding-left 10px
                        box-sizing border-box
                .sch-input
                    width 420px
                    height 32px
                    line-height 32px
                    border 1px solid #f03231
                    border-left 0
                    border-right 0
                    outline none  
                .sch-submit
                    width 100px
                    height 37px
                    line-height 37px
                    font-size 16px
                    background #f03231
                    color #ffffff
                    text-align center
                    outline none
                    border 0
                    cursor pointer
        .srvbox
            width 300px
            margin-left 110px
            dl
                display flex
                dt
                    width 70px
                    height 70px
                dd
                    p
                        text-align left
                        line-height 22px
                        white-space nowrap

    // tab
    .menubox
        width 100%
        height 36px
        line-height 35px
        border-bottom 1px solid #f03231
        .container
            width 1200px
            margin 0 auto
        .menu
            display flex
            font-size 16px
            li
                a
                    display block
                    padding 0 20px
                    &:hover,
                    &.router-link-exact-active
                        color #e70000

</style>