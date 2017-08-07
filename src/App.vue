<template>

      <div class="content">
        <v-header></v-header>
        <v-banner></v-banner>
      </div>

      


</template>

<script>

  import Header from 'components/header/header.vue';
  import Banner from 'components/banner/banner.vue';

  export default {

    props: [],

    data() {

        return {


        };

    },


    components: {

      'v-header': Header,
      'v-banner': Banner

    }

  };

</script>


<style lang="stylus">

  @import './utils/stylus/mixin.styl';

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
