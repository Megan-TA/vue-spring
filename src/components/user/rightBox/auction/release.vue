/*
 * 发布拍品
 * @Author: chen_huang
 * @Date: 2017-11-07 00:36:07
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-29 20:27:34
 */
<template>
    <div id="release">
        <dl class="release-dl">
            <dt></dt>
            <dd>
                <p class="release-list-title">拍品分类</p>
                <div class="releaslist-box">
                    <el-select v-model="type" filterable placeholder="请选择">
                        <el-option-group
                            v-for="group in labelOptions"
                            :key="group.label"
                            :label="group.label">
                            <el-option
                                v-for="item in group.options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-option-group>
                    </el-select>
                </div>
            </dd>
            <dd>
                <p class="release-list-title">拍品名称</p>
                <div class="releaslist-box">
                    <el-input placeholder="请输入拍品名称" v-model='title'></el-input>
                </div>
            </dd>
            <dd>
                <p class="release-list-title">参考价</p>
                <div class="releaslist-box">
                    <el-input placeholder="请输入价格" v-model="price"></el-input>
                </div>
            </dd>
            <dd>
                <p class="release-list-title">加价幅度</p>
                <div class="releaslist-box">
                    <el-input placeholder="请输入加价幅度" v-model="priceStep"></el-input>
                </div>
            </dd>
            <dd>
                <p class="release-list-title">邮费</p>
                <div class="releaslist-box">
                    <el-input placeholder="请输入邮费" v-model="postage"></el-input>
                </div>
            </dd>
            <dd>
                <p class="release-list-title">拍卖时间</p>
                <div class="releaslist-box">
                    <div class="block">
                        <el-date-picker
                            v-model="date"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            value-format="yyyy-MM-dd">
                        </el-date-picker>
                    </div>
                </div>
                
            </dd>
            <dd>
                <p class="release-list-title">拍品描述</p>
                <div class="releaslist-box">
                    <el-input
                        type="textarea"
                        :rows="3"
                        placeholder="请输入拍品描述"
                        v-model="describe">
                    </el-input>
                </div>
            </dd>
            <dd>
                <p class="release-list-title">拍品图片</p>
                <div class="releaslist-box">
                    <el-upload
                        class="upload-demo"
                        action="//127.0.0.1:3001/api/auction/release/upload/images"
                        :on-remove="handleRemove"
                        :on-success="uploadSuccess"
                        :file-list="fileImgUrl"
                        name="images"
                        multiple
                        list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </div>
            </dd>
        </dl>
        <div class="buttonBox">
            <el-button type="success" @click='release'>发布</el-button>
        </div>
    </div>
</template>
<script>
let moment = require('moment')
import AuctionService from 'services/user/auction/auction'

export default {
    props: [],
    data () {
        return {
            labelOptions: [{
                label: '钱币',
                options: [{
                    label: '先秦',
                    value: '先秦'
                }, {
                    label: '秦汉',
                    value: '秦汉'
                }, {
                    label: '三国两晋南北朝',
                    value: '三国两晋南北朝'
                }, {
                    label: '隋唐五代十国',
                    value: '隋唐五代十国'
                }, {
                    label: '两宋',
                    value: '两宋'
                }, {
                    label: '辽金西夏元',
                    value: '辽金西夏元'
                }, {
                    label: '明清',
                    value: '明清'
                }, {
                    label: '机制币',
                    value: '机制币'
                }, {
                    label: '花钱',
                    value: '花钱'
                }, {
                    label: '邻国钱',
                    value: '邻国钱'
                }, {
                    label: '当代纪念币',
                    value: '当代纪念币'
                }, {
                    label: '其他',
                    value: '其他'
                }]
            }],
            type: '',
            title: '',
            price: '',
            priceStep: '',
            postage: '',
            date: '',
            describe: '',
            fileImgUrl: [],
            imgUrl: []
        }
    },
    methods: {
        // 上传文件移除的钩子
        handleRemove (file, fileList) {
            let that = this
            this.imgUrl.forEach((item, index) => {
                if (item.name == file.name) {
                    that.imgUrl.splice(index, 1)
                    window.break
                }
            })
        },
        uploadSuccess (res, file, fileList) {
            this.imgUrl.push({
                name: file.name,
                url: file.url
            })
        },
        clearData () {
            this.type = ''
            this.title = ''
            this.postage = ''
            this.price = ''
            this.priceStep = ''
            this.startTime = ''
            this.date = ''
            this.describe = ''
            this.imgUrl = []
            this.fileImgUrl = []
        },
        release () {
            this.startTime = moment(this.date[0]).format('YYYY-MM-DD HH:mm:ss')
            this.endTime = moment(this.date[1]).format('YYYY-MM-DD HH:mm:ss')

            AuctionService.release({
                type: this.type,
                title: this.title,
                postage: this.postage,
                price: this.price,
                priceStep: this.priceStep,
                startTime: this.startTime,
                endTime: this.endTime,
                describe: this.describe,
                imgUrl: this.imgUrl
            }).then((res) => {
                if (res.success) {
                    this.clearData()
                    this.$message({
                        message: res.message,
                        type: 'success'
                    })
                } else {
                    this.$message({
                        message: res.message,
                        type: 'error'
                    })
                }
            }).catch((err) => {
                this.$message({
                    message: '发布失败',
                    type: 'error'
                })
                console.error(err)
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
    .release-dl
        dd
            display flex
            align-items center
            margin 0 0 20px 0
        .release-list-title
            width 80px
            font-size 16px
    .el-textarea__inner
        width 300px !important
    .buttonBox
        margin-top 20px
        text-align center
</style>