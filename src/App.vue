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
      <nav>
        <ul class="nav clearfix">
          <li v-for="(value, key) in navItem" @click="tip(value, key)" :class="{ active: value.active }">{{value.name}}</li>
        </ul>
      </nav>
  </div>

</template>

<script>

  export default {

    props: [],

    data() {

        return {

            navItem: [
              {name: '首页', active: true},
              {name: '商家店铺', active: false},
              {name: '专场日历', active: false},
              {name: '限时竞买', active: false},
              {name: '一口价藏品', active: false},
              {name: '藏品交流', active: false},
              {name: '拍品征集', active: false}
            ]

        };

    },

    methods: {

      tip(value, key) {

        this.navItem.forEach(function(element, index) {

          element.active = false;

        });

        value.active = true;

      }

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
