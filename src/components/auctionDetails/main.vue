/*
 * @Author: chen_huang 
 * @Date: 2017-08-11 17:30:08 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-05 18:50:24
 * 拍卖详情页下方主体部分
 */
<template>
    <div>
      <!-- <el-menu class="el-menu-demo" mode="horizontal" default-active="1" theme="light" :router="true">
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
      </el-menu> -->
      <!-- <router-view></router-view>  -->

        <el-table
              :data='parentData.record'
               stripe
               style="width: 100%">
              <el-table-column
                prop="name"
                label="昵称">
              </el-table-column>
              <el-table-column
                prop="offer"
                label="报价">
              </el-table-column>
              <el-table-column
                prop='date'
                label="时间">
              </el-table-column>
        </el-table>
    </div>
</template>
<script>
import bus from 'components/common'
export default {
    props: {
        parentData: Object
    },
    created () {

    },
    mounted () {
        let that = this
        bus.$on('nowOffer', (transmitData) => {
            that.parentData.record.push(transmitData)
            console.log(that.parentData.record)
        })
    },

    data () {
        return {
            transmitData: ''
        }
    }

}
</script>
<style lang="stylus" scoped>

</style>
