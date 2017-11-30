/*
 * 拍卖列表页
 * @Author: chen_huang
 * @Date: 2017-11-29 14:54:53
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-30 19:39:14
*/
<template>
    <div>
        <v-header></v-header>
        <div class="list">
            <ul class="list-box">
                <li>
                <el-row>
                    <el-col :span="8">
                        <el-aside width="200px">Aside</el-aside>
                        <el-main>1111</el-main>
                    </el-col>
                    <el-col :span="4" v-for="(val, index) in listInfo" :key='index'>
                        <el-card>
                         <img :src="remoteUrl + val[0].url" alt="" width="150">
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
            remoteUrl: '//127.0.0.1:3001'
        }
    },

    methods: {
        parseData (res) {
            let tempArr = []

            return new Promise((resolve, reject) => {
                res.forEach((item) => {
                    tempArr.push(item.imgUrl)
                })
                this.listInfo = tempArr
                console.log(tempArr)
                resolve(tempArr)
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