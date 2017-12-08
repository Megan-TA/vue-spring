/*
 * 头部组件搜索部分
 * @Author: chen_huang
 * @Date: 2017-12-07 14:59:07
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-07 16:30:35
*/
<template>
    <div class="headerSearch">
        <div class="headerSearch__logo">
            <router-link to='/'></router-link>
        </div>
        <div class="headerSearch__main">
            <el-input placeholder="请输入内容" v-model="form.searchKey">
                <el-select 
                    v-model="form.searchType" 
                    slot="prepend" 
                    placeholder="请选择" 
                    class='headerSearch__select--width'>
                    <el-option-group
                        v-for='group in form.type'
                        :key='group.label'
                        :label='group.label'>
                        <el-option
                            v-for='item in group.options'
                            :key='item.value'
                            :label='item.label'
                            :value='item.value'>

                        </el-option>
                    </el-option-group>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <!-- <div class="headerSearch__">
            <dl>
                <dt><img src="//www.jucangtianxia.com/static/images/jctx_qrcode.jpg" width="70"></dt>
                <dd>
                    <p>微信扫一扫</p>
                    <p>关注网站公众号</p>
                    <p><i class="icon-tel"></i>400-103-5055</p>
                </dd>
            </dl>
        </div> -->
    </div>
</template>
<script>
export default {
    props: [],
    data () {
        return {
            form: {
                searchKey: '',
                searchType: '',
                type: [{
                    label: '钱币',
                    options: [{
                        label: '先秦',
                        value: '先秦'
                    }, {
                        label: '秦汉',
                        value: '秦汉'
                    }, {
                        label: '三国两晋南北朝',
                        value: '三国两晋南北朝'
                    }, {
                        label: '隋唐五代十国',
                        value: '隋唐五代十国'
                    }, {
                        label: '两宋',
                        value: '两宋'
                    }, {
                        label: '辽金西夏元',
                        value: '辽金西夏元'
                    }, {
                        label: '明清',
                        value: '明清'
                    }, {
                        label: '机制币',
                        value: '机制币'
                    }, {
                        label: '花钱',
                        value: '花钱'
                    }, {
                        label: '邻国钱',
                        value: '邻国钱'
                    }, {
                        label: '当代纪念币',
                        value: '当代纪念币'
                    }, {
                        label: '其他',
                        value: '其他'
                    }]
                }]
            }
        }
    }
}
</script>
<style lang="stylus">
    .headerSearch
        display flex
        height 70px
        margin 15px auto
    .headerSearch__logo
        margin-right 50px
        a
            display block
            width 250px
            height 100%
            background url('//www.jucangtianxia.com/static/images/logo.png') left center no-repeat
    .headerSearch__main
        flex 1
        max-width 500px
    .headerSearch__select--width
        width 100px

        
    .headerSearch__form
        display flex
        border 1px solid #f03231
        color #666
    .headerSearch__form--aside
        width 80px
        cursor pointer
    .headerSearch__btn
        width 100px
        height 37px
        line-height 37px
        font-size 16px
        background #f03231
        color #ffffff
        text-align center
        outline none
        border 0
        cursor pointer

</style>