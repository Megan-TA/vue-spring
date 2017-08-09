/*
 * @Author: chen_huang 
 * @Date: 2017-08-05 18:04:04 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-08-10 01:15:01
 */
<template>
    <div class="register">
        <el-form ref="form" label-width="80px">
            <el-form-item label="手机号">
                <el-input 
                    v-model="userPhone" 
                    v-validate="'required|numeric|digits:11'"
                    name="userPhone"></el-input>
                <span v-show="errors.has('userPhone')" class="el-form-item__error">{{ errors.first('userPhone') }}</span>
            </el-form-item>
            <el-form-item label="密码">
                <el-input 
                    type="password" 
                    v-model="userPassword"
                    v-validate="'required|min:6|max:20|alpha_num'"
                    name="userPassword"></el-input>
                <span v-show="errors.has('userPassword')" class="el-form-item__error">{{ errors.first('userPassword') }}</span>
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input 
                    type="password" 
                    v-model="userConfirmPasswod"
                    v-validate="'required|confirmed:userPassword'"
                    data-vv-as="密码"
                    name="userConfirmPasswod"></el-input>
                <span v-show="errors.has('userConfirmPasswod')" class="el-form-item__error">{{ errors.first('userConfirmPasswod') }}</span>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="registerSubmit">立即注册</el-button>
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
                        window.localStorage.setItem('onoff', '1111');
                        this.$router.push({name: 'home'});
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