/*
 * 个人资料
 * @Author: chen_huang
 * @Date: 2017-11-03 00:16:47
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-08 13:19:09
 */
<template>
    <p>1111</p>
</template>
<script>
import userInfoService from 'services/user/userInfo/userInfo'
export default {
    props: [],

    created () {
        userInfoService
            .getUserInfo({})
            .then((res) => {
                alert(1)
            })
            .catch((err) => {
                console.error(err)
            })
    },

    data () {
        return {

        }
    }
}
</script>
<style lang="stylus" scoped>

</style>