/*
 * 拍卖列表页
 * @Author: chen_huang
 * @Date: 2017-11-29 14:54:53
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-29 16:06:29
*/
<template>
    <div>
        <v-header></v-header>
        <div class="list">
            <ul class="list-box">
                <li>
                    
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import header from '../header/header'
import ListService from 'services/list/list'
export default {
    props: [],

    beforeCreate () {
        ListService.getListInfo({})
                .then((res) => {
                    alert(1)
                }).catch((err) => {
                    console.error(err)
                })
    },
    data () {
        return {

        }
    },
    components: {
        'v-header': header
    }
}
</script>
<style lang="stylus" scoped>

</style>