/*
 * 拍卖列表页
 * @Author: chen_huang
 * @Date: 2017-11-29 14:54:53
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-04 11:53:25
*/
<template>
    <div>
        <v-header></v-header>
        <div class="list">
            <ul class="list-box">
                <li>
                <el-row>
                    <el-col :span="6" v-for="(val, index) in remoteListData" :key='index'>
                        <el-card>
                            <router-link :to=val.coinId>
                                <img :src="remoteUrl + val.imgUrl[0].url" alt="图片挂啦~" width="100%">
                            </router-link>
                        </el-card>
                    </el-col>
                </el-row>
                    
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import header from '../header/header'
import ListService from 'services/list/list'
export default {
    props: [],

    beforeCreate () {
        ListService.getListInfo({})
                .then((res) => {
                    this.parseData(res)
                }).catch((err) => {
                    console.error(err)
                })
    },

    data () {
        return {
            listInfo: null,
            remoteUrl: process.env.LOCALNODEHOST,
            remoteListData: null
        }
    },

    methods: {
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
            }).catch((err) => {
                this.$message({
                    message: '获取列表信息失败~',
                    type: 'error'
                })
                console.error(err)
            })
        }
    },
    components: {
        'v-header': header
    }
}
</script>
<style lang="stylus" scoped>

</style>