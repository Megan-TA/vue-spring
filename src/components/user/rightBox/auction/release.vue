/*
 * 发布拍品
 * @Author: chen_huang
 * @Date: 2017-11-07 00:36:07
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-01 16:18:21
 */
<template>
    <div id="release">
        <el-form ref="form" :model="form" :rules="rules" status-icon label-width="80px">
            
            <el-form-item label="拍品分类" prop="type">
                <el-select v-model="form.type" filterable placeholder="请选择">
                        <el-option-group
                            v-for="group in form.labelOptions"
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
            </el-form-item>

            <el-form-item label="拍品名称" prop="title">
                <el-input placeholder="请输入拍品名称" v-model='form.title'></el-input>
            </el-form-item>

            <el-form-item label="参考价" prop="price">
                <el-input placeholder="请输入参考价" v-model.number='form.price'></el-input>
            </el-form-item>

            <el-form-item label="加价幅度" prop="priceStep">
                <el-input placeholder="请输入加价幅度" v-model.number='form.priceStep'></el-input>
            </el-form-item>

            <el-form-item label="邮费" prop="postage">
                <el-input placeholder="请输入邮费" v-model.number='form.postage'></el-input>
            </el-form-item>

            <el-form-item label="拍卖时间" prop="startTime">
                <el-date-picker 
                    :editable="false"
                    @change="date2startend"
                    v-model="form.date"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
                    <!-- <el-date-picker type="date" placeholder="选择日期" v-model="form.startTime" style="width: 100%;"></el-date-picker> -->
                <!-- <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.endTime" style="width: 100%;"></el-time-picker>
                </el-col> -->
            </el-form-item>

            <el-form-item label="拍品描述" prop='describe'>
                <el-input type="textarea" placeholder='请输入拍品描述'
                v-model="form.describe"></el-input>
            </el-form-item>

            <el-form-item label="拍品图片" prop='imgUrl'>
                <el-upload
                    class="upload-demo"
                    action="//127.0.0.1:3001/api/user/release/upload/images"
                    :before-upload="beforeUpload"
                    :on-remove="handleRemove"
                    :on-success="uploadSuccess"
                    :file-list="form.fileImgUrl"
                    name="images"
                    multiple
                    list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="release">立即创建</el-button>
                <el-button @click="reset">重置</el-button>
            </el-form-item>
            
        </el-form>
    </div>
</template>
<script>
let moment = require('moment')
import ReleaseService from 'services/user/release/release'

export default {
    props: [],
    data () {
        return {
            form: {
                title: '',
                type: '',
                date: '',
                startTime: '',
                endTime: '',
                price: '',
                priceStep: '',
                describe: '',
                postage: '',
                imgUrl: [],
                fileImgUrl: [],
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
                }]
            },
            rules: {
                title: [
                    {required: true, message: '请输入拍品名称'}
                ],
                price: [
                    {required: true, message: '请输入参考价'},
                    {type: 'number', message: '参考价必须为数字'}
                ],
                priceStep: [
                    {required: true, message: '请输入加价幅度'},
                    {type: 'number', message: '加价幅度必须为数字'}
                ],
                type: [
                    {required: true, message: '请选择拍品类别'}
                ],
                describe: [
                    {required: true, message: '请输入拍品描述'}
                ],
                postage: [
                    {required: true, message: '请输入邮费'},
                    {type: 'number', message: '邮费必须为数字'}
                ],
                // 拍卖时间需要转换 所以只验证startTime
                startTime: [
                    {required: true, message: '请输入拍卖时间'}
                ],
                imgUrl: [
                    {type: 'array', required: true, message: '请上传至少一张拍品图片', trigger: 'change'}
                ]

            }
        }
    },
    methods: {
        beforeUpload (file) {
            console.log(file)
        },
        // 上传文件移除的钩子
        handleRemove (file, fileList) {
            let that = this
            this.form.imgUrl.forEach((item, index) => {
                if (item.name == file.name.split('.')[0]) {
                    that.form.imgUrl.splice(index, 1)
                    window.break
                }
            })
        },
        // 图片上传成功回调
        uploadSuccess (res, file, fileList) {
            this.form.imgUrl.push({
                url: res.imgUrl
            })
        },
        // date转startTime和endTime
        date2startend () {
            if (this.form.date[0] == null) {
                this.form.startTime = ''
                this.form.endTime = ''
                return
            }
            this.form.startTime = moment(this.form.date[0]).format('YYYY-MM-DD HH:mm:ss')
            this.form.endTime = moment(this.form.date[1]).format('YYYY-MM-DD HH:mm:ss')
        },
        // 重置
        reset () {
            this.$refs['form'].resetFields()
            this.form.endTime = ''
            this.form.date = ''
            this.form.imgUrl = []
            this.form.fileImgUrl = []
        },
        // 提交前先验证
        release () {
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    this.submit()
                }
            })
            return false
        },
        // 提交数据
        submit () {
            ReleaseService.release({
                type: this.form.type,
                title: this.form.title,
                postage: this.form.postage,
                price: this.form.price,
                priceStep: this.form.priceStep,
                startTime: this.form.startTime,
                endTime: this.form.endTime,
                describe: this.form.describe,
                imgUrl: this.form.imgUrl
            }).then((res) => {
                if (res.success) {
                    this.reset()
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
            return false
        }
    }
}
</script>
<style lang="stylus" scoped>
    .user-right-box
        width 480px
</style>