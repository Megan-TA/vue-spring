/*
 * @Author: chen_huang 
 * @Date: 2017-08-11 17:30:08 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-08-12 17:26:48
 * 拍卖详情页下方主体部分
 */
<template>
    <div>
      <el-menu class="el-menu-demo" mode="horizontal" default-active="1" theme="light" :router="true">
          <el-menu-item index="1" 
                        :route="{ 
                          name: 'auctionDetailsBids',
                          query: {
                            auctionID: 111
                          }
                        }"> 出价记录</el-menu-item>
          <el-menu-item index="2"
                        :route="{ 
                          name: 'auctionDetailsDescribe',
                          query: {
                            auctionID: 111
                          }
                        }">拍品描述</el-menu-item>
      </el-menu>
      <router-view></router-view> 
    </div>
</template>
<script>
export default {
  props: [],
  data () {
    return {

    };
  }
};
</script>
<style lang="stylus" scoped>

</style>
