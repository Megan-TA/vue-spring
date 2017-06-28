<template>

  <div>
      <div class="header-inner clearfix">
        <div class="header-logo-dop">
          <a target="_blank" href="//www.vip.com/">
            <img src="//b.appsimg.com/2017/05/31/670/1496219375910.png" alt="全球精选_正品特卖" height="100">
          </a>
        </div>
        <div class="header-vip">
          <a href="//support.vip.com/insurance/" target="_blank" class="header-vip-icon1">
            <img src="//b.appsimg.com/2016/06/17/303/1466131264367.png" height="100">
          </a>
          <a href="//help.vip.com/commitment.php" target="_blank" class="header-vip-icon2">
            <img src="//b.appsimg.com/2016/06/17/244/1466131266290.png" height="100">
          </a>
          <a href="//help.vip.com/commitment.php" target="_blank" class="header-vip-icon3">
            <img src="//b.appsimg.com/2016/06/17/530/1466131268726.png" height="100">
          </a>
        </div>
      </div>
      <nav class="nav">
        <ul class="nav clearfix">
          <li v-for="(value, key) in navItem" @click="tip(key)" :class="{ active: key == navItemIndex }">{{value}}</li>
        </ul>
      </nav>


      <v-banner></v-banner>
  </div>



</template>

<script>

  import Banner from 'components/banner/banner.vue';

  export default {

    props: [],

    data() {

        return {

            navItemIndex: 0,

            navItem: ['首页', '商家店铺', '专场日历', '限时竞买', '一口价藏品', '拍品征集']

        };

    },

    methods: {

      tip(key) {
        this.navItemIndex = key;
      }

    },

    components: {

      'v-banner': Banner

    }

  };

</script>


<style lang="stylus">

  @import './common/stylus/mixin.styl';

  .header-inner
    width 100%

  .header-logo-dop
    max-width: 495px
    overflow: hidden
    float: left

  .header-vip
    float: right
    height: 100px
    line-height: 100px


  .nav
    width: 100%
    background: #f10180
    height: 24px
    li
      float: left
      padding: 0 20px
      height: 24px
      line-height: 24px
      color: #fff
      font-size: 16px
      cursor: pointer
      &.active
        background:#bd1067
        font-weight: 700
        cursor: default




</style>
