/*
 * @Author: chen_huang 
 * @Date: 2017-08-06 11:26:50 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-08-07 23:54:14
 */
<template>
    <div class="login">
         <div class="register-header">
            <h1 class="logo hide-text">会员登录</h1>
        </div>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="手机号" v-model="userPhone">
        </div>
        <div class="form-group">
             <input type="password" class="form-control" placeholder="密码" v-model="userPassword">
        </div>
        <button class="btn btn-default" @click="loginSubmit">登录</button>
    </div>
</template>
<script>
import loginService from '../../services/loginService';
export default {
    data() {
        return {
            'userPhone': '',
            'userPassword': ''
        };
    },
    methods: {
        loginSubmit() {
            let userPhone = this.userPhone;
            let userPassword = this.userPassword;
            const data = {
                'userPhone': userPhone,
                'userPassword': userPassword
            };
            loginService
                .login(data)
                .then(res => {
                    console.log(res);
                });
        }
    }
};
</script>
<style lang="stylus">
    .login
        width 300px
        margin 0 auto
</style>