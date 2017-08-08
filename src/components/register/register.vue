/*
 * @Author: chen_huang 
 * @Date: 2017-08-05 18:04:04 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-08-07 23:44:46
 */
<template>
    
    <form @submit.prevent = "handleSubmit">
        <div class="register">
            <div class="register-header">
                <h1 class="logo hide-text">会员注册</h1>
            </div>
            <div class="form-group">
                <input type="text" 
                    class="form-control" 
                    placeholder="手机号" 
                    v-model="userPhone"
                    required>
            </div>
            <div class="form-group">
                <input type="password" 
                    class="form-control" 
                    placeholder="密码(不少于6位)"
                    v-model="userPassword"
                    required>
            </div>
            <!-- <div class="form-group">
                <input type="password" class="form-control" placeholder="再次确认密码">
            </div>
            <div class="form-group selfdom">
                <input type="text" class="form-control" placeholder="验证码">
                <label for="" class="identifyingCode">验证码</label>
            </div> -->
            <div class="checkbox">
                <label>
                    <input type="checkbox">
                    <span>同意本站
                        <a href="#">《用户协议》</a>
                    </span>
                </label>
            </div>
            <button type="submit" class="btn brn-default">快速注册</button>
    
        </div>
    </form>

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

            // this.$ajax({
            //     url: '/auction/user/goRegister',
            //     method: 'get',
            //     data: data
            //     // 允许该跨域带上cookie信息
            //     // withCredentials: true
            // })
            // .then(res => {
            //     console.log(res);
            // })
            // .catch(err => {
            //     console.log(err);
            // });

            var s = registerService.register(data);

            return s;
         

        }
    }
 
};
</script>
<style lang="stylus">
    .register
        width 300px
        margin 0 auto
    .register-header
        margin 0 auto
        width 160px
    
    .form-group.selfdom
        .form-control
            width 60%
            display inline-block
        .identifyingCode
            width 38%
            display inline-block


</style>