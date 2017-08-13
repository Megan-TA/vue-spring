/*
 * @Author: chen_huang 
 * @Date: 2017-07-30 16:11:05 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-08-13 20:12:59
 */
<template>
  
  <header>
    <el-menu theme="dark" mode="horizontal">
      <!-- <el-menu-item index="0">欢迎您,</el-menu-item> -->
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">导航</template>
        <el-menu-item v-for="(item, num) in navItem" index="2-1">{{num}} {{item}}</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" v-if="userInfo == null">
        <router-link to="/login">登录</router-link>   
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/goods">商品</router-link>   
      </el-menu-item>
      <el-menu-item index="5">
        <router-link to="/auction">个人拍卖</router-link>   
      </el-menu-item>
      <el-menu-item index="6" v-if="userInfo != null" @click="logout">退出</el-menu-item>
    </el-menu>
  </header>

</template>

<script>
// import bus from '../common';
    export default {

        mounted() {
          // 接收register传递的数据
          // bus.$on('userSignIn', userInfo => {
          //     window.sessionStorage.setItem('userInfo', userInfo);
          //     this.$store.state.headerModule.userInfo = userInfo;
          // });

          this.userInfo = window.sessionStorage.getItem('userInfo');

        },

        data() {

          return {
            userInfo: null,
            // // 对话框控制开关
            // dialogVisible: false,
            // 导航index
            activeIndex: 0, 
            // 导航name
            navItem: ['首页', '商家店铺', '专场日历', '限时竞买', '一口价藏品', '拍品征集']
          };

        },

        methods: {
            tip(key) {
              this.navItemIndex = key;
            },
            logout() {
              window.sessionStorage.removeItem('userInfo');
              this.userInfo = null;
              this.$router.replace({name: 'home'});
            },

            test() {
                this.$store.commit('increment');
            }
        },
        // computed: {
        //   onoff: function() {
        //     return !!window.sessionStorage.getItem('userInfo');
        //   }
        // },
        watch: {
          '$route' (to, from) {
              // window.alert(to);
          }
        }


    };
</script>

<style lang="stylus">  
  
</style>