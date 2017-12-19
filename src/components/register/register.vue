/*
 * @Author: chen_huang 
 * @Date: 2017-08-05 18:04:04 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-19 12:22:46
 */
<template>
    <div class="register">
        <div class="register__content">
            <el-form 
                ref="ruleForm" 
                :rules="rules"
                :model='ruleForm'
                label-width="80px"
                class='register__form'
                status-icon>
                <el-form-item label="昵称" prop='userName' class="is-required">
                    <el-input 
                        v-model="ruleForm.userName" 
                        name="userName"
                        placeholder="请输入唯一的昵称"></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop='userPhone' class="is-required">
                    <el-input
                        v-model.number="ruleForm.userPhone" 
                        name="userPhone"
                        placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop='userPassword' class="is-required">
                    <el-input
                        type="password"
                        v-model="ruleForm.userPassword"
                        placeholder="请输入密码">
                    </el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop='userConfirmPasswod' class="is-required">
                    <el-input
                        type="password"
                        v-model="ruleForm.userConfirmPasswod"
                        placeholder="请输入确认密码">
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click='validateForm'>立即注册</el-button>
                    <el-button @click='reset'>重置</el-button>
                </el-form-item>
                <p class='register--loginText'>
                    已有账号？<router-link to='/login' class='register__router--hover'>立即登录</router-link>
                </p>
            </el-form>
            
            
        </div>
    </div> 
</template>
<script>
import registerService from 'services/registerService'
export default {

    props: [],

    data () {
        let validName = (rule, value, callback) => {
            let reg = /^[\u4e00-\u9fa5a-zA-Z0-9-_]+$/
            if (value == '') {
                callback(new Error('请输入昵称'))
            } else {
                if (value.length == 1) {
                    callback(new Error('昵称必须2个字符'))
                }
                if (!reg.test(this.ruleForm.userName)) {
                    callback(new Error('昵称只能输入中文、英文、字母和-'))
                }
                callback()
            }
        }
        let validePassword = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'))
            }
            if (value.length < 6) {
                callback(new Error('密码长度不能小于6位数'))
            }
            if (this.ruleForm.userConfirmPasswod !== '') {
                this.$refs.ruleForm.validateField('userConfirmPasswod')
            }
            callback()
        }
        let valideConfirmPassword = (rule, value, callback) => {
            if (value == '') {
                callback(new Error('请输入确认密码'))
            }
            if (value !== this.ruleForm.userPassword) {
                callback(new Error('两次输入密码不一致'))
            }
            callback()
        }
        let validPhone = (rule, value, callback) => {
            let reg = /^1[3578][0-9]{9}$/
            if (value == '') {
                callback(new Error('请输入手机号码'))
            }
            if (typeof value !== 'number') {
                callback(new Error('手机号码必须为数字哦'))
            }
            if (value.toString().length != 11) {
                callback(new Error('请输入11位有效的手机号码'))
            }
            if (!reg.test(this.ruleForm.userPhone)) {
                callback(new Error('请输入有效的手机号码'))
            }
            callback()
        }
        return {
            ruleForm: {
                userName: '',
                userPhone: '',
                userPassword: '',
                userConfirmPasswod: ''
            },
            rules: {
                userName: [
                    { validator: validName, trigger: 'blur' }
                ],
                userPhone: [
                    { validator: validPhone, trigger: 'blur' }
                ],
                userPassword: [
                    { validator: validePassword, trigger: 'blur' }
                ],
                userConfirmPasswod: [
                    { validator: valideConfirmPassword, trigger: 'blur' }
                ]
            }
        }
    },

    methods: {

        validateForm () {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    this.registerSubmit()
                }
            })
        },

        reset () {
            this.$refs['ruleForm'].resetFields()
        },

        registerSubmit () {
            const data = {
                'userName': this.ruleForm.userName,
                'userPhone': this.ruleForm.userPhone,
                'userPassword': this.ruleForm.userPassword
                // 'verifyCode': verifyCode
            }

            registerService
                .register(data)
                .then(res => {
                    if (res.success) {
                        this.$message({
                            'message': res.message,
                            'type': 'success'
                        })
                        this.$router.push({
                            name: 'login'
                        })
                    } else {
                        this.$message({
                            'message': res.message,
                            'type': 'warning'
                        })
                    }
                })
                .catch(err => {
                    this.$message({
                        'message': '注册失败!' + err,
                        'type': 'error'
                    })
                })
        }
    }

}
</script>
<style lang="stylus">
    .register
        position absolute
        width 100%
        top 50%
        margin-top -300px
    .register__content
        width 100%
        height 600px
        display flex
        justify-content center
        align-items center
        background rgb(193, 34, 56)
    .register__form
        width 300px
        padding 20px
        background #fff
        border-radius 5px
    .register__form--marbom0
        margin-bottom 0!important
    .register--loginText
        text-align right 
    .register__router--hover
        &:hover
            color red
        
</style>