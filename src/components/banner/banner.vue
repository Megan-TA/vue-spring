<template>

  <div class="banner">
    <div class="banner-content">
      <el-carousel trigger="click" height="400px" :interval="10000">
        <el-carousel-item v-for="(val, index) in bannerItem" :key="index">
          <img :src="val" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>

</template>

<script>

  export default {

    props: [],

    data() {

        return {

          bannerItemIndex: 1,

          bannerItem: [
            '//pic.jucangtianxia.com/N/201706/65/65950e16684855644c7f552374b25adb.jpg',
            '//pic.jucangtianxia.com/N/201706/75/75951c1981ed7231cbb20558e8244dd8.jpg',
            '//pic.jucangtianxia.com/N/201706/45/4594b4124319894507702d303f4eed7b.jpg'
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

  .banner-content
    width 700px
    margin 0 auto

  


</style>
