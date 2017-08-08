<template>
  
  <header>
    <!-- <nav class="nav-content">
      <ul class="nav nav-tabs">
        <li v-for="(value, key) in navItem" @click="tip(key)" :class="{ active: key == navItemIndex }">{{value}}</li>
      </ul>
    </nav> -->

 

<el-menu theme="dark" :default-active="activeIndex" mode="horizontal">
  <el-menu-item index="1">首页</el-menu-item>
  <el-submenu index="2">
    <template slot="title">导航</template>
    <el-menu-item v-for="(item, num) in navItem" index="2-1">{{num}} {{item}}</el-menu-item>
  </el-submenu>
  <el-menu-item index="3">
    <router-link to="/register">注册</router-link>   
  </el-menu-item>
  <el-menu-item index="3">
    <router-link to="/login">登录</router-link>   
  </el-menu-item>
</el-menu>
<div class="line"></div>


  </header>

</template>

<script>
    export default {

        data() {

          return {
            activeIndex: 0,
            navItem: ['首页', '商家店铺', '专场日历', '限时竞买', '一口价藏品', '拍品征集']
          };

        },

        methods: {
            tip(key) {
              this.navItemIndex = key;
            }
        }

    };
</script>

<style lang="stylus">  
  // @import '../../../utils/stylus/mixin.styl';
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>