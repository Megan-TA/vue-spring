/*
 * @Author: chen_huang 
 * @Date: 2017-08-06 11:26:50 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-19 12:00:35
 */
<template>
    <div class="login">
        <div class="login__content">
            <el-form 
                label-width="80px" 
                :label-position="labelPosition"
                class='login__form'>
                <el-form-item label="手机号">
                    <el-input 
                        v-model="userPhone" 
                        placeholder="请输入手机号" 
                        name="userPhone"
                        prefix-icon='icon-user'
                        v-validate="'required|mobile|digits:11'"></el-input>
                    <span v-show="errors.has('userPhone')" class="el-form-item__error">{{ errors.first('userPhone') }}</span>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input 
                        type="password" 
                        v-model="userPassword" 
                        placeholder="请输入密码" 
                        prefix-icon='icon-password'
                        name="userPassword"
                        v-validate="'required|min:6|max:20|alpha_num'"></el-input>
                    <span v-show="errors.has('userPassword')" class="el-form-item__error">{{ errors.first('userPassword') }}</span>
                </el-form-item>
                <el-form-item class='login--mb0'>
                    <el-button 
                        type="primary" 
                        @click="validateForm"
                        class='login__loginBtn'>登录</el-button>
                    <p class='login__hintBox'>
                        <span class="login--hintText">
                            <router-link to='/register' class='login__router--hover'>忘记密码</router-link>
                        </span>
                        <span class="login--hintText">
                            <router-link to='/register' class='login__router--hover'>立即注册</router-link>
                        </span>
                    </p>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import loginService from 'services/loginService'
// import header from '../header/header'
// import bus from '../common';
import util from 'utils/js/util'
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
        position absolute
        width 100%
        top 50%
        margin-top -300px
    .login__content
        width 100%
        height 600px
        display flex
        justify-content center
        align-items center
        background #F56C6C
    .login__form
        width 300px
        padding 20px 80px 20px 20px
        background #fff
        border-radius 5px
    .login__loginBtn
        width 220px
    .login__hintBox
        text-align right 
    .login--hintText
        margin-left 10px
    .login__router--hover
        &:hover
            color red
    .login--mb0
        margin-bottom 0!important
    
</style>