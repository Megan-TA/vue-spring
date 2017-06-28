<template>

  <div class="banner">

      <a href="#" class="banner-next" @click="next" @mouseover="stopBanner" @mouseout="play">+</a>
      <a href="javascript:void 0" class="banner-prev" @click="prev" @mouseover="stopBanner" @mouseout="play">-</a>

      <transition-group
        class="banner-box clearfix"
        tag="ul"
        enter-active-class="animated zoomIn"
      >
        <li v-for="(value, key) in bannerItem" class="banner-box-li" v-show="key == bannerItemIndex - 1" :key="key" @mouseover="stopBanner" @mouseout="play">
          <a href="">
            <img :src="value">
          </a>
        </li>
      </transition-group>

      <ul class="banner-dot">
          <li v-for="n in 3" class="banner-dot-li" @click="toggleBanner(n)" :class="{ active: n == bannerItemIndex }" @mouseover="stopBanner" @mouseout="play">{{n}}</li>
      </ul>

  </div>

</template>


<script>

  export default {

    created() {
      this.play();
    },

    props: [],

    data() {

        return {

          bannerItemIndex: 1,

          bannerItem: [
            'https://pic.jucangtianxia.com/N/201706/65/65950e16684855644c7f552374b25adb.jpg',
            'https://pic.jucangtianxia.com/N/201706/75/75951c1981ed7231cbb20558e8244dd8.jpg',
            'https://pic.jucangtianxia.com/N/201706/45/4594b4124319894507702d303f4eed7b.jpg'
          ],

          bannerTimer: null

        };

    },

    computed: {
      /**
       * [bannerItemNum description]
       * 统计banner图片数量
       * @return {[type]} [description]
       */
      bannerItemNum() {
        return this.bannerItem.length;
      }

    },

    methods: {
      // 点击切换对应banner
      toggleBanner(n) {
        this.bannerItemIndex = n;
      },
      // banner自动播放回调函数
      autoPlay() {
        this.bannerItemIndex ++;

        if (this.bannerItemIndex === this.bannerItemNum + 1) {
          this.bannerItemIndex = 1;
          return;
        }
      },
      // banner自动播放
      play() {
        this.bannerTimer = setInterval(this.autoPlay, 3000);
      },
      // 清除定时器
      stopBanner() {
        clearInterval(this.bannerTimer);
      },
      // 下一页
      next() {
        this.bannerItemIndex++;
        this.bannerItemIndex === this.bannerItemNum + 1 ? this.bannerItemIndex = 1 : '';
      },
      // 上一页
      prev() {
        this.bannerItemIndex--;
        this.bannerItemIndex === 0 ? this.bannerItemIndex = this.bannerItemNum : '';
      }
    }

  };

</script>


<style lang="stylus">

  @import '../../common/stylus/mixin.styl'

   .banner
    position: relative

  .banner-box
    width: 100%
    height: 400px
    overflow: hidden
    position relative
    left 50%
    margin-left -350px
    .banner-box-li
      float: left

  .banner-dot
    position: absolute
    bottom: 10px
    left 50%
    margin-left -55px
    li
      border-radius 50%
      border: 1px solid red
      width: 15px
      height 15px
      text-align center
      float: left
      margin: 0 10px
      cursor pointer
      &.active
        background-color red

  .banner-next
      display block
      width 20px
      height 20px
      border-radius 50%
      background-color #000
      color #fff
      text-align center
      position absolute
      right 0px
      top 50%
      margin-top -10px
      z-index 2

  .banner-prev
      display block
      width 20px
      height 20px
      border-radius 50%
      background-color #000
      color #fff
      text-align center
      position absolute
      left 0px
      top 50%
      margin-top -10px
      z-index 2

</style>
