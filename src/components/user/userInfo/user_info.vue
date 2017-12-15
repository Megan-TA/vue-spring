/*
 * 个人资料
 * @Author: chen_huang
 * @Date: 2017-11-03 00:16:47
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-13 13:09:36
 */
<template>
    <div class="userInfo">
        <el-form ref='form' :model='form' label-width="80px">
            <el-form-item label='昵称'>
                <el-input v-model='form.userName' disabled="disabled"></el-input>
            </el-form-item>
            <el-form-item label='手机号'>
                <el-input v-model='form.phone' disabled="disabled"></el-input>
            </el-form-item>
            <el-form-item label='地址'>
                <el-input v-model='form.address'></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click='submit'>更改</el-button>
            </el-form-item>
        </el-form>
    </div>  
</template>
<script>
import userInfoService from 'services/user/userInfo/userInfo'
export default {
    props: [],

    created () {
        userInfoService
            .getUserInfo({})
            .then((res) => {
                // alert(1)
            })
            .catch((err) => {
                console.error(err)
            })
    },

    data () {
        return {
            form: {
                userName: 'zhangsan',
                password: '',
                phone: '13016722686',
                address: ''
            }
        }
    },

    methods: {
        submit () {

        }
    }
}
</script>
<style lang="stylus">
    .userInfo
        width 400px
</style>