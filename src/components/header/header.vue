/*
 * @Author: chen_huang 
 * @Date: 2017-07-30 16:11:05 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-07 16:51:54
 */
<template>
  
  <header>
    <v-headerTop></v-headerTop>
    <v-headerSearch></v-headerSearch>
    <!-- tab start -->
    <div class="menubox">
        <div class="container">
            <ul class="menu">
                <li>
                    <router-link to = '/'>首页</router-link>
                </li>
                <li>
                    <router-link to = '/list'>个人拍卖列表页</router-link>
                </li>
            </ul>
        </div>
    </div>
    <!-- tab end -->
  </header>
  
</template>

<script>
console.log(process.env)
import headerTop from './headerTop'
import headerSearch from './headerSearch'

export default {

    created () {
          // 接收register传递的数据
          // bus.$on('userSignIn', userInfo => {
          //     window.localStorage.setItem('userInfo', userInfo);
          //     this.$store.state.headerModule.userInfo = userInfo;
          // });
    },

    mounted () {

    },

    data () {
        return {
            activeName: '',
            // // 对话框控制开关
            // dialogVisible: false,
            // 导航index
            activeIndex: 0
        }
    },

    methods: {
        tip (key) {
            this.navItemIndex = key
        },
        // 跳转页面
        handleClick (tab, event) {
            console.log(tab, event)
            this.$router.push({
                path: tab.name
            })
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
    },

    components: {
        'v-headerTop': headerTop,
        'v-headerSearch': headerSearch
    }
}
</script>

<style lang="stylus" scoped>
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