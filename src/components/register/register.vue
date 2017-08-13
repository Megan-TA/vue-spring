/*
 * @Author: chen_huang 
 * @Date: 2017-08-05 18:04:04 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-08-13 20:16:45
 */
<template>
    <div class="register">
        <el-form ref="form" label-width="80px">
            <el-form-item label="手机号">
                <el-input 
                    v-model="userPhone" 
                    v-validate="'required|mobile|digits:11'"
                    name="userPhone"></el-input>
                <span v-show="errors.has('userPhone')" class="el-form-item__error">{{ errors.first('userPhone') }}</span>
            </el-form-item>
            <el-form-item label="密码">
                <input  
                    type="password" 
                    v-model="userPassword"
                    v-validate="'required|min:6|max:20|alpha_num'"
                    name="userPassword"
                    class="el-input__inner">
                <span v-show="errors.has('userPassword')" class="el-form-item__error">{{ errors.first('userPassword') }}</span>
            </el-form-item>
            <el-form-item label="确认密码">
                <input  
                    type="password" 
                    v-model="userConfirmPasswod"
                    v-validate="'confirmed:userPassword'"
                    name="userConfirmPasswod"
                    class="el-input__inner">
                <span v-show="errors.has('userConfirmPasswod')" class="el-form-item__error">{{ errors.first('userConfirmPasswod') }}</span>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="validateForm">立即注册</el-button>
            </el-form-item>
        </el-form>
    </div> 
</template>
<script>
import registerService from '../../services/registerService';
export default {

    props: [],

    data() {
        return {
            userPhone: '',
            userPassword: '',
            userConfirmPasswod: '',
            verifyCode: '0000'
        };
    },

    methods: {

        validateForm() {
            this.$validator.validateAll()
                .then(res => {
                    if (res) this.registerSubmit();
                })
                .catch(err => {
                    this.$message({
                        'message': '验证失败' + err,
                        'type': 'error'
                    });
                });
        },

        registerSubmit() {

            let userPhone = this.userPhone;
            let userPassword = this.userPassword;
            let verifyCode = this.verifyCode;

            const data = {
                'userPhone': userPhone,
                'userPassword': userPassword,
                'verifyCode': verifyCode
            };

            registerService
                .register(data)
                .then(res => {
                    if (res.code === '666') {
                        this.$message({
                            'message': '注册成功!',
                            'type': 'success'
                        });
                        window.sessionStorage.setItem('userInfo', 11);
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
                    };
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
    .register
        width 500px
        margin 0 auto


</style>