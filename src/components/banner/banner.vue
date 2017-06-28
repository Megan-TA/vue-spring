<template>

  <div class="banner">

      <ul class="banner-box clearfix">
        <li v-for="(value, key) in bannerItem" class="banner-box-li" v-show="key == bannerItemIndex - 1">
          <a href="">
            <img :src="value">
          </a>
        </li>
      </ul>
      <ul class="banner-dot">
          <li v-for="n in 3" class="banner-dot-li" @click="toggleBanner(n)" :class="{ active: n == bannerItemIndex }" >{{n}}</li>
      </ul>

  </div>

</template>


<script>

  export default {

    props: [],

    data() {

        return {

          bannerItemIndex: 1,

          bannerItem: [
            'https://pic.jucangtianxia.com/N/201706/65/65950e16684855644c7f552374b25adb.jpg',
            'https://pic.jucangtianxia.com/N/201706/75/75951c1981ed7231cbb20558e8244dd8.jpg',
            'https://pic.jucangtianxia.com/N/201706/45/4594b4124319894507702d303f4eed7b.jpg'
          ]

        };

    },

    methods: {

      toggleBanner(n) {
        this.bannerItemIndex = n;
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



</style>
