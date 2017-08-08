/*
 * @Author: chen_huang 
 * @Date: 2017-08-05 18:04:04 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-08-08 19:27:14
 */
<template>
    <div class="register">
        <el-form ref="form" label-width="80px">
            <el-form-item label="手机号">
                <el-input v-model="userPhone"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="userPassword"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleSubmit">立即注册</el-button>
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
            verifyCode: '0000'
        };
    },

    methods: {
        handleSubmit() {

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
                    this.$message({
                        'message': '注册成功!',
                        'type': 'success'
                    });
                    this.$router.push({name: 'home'});
                })
                .catch(err => {
                    console.log(err);
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