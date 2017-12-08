/*
 * @Author: chen_huang 
 * @Date: 2017-08-11 17:30:08 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-08 17:45:31
 * 拍卖详情页下方主体部分
 */
<template>
    <div class="detailMain">
        <p>拍品描述</p>
        <p>{{parentData.describe}}</p>
        <el-table
              :data='parentData.record'
               stripe
               height="288"
               style="width:100%;">
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
        this.test = this.parentData
        bus.$on('nowOffer', (transmitData) => {
            that.parentData.record.push(transmitData)
            // console.log(that.parentData.record)
        })
    },

    computed: {
        total () {
            let len = 0
            if (this.parentData.record) {
                len = this.parentData.record.length
            }
            return len
        }
    },

    data () {
        return {

        }
    }

}
</script>
<style lang="stylus" scoped>

</style>
