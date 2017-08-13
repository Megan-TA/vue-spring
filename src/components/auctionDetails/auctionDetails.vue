/*
 * @Author: chen_huang 
 * @Date: 2017-08-11 17:37:44 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-08-12 10:17:15
 * 拍卖详情页
 */
<template>
    <div>
        <v-header></v-header>
        <v-auctionDetailsHead></v-auctionDetailsHead>
        <v-auctionDetailsMain></v-auctionDetailsMain>
    </div>
</template>
<script>
import header from '../header/header';
import auctionDetailsHead from './head';
import auctionDetailsMain from './main';
export default {
  props: [],
  data () {
    return {

    };
  },
  
  components: {
      'v-header': header,
      'v-auctionDetailsHead': auctionDetailsHead,
      'v-auctionDetailsMain': auctionDetailsMain
  }
  
};
</script>
<style lang="stylus" scoped>

</style>