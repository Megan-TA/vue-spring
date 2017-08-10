/*
 * @Author: chen_huang 
 * @Date: 2017-08-06 11:26:50 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-08-10 15:23:24
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
import loginService from '../../services/loginService';
import bus from '../common';
export default {
    data() {
        return {
            labelPosition: 'right',
            userPhone: '',
            userPassword: ''
        };
    },

    methods: {

        validateForm() {
            this.$validator
                .validateAll()
                .then(res => {
                    if (res) this.loginSubmit();
                })
                .catch(err => {
                    this.$message({
                        'message': '验证失败!' + err,
                        'type': 'error'
                    });
                });
        },

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
                        // 像header传递数据
                        bus.$emit('userSignIn', 'test');
                        this.$router.push({
                            name: 'home',
                            query: {
                                uerId: '111'
                            }
                        }); 
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