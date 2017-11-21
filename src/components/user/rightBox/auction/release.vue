/*
 * 发布拍品
 * @Author: chen_huang
 * @Date: 2017-11-07 00:36:07
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-21 19:41:53
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
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="imgUrl"
                        name="images"
                        multiple
                        list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </div>
            </dd>
        </dl>
        <el-button type="success" @click='release'>发布</el-button>
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
                    value: '0'
                }, {
                    label: '秦汉',
                    value: '1'
                }, {
                    label: '三国两晋南北朝',
                    value: '2'
                }, {
                    label: '隋唐五代十国',
                    value: '3'
                }, {
                    label: '两宋',
                    value: '4'
                }, {
                    label: '辽金西夏元',
                    value: '5'
                }, {
                    label: '明清',
                    value: '6'
                }, {
                    label: '机制币',
                    value: '7'
                }, {
                    label: '花钱',
                    value: '8'
                }, {
                    label: '邻国钱',
                    value: '9'
                }, {
                    label: '当代纪念币',
                    value: '10'
                }, {
                    label: '其他',
                    value: '11'
                }]
            }],
            type: '',
            title: '',
            price: '',
            priceStep: '',
            postage: '',
            date: '',
            describe: '',
            imgUrl: []

        }
    },
    methods: {
        handleRemove (file, fileList) {
            console.log(file, fileList)
        },
        handlePreview (file) {
            console.log(file)
        },
        release () {
            this.startTime = moment(this.date[0]).format()
            this.endTime = moment(this.date[1]).format()

            AuctionService.release({
                type: this.type,
                title: this.title,
                postage: this.postage,
                price: this.price,
                priceStep: this.priceStep,
                startTime: this.startTime,
                endTime: this.endTime,
                describe: this.describe
            }).then((res) => {
                alert(1)
            }).catch((err) => {
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
</style>