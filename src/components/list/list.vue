/*
 * 拍卖列表页
 * @Author: chen_huang
 * @Date: 2017-11-29 14:54:53
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-08 17:08:26
*/
<template>
    <div class='app'>
        <v-header></v-header>
        <div class="list">
            <ul>
                <li>
                    <el-row :gutter="10">
                        <el-col :span="4" v-for="(val, index) in remoteListData" :key='index'>
                            <el-card>
                                <router-link 
                                        :to=val.coinId>
                                    <img :src="remoteUrl + val.imgUrl[0].url" 
                                        alt="图片挂啦~" 
                                        width="100%"
                                        class='list__desctibeImg'
                                        >
                                    <div class='list__describe'>
                                        <p class='list__describe--text list__describe--title ell'>{{val.title}}</p>
                                        <p class='list__describe--text'>当前价: ￥{{val.price}}</p>
                                        <p class='list__describe--text'>出价{{getRecordTime(val.record)}}次</p>
                                        <p class='list__describe--text'>结束:{{convertDate(val.endTime)}}</p>
                                    </div>
                                </router-link>
                            </el-card>
                        </el-col>
                    </el-row>
                    
                </li>
            </ul>
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="1"
                layout="prev, pager, next, jumper"
                :total="pageTotal"
                background
                style='margin-top: 10px;text-align: center;'>
            </el-pagination>
        </div>
    </div>
</template>
<script>
import header from '../header/header'
import ListService from 'services/list/list'
import convert8h from 'utils/js/convert8h'
export default {
    props: [],

    created () {
        this.getRemoteData(1)
    },

    data () {
        return {
            listInfo: null,
            remoteUrl: process.env.LOCALNODEHOST,
            remoteListData: null,
            // 文档总数
            pageTotal: 1,
            currentPage: 1
        }
    },

    computed: {
    },

    methods: {
        // 获取服务端数据
        getRemoteData (pageStart) {
            ListService
                .getListInfo({
                    pageStart: pageStart
                })
                .then((res) => {
                    let result = res.result
                    this.pageTotal = res.total
                    this.parseData(result)
                }).catch((err) => {
                    console.error(err)
                })
        },
        // 请求成功回调
        parseData (res) {
            return new Promise((resolve, reject) => {
                let tempArray = []
                res.forEach((item) => {
                    item.list.forEach((result) => {
                        result.coinId = '/auctionDetails?coinId=' + result._id
                    })
                    tempArray = tempArray.concat(item.list)
                })
                this.remoteListData = tempArray
                resolve(res)
            })
            .catch((err) => {
                this.$message({
                    message: '获取列表信息失败~',
                    type: 'error'
                })
                console.error(err)
            })
        },
        // 计算出价次数
        getRecordTime (val) {
            return val.length
        },
        // 时间转换
        convertDate (date) {
            return convert8h(date)
        },
        handleCurrentChange (val) {
            console.log(`当前页: ${val}`)
            this.getRemoteData(val)
        }
    },
    components: {
        'v-header': header
    }
}
</script>
<style lang="stylus">
    .list
        padding 10px
    .list__describe--title
        font-size 16px
        font-weight 600
    .list__describe--text
        padding 5px 0
    .list__desctibeImg
        &:hover
            transform scale(1.1)
</style>