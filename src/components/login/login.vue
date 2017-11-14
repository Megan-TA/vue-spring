/*
 * @Author: chen_huang 
 * @Date: 2017-08-06 11:26:50 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-14 00:38:02
 */
<template>
    <div class="login">
        <el-form 
            label-width="80px" 
            :label-position="labelPosition">
            <el-form-item label="手机号">
                <el-input 
                    v-model="userPhone" 
                    placeholder="请输入手机号" 
                    name="userPhone"
                    v-validate="'required|mobile|digits:11'"></el-input>
                <span v-show="errors.has('userPhone')" class="el-form-item__error">{{ errors.first('userPhone') }}</span>
            </el-form-item>
            <el-form-item label="密码">
                <el-input 
                    type="password" 
                    v-model="userPassword" 
                    placeholder="请输入密码" 
                    name="userPassword"
                    v-validate="'required|min:6|max:20|alpha_num'"></el-input>
                <span v-show="errors.has('userPassword')" class="el-form-item__error">{{ errors.first('userPassword') }}</span>
            </el-form-item>
            <el-row>
                <el-col :span="5" :offset="15">
                    <el-button type="primary" @click="validateForm">登录</el-button>
                </el-col>
                <el-col :span="4" class="l-h-36">
                    <el-button size="mini">
                        <router-link to='/register'>注册</router-link>
                    </el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>
<script>
import loginService from '../../services/loginService'
// import header from '../header/header'
// import bus from '../common';
import util from '../../utils/js/util'
export default {
    data () {
        return {
            labelPosition: 'right',
            userPhone: '',
            userPassword: ''
        }
    },

    methods: {

        validateForm () {
            this.$validator
                .validateAll()
                .then(res => {
                    if (res) this.loginSubmit()
                })
                .catch(err => {
                    this.$message({
                        'message': '验证失败!' + err,
                        'type': 'error'
                    })
                })
        },

        loginSubmit () {
            // let paramsFrom = this.$route.query && this.$route.query.from
            const data = {
                'userPhone': this.userPhone,
                'userPassword': this.userPassword
            }
            loginService
                .login(data)
                .then(res => {
                    if (res.success) {
                        this.$message({
                            'message': res.message,
                            'type': 'success'
                        })
                        util.setCookie('token', res.token, 7)
                        util.setCookie('userPhone', res.userPhone, 7)
                        // bus.$emit('userSignIn', 'test');
                        // this.$store.commit('getUserInfo');
                        this.$router.push({
                            name: 'home'
                        })
                    } else {
                        this.$message({
                            'message': res.message,
                            'type': 'warning'
                        })
                        this.userPassWord = ''
                        this.userPhone = ''
                    }
                })
                .catch(err => {
                    this.$message({
                        'message': err,
                        'type': 'error'
                    })
                })
        }
    },

    components: {

    }
}
</script>
<style lang="stylus">
    .login
        width 300px
        margin 0 auto

    .l-h-36
        line-height 36px
</style>