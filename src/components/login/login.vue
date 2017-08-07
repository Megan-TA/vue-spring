/*
 * @Author: chen_huang 
 * @Date: 2017-08-06 11:26:50 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-08-06 19:02:20
 */
<template>
    <div class="login">
         <div class="register-header">
            <h1 class="logo hide-text">会员登录</h1>
        </div>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="手机号">
        </div>
        <div class="form-group">
             <input type="password" class="form-control" placeholder="密码">
        </div>
        <button class="btn btn-default">登录</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
        
        };
    }
};
</script>
<style lang="stylus">
    .login
        width 300px
        margin 0 auto
</style>