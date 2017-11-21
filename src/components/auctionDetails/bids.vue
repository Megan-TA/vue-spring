/*
 * @Author: chen_huang 
 * @Date: 2017-08-12 10:04:24 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-20 20:09:15
 */
<template>
    <div class="bids">
        <h3>出价记录</h3>
        <el-table 
            :data="tableData"
            border
            style="width: 905px">
            <el-table-column
                prop="date"
                label="日期"
                width="300">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="300">
            </el-table-column>
            <el-table-column
                prop="bid"
                label="出价"
                width="300">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    props: [],
    data () {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                bid: '￥111'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                bid: '￥110'
            }]
        }
    }
}
</script>
<style lang="stylus" scoped>
    .bids
        padding 30px
</style>