/*
 * @Author: chen_huang 
 * @Date: 2017-08-06 11:26:50 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-08-09 20:06:32
 */
<template>
    <div class="login">
        <el-form 
            label-width="80px" 
            :label-position="labelPosition">
            <el-form-item label="手机号">
                <el-input v-model="userPhone" placeholder="请输入手机号" v-validate="'required|numeric'" name="phone"></el-input>
                <span v-show="errors.has('phone')" class="el-form-item__error">{{ errors.first('phone') }}</span>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="userPassword" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-row>
                <el-col :span="5" :offset="15">
                    <el-button type="primary" @click="loginSubmit">登录</el-button>
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
import loginService from '../../services/loginService';
export default {
    data() {
        return {
            labelPosition: 'right',
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
                    if (res.code === '666') {
                        this.$message({
                            'message': '登录成功！',
                            'type': 'success'
                        });
                        window.localStorage.setItem('onoff', '1111');
                        this.$router.push({name: 'home'}); 
                    } else {
                        this.$message({
                            'message': res.resultMsg,
                            'type': 'warning'
                        });
                    }
                })
                .catch(err => {
                    this.$message({
                        'message': '注册失败!' + err,
                        'type': 'error'
                    });
                });
        }
    }
};
</script>
<style lang="stylus">
    .login
        width 300px
        margin 0 auto

    .l-h-36
        line-height 36px
</style>